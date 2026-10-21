/* ================= Aufgabe ================= */
function startTask(t,mix){
  task={t,mix,lvl:lvlOf(t),data:TYPES[t].gen(),cur:0,shown:0,first:{},done:false,checks:{}};
  view="task"; render(); window.scrollTo(0,0);
}
function nextTask(){
  if(task.mix){ const pool=ORDER.filter(x=>x!==task.t); const w=pool.map(x=>{const a=acc(x);return a==null?2:1.5-a;}); let s=Math.random()*w.reduce((a,b)=>a+b,0); let i=0; for(;i<pool.length;i++){ s-=w[i]; if(s<=0) break; } startTask(pool[Math.min(i,pool.length-1)],true); }
  else startTask(task.t,false);
}
function record(ok){
  const t=task.t; state.hist[t]=state.hist[t]||{n:0,r:0}; state.hist[t].n++; if(ok) state.hist[t].r++;
  const k=today(); state.days[k]=(state.days[k]||0)+1;
  const l=lvlOf(t), st=state.streak[t]||0;
  if(l===2){ state.streak[t]= ok? st+1 : 0; if(state.streak[t]>=2){ state.lvl[t]=3; state.streak[t]=0; toast("Stufe Frei freigeschaltet"); } }
  else if(l===3){ state.streak[t]= ok? 0 : st+1; if(state.streak[t]>=2){ state.lvl[t]=2; state.streak[t]=0; toast("Zurück zu Geführt, um den Weg zu festigen"); } }
  save();
}
function head(){
  const T=TYPES[task.t], d=task.data;
  return `<div class="row between" style="margin-bottom:8px">
      <button class="btn ghost small" id="back">← Liste</button>
      <div class="seg" role="group" aria-label="Stufe">${[1,2,3].map(l=>`<button data-l="${l}" aria-pressed="${task.lvl===l}">${LVL[l]}</button>`).join("")}</div>
    </div>
    <p class="eyebrow">${task.mix?"Gemischt · ":""}${T.name}</p>
    <div class="block">
      <p class="small">${d.intro}</p>
      ${d.table}
      <p style="margin:10px 0 0"><b>${d.q}</b></p>
    </div>`;
}
function bindHead(){
  $("#back").onclick=()=>go("calc");
  document.querySelectorAll(".seg button").forEach(b=>b.onclick=()=>{ const l=+b.dataset.l; state.lvl[task.t]=l; state.streak[task.t]=0; save(); task.lvl=l; task.cur=0; task.shown=0; task.first={}; task.done=false; task.checks={}; render(); });
}
function renderTask(){
  const T=TYPES[task.t];
  if(T.self) return renderSelf();
  if(task.lvl===1) return renderWorked();
  if(task.lvl===2) return renderGuided();
  return renderFree();
}
const eqLine=s=>`<div class="eq">${esc(s.calc)}</div>`;

/* Stufe 1: vorgerechnet, Schritt für Schritt aufdecken */
function renderWorked(){
  const S=task.data.steps, n=task.shown;
  $("#app").innerHTML=head()+`
    <div class="stack">${S.slice(0,n+1).map((s,i)=>`<div class="step">
      <div class="lab">${i+1}. ${s.lab}</div><div class="why">${s.why}</div>${eqLine(s)}</div>`).join("")}</div>
    <div class="row" style="margin-top:14px">${n<S.length-1?`<button class="btn" id="more">Nächster Schritt</button>`:`<button class="btn" id="self">Jetzt selbst rechnen</button>`}</div>`;
  bindHead();
  if($("#more")) $("#more").onclick=()=>{ task.shown++; renderWorked(); };
  if($("#self")) $("#self").onclick=()=>{ state.lvl[task.t]=2; state.streak[task.t]=0; save(); startTask(task.t,task.mix); };
}

