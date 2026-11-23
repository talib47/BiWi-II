/* ================= Tägliche Einheit „Heute“ =================
   Mischt, was heute dran ist: fällige Karten, fällige Verständnisfragen, Kreuzaufgaben wie in der Klausur,
   abwechselnd eine Rechenaufgabe, eine offene Aufgabe oder „Zuordnen“, dazu die nächste neue Lektion.
   Gemischtes Üben (Interleaving) und Abstände (Spacing), ohne dass du selbst planen musst. */
let sess=null;
const dayIndex=()=>Math.floor(dayStart()/864e5);
function freshChapter(){ for(const ch of CHAPTERS){ const L=LESSONS[ch.n]||[]; if(L.some(x=>lessonState(x.id)) && (CARDS[ch.n]||[]).some(x=>!isSeen(x.id))) return ch.n; } return 0; }
/* Höchstens vier Schritte (23.11.): 1 Karten (fällige und neue zusammen), 2 Fragen (Verständnisfragen,
   Kreuzaufgaben und Zuordnen gemischt, alle als Auswahlkarten), 3 abwechselnd offene Aufgabe oder Rechenaufgabe,
   4 Neu lernen, wenn eine Lektion ansteht. */
function planToday(){
  const S=[], due=dueCards(0).slice(0,20), n=due.length<25?freshChapter():0, fresh=n?allCards(n).filter(x=>!isSeen(x.id)).slice(0,5):[];
  if(due.length||fresh.length) S.push({k:"cards", deck:due.concat(fresh), t:"Karten", d:[due.length?`${due.length} fällig`:"",fresh.length?`${fresh.length} neu`:""].filter(Boolean).join(", "), min:Math.max(2,Math.round((due.length+fresh.length)*.4))});
  const mx=mixPlan(); if(mx.length) S.push({k:"mix", list:mx, t:"Fragen", d:`${mx.length} Fragen wie in der Klausur gemischt`, min:Math.max(3,Math.round(mx.length*.6))});
  const rot=dayIndex()%2;
  if(rot===0&&calcTypes(0).length) S.push({k:"calc", t:"Rechenaufgabe", d:"Diagnostik, bevorzugt was dir schwerfällt", min:5});
  else if(kurzOf(0).length) S.push({k:"kurz", t:"Offene Aufgabe", d:"tippen wie in der Klausur am PC", min:6});
  const nx=nextStep(); if(/Theorie/.test(nx.label)) S.push({k:"lesson", t:"Neu lernen", d:nx.title, min:5, go:nx.go});
  return S;
}
/* Fragenmix: fällige Verständnisfragen, Kreuzaufgaben und Zuordnen, verzahnt (Interleaving) */
function mixPlan(){
  const q=qDue().slice(0,5).map(x=>({t:"q",q:x})), k=kreuzOf(0).length?pickKreuz(0,2).map(x=>({t:"k",id:x.id})):[], w=whoPick(3).map(x=>({t:"w",x,o:whoOptions(x)}));
  const out=[], parts=[q,k,w]; while(parts.some(p=>p.length)) for(const p of parts) if(p.length) out.push(p.shift());
  return out;
}
function openMix(list){ cur.mx={list, i:0, right:0, n:0}; mixShow(); }
function mixShow(){ const M=cur.mx, e=M.list[M.i];
  if(!e) return mixDone();
  if(e.t==="q"){ cur.rq={list:[e.q], i:0, ans:undefined, shown:false, right:0}; go("recall"); }
  else if(e.t==="k"){ cur.kr={n:0, items:[e.id], i:0, j:0, ans:{}, prev:null, pts:[], sure:[]}; go("kreuz"); }
  else { cur.wh={list:[{x:e.x,o:e.o}], i:0, a:null, right:0}; go("who"); }
  window.scrollTo(0,0);
}
/* Wird von den Fragenansichten aufgerufen, wenn ihr einziges Element fertig ist: ok = richtig (Kreuzaufgabe: Punkte) */
function mixNext(ok,pts){ const M=cur.mx; if(pts!==undefined){ M.kp=(M.kp||0)+pts; M.km=(M.km||0)+4; } else { M.n++; if(ok) M.right++; } M.i++; mixShow(); }
function mixDone(){ const M=cur.mx; cur.mx=null; view="mixdone"; renderNav();
  $("#app").innerHTML=`<h1>Fragen geschafft</h1><div class="block">
    ${M.n?`<p>${M.right} von ${M.n} Fragen richtig.</p>`:""}${M.km?`<p>Kreuzaufgaben: ${M.kp} von ${M.km} Punkten.</p>`:""}
    <p class="small muted">Was nicht saß, kommt morgen wieder.</p><div class="row">${sess?sessBtn():`<button class="btn" id="mxOut">Fertig</button>`}</div></div>`;
  if($("#mxOut")) $("#mxOut").onclick=()=>go("practice"); window.scrollTo(0,0);
}
function startSession(){ sess={steps:planToday(), i:0, t0:Date.now()}; runStep(); }
function runStep(){
  if(!sess) return; const s=sess.steps[sess.i]; updateSessBar();
  if(!s){ return finishSession(); }
  ({cards:()=>openCards(0,false,s.deck),
    mix:()=>openMix(s.list),
    calc:()=>startTask(recommend(),false),
    who:()=>openWho(5),
    kurz:()=>openKurz(0),
    lesson:()=>s.go()})[s.k]();
  window.scrollTo(0,0);
}
function sessNext(){ if(!sess) return; sess.i++; runStep(); }
function endSession(){ cur.mx=null; sess=null; updateSessBar(); go("home"); }
function finishSession(){
  const min=Math.max(1,Math.round((Date.now()-sess.t0)/60000)); state.sessions=state.sessions||{}; state.sessions[today()]=min; save();
  sess=null; updateSessBar(); view="sessdone"; renderNav();
  $("#app").innerHTML=`<p class="eyebrow">Heute</p><h1>Geschafft</h1><div class="block"><p>Deine Einheit ist fertig, etwa ${min} Minuten.</p>
    <p class="small muted">Morgen stellt die App eine neue Einheit zusammen. Was du heute nicht sicher wusstest, ist dann wieder dabei.${new Date().getHours()>=18?" Abends gelernt? Dann mach morgen früh kurz die fälligen Karten: Mit Schlaf zwischen zwei Runden sitzt der Stoff schneller und länger.":""}</p>
    <div class="row"><button class="btn" id="sdHome">Zum Lernpfad</button></div></div>`;
  $("#sdHome").onclick=()=>go("home"); window.scrollTo(0,0);
}
function updateSessBar(){
  const b=$("#sessbar"); if(!b) return;
  if(!sess||!sess.steps[sess.i]){ b.hidden=true; b.innerHTML=""; return; }
  const s=sess.steps[sess.i];
  b.hidden=false;
  b.innerHTML=`<div class="sbin"><span class="sbt"><b>Heute ${sess.i+1}/${sess.steps.length}</b> · ${s.t}</span><button class="btn ghost small" id="sbNext">${sess.i<sess.steps.length-1?"Nächster Schritt":"Abschließen"}</button><button class="btn ghost small" id="sbEnd" aria-label="Einheit beenden">✕</button></div><div class="sbs" aria-hidden="true">${sess.steps.map((_,j)=>`<i class="${j<sess.i?"on":j===sess.i?"now":""}"></i>`).join("")}</div>`;
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
