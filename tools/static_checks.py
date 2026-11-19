"""Static integrity checks. This is not a substitute for browser interaction tests."""
from pathlib import Path
from bs4 import BeautifulSoup
from PIL import Image
import subprocess,re
root=Path(__file__).resolve().parents[1]
html=(root/'index.html').read_text(encoding='utf-8')
soup=BeautifulSoup(html,'html.parser')
assert soup.html.get('lang')=='en'
assert soup.h1 is not None and 'John Paul' in soup.h1.get_text(' ')
ids=[tag['id'] for tag in soup.select('[id]')]
assert len(ids)==len(set(ids)), 'Duplicate HTML IDs'
for anchor in soup.select('a[href^="#"]'):
    target=anchor['href'][1:]
    assert not target or target in ids, f'Broken anchor {target}'
for tag in soup.select('[src],link[href]'):
    value=tag.get('src',tag.get('href',''))
    if not value or value.startswith(('https:','http:','#','data:','mailto:')):continue
    assert (root/value).is_file(),f'Missing local file: {value}'
for name in ['solespace','nexa_landing','nexa_dash','drip_login','drip_home','yambiance','yamshore','hapag','cert_cpp','cert_html','cert_css','cert_js','cert_web']:
    with Image.open(root/'assets'/f'{name}.webp') as img:img.verify()
css=(root/'styles.css').read_text(encoding='utf-8')
assert css.count('{')==css.count('}'), 'Unmatched CSS block'
assert '@media (max-width:700px)' in css and 'prefers-reduced-motion' in css
assert 'data-open-project="solespace"' in html and 'data-cert="cert_cpp.webp"' in html
subprocess.run(['node','--check',str(root/'script.js')],check=True)
print('PASS: HTML structure, anchor targets, local assets, image integrity, CSS balance, responsive/reduced-motion CSS, and JavaScript syntax.')
print(f'Found {len(soup.select("img"))} images and {len(soup.select("a[href]"))} links.')
