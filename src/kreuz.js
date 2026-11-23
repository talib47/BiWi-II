/* ================= Kreuzaufgaben (Klausurformat Heine) =================
   Je Aufgabe ein Satzanfang und drei Aussagen, jede wahr oder falsch.
   Bewertung wie in der Klausur: je richtiges Kreuz 1 Punkt, alle drei richtig +1 Zusatzpunkt (max. 4). Keine Minuspunkte. */
const KREUZ=[
 /* Kapitel 16: Normwerte */
 {id:"x10-01", ch:16, stem:"Für die Verteilung des IQ in der Bevölkerung gilt:", s:[
  ["Etwa zwei Drittel der Bevölkerung haben einen IQ zwischen 85 und 115.", true, "Zwischen −1 und +1 Standardabweichung liegen 68,26 %."],
  ["Einen IQ von 130 oder mehr haben etwa 13,6 % der Bevölkerung.", false, "Über +2 SD liegen nur 2,14 % + 0,13 % = <b>2,27 %</b>. 13,59 % liegen zwischen 115 und 130."],
  ["Eine Person mit einem IQ von 70 liegt zwei Standardabweichungen unter dem Mittelwert.", true, "(70 − 100) / 15 = −2."]]},
 {id:"x10-02", ch:16, stem:"Für den z-Wert gilt:", s:[
  ["Ein z-Wert von 0 entspricht genau dem Mittelwert der Referenzgruppe.", true, "Der Abstand x − μ ist dann null."],
  ["Der z-Wert gibt an, wie viel Prozent der Referenzgruppe schlechter abgeschnitten haben.", false, "Das ist der <b>Prozentrang</b>. Der z-Wert gibt den Abstand zum Mittel in Standardabweichungen an."],
  ["Ein Rohwert von 500 in einem Test mit μ = 460 und σ = 50 entspricht einem IQ von 112.", true, "z = 40 / 50 = 0,8; IQ = 100 + 15 · 0,8 = 112 (Klausur WiSe 17/18)."]]},
 {id:"x10-03", ch:16, stem:"Für den Prozentrang gilt:", s:[
  ["Ein Prozentrang von 25 bedeutet, dass 25 % der Referenzgruppe besser abgeschnitten haben.", false, "Umgekehrt: 25 % haben gleich gut oder schlechter abgeschnitten, <b>75 % besser</b>."],
  ["Um einen Prozentrang bestimmen zu können, muss das Merkmal normalverteilt sein.", false, "Der Prozentrang braucht nur eine Rangfolge: PR = cumf / N · 100."],
  ["Bei einem normalverteilten Merkmal entspricht ein z-Wert von 0 einem Prozentrang von 50.", true, "Genau die Hälfte liegt unter dem Mittelwert."]]},
 {id:"x10-04", ch:16, stem:"Für Normskalen gilt:", s:[
  ["Die T-Skala hat einen Mittelwert von 50 und eine Standardabweichung von 10.", true, "T = 50 + 10 · z."],
  ["Ein IQ von 85 und ein T-Wert von 40 beschreiben dieselbe relative Position in der Referenzgruppe.", true, "Beide entsprechen z = −1."],
  ["Der Abweichungs-IQ wird als Quotient aus Intelligenzalter und Lebensalter berechnet.", false, "Das ist der IQ nach <b>Stern</b>. Der Abweichungs-IQ (Wechsler) ist 100 + 15 · z."]]},
 {id:"x10-05", ch:16, stem:"Für die Standardisierung von Testergebnissen gilt:", s:[
  ["Gleiche Rohwerte in zwei verschiedenen Tests bedeuten die gleiche Leistung.", false, "Die Tests können unterschiedlich schwer sein und anders streuen. Erst Standardwerte zeigen die Position."],
  ["Standardwerte machen Ergebnisse aus unterschiedlichen Tests vergleichbar.", true, "Klausur WiSe 22/23: drei Schülerinnen, drei Lesetests, gleicher Rohwert, verschiedene z-Werte."],
  ["Je kleiner die Standardabweichung der Referenzgruppe, desto größer ist bei gleichem Abstand zum Mittelwert der Betrag des z-Werts.", true, "z = (x − μ) / σ: Ein kleinerer Nenner macht den Bruch größer. 6 Punkte Abstand sind bei σ = 3 schon z = −2."]]},
 {id:"x10-06", ch:16, stem:"Für die Normierung von Tests gilt:", s:[
  ["Veraltete Normen führen wegen des Flynn-Effekts eher zu einer Überschätzung der Intelligenz.", true, "Die alte Normstichprobe war im Schnitt schwächer als die heutige Bevölkerung."],
  ["Ein Deckeneffekt liegt vor, wenn ein Test für leistungsschwache Personen zu schwer ist.", false, "Das wäre ein Bodeneffekt. Beim <b>Deckeneffekt</b> ist der Test für sehr Leistungsstarke zu leicht."],
  ["Im extremen Leistungsbereich ist die Messung typischerweise ungenauer als im mittleren Bereich.", true, "Dort gibt es weniger passende Aufgaben und Vergleichspersonen, der Messfehler ist größer."]]},
 {id:"x10-07", ch:16, stem:"Für die deskriptive Einordnung von IQ-Werten gilt:", s:[
  ["Ein IQ von 90 liegt im durchschnittlichen Bereich.", true, "Durchschnittlich ist 85 bis 115."],
  ["Ein IQ von 80 gilt als weit unterdurchschnittlich.", false, "80 liegt zwischen 70 und 85, also <b>unterdurchschnittlich</b>. Weit unterdurchschnittlich ist unter 70."],
  ["Ab einem IQ über 130 spricht man von einer weit überdurchschnittlichen Intelligenzleistung.", true, "Mehr als zwei Standardabweichungen über dem Mittel."]]}
];
const kreuzOf=n=>n? KREUZ.filter(x=>x.ch===n) : KREUZ.filter(x=>LESSONS[x.ch]);
const kzStat=id=>(state.kreuz||{})[id];
function kzPoints(item,ans,gs){ const right=item.s.filter((st,j)=>ans[j]===st[1]&&!(gs&&gs[j])).length; return right+(right===3?1:0); }
/* Wiederholung mit Abstand: 4 Punkte schiebt die Aufgabe weiter nach hinten (1, 3, 7, 16, 35 Tage), sonst morgen wieder */
function kzDueAt(id){ const s=kzStat(id); if(!s) return null; return s.due||dayStart(s.t)+(s.p===4?3:1)*864e5; }
const kzDue=()=>kreuzOf(0).filter(x=>{ const d=kzDueAt(x.id); return d!=null&&d<=Date.now(); });
function pickKreuz(n,k){
  const pool=kreuzOf(n).slice(), out=[], now=Date.now();
  while(out.length<Math.min(k,pool.length)){
    const w=pool.map(x=>{ const s=kzStat(x.id); if(!s) return 5; const due=kzDueAt(x.id)<=now; return s.p<4?(due?7:3):(due?5:.5); });
    let q=Math.random()*w.reduce((a,b)=>a+b,0), i=0; for(;i<pool.length;i++){ q-=w[i]; if(q<=0) break; }
    out.push(pool.splice(Math.min(i,pool.length-1),1)[0]);
  }
  return out;
}
function openKreuz(n,k,ids){ cur.kr={n, items:ids||pickKreuz(n,k||5).map(x=>x.id), i:0, j:0, ans:{}, prev:null, pts:[], sure:[]}; go("kreuz"); }
function kzBlock(item,ans,shown,key,gs){
  return item.s.map((st,j)=>{ const a=ans[j], g=gs&&gs[j];
    const cls=v=>shown?(st[1]===v?"r":(a===v?"w":"")):"";
    return `<div class="kz"><p class="st"><i class="no">${"abc"[j]})</i>${st[0]}</p>
      <div class="wf" role="group" aria-label="Aussage ${"abc"[j]}"><button data-kz="${key}:${j}" data-v="1" aria-pressed="${a===true}" class="${cls(true)}" ${shown?"disabled":""}>wahr</button><button data-kz="${key}:${j}" data-v="0" aria-pressed="${a===false}" class="${cls(false)}" ${shown?"disabled":""}>falsch</button></div>${gs?`<button data-kg="${j}" class="kg" aria-pressed="${!!g}" ${shown?"disabled":""}>${g?"✓ ":""}geraten</button>`:""}
      ${!shown?"":a===st[1]&&!g?`<p class="why"><b class="okc">Richtig.</b> ${st[2]}</p>`
        :a===st[1]?`<div class="fb idk"><p class="fh">Richtig geraten. Zählt noch nicht als gewusst.</p><p style="margin:0">${st[2]}</p></div>`
        :`<div class="fb ${a===undefined?"idk":"bad"}"><p class="fh">${a===undefined?"Nicht angekreuzt. ":""}Die Aussage ist ${st[1]?"wahr":"falsch"}.</p><p style="margin:0">${st[2]}</p></div>`}</div>`; }).join("");
}
/* Kreuzaufgaben im Stil der Lernkarten (Muster 23.11.): eine Aussage nach der anderen auf einer Karte,
   darunter „falsch“ und „wahr“ als große Knöpfe; nach dem Tippen sofort ein klares Urteil auf der Karte
   (grün „Richtig.“ bzw. rot „Falsch.“ mit deiner Wahl und der Lösung), dann „Weiter“ an derselben Stelle,
   Tippen auf die Karte oder Wischen. Punkte wie in der Klausur nach der dritten Aussage.
   „Weiß ich nicht“ zählt keinen Punkt. Tastatur: ← falsch, → wahr, Enter weiter. */