/* Stufe 2: geführt, ein Schritt nach dem anderen mit Eingabe */
function renderGuided(){
  const S=task.data.steps, cur=task.cur;
  const html=S.map((s,i)=>{
    if(i>cur) return "";
    if(i<cur){ const ok=task.first[i]; return `<div class="step ${ok?"ok":"no"}"><div class="lab">${i+1}. ${s.lab}</div>${eqLine(s)}</div>`; }
    return `<div class="step" id="curStep"><div class="lab">${i+1}. ${s.lab}</div><div class="why">${s.why}</div>
      <div class="inp"><input id="in" inputmode="decimal" autocomplete="off" aria-label="${esc(s.lab.replace(/<[^>]+>/g,""))}"><button class="btn small" id="chk">Prüfen</button><button class="btn ghost small" id="hint">Formel</button></div>
      <div id="out"></div></div>`;
  }).join("");
  $("#app").innerHTML=head()+`<div class="stack">${html}</div>
    ${task.done?finishBox():padHTML()}`;
  bindHead(); bindPad();
  if(task.done){ bindFinish(); return; }
  const inp=$("#in"); inp.focus({preventScroll:true});
  const s=S[cur];
  const check=()=>{
    const res=judge(s,inp.value);
    if(res===null){ $("#out").innerHTML=`<p class="res bad">Bitte eine Zahl eingeben, Komma oder Punkt geht beides.</p>`; return; }
    if(!(cur in task.first)) task.first[cur]=res;
    if(res){ task.cur++; if(task.cur>=S.length){ task.done=true; record(Object.values(task.first).every(Boolean)); } renderGuided(); }
    else{ $("#out").innerHTML=`<p class="res bad">Noch nicht. ${s.sign?"Achte auch aufs Vorzeichen. ":""}Versuch es nochmal oder lass dir den Schritt zeigen.</p><button class="btn ghost small" id="reveal">Schritt zeigen</button>`;
      $("#reveal").onclick=()=>{ task.first[cur]=false; task.cur++; if(task.cur>=S.length){ task.done=true; record(false); } renderGuided(); }; }
  };
  $("#chk").onclick=check; inp.onkeydown=e=>{ if(e.key==="Enter") check(); };
  $("#hint").onclick=()=>{ $("#out").innerHTML=`<p class="hint muted">Formel:</p><div class="eq">${esc(s.f)}</div>`; };
}

/* Stufe 3: frei, nur die Klausurgrößen */
function renderFree(){
  const S=task.data.steps, F=S.map((s,i)=>[s,i]).filter(([s])=>s.final);
  $("#app").innerHTML=head()+`
    ${padHTML()}
    <div class="block stack">${F.map(([s,i])=>`<div>
      <label class="lab" for="f${i}" style="font-weight:600">${s.lab}</label>
      <div class="inp" style="margin-top:4px"><input id="f${i}" inputmode="decimal" autocomplete="off" ${task.done?"disabled":""}></div>
      <div id="o${i}"></div></div>`).join("")}
      ${task.done?"":`<button class="btn" id="chkAll">Abgeben</button>`}
    </div>
    <div id="sol"></div>`;
  bindHead(); bindPad();
  if(task.done) return;
  $("#chkAll").onclick=()=>{
    let all=true, empty=false;
    F.forEach(([s,i])=>{ const v=$("#f"+i).value; const res=judge(s,v); if(res===null) empty=true; });
    if(empty && !task.confirmEmpty){ task.confirmEmpty=true; toast("Noch leere Felder. Nochmal tippen zum Abgeben."); return; }
    F.forEach(([s,i])=>{ const el=$("#f"+i), res=judge(s,el.value); if(!res) all=false;
      el.disabled=true; $("#o"+i).innerHTML=`<p class="res ${res?"good":"bad"}">${res?"Richtig":"Richtig wäre "+fmt(s.ans)+(s.rate?" (= "+fmt(s.ans*100)+" Prozentpunkte)":"")+(s.pct?" %":"")}</p>`; });
    task.done=true; record(all); $("#chkAll").remove();
    $("#sol").innerHTML=`<div class="block"><h3>Lösungsweg</h3><div class="stack">${S.map((s,i)=>`<div><div class="small" style="font-weight:600">${i+1}. ${s.lab}</div>${eqLine(s)}</div>`).join("")}</div></div>`+finishBox(all);
    bindFinish();
  };
}

