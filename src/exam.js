/* ================= Offene Aufgaben (Schreiben) und Probeklausur ================= */
const KURZ=[
 /* Kapitel 16: Normwerte */
 {id:"k10-1", ch:16, pts:5, klausur:"WiSe 22/23, Aufgabe 2a",
  q:"Ein ermittelter Testrohwert kann durch Angabe eines Prozentrangs in Bezug zu einer Referenzgruppe beschrieben werden. Geben Sie die Formel zur Ermittlung des Prozentrangs an und erläutern Sie kurz, was die Variablen bedeuten.",
  k:["Formel: PR = cumf / N · 100","PR: Prozentrang, Anteil der Referenzgruppe mit gleichem oder schlechterem Ergebnis","cumf: kumulierte Häufigkeit, Anzahl der Werte bis einschließlich des betrachteten Werts","N: Gesamtzahl der Werte bzw. Probanden","· 100: Umrechnung des Anteils in Prozent"],
  m:"PR = cumf / N · 100. PR ist der Prozentrang, also der Anteil der Referenzgruppe in Prozent, der gleich gut oder schlechter abgeschnitten hat. cumf ist die kumulierte Häufigkeit: die Anzahl aller Werte bis einschließlich des betrachteten Werts in der sortierten Verteilung. N ist die Gesamtzahl der Werte (Probanden). Die Multiplikation mit 100 macht aus dem Anteil eine Prozentangabe."},
 {id:"k10-2", ch:16, pts:4,
  q:"Drei Schulen haben die Lesekompetenz ihrer Schülerinnen mit unterschiedlichen standardisierten Lesetests erhoben. Alle drei Schülerinnen haben denselben Rohwert. Erläutern Sie, warum man daraus nicht auf gleiche Lesekompetenz schließen darf und wie man stattdessen vorgeht.",
  k:["Tests unterscheiden sich in Schwierigkeit (Mittelwert) und Streuung (Standardabweichung) ihrer Referenzgruppen","Rohwerte haben daher in jedem Test eine andere Bedeutung","Umrechnung in Standardwerte, z. B. z = (x − M) / SD oder IQ-Skala","Vergleich über die Position relativ zur jeweiligen Referenzgruppe (niedrigster z-Wert = schwächste Leistung)"],
  m:"Ein Rohwert ist nur im Vergleich zur Referenzgruppe des jeweiligen Tests interpretierbar. Die drei Tests haben unterschiedliche Mittelwerte und Standardabweichungen; derselbe Rohwert kann also in einem schweren Test gut und in einem leichten schwach sein. Deshalb rechnet man jeden Rohwert mit z = (x − M) / SD in einen Standardwert um (gegebenenfalls weiter in die IQ-Skala). Der z-Wert zeigt, um wie viele Standardabweichungen die Schülerin von ihrer Referenzgruppe abweicht; die Schülerin mit dem niedrigsten z-Wert hat die schwächste Leistung."},
 {id:"k10-3", ch:16, pts:6, klausur:"Fragenkatalog Heine, Frage 47",
  q:"Nennen Sie drei potenzielle Probleme unausgereifter diagnostischer Zugänge in der Hochbegabungsdiagnostik und erläutern Sie jeweils kurz.",
  k:["Deckeneffekt genannt","Deckeneffekt erläutert: im extremen Leistungsbereich keine Unterscheidung mehr möglich","Messfehler genannt","Messfehler erläutert: größere Ungenauigkeit im Extrembereich","Flynn-Effekt genannt","Flynn-Effekt erläutert: veraltete Normen überschätzen die Leistung, im Extrembereich besonders problematisch"],
  m:"Erstens Deckeneffekte: Ist ein Test für sehr leistungsstarke Personen zu leicht, lösen sie fast alle Aufgaben, und der Test kann im oberen Bereich nicht mehr zwischen ihnen unterscheiden. Zweitens Messfehler: Im Extrembereich gibt es wenige passende Aufgaben und Vergleichspersonen, die Messung ist ungenauer. Drittens der Flynn-Effekt: Die durchschnittlichen Testleistungen steigen über die Jahrzehnte; veraltete Normen überschätzen deshalb die Intelligenz, was gerade an der Grenze zur Hochbegabung (IQ 130) zu Fehldiagnosen führen kann."}
];
/* Offene Aufgaben für die Probeklausur: Schreibaufgaben (kurz) oder Rechenaufgaben (calc), je Klausurteil */
const OPEN=[
 {id:"o10-iq", ch:16, kind:"calc", t:"iq", pts:10, title:"Intelligenzmessung"},
 {id:"o10-vg", ch:16, kind:"calc", t:"vergleich", pts:10, title:"Standardisierung von Messwerten"},
 {id:"o10-pr", ch:16, kind:"calc", t:"pr", pts:10, title:"Prozentränge"},
 {id:"o10-k1", ch:16, kind:"kurz", k:"k10-1", pts:10, title:"Normwerte in Leistungstests"},
 {id:"o10-k3", ch:16, kind:"kurz", k:"k10-3", pts:10, title:"Hochbegabungsdiagnostik"}
];
const TEILE={1:{t:"Einführung in die Psychologie",kz:5,op:10},2:{t:"Lehr-/Lernpsychologie",kz:5,op:10},3:{t:"Pädagogisch-psychologische Diagnostik",kz:5,op:10},4:{t:"Inklusion",kz:4,op:14}};
const teilOf=ch=>(CHAPTERS.find(c=>c.n===ch)||{}).teil;

