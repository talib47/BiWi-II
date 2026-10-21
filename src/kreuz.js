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
function kzPoints(item,ans){ const right=item.s.filter((st,j)=>ans[j]===st[1]).length; return right+(right===3?1:0); }
function pickKreuz(n,k){
  const pool=kreuzOf(n).slice(), out=[];
  while(out.length<Math.min(k,pool.length)){
    const w=pool.map(x=>{ const s=kzStat(x.id); return !s?5:(s.p<4?4:(Date.now()-s.t>3*864e5?2:1)); });
    let r=Math.random()*w.reduce((a,b)=>a+b,0), i=0; for(;i<pool.length;i++){ r-=w[i]; if(r<=0) break; }
    out.push(pool.splice(Math.min(i,pool.length-1),1)[0]);
  }
  return out;
}
function openKreuz(n){ cur.kr={n, items:pickKreuz(n,5).map(x=>x.id), i:0, ans:{}, shown:false, pts:[]}; go("kreuz"); }
function kzBlock(item,ans,shown,key){
  return item.s.map((st,j)=>{ const a=ans[j];
    const cls=v=>shown?(st[1]===v?"r":(a===v?"w":"")):"";
    return `<div class="kz"><p class="st"><i class="no">${"abc"[j]})</i>${st[0]}</p>
      <div class="wf" role="group" aria-label="Aussage ${"abc"[j]}"><button data-kz="${key}:${j}" data-v="1" aria-pressed="${a===true}" class="${cls(true)}" ${shown?"disabled":""}>wahr</button><button data-kz="${key}:${j}" data-v="0" aria-pressed="${a===false}" class="${cls(false)}" ${shown?"disabled":""}>falsch</button></div>
      ${shown?`<p class="why">${a===st[1]?"":a===undefined?'<b>Nicht angekreuzt. </b>':'<b>Nicht richtig. </b>'}${st[2]}</p>`:""}</div>`; }).join("");
}
function renderKreuz(){
  const K=cur.kr, back=K.n?"Kapitel "+K.n:"Üben", backFn=()=>{ if(K.n){ cur.ch=K.n; go("chapter"); } else go("practice"); };
  if(!K.items.length){ $("#app").innerHTML=`${backTo(back)}<h1>Noch keine Kreuzaufgaben</h1><p class="muted">Für diesen Bereich gibt es noch keine Aufgaben.</p>`; bindCrumb(backFn); return; }
  if(K.i>=K.items.length){
    const sum=K.pts.reduce((a,b)=>a+b,0), max=K.items.length*4;
    $("#app").innerHTML=`${backTo(back)}<h1>Runde geschafft</h1>
      <div class="block"><p class="pbadge">${sum} von ${max} Punkten</p>
      <p class="small muted">So wird auch in der Klausur gezählt: je richtiges Kreuz ein Punkt, alle drei Aussagen einer Aufgabe richtig ein Zusatzpunkt. Aufgaben mit Fehlern kommen bevorzugt wieder.</p>
      <div class="row"><button class="btn" id="again">Neue Runde</button><button class="btn ghost" id="out">Fertig</button></div></div>`;
    bindCrumb(backFn); $("#again").onclick=()=>openKreuz(K.n); $("#out").onclick=backFn; return;
  }
  const item=KREUZ.find(x=>x.id===K.items[K.i]), all=[0,1,2].every(j=>K.ans[j]!==undefined), ch=CHAPTERS.find(c=>c.n===item.ch);
  if(!K.shown) K.prev=kzStat(item.id);
  $("#app").innerHTML=`${backTo(back)}
    <div class="row between"><p class="eyebrow" style="margin:0">Aufgabe ${K.i+1} von ${K.items.length} · Kap. ${item.ch} ${ch.title}${item.klausur?" · Klausur "+item.klausur:""}</p>${K.prev?`<span class="chip">zuletzt ${K.prev.p}/4</span>`:""}</div>
    <div class="block" style="margin-top:8px"><h3 style="margin:0 0 4px">${item.stem}</h3>${kzBlock(item,K.ans,K.shown,"s")}</div>
    ${K.shown?`<div class="row between"><span class="pbadge">${K.pts[K.i]} von 4 Punkten</span><button class="btn" id="nx">${K.i<K.items.length-1?"Nächste Aufgabe":"Auswertung"}</button></div>`
      :`<button class="btn" id="ev" style="width:100%" ${all?"":"disabled"}>Auswerten</button><p class="small muted" style="margin-top:8px">${all?"":"Kreuze bei jeder Aussage wahr oder falsch an. "}In der Klausur gibt es keine Minuspunkte, also im Zweifel immer ankreuzen.</p>`}`;
  bindCrumb(backFn);
  document.querySelectorAll("[data-kz]").forEach(b=>b.onclick=()=>{ K.ans[+b.dataset.kz.split(":").pop()]=b.dataset.v==="1"; const y=window.scrollY; renderKreuz(); window.scrollTo(0,y); });
  if($("#ev")) $("#ev").onclick=()=>{ const p=kzPoints(item,K.ans); K.pts[K.i]=p; K.shown=true;
    const s=kzStat(item.id)||{n:0,best:0}; state.kreuz[item.id]={n:s.n+1,p,best:Math.max(s.best||0,p),t:Date.now()}; logDay(); save(); renderKreuz(); };
  if($("#nx")) $("#nx").onclick=()=>{ K.i++; K.ans={}; K.shown=false; renderKreuz(); window.scrollTo(0,0); };
}
