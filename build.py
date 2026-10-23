# Baut index.html aus den Modulen in src/ zusammen:  python3 build.py
import os
d=os.path.join(os.path.dirname(os.path.abspath(__file__)),'src')
r=lambda f: open(os.path.join(d,f),encoding='utf-8').read()
order=['core.js','format.js','content.js','cardinfo.js','diag.js','gfx.js','views.js','kreuz.js','exam.js','content1.js','content2.js','symbols.js','recall.js','who.js','session.js','plan.js','task.js','start.js']
out=r('head.html')+''.join(r(f).rstrip()+'\n\n' for f in order)+'</script>\n</body>\n</html>\n'
open(os.path.join(os.path.dirname(d),'index.html'),'w',encoding='utf-8').write(out)
print(len(out))