/* ---------- Musterlösung: „1) … 2) … 3) …“ als Liste setzen ---------- */
function solHTML(m){
  const parts=m.split(/(?:^|\s)(?=\d\)\s)/);
  if(parts.length<3) return `<p style="margin:0">${m}</p>`;
  const intro=/^\d\)\s/.test(parts[0])?"":parts.shift(), items=parts.map(p=>p.replace(/^\d\)\s/,""));
  const last=items[items.length-1], cut=last.search(/\.\s+(Bei|Weitere|Insgesamt|Fazit)/);
  let tail=""; if(cut>0){ tail=last.slice(cut+2); items[items.length-1]=last.slice(0,cut+1); }
  return `${intro?`<p style="margin:0 0 6px">${intro}</p>`:""}<ol class="sol-ol">${items.map(i=>`<li>${i.replace(/^([^:.]{2,30}):/,"<b>$1:</b>")}</li>`).join("")}</ol>${tail?`<p style="margin:8px 0 0">${tail}</p>`:""}`;
}

/* ---------- Schreiben üben ---------- */
const kurzOf=n=>n? KURZ.filter(x=>x.ch===n) : KURZ.filter(x=>LESSONS[x.ch]);
function kurzScore(id){ return (state.kurz||{})[id]; }
function pickKurz(n){ const L=kurzOf(n); const w=L.map(x=>{ const s=kurzScore(x.id); return !s?4:(s.p<s.max?3:1); }); let r=Math.random()*w.reduce((a,b)=>a+b,0), i=0; for(;i<L.length;i++){ r-=w[i]; if(r<=0) break; } return L[Math.min(i,L.length-1)]; }
function openKurz(n){ n=n||0; cur.kzn=n; cur.kz=pickKurz(n); cur.kzph="schreiben"; cur.kzc={}; cur.kzt=""; go("kurz"); }
function renderKurz(){
  const x=cur.kz, n=cur.kzn, L=kurzOf(n), done=L.filter(y=>kurzScore(y.id)).length;
  const back=n?"Kapitel "+n:"Üben", backFn=()=>{ if(n){ cur.ch=n; go("chapter"); } else go("practice"); };
  if(!x){ $("#app").innerHTML=`${backTo(back)}<h1>Noch keine Aufgaben</h1><p class="muted">Für diesen Bereich gibt es noch keine offenen Aufgaben.</p>`; bindCrumb(backFn); return; }
  const per=x.pts/x.k.length, pts=()=>Math.round(x.k.filter((_,j)=>cur.kzc[j]).length*per*2)/2;
  $("#app").innerHTML=`${backTo(back)}
    <p class="eyebrow">Offene Aufgabe · ${x.pts} Punkte · ${done} von ${L.length} bearbeitet${x.klausur?" · "+x.klausur:""}</p>
    <div class="block"><p style="margin:0"><b>${x.q}</b></p><p class="small muted" style="margin:8px 0 0">In Stichworten oder kurzen Sätzen, wie in der Klausur. Fachbegriffe korrekt verwenden, darauf achtet Heine.</p></div>
    <div class="essay">${cur.kzph==="schreiben"?`
      <label class="small muted" for="kt">Deine Antwort</label>
      <textarea id="kt" style="margin-top:6px;min-height:9rem">${esc(cur.kzt)}</textarea>
      <div class="row" style="margin-top:10px"><button class="btn" id="kd">Antwort prüfen</button><button class="btn ghost" id="kn0">Andere Aufgabe</button></div>`:`
      <div class="block"><h3>Erwartungshorizont</h3><p class="small muted">Hake ab, was in deiner Antwort klar vorkommt.</p>${x.k.map((k,j)=>`<label class="check"><input type="checkbox" id="q${j}" ${cur.kzc[j]?"checked":""}><span>${k}</span></label>`).join("")}
        <p class="pts" id="kp">${pts()} von ${x.pts} Punkten</p>
        <div class="row"><button class="btn" id="ks">Speichern und weiter</button><button class="btn ghost" id="kcl">Für Claude kopieren</button><button class="btn ghost" id="kn">Ohne Speichern weiter</button></div><div id="kcopy"></div></div>
      ${cur.kzt?`<div class="block"><h3>Deine Antwort</h3><p style="white-space:pre-wrap;margin:0">${esc(cur.kzt)}</p></div>`:""}
      <div class="block lesson"><h3>Musterlösung</h3>${solHTML(x.m)}</div>`}
    </div>`;
  bindCrumb(backFn);
  if($("#kd")) $("#kd").onclick=()=>{ cur.kzt=$("#kt").value; cur.kzph="bewerten"; renderKurz(); window.scrollTo(0,0); };
  if($("#kn0")) $("#kn0").onclick=()=>openKurz(n);
  document.querySelectorAll(".check input").forEach(c=>c.onchange=()=>{ cur.kzc[+c.id.slice(1)]=c.checked; $("#kp").textContent=`${pts()} von ${x.pts} Punkten`; });
  if($("#ks")) $("#ks").onclick=()=>{ state.kurz=state.kurz||{}; const p=pts(); state.kurz[x.id]={p,max:x.pts,t:Date.now()}; logDay(); save(); toast(`${String(p).replace(".",",")} von ${x.pts} Punkten gespeichert`); openKurz(n); };
  if($("#kn")) $("#kn").onclick=()=>openKurz(n);
  if($("#kcl")) $("#kcl").onclick=()=>copyForClaude(`Bewerte bitte meine Antwort auf eine Klausuraufgabe im Modul Bildungswissenschaften II (UDE, Prof. Heine, Pädagogische Psychologie).\n\nAufgabe (${x.pts} Punkte):\n${x.q}\n\nErwartungshorizont:\n${x.k.map(k=>"- "+k).join("\n")}\n\nMeine Antwort:\n${cur.kzt}\n\nGib mir: Punktzahl mit Begründung je Kriterium, was fehlt oder fachlich ungenau ist, und eine verbesserte Formulierung.`,"#kcopy");
}
async function copyForClaude(prompt,box){
  try{ await navigator.clipboard.writeText(prompt); toast("Kopiert. In den Claude-Chat einfügen."); }
  catch(x){ $(box).innerHTML=`<textarea style="width:100%;min-height:8rem;margin-top:8px" readonly>${esc(prompt)}</textarea>`; const t=$(box+" textarea"); t.focus(); t.select(); toast("Text markiert, jetzt kopieren"); }
}