const KZ_DOT="abc";
function kzFinish(K,item){
  const p=kzPoints(item,K.ans); K.pts[K.i]=p; K.sure[K.i]=p;
  const s=kzStat(item.id)||{n:0,best:0}, b=p===4?Math.min(5,(s.b||1)+1):1;
  state.kreuz[item.id]={n:s.n+1,p,best:Math.max(s.best||0,p),t:Date.now(),b,due:dayStart()+(p===4?spaceDays(s.b===5?35:INTERVAL[b]):1)*864e5}; logDay(); save();
}
function kzNext(){ const K=cur.kr; if(!(K.j in K.ans)) return;
  if(K.j<2){ K.j++; } else { K.i++; K.j=0; K.ans={}; K.prev=null; }
  K.enter=true; renderKreuz(); window.scrollTo(0,0); }
function renderKreuz(){
  const K=cur.kr, back=K.n?"Kapitel "+K.n:"Üben", backFn=()=>{ if(K.n){ cur.ch=K.n; go("chapter"); } else go("practice"); };
  if(K.j===undefined) K.j=0;
  if(!K.items.length){ $("#app").innerHTML=`${backTo(back)}<h1>Noch keine Kreuzaufgaben</h1><p class="muted">Für diesen Bereich gibt es noch keine Aufgaben.</p>`; bindCrumb(backFn); return; }
  if(K.i>=K.items.length){
    const sum=K.pts.reduce((a,b)=>a+b,0), max=K.items.length*4;
    $("#app").innerHTML=`${backTo(back)}<h1>Runde geschafft</h1>
      <div class="block"><p class="pbadge">${sum} von ${max} Punkten</p>
      <p class="small muted">So wird auch in der Klausur gezählt: je richtiges Kreuz ein Punkt, alle drei Aussagen einer Aufgabe richtig ein Zusatzpunkt. Aufgaben mit Fehlern kommen bevorzugt wieder.</p>
      <div class="row">${sess?sessBtn():`<button class="btn" id="again">Neue Runde</button><button class="btn ghost" id="out">Fertig</button>`}</div></div>`;
    bindCrumb(backFn); if($("#again")) $("#again").onclick=()=>openKreuz(K.n); if($("#out")) $("#out").onclick=backFn; return;
  }
  const item=KREUZ.find(x=>x.id===K.items[K.i]), ch=CHAPTERS.find(c=>c.n===item.ch), j=K.j, st=item.s[j];
  if(j===0&&!(0 in K.ans)&&K.prev===null) K.prev=kzStat(item.id)||false;
  const done=j in K.ans, a=K.ans[j], ok=done&&a===st[1], last=j===2;
  const word=v=>v?"wahr":"falsch";
  const dots=[0,1,2].map(k=>{ const d=k in K.ans, r=d&&K.ans[k]===item.s[k][1], q=d&&K.ans[k]===null;
    return `<i class="${q?"idk":d?(r?"ok":"no"):k===j?"now":""}" aria-label="Aussage ${KZ_DOT[k]}${q?" nicht gewusst":d?(r?" richtig":" falsch"):""}">${q?"?":d?(r?"✓":"✕"):KZ_DOT[k]}</i>`; }).join("");
  const verdict=!done?"":ok
      ? `<div class="kzv ok"><span class="ic" aria-hidden="true">✓</span><div><b>Richtig.</b><span>Die Aussage ist ${word(st[1])}.</span></div></div>`
      : a===null
      ? `<div class="kzv idk"><span class="ic" aria-hidden="true">?</span><div><b>Nicht gewusst.</b><span>Die Aussage ist ${word(st[1])}.</span></div></div>`
      : `<div class="kzv no"><span class="ic" aria-hidden="true">✕</span><div><b>Falsch.</b><span>Du hast „${word(a)}“ gewählt, die Aussage ist aber ${word(st[1])}.</span></div></div>`;
  $("#app").innerHTML=`
    <div class="row between ctop"><p class="eyebrow" style="margin:0">Aufgabe ${K.i+1} von ${K.items.length} · Kap. ${item.ch} ${ch.title}${item.klausur?" · Klausur "+item.klausur:""}${item.erg?` <span class="erg">Ergänzung</span>`:""}</p><span class="kzdots">${dots}</span></div>
    <p class="kzstem">${item.stem}</p>
    <div class="swipewrap"><div class="block card kzc${done?(ok?" ok":a===null?" idk":" no"):""}${K.enter?" enter":""}" id="theCard" ${done?`role="button" tabindex="0" aria-label="Weiter"`:""}>
      <p class="cctx">Aussage ${KZ_DOT[j]})${K.prev&&j===0&&!done?` · zuletzt ${K.prev.p} von 4 Punkten`:""}</p>
      <div class="front">${inl(st[0])}</div>
      ${done?`${verdict}<p class="kzwhy">${st[2]}</p>`:""}
    </div></div>
    ${done?`<button class="btn" id="kzNext">${!last?"Weiter":K.i<K.items.length-1?"Nächste Aufgabe":"Auswertung"}</button>${last?`<p class="kzsum">Diese Aufgabe: ${K.pts[K.i]} von 4 Punkten</p>`:""}`
      :`<div class="kzans" role="group" aria-label="Ist die Aussage wahr oder falsch?"><button class="btn ghost" data-kv="0">falsch</button><button class="btn ghost" data-kv="1">wahr</button></div><button class="kzidk" data-kv="x">Weiß ich nicht</button>`}`;
  K.enter=false;
  bindCrumb(backFn);
  document.querySelectorAll("[data-kv]").forEach(b=>b.onclick=()=>{ if(j in K.ans) return; const v=b.dataset.kv; K.ans[j]=v==="x"?null:v==="1";
    if(j===2) kzFinish(K,item); renderKreuz(); if(K.ans[j]!==null&&K.ans[j]!==st[1]) buzz(); });
  if($("#kzNext")) $("#kzNext").onclick=kzNext;
  const cd=$("#theCard"); let x0=null,y0=0,dx=0,drag=false,shook=false;
  cd.onclick=()=>{ if(drag||Date.now()-(window.__noClick||0)<350) return; if(done) kzNext(); };
  cd.onkeydown=e=>{ if(done&&(e.key==="Enter"||e.key===" ")){ e.preventDefault(); kzNext(); } };
  cd.onpointerdown=e=>{ x0=e.clientX; y0=e.clientY; dx=0; drag=false; shook=false; };
  cd.onpointermove=e=>{ if(x0===null) return; const d=e.clientX-x0;
    if(!drag){ if(Math.abs(d)>14&&Math.abs(d)>1.4*Math.abs(e.clientY-y0)){ if(!done){ if(!shook){ shook=true; buzz(); } return; } drag=true; cd.style.transition="none"; } else return; }
    dx=d; cd.style.transform=`translate3d(${dx}px,0,0) rotate(${dx/40}deg)`; };
  cd.onpointerup=cd.onpointercancel=()=>{ if(x0===null) return; x0=null; if(shook) window.__noClick=Date.now();
    if(!drag) return; window.__noClick=Date.now();
    if(Math.abs(dx)>Math.min(90,cd.offsetWidth*.22)){ const out=Math.sign(dx)*(window.innerWidth*.6+cd.offsetWidth);
      cd.style.transition="transform .24s cubic-bezier(.25,.8,.35,1), opacity .24s linear"; cd.style.transform=`translate3d(${out}px,0,0) rotate(${Math.sign(dx)*16}deg)`; cd.style.opacity="0";
      let f=false; const fin=()=>{ if(f) return; f=true; kzNext(); }; cd.addEventListener("transitionend",fin,{once:true}); setTimeout(fin,300); }
    else { cd.style.transition="transform .42s cubic-bezier(.2,1.5,.4,1)"; cd.style.transform=""; setTimeout(()=>{ drag=false; },0); } };
}
document.addEventListener("keydown",e=>{
  if(view!=="kreuz"||e.metaKey||e.ctrlKey||e.altKey||(e.target.closest&&e.target.closest("textarea,input,select"))) return;
  const K=cur.kr; if(!K||K.i>=K.items.length) return; const hit=sel=>{ const b=$(sel); if(b){ e.preventDefault(); b.click(); } };
  if(K.j in K.ans){ if(e.key==="Enter"||e.key===" "||e.key==="ArrowRight") hit("#kzNext"); }
  else if(e.key==="ArrowLeft"||e.key==="f"||e.key==="F") hit('[data-kv="0"]');
  else if(e.key==="ArrowRight"||e.key==="w"||e.key==="W") hit('[data-kv="1"]');
  else if(e.key==="?") hit('[data-kv="x"]');
});
