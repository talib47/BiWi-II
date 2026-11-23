/* ================= Abkürzungen zum Antippen (Muster 23.11., BiWi II) =================
   Bekannte Kürzel werden überall in der App dezent gepunktet unterstrichen. Tippen zeigt eine kleine Blase
   mit Langform und einem Satz Bedeutung; Tippen irgendwo sonst schließt sie. Auf Karten dreht ein Tipp
   auf ein Kürzel die Karte nicht um. In Antwortknöpfen wird nichts markiert (dort zählt der Tipp als Antwort). */
const ABBR={
 "NS":["neutraler Stimulus (Reiz)","löst die Reaktion vor dem Lernen nicht aus, z. B. die Glocke"],
 "US":["unkonditionierter Stimulus","löst die Reaktion von Natur aus aus, z. B. Futter"],
 "UR":["unkonditionierte Reaktion","angeborene Reaktion auf den US, z. B. Speichelfluss"],
 "CS":["konditionierter Stimulus","früherer NS, der nach dem Lernen die Reaktion auslöst"],
 "CR":["konditionierte Reaktion","gelernte Reaktion auf den CS"],
 "CER":["Conditioned Emotional Response","konditionierte Gefühlsreaktion, z. B. Angst (Little Albert)"],
 "KZG":["Kurzzeitgedächtnis","hält wenige Einheiten für einige Sekunden"],
 "LZG":["Langzeitgedächtnis","dauerhafter Speicher, beliebige Dauer"],
 "AG":["Arbeitsgedächtnis","hält Information kurz bereit und bearbeitet sie (Baddeley & Hitch)"],
 "EF":["exekutive Funktionen","steuern andere kognitive Prozesse: planen, hemmen, umschalten"],
 "SWS":["Slow-Wave-Sleep","Tiefschlaf mit langsamen EEG-Wellen, früh in der Nacht"],
 "REM":["Rapid Eye Movement","Schlafphase mit schnellen Augenbewegungen, später in der Nacht"],
 "EEG":["Elektroenzephalogramm","Messung der Hirnströme"],
 "CRF":["Continuous Reinforcement","kontinuierliche Verstärkung: jedes Verhalten wird verstärkt"],
 "FQ":["feste Quote","Verstärkung nach genau jeder x-ten Reaktion"],
 "VQ":["variable Quote","Verstärkung nach ungefähr jeder x-ten Reaktion"],
 "FI":["festes Intervall","Verstärkung für die erste Reaktion nach x Minuten"],
 "VI":["variables Intervall","Verstärkung im Schnitt alle x Minuten"],
 "PRE":["Nachverstärkungspause","Pause nach einer Verstärkung, typisch bei fester Quote"],
 "PRS":["perzeptuelles Repräsentationssystem","Grundlage des perzeptuellen Primings"],
 "AIQ":["Abweichungs-IQ","100 + 15 · z (Wechsler)"],
 "SD":["Standardabweichung","durchschnittliche Streuung um den Mittelwert"],
 "PR":["Prozentrang","Anteil der Vergleichsgruppe, der gleich gut oder schlechter ist"],
 "KMK":["Kultusministerkonferenz","Konferenz der Bildungsminister der Länder"],
 "WCST":["Wisconsin Card Sorting-Test","Test zu Strategiewechsel und Perseveration"],
 "S → S":["Reiz → Reiz","klassische Konditionierung: zwei Reize werden verknüpft"],
 "S1 → S2":["Reiz 1 → Reiz 2","klassische Konditionierung: zwei Reize werden verknüpft"],
 "R → S":["Reaktion → Konsequenz","operante Konditionierung: Verhalten wird mit seiner Folge verknüpft"],
 "E1 → E2":["Ereignis 1 → Ereignis 2","assoziatives Lernen: zwei Ereignisse werden verknüpft"]
};
const ABBR_RE=new RegExp("(^|[^\\p{L}\\p{N}])("+Object.keys(ABBR).sort((a,b)=>b.length-a.length).map(k=>k.replace(/[.*+?^${}()|[\]\\]/g,"\\$&").replace(/ /g,"[ \\u00a0]")).join("|")+")(s?)(?![\\p{L}\\p{N}])","gu");
function abbrMark(root){
  const w=document.createTreeWalker(root,NodeFilter.SHOW_TEXT,{acceptNode:n=>{
    const p=n.parentElement; if(!p||!n.nodeValue.trim()) return NodeFilter.FILTER_REJECT;
    if(p.closest("abbr,button,textarea,input,select,script,style,.eq,#sessbar,#focusbar,nav,.qhtxt,.abpop")) return NodeFilter.FILTER_REJECT;
    ABBR_RE.lastIndex=0; return ABBR_RE.test(n.nodeValue)?NodeFilter.FILTER_ACCEPT:NodeFilter.FILTER_REJECT; }});
  const L=[]; while(w.nextNode()) L.push(w.currentNode);
  for(const n of L){ const t=n.nodeValue, f=document.createDocumentFragment(); let last=0; ABBR_RE.lastIndex=0; let m;
    while((m=ABBR_RE.exec(t))){ const s=m.index+m[1].length, k=m[2].replace(/\u00a0/g," ");
      f.append(t.slice(last,s)); const a=document.createElement("abbr"); a.className="ab"; a.dataset.ab=k; a.textContent=m[2]+m[3]; a.tabIndex=0; a.setAttribute("role","button"); a.setAttribute("aria-label",m[2]+": "+ABBR[k][0]); f.append(a); last=s+m[2].length+m[3].length; }
    f.append(t.slice(last)); n.replaceWith(f); }
}
function abbrClose(){ document.querySelectorAll(".abpop").forEach(x=>x.remove()); }
function abbrOpen(a){ abbrClose(); const [lang,txt]=ABBR[a.dataset.ab]||[]; if(!lang) return;
  const p=document.createElement("div"); p.className="abpop"; p.setAttribute("role","tooltip");
  p.innerHTML=`<b>${a.textContent}</b> · ${lang}<span>${txt}</span>`; document.body.appendChild(p);
  const r=a.getBoundingClientRect(), pw=Math.min(300,window.innerWidth-24); p.style.width=pw+"px";
  let x=r.left+r.width/2-pw/2; x=Math.max(12,Math.min(x,window.innerWidth-pw-12));
  const below=r.bottom+8+p.offsetHeight<window.innerHeight; p.style.left=x+"px"; p.style.top=(below?r.bottom+8:r.top-8-p.offsetHeight)+window.scrollY+"px"; }
/* Tippen auf ein Kürzel: Blase zeigen und nichts anderes auslösen (Karte drehen, Weiter …) */
["pointerdown","pointerup","click"].forEach(t=>document.addEventListener(t,e=>{
  const a=e.target.closest&&e.target.closest("abbr.ab");
  if(a){ e.stopPropagation(); e.preventDefault(); window.__noClick=Date.now(); if(t==="click") abbrOpen(a); return; }
  if(t==="pointerdown"&&!e.target.closest(".abpop")) abbrClose();
},true));
document.addEventListener("keydown",e=>{ const a=document.activeElement; if(a&&a.matches&&a.matches("abbr.ab")&&(e.key==="Enter"||e.key===" ")){ e.preventDefault(); e.stopPropagation(); abbrOpen(a); } else if(e.key==="Escape") abbrClose(); },true);
window.addEventListener("scroll",abbrClose,{passive:true});
(function(){ const app=document.getElementById("app"); if(!app) return; let q=0;
  new MutationObserver(()=>{ if(q) return; q=requestAnimationFrame(()=>{ q=0; abbrMark(app); }); }).observe(app,{childList:true,subtree:true}); abbrMark(app); })();
