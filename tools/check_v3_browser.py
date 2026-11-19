from playwright.sync_api import sync_playwright
from pathlib import Path
root=Path(__file__).resolve().parents[1]
html=(root.parent/'John_Paul_Yambao_Portfolio_Standalone.html').read_text(encoding='utf-8')
with sync_playwright() as p:
 browser=p.chromium.launch(headless=True,executable_path='/usr/bin/chromium',args=['--no-sandbox','--disable-dev-shm-usage'])
 for name,width,height in [('desktop',1440,1000),('tablet',820,1000),('mobile',390,844)]:
  page=browser.new_page(viewport={'width':width,'height':height}, device_scale_factor=1, reduced_motion='reduce')
  exceptions=[];page.on('pageerror',lambda e: exceptions.append(str(e)))
  page.set_content(html,wait_until='domcontentloaded')
  page.locator('#about').scroll_into_view_if_needed()
  page.wait_for_function("[...document.querySelectorAll('.certificate-card img')].every(i => i.complete && i.naturalWidth>0)", timeout=20000)
  page.screenshot(path=f'/mnt/data/John_Paul_v3_Education_{name}.png')
  metrics=page.evaluate('''() => ({vw:innerWidth,scrollWidth:document.documentElement.scrollWidth,layout: getComputedStyle(document.querySelector('.education-layout')).gridTemplateColumns,cardCount:document.querySelectorAll('.certificate-card').length,gridColumns:getComputedStyle(document.querySelector('.certificate-grid')).gridTemplateColumns,images:[...document.querySelectorAll('.certificate-card img')].map(i=>({w:Math.round(i.getBoundingClientRect().width),h:Math.round(i.getBoundingClientRect().height),natural:i.naturalWidth+'x'+i.naturalHeight,load:i.complete})),education:document.querySelector('.education-card').getBoundingClientRect().toJSON(),certificates:document.querySelector('.cert-area').getBoundingClientRect().toJSON()})''')
  print(name, metrics)
  assert metrics['scrollWidth']<=width+2, 'horizontal overflow '+name
  assert metrics['cardCount']==5
  assert all(i['load'] and i['w']>75 and i['h']>50 for i in metrics['images'])
  assert not exceptions, exceptions
  page.locator('.certificate-card').first.click()
  assert page.locator('#certificate-dialog').evaluate('(d)=>d.open')
  print('lightbox works',name)
  page.locator('#certificate-close').click()
  page.close()
 browser.close()