/* Herleitung: selbst schreiben, dann aufdecken und abhaken */
function renderSelf(){
  const S=task.data.steps, guided=task.lvl===2, worked=task.lvl===1;
  const n= worked? S.length : (guided? task.shown : (task.done? S.length : 0));
  $("#app").innerHTML=head()+`
    ${worked?"":`<p class="small muted">${guided?"Schreib den nächsten Schritt auf den Schmierzettel, dann deck ihn auf.":"Schreib die komplette Herleitung auf den Schmierzettel. Danach vergleichen und abhaken, welche Schritte du hattest."}</p>${padHTML()}`}
    <div class="block">${S.slice(0,n).map((s,i)=>`
      <div class="check">${worked?"":`<input type="checkbox" id="c${i}" ${task.checks[i]?"checked":""} aria-label="Schritt ${i+1} gehabt">`}
      <div style="min-width:0;flex:1"><div class="small" style="font-weight:600">${i+1}. ${s.lab}</div><div class="eq">${esc(s.f)}</div></div></div>`).join("")||`<p class="small muted" style="margin:0">${S.length} Schritte warten auf dich.</p>`}
    </div>
    <div class="row">
      ${worked?`<button class="btn" id="self">Jetzt selbst schreiben</button>`:
        (n<S.length?`<button class="btn" id="more">${guided?"Nächsten Schritt aufdecken":"Lösung aufdecken"}</button>`:
        (task.saved?"":`<button class="btn" id="sv">Ergebnis speichern</button>`))}
    </div>
    <div id="fin">${task.saved?finishBox(task.savedOk):""}</div>`;
  bindHead(); if(!worked) bindPad();
  document.querySelectorAll(".check input").forEach(c=>c.onchange=()=>{ task.checks[+c.id.slice(1)]=c.checked; });
  if($("#self")) $("#self").onclick=()=>{ state.lvl[task.t]=2; save(); startTask(task.t,task.mix); };
  if($("#more")) $("#more").onclick=()=>{ if(guided) task.shown++; else task.done=true; renderSelf(); };
  if($("#sv")) $("#sv").onclick=()=>{ const ok=S.every((_,i)=>task.checks[i]); task.saved=true; task.savedOk=ok; record(ok); renderSelf(); };
  if(task.saved) bindFinish();
}

function finishBox(ok){
  if(ok===undefined) ok=Object.values(task.first).every(Boolean);
  const l=lvlOf(task.t);
  return `<div class="block" style="margin-top:14px">
    <h3>${ok?"Fehlerfrei":"Geschafft, mit Fehlern"}</h3>
    <p class="small muted">${ok?"Gut so.":"Schau dir den markierten Schritt nochmal an, die nächste Aufgabe hat neue Zahlen."} Stufe jetzt: ${LVL[l]}.</p>
    <div class="row"><button class="btn" id="next">${task.mix?"Nächste Aufgabe":"Neue Zahlen"}</button><button class="btn ghost" id="list">Zur Liste</button></div></div>`;
}
function bindFinish(){ if($("#next")) $("#next").onclick=nextTask; if($("#list")) $("#list").onclick=()=>go("calc"); }

/* ================= Schmierzettel für den Apple Pencil ================= */
let padStrokes=[];
function padHTML(){ return `<div class="pad" style="margin:0 0 14px"><span class="ph">Schmierzettel</span><canvas id="pad" aria-label="Schmierzettel zum Rechnen mit dem Stift"></canvas><div class="tools"><button id="padUndo">Zurück</button><button id="padClr">Leeren</button></div></div>`; }
function bindPad(){
  const c=$("#pad"); if(!c) return;
  const ctx=c.getContext("2d"); let penSeen=false, cur=null;
  const size=()=>{ const r=c.getBoundingClientRect(), dpr=window.devicePixelRatio||1; c.width=r.width*dpr; c.height=r.height*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); draw(); };
  const color=()=>getComputedStyle(document.documentElement).getPropertyValue("--ink").trim()||"#1B2433";
  function draw(){ ctx.clearRect(0,0,c.width,c.height); ctx.lineCap="round"; ctx.lineJoin="round"; ctx.strokeStyle=color();
    for(const s of padStrokes){ for(let i=1;i<s.length;i++){ ctx.lineWidth=s[i][2]; ctx.beginPath(); ctx.moveTo(s[i-1][0],s[i-1][1]); ctx.lineTo(s[i][0],s[i][1]); ctx.stroke(); } } }
  const pt=e=>{ const r=c.getBoundingClientRect(); const p=e.pressure&&e.pointerType==="pen"? e.pressure : .5; return [e.clientX-r.left,e.clientY-r.top,1+p*2.4]; };
  c.onpointerdown=e=>{ if(e.pointerType==="pen") penSeen=true; if(penSeen&&e.pointerType==="touch") return; cur=[pt(e)]; padStrokes.push(cur); c.setPointerCapture(e.pointerId); };
  c.onpointermove=e=>{ if(!cur) return; const evs=e.getCoalescedEvents?e.getCoalescedEvents():[e]; for(const ev of evs) cur.push(pt(ev)); draw(); };
  c.onpointerup=c.onpointercancel=()=>{ cur=null; };
  $("#padUndo").onclick=()=>{ padStrokes.pop(); draw(); };
  $("#padClr").onclick=()=>{ padStrokes=[]; draw(); };
  size(); window.onresize=size;
}

