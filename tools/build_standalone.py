"""Build a one-file offline demo from the production source."""
from pathlib import Path
import base64,re
root=Path(__file__).resolve().parents[1]
html=(root/'index.html').read_text(encoding='utf-8')
css=(root/'styles.css').read_text(encoding='utf-8')
js=(root/'script.js').read_text(encoding='utf-8')
assets={}
for p in (root/'assets').iterdir():
    if not p.is_file():continue
    mime=('image/webp' if p.suffix=='.webp' else 'image/png' if p.suffix=='.png' else 'application/pdf' if p.suffix=='.pdf' else 'image/svg+xml')
    assets[p.name]='data:'+mime+';base64,'+base64.b64encode(p.read_bytes()).decode('ascii')
for name,data in assets.items():
    css=css.replace('url("assets/'+name+'")', 'url("'+data+'")')
html=html.replace('<link rel="stylesheet" href="styles.css" />','<style>'+css+'</style>')
html=html.replace('<script defer src="script.js"></script>','')
for name,data in assets.items():
    html=html.replace('src="assets/'+name+'"','src="'+data+'"')
    html=html.replace('href="assets/'+name+'"','href="'+data+'"')
# JS supplies dynamic gallery/certificate URLs, which must also resolve from this standalone file.
import json
map_js='const embeddedAssets = '+json.dumps({n:d for n,d in assets.items() if n.endswith('.webp')},separators=(',',':'))+';\n'


html=html.replace('</body>','<script>'+map_js+js+'</script>\n</body>')
out=root.parent/'John_Paul_Yambao_Portfolio_1.0_Standalone.html'
out.write_text(html,encoding='utf-8')
print('Built',out,'bytes:',out.stat().st_size)
