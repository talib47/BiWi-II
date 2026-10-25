/* ================= Verständnisfragen: erst selbst abrufen, dann Auswahl; Wiederholung mit Abstand =================
   Jede Frage aus den Lektionen bekommt ein eigenes Fach wie eine Karteikarte (state.qbox).
   Ältere Antworten (vor dieser Funktion) werden aus state.lessons abgeleitet, ohne etwas zu speichern.
   Frage-Felder: q, o (Optionen), a (richtig), ex (Erklärung), w (optional: je falscher Option, warum sie falsch ist) */
const qid=(lid,j)=>lid+"#"+j;
function allQuestions(){ const out=[]; for(const ch of CHAPTERS) for(const L of (LESSONS[ch.n]||[])) L.check.forEach((c,j)=>out.push({id:qid(L.id,j), lid:L.id, n:ch.n, c, lt:L.t, li:(LESSONS[ch.n]||[]).indexOf(L)})); return out; }
function qInfo(id){
  const s=(state.qbox||{})[id]; if(s) return s;
  const ls=(state.lessons||{})[id.split("#")[0]]; if(!ls) return null;
  return ls.ok? {b:2, due:dayStart(ls.t)+3*864e5} : {b:1, due:dayStart(ls.t)+864e5};
}
function qDue(){ const now=Date.now(); return allQuestions().filter(q=>{ const s=qInfo(q.id); return s&&s.due<=now; }).sort((a,b)=>qInfo(a.id).due-qInfo(b.id).due); }
function qGrade(id,ok){
  state.qbox=state.qbox||{}; const s=qInfo(id)||{b:0};
  const b1= ok? Math.min(5,Math.max(s.b,1)+1) : 1;
  state.qbox[id]={b:b1, due:dayStart()+(ok?(s.b===5?35:INTERVAL[b1]):1)*864e5};
  if(!ok){ state.qlapses=state.qlapses||{}; state.qlapses[id]=(state.qlapses[id]||0)+1; }
  save();
}
/* Rückmeldung: bei falscher Wahl erst, warum genau diese Wahl nicht passt, dann das Richtige und der Unterschied */
function feedback(c,a){
  const right=`<b>Richtig</b><span>${inl(c.o[c.a])}</span>`;
  if(a===c.a) return `<div class="fb good"><p class="fh">Richtig.</p><p style="margin:0">${inl(c.ex)}</p></div>`;
  if(a===-1) return `<div class="fb idk"><p class="fh">Kein Problem, die Frage kommt morgen noch einmal.</p><div class="dlist">${right}<b>Warum</b><span>${inl(c.ex)}</span></div></div>`;
  const why=c.w&&c.w[a];
  return `<div class="fb bad"><p class="fh">Nicht ganz.</p><div class="dlist">${why?`<b>Warum nicht</b><span>${inl(why)}</span>`:""}${right}<b>${why?"Der Unterschied":"Warum"}</b><span>${inl(c.ex)}</span></div></div>`;
}
/* Eine Frage: erst nur die Frage, dann auf Wunsch die Auswahl */
function qBlock(c,key,a,shown,first){
  const opts= a!==undefined || shown;
  return `<div class="qb" style="margin-top:${first?4:18}px"><p style="margin:0"><b>${inl(c.q)}</b></p>
    ${opts?`<div class="mc">${c.o.map((o,k)=>{ const cls=a===undefined?"":(k===c.a?"r":(k===a?"w":""));
        return `<button data-q="${key}" data-k="${k}" class="${cls}" ${a!==undefined?"disabled":""}>${inl(o)}</button>`; }).join("")}
        ${a===undefined?`<button data-q="${key}" data-k="-1" class="idk">Weiß ich nicht</button>`:""}</div>`
      :`<p class="hint" style="margin:4px 0 8px">Erst selbst überlegen, dann Auswahl zeigen.</p>
        <div class="row"><button class="btn small" data-show="${key}">Auswahl zeigen</button><button class="btn ghost small" data-q="${key}" data-k="-1">Weiß ich nicht</button></div>`}
    ${a!==undefined?feedback(c,a):""}</div>`;
}
/* Übungsmodus: fällige Verständnisfragen aus allen Lektionen */
function openRecall(list){ const L=list||qDue().slice(0,8); cur.rq={list:L, i:0, ans:undefined, shown:false, right:0}; go("recall"); }
function renderRecall(){
  const R=cur.rq, L=R.list;
  if(R.i>=L.length){
    const left=qDue().length;
    $("#app").innerHTML=`${backTo("Üben")}<h1>${L.length?"Runde geschafft":"Nichts fällig"}</h1><div class="block">
      ${L.length?`<p>${R.right} von ${L.length} richtig.</p>`:`<p>Gerade ist keine Verständnisfrage fällig. Neue Fragen kommen mit jeder Lektion dazu.</p>`}
      <p class="small muted">Richtige Fragen kommen nach 1, 3, 7, 16 und 35 Tagen wieder, falsche schon morgen. ${left?`Noch ${left} fällig.`:""}</p>
      <div class="row">${sess?sessBtn():`${left?`<button class="btn" id="rAgain">Weiter</button>`:""}<button class="btn ghost" id="rOut">Fertig</button>`}</div></div>`;
    bindCrumb(()=>go("practice")); if($("#rAgain")) $("#rAgain").onclick=()=>openRecall(); if($("#rOut")) $("#rOut").onclick=()=>go("practice"); return;
  }
  const q=L[R.i], ch=CHAPTERS.find(c=>c.n===q.n);
  $("#app").innerHTML=`${backTo("Üben")}
    <p class="eyebrow">Verständnisfrage ${R.i+1} von ${L.length}</p>
    <div class="block"><p class="small muted" style="margin:0 0 2px">${ch.title} · ${q.lt}</p>${qBlock(q.c,"r",R.ans,R.shown,true)}</div>
    ${R.ans!==undefined?`<div class="row"><button class="btn" id="rNext">Weiter</button><button class="btn ghost" id="rLes">Zur Lektion</button></div>`:""}`;
  bindCrumb(()=>go("practice"));
  document.querySelectorAll("[data-show]").forEach(b=>b.onclick=()=>{ R.shown=true; renderRecall(); });
  document.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{ if(R.ans!==undefined) return; const k=+b.dataset.k; R.ans=k; const ok=k===q.c.a; if(ok) R.right++; logDay(); qGrade(q.id,ok); renderRecall(); });
  if($("#rNext")) $("#rNext").onclick=()=>{ R.i++; R.ans=undefined; R.shown=false; renderRecall(); window.scrollTo(0,0); };
  if($("#rLes")) $("#rLes").onclick=()=>openLesson(q.n,q.li);
}