/* ---------- Probeklausur ---------- */
function teilReady(t){ return KREUZ.some(x=>LESSONS[x.ch]&&teilOf(x.ch)===t); }
function newExam(teile,min){
  const parts=teile.filter(teilReady).map(t=>{
    const pool=shuffle(KREUZ.filter(x=>LESSONS[x.ch]&&teilOf(x.ch)===t)).slice(0,TEILE[t].kz);
    const ops=OPEN.filter(o=>LESSONS[o.ch]&&teilOf(o.ch)===t), o=ops.length?pick(ops):null;
    const open=o?(o.kind==="calc"?{id:o.id,kind:"calc",title:o.title,pts:TEILE[t].op,data:TYPES[o.t].gen(),ans:{}}:{id:o.id,kind:"kurz",title:o.title,pts:TEILE[t].op,k:o.k,ans:""}):null;
    return {teil:t, kz:pool.map(x=>({id:x.id,ans:{}})), open};
  });
  return {start:Date.now(), min, phase:"run", parts, grade:{}};
}
const partMax=p=>p.kz.length*4+(p.open?p.open.pts:0);
let examTimer=null;
function openExam(){ go("exam"); }
function examLeft(){ const e=state.examRun; return e? e.start+e.min*60000-Date.now() : 0; }
const mmss=ms=>{ const s=Math.max(0,Math.round(ms/1000)); return String(Math.floor(s/60)).padStart(2,"0")+":"+String(s%60).padStart(2,"0"); };
let examSaveT=null; function examSave(){ clearTimeout(examSaveT); examSaveT=setTimeout(()=>save(),1200); }
function renderExam(){
  clearInterval(examTimer);
  const e=state.examRun;
  if(!e){
    const hist=(state.exams||[]).slice(-6).reverse(), ready=[1,2,3,4].filter(teilReady);
    $("#app").innerHTML=`${backTo("Üben")}<p class="eyebrow">Format wie die Klausur WiSe 24/25</p><h1>Probeklausur</h1>
      <div class="block"><p>Die Modulklausur (17.02.2027, am PC) hat vier Teile mit je 30 Punkten, zusammen 120. In jedem Teil kommen zuerst Kreuzaufgaben (je drei Aussagen wahr oder falsch, bis zu 4 Punkte), danach eine offene Aufgabe: Fallbeispiel, Rechnung oder Grafik.</p>
      <div class="partlist">${[1,2,3,4].map(t=>`<span>Teil ${t}</span><span>${TEILE[t].t}${ready.includes(t)?"":' <span class="chip soon">folgt</span>'}</span><b>30 P.</b>`).join("")}</div>
      <p class="small muted" style="margin-top:10px">Wie lange die Klausur dauert, steht in den Unterlagen nicht. Für einen Teil sind 30 Minuten ein guter Richtwert. Aufgenommen werden nur Kapitel, die schon in der App stehen.</p>
      <div class="row">${ready.length>1?`<button class="btn" id="xall">Alle fertigen Teile (${ready.length*30} Min.)</button>`:""}${ready.map(t=>`<button class="btn${ready.length>1?" ghost":""}" data-t="${t}">Teil ${t} (30 Min.)</button>`).join("")}</div></div>
      ${hist.length?`<div class="block"><h3>Letzte Probeklausuren</h3>${hist.map(h=>`<div class="srow"><span>${new Date(h.t).toLocaleDateString("de-DE")}</span><span class="small muted">${h.parts.map(p=>"T"+p.teil+" "+p.p+"/"+p.max).join(" · ")}</span><span class="pts">${Math.round(h.p/h.max*100)} %</span></div>`).join("")}</div>`:""}`;
    bindCrumb(()=>go("practice"));
    const start=(T,min)=>{ state.examRun=newExam(T,min); save(); renderExam(); window.scrollTo(0,0); };
    if($("#xall")) $("#xall").onclick=()=>start(ready,ready.length*30);
    document.querySelectorAll("[data-t]").forEach(b=>b.onclick=()=>start([+b.dataset.t],30));
    return;
  }
  if(e.phase==="grade") return renderExamGrade();
  const max=e.parts.reduce((s,p)=>s+partMax(p),0);
  $("#app").innerHTML=`
    <div class="block row between" style="position:sticky;top:env(safe-area-inset-top,0px);z-index:4"><span><b>Probeklausur</b> <span class="small muted">${max} Punkte</span></span><span class="pts" id="clock" style="font-size:1.3rem">${mmss(examLeft())}</span></div>
    ${e.parts.map((p,pi)=>`<h2>Teil ${p.teil}: ${TEILE[p.teil].t}</h2>
      <p class="small muted">Kreuzen Sie bei jeder Aussage an, ob sie wahr oder falsch ist. Jedes richtige Kreuz 1 Punkt, drei richtige Kreuze in einer Aufgabe 1 Zusatzpunkt.</p>
      ${p.kz.map((k,ii)=>{ const item=KREUZ.find(x=>x.id===k.id); return `<div class="block"><h3 style="margin:0 0 4px">${ii+1}. ${item.stem}</h3>${kzBlock(item,k.ans,false,pi+"-"+ii)}</div>`; }).join("")}
      ${p.open?openRun(p.open,pi,p.kz.length+1):""}`).join("")}
    <div class="row" style="margin-bottom:20px"><button class="btn" id="xsub">${cur.xArm?"Wirklich abgeben":"Abgeben und bewerten"}</button><button class="btn warn" id="xq">${cur.xQuit?"Wirklich abbrechen":"Abbrechen"}</button></div>`;
  document.querySelectorAll("[data-kz]").forEach(b=>b.onclick=()=>{ const [pi,ii,j]=b.dataset.kz.split(/[-:]/).map(Number); const a=e.parts[pi].kz[ii].ans; a[j]=b.dataset.v==="1";
    b.parentNode.querySelectorAll("button").forEach(x=>x.setAttribute("aria-pressed",String(x===b))); examSave(); });
  document.querySelectorAll("[data-op]").forEach(t=>t.oninput=()=>{ const o=e.parts[+t.dataset.op].open; if(o.kind==="kurz") o.ans=t.value; else o.ans[t.dataset.i]=t.value; examSave(); });
  $("#xsub").onclick=()=>{ if(!cur.xArm){ cur.xArm=true; $("#xsub").textContent="Wirklich abgeben"; return; } cur.xArm=false; e.phase="grade"; e.used=Date.now()-e.start; save(); renderExam(); window.scrollTo(0,0); };
  $("#xq").onclick=()=>{ if(!cur.xQuit){ cur.xQuit=true; $("#xq").textContent="Wirklich abbrechen"; return; } cur.xQuit=false; state.examRun=null; save(); renderExam(); };
  examTimer=setInterval(()=>{ const c=$("#clock"); if(!c||view!=="exam"){ clearInterval(examTimer); return; } const l=examLeft(); c.textContent=mmss(l); if(l<=0){ c.textContent="Zeit um"; c.style.color="var(--bad)"; } },1000);
}
function openRun(o,pi,no){
  if(o.kind==="kurz"){ const x=KURZ.find(y=>y.id===o.k);
    return `<div class="block"><p style="margin:0 0 6px"><b>${no}. ${o.title}</b> <span class="small muted">(${o.pts} P.)</span></p><p style="margin:0 0 8px">${x.q}</p>
      <textarea data-op="${pi}" style="width:100%;min-height:9rem;border:1px solid var(--line);border-radius:10px;background:var(--bg);padding:10px;font:1rem/1.5 var(--sans)">${esc(o.ans)}</textarea></div>`; }
  const d=o.data, F=d.steps.map((s,i)=>[s,i]).filter(([s])=>s.final);
  return `<div class="block"><p style="margin:0 0 6px"><b>${no}. ${o.title}</b> <span class="small muted">(${o.pts} P.)</span></p><p class="small" style="margin:0">${d.intro}</p>${d.table}<p style="margin:8px 0 0"><b>${d.q}</b></p>
    ${F.map(([s,i])=>`<div style="margin-top:8px"><label class="small" style="font-weight:600" for="op${pi}_${i}">${s.lab}</label><div class="inp" style="margin-top:4px"><input id="op${pi}_${i}" data-op="${pi}" data-i="${i}" inputmode="decimal" autocomplete="off" value="${esc(o.ans[i]||"")}"></div></div>`).join("")}</div>`;
}
function calcPts(o){ const F=o.data.steps.map((s,i)=>[s,i]).filter(([s])=>s.final); const ok=F.filter(([s,i])=>judge(s,o.ans[i]||"")).length; return {ok,n:F.length,p:Math.round(o.pts*ok/F.length*2)/2}; }
function renderExamGrade(){
  const e=state.examRun, g=e.grade;
  const kurzP=(o,pi)=>{ const x=KURZ.find(y=>y.id===o.k); const c=x.k.filter((_,j)=>g[pi+"_"+j]).length; return Math.round(o.pts*c/x.k.length*2)/2; };
  const partP=(p,pi)=>p.kz.reduce((s,k)=>s+kzPoints(KREUZ.find(x=>x.id===k.id),k.ans),0)+(p.open?(p.open.kind==="calc"?calcPts(p.open).p:kurzP(p.open,pi)):0);
  const total=()=>e.parts.reduce((s,p,pi)=>s+partP(p,pi),0), max=e.parts.reduce((s,p)=>s+partMax(p),0);
  $("#app").innerHTML=`<p class="eyebrow">Probeklausur · Bewertung · ${Math.round((e.used||0)/60000)} von ${e.min} Minuten genutzt</p>
    <div class="block row between" style="position:sticky;top:env(safe-area-inset-top,0px);z-index:4"><span><b>Ergebnis</b></span><span class="pts" id="tot" style="font-size:1.3rem">${String(total()).replace(".",",")} / ${max}</span></div>
    ${e.parts.map((p,pi)=>`<h2>Teil ${p.teil}: ${TEILE[p.teil].t}</h2>
      ${p.kz.map((k,ii)=>{ const item=KREUZ.find(x=>x.id===k.id); return `<div class="block"><div class="row between"><h3 style="margin:0">${ii+1}. ${item.stem}</h3><span class="pbadge">${kzPoints(item,k.ans)}/4</span></div>${kzBlock(item,k.ans,true,"g")}</div>`; }).join("")}
      ${p.open?openGrade(p.open,pi,p.kz.length+1):""}`).join("")}
    <div class="row" style="margin-bottom:20px"><button class="btn" id="xsave">Ergebnis speichern und beenden</button></div>`;
  document.querySelectorAll("[data-g]").forEach(c=>c.onchange=()=>{ g[c.dataset.g]=c.checked; $("#tot").textContent=String(total()).replace(".",",")+" / "+max; examSave(); });
  document.querySelectorAll("[data-cl]").forEach(b=>b.onclick=()=>{ const pi=+b.dataset.cl, o=e.parts[pi].open, x=KURZ.find(y=>y.id===o.k);
    copyForClaude(`Bewerte bitte meine Antwort aus einer Probeklausur im Modul Bildungswissenschaften II (UDE, Prof. Heine).\n\nAufgabe (${o.pts} Punkte):\n${x.q}\n\nErwartungshorizont:\n${x.k.map(k=>"- "+k).join("\n")}\n\nMeine Antwort:\n${o.ans}\n\nGib mir eine Punktzahl mit Begründung und sag, was fehlt.`,"#cl"+pi); });
  $("#xsave").onclick=()=>{ state.exams=state.exams||[]; const parts=e.parts.map((p,pi)=>({teil:p.teil,p:partP(p,pi),max:partMax(p)}));
    state.exams.push({t:Date.now(),p:total(),max,parts}); e.parts.forEach(p=>p.kz.forEach(k=>{ const item=KREUZ.find(x=>x.id===k.id), s=kzStat(k.id)||{n:0,best:0}, pp=kzPoints(item,k.ans); state.kreuz[k.id]={n:s.n+1,p:pp,best:Math.max(s.best||0,pp),t:Date.now()}; }));
    state.examRun=null; logDay(); save(); toast("Gespeichert"); renderExam(); window.scrollTo(0,0); };
}
function openGrade(o,pi,no){
  if(o.kind==="kurz"){ const x=KURZ.find(y=>y.id===o.k);
    return `<div class="block"><p style="margin:0 0 6px"><b>${no}. ${o.title}</b> <span class="small muted">(${o.pts} P.)</span></p><p class="small" style="margin:0 0 6px">${x.q}</p>
      <p class="small" style="white-space:pre-wrap;background:var(--bg);border-radius:8px;padding:8px">${esc(o.ans)||'<span class="muted">keine Antwort</span>'}</p>
      ${x.k.map((k,j)=>`<label class="check"><input type="checkbox" data-g="${pi}_${j}" ${state.examRun.grade[pi+"_"+j]?"checked":""}><span>${k}</span></label>`).join("")}
      <details><summary class="small">Musterlösung</summary><div class="small">${solHTML(x.m)}</div></details>
      <div class="row" style="margin-top:6px"><button class="btn ghost small" data-cl="${pi}">Für Claude kopieren</button></div><div id="cl${pi}"></div></div>`; }
  const c=calcPts(o), S=o.data.steps;
  return `<div class="block"><div class="row between"><p style="margin:0"><b>${no}. ${o.title}</b></p><span class="pbadge">${String(c.p).replace(".",",")}/${o.pts}</span></div>
    ${S.map((s,i)=>s.final?`<p class="res ${judge(s,o.ans[i]||"")?"good":"bad"}" style="margin:4px 0">${s.lab}: ${esc(o.ans[i]||"–")}${judge(s,o.ans[i]||"")?"":" · richtig: "+fmt(s.ans)}</p>`:"").join("")}
    <div class="stack" style="margin-top:6px">${S.map(s=>`<div><div class="small" style="font-weight:600">${s.lab}</div><div class="eq">${esc(s.calc)}</div></div>`).join("")}</div></div>`;
}
