/* ================= Tägliche Einheit „Heute“ =================
   Mischt, was heute dran ist: fällige Karten, fällige Verständnisfragen, Kreuzaufgaben wie in der Klausur,
   abwechselnd eine Rechenaufgabe, eine offene Aufgabe oder „Zuordnen“, dazu die nächste neue Lektion.
   Gemischtes Üben (Interleaving) und Abstände (Spacing), ohne dass du selbst planen musst. */
let sess=null;
const dayIndex=()=>Math.floor(dayStart()/864e5);
function freshChapter(){ for(const ch of CHAPTERS){ const L=LESSONS[ch.n]||[]; if(L.some(x=>lessonState(x.id)) && (CARDS[ch.n]||[]).some(x=>!isSeen(x.id))) return ch.n; } return 0; }
function planToday(){
  const S=[], dc=dueCards(0).length, dq=qDue().length, kd=kzDue().length;
  if(dc) S.push({k:"cards", t:"Karten wiederholen", d:`${Math.min(dc,20)} fällige Karten`, min:Math.max(2,Math.round(Math.min(dc,20)*.4))});
  else { const n=freshChapter(); if(n) S.push({k:"newcards", n, t:"Neue Karten", d:`5 neue Karten: ${CHAPTERS.find(c=>c.n===n).title}`, min:3}); }
  if(dq) S.push({k:"recall", t:"Verständnisfragen", d:`${Math.min(dq,6)} fällige Fragen aus den Lektionen`, min:3});
  if(kreuzOf(0).length) S.push({k:"kreuz", t:"Kreuzaufgaben", d:kd?`3 Aufgaben wie in der Klausur, ${Math.min(kd,3)} davon fällig`:"3 Aufgaben wie in der Klausur", min:4});
  const rot=["calc","who","kurz"][dayIndex()%3];
  if(rot==="calc"&&calcTypes(0).length) S.push({k:"calc", t:"Eine Rechenaufgabe", d:"Diagnostik, bevorzugt was dir schwerfällt", min:5});
  else if(rot==="kurz"&&kurzOf(0).length) S.push({k:"kurz", t:"Eine offene Aufgabe", d:"tippen wie in der Klausur am PC", min:6});
  else if(whoPick(1).length) S.push({k:"who", t:"Zuordnen", d:"5 Beispiele der richtigen Lernform zuordnen", min:3});
  const nx=nextStep(); if(/Theorie/.test(nx.label)) S.push({k:"lesson", t:"Neu lernen", d:nx.title, min:5, go:nx.go});
  return S;
}
function startSession(){ sess={steps:planToday(), i:0, t0:Date.now()}; runStep(); }
function runStep(){
  if(!sess) return; const s=sess.steps[sess.i]; updateSessBar();
  if(!s){ return finishSession(); }
  ({cards:()=>openCards(0,false,dueCards(0).slice(0,20)),
    newcards:()=>openCards(s.n,false,allCards(s.n).filter(x=>!isSeen(x.id)).slice(0,5)),
    recall:()=>openRecall(qDue().slice(0,6)),
    kreuz:()=>openKreuz(0,3),
    calc:()=>startTask(recommend(),false),
    who:()=>openWho(5),
    kurz:()=>openKurz(0),
    lesson:()=>s.go()})[s.k]();
  window.scrollTo(0,0);
}
function sessNext(){ if(!sess) return; sess.i++; runStep(); }
function endSession(){ sess=null; updateSessBar(); go("home"); }
function finishSession(){
  const min=Math.max(1,Math.round((Date.now()-sess.t0)/60000)); state.sessions=state.sessions||{}; state.sessions[today()]=min; save();
  sess=null; updateSessBar(); view="sessdone"; renderNav();
  $("#app").innerHTML=`<p class="eyebrow">Heute</p><h1>Geschafft</h1><div class="block"><p>Deine Einheit ist fertig, etwa ${min} Minuten.</p>
    <p class="small muted">Morgen stellt die App eine neue Einheit zusammen. Was du heute nicht sicher wusstest, ist dann wieder dabei.</p>
    <div class="row"><button class="btn" id="sdHome">Zum Lernpfad</button></div></div>`;
  $("#sdHome").onclick=()=>go("home"); window.scrollTo(0,0);
}
function updateSessBar(){
  const b=$("#sessbar"); if(!b) return;
  if(!sess||!sess.steps[sess.i]){ b.hidden=true; b.innerHTML=""; return; }
  const s=sess.steps[sess.i];
  b.hidden=false;
  b.innerHTML=`<div class="sbin"><span class="sbt"><b>Heute ${sess.i+1}/${sess.steps.length}</b> · ${s.t}</span><button class="btn small" id="sbNext">${sess.i<sess.steps.length-1?"Nächster Schritt":"Abschließen"}</button><button class="btn ghost small" id="sbEnd" aria-label="Einheit beenden">✕</button></div>`;
  $("#sbNext").onclick=sessNext; $("#sbEnd").onclick=endSession;
}
const sessBtn=()=>`<button class="btn" id="sessGo">${sess&&sess.i<sess.steps.length-1?"Weiter zum nächsten Schritt":"Einheit abschließen"}</button>`;
document.addEventListener("click",e=>{ if(e.target.closest("#sessGo")) sessNext(); });
/* Block auf der Startseite */
function todayBlock(){
  const done=(state.sessions||{})[today()], S=planToday(), min=S.reduce((a,s)=>a+s.min,0);
  const plan=examPlanToday();
  if(sess) return `<div class="block today"><p class="eyebrow">Heute</p><h2>Einheit läuft</h2><p class="small muted" style="margin-top:0">Schritt ${sess.i+1} von ${sess.steps.length}: ${sess.steps[sess.i]?sess.steps[sess.i].t:""}</p><button class="btn" id="goSess">Fortsetzen</button></div>`;
  return `<div class="block today"><p class="eyebrow">Heute · etwa ${min} Minuten</p><h2>${done?"Für heute erledigt":"Deine Lerneinheit"}</h2>
    ${done?`<p class="small muted" style="margin-top:0">Du hast heute schon gelernt. Eine zweite Runde schadet nicht, morgen geht es mit neuen Abständen weiter.</p>`:""}
    <ol class="plan">${S.map(s=>`<li><b>${s.t}</b><span>${inl(s.d)}</span></li>`).join("")}</ol>
    ${plan?`<p class="small" style="margin:0 0 10px"><b>Probeklausur:</b> ${plan}</p>`:""}
    <button class="btn" id="goSess">${done?"Noch eine Runde":"Starten"}</button></div>`;
}
