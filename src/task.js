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
  return `<div class="thead">
      <p class="eyebrow">${task.mix?"Gemischt · ":""}${T.name}</p>
      <button class="tlex" id="lex" aria-label="Zeichen und Formeln">Zeichen</button>
    </div>
    <div class="seg tlvl" role="group" aria-label="Stufe">${[1,2,3].map(l=>`<button data-l="${l}" aria-pressed="${task.lvl===l}">${LVL[l]}</button>`).join("")}</div>
    <div class="card tq">
      <p class="tintro">${d.intro}</p>
      ${d.table}
      <p class="front">${d.q}</p>
    </div>`;
}
function bindHead(){
  $("#lex").onclick=showLexicon;
  document.querySelectorAll(".tlvl button").forEach(b=>b.onclick=()=>{ const l=+b.dataset.l; state.lvl[task.t]=l; state.streak[task.t]=0; save(); task.lvl=l; task.cur=0; task.shown=0; task.first={}; task.done=false; task.checks={}; task.val=""; task.vals={}; task.act=null; render(); });
}

/* ================= Zahlentastatur (iPad und Handy haben im Zahlenfeld kein Minus) ================= */
const NKEYS=[["7","7"],["8","8"],["9","9"],["del","⌫"],["4","4"],["5","5"],["6","6"],["neg","−"],["1","1"],["2","2"],["3","3"],[",",","],["0","0"]];
function padKeys(go){ return `<div class="npad" role="group" aria-label="Zahlentastatur">${NKEYS.map(([k,l])=>`<button class="nk${k==="0"?" n0":""}${/\d/.test(k)?"":" op"}" data-k="${k}" aria-label="${k==="del"?"Löschen":k==="neg"?"Vorzeichen":k===","?"Komma":l}">${l}</button>`).join("")}<button class="nk go" id="npGo">${go}</button></div>`; }
const showNum=v=>v? esc(v.replace(/^-/,"−")) : "";
function editNum(v,k){
  v=v||"";
  if(k==="del") return v.slice(0,-1);
  if(k==="neg") return v.startsWith("-")? v.slice(1) : "-"+v;
  if(k===","){ if(v.includes(",")) return v; return v.replace(/^-?$/,m=>m+"0")+","; }
  if(v.replace(/[-,]/g,"").length>=9) return v;
  if(/^-?0$/.test(v)) return v.slice(0,-1)+k;
  return v+k;
}
/* Tastatur am Laptop oder am iPad mit Tastatur */
let npHandler=null;
document.addEventListener("keydown",e=>{
  if(!npHandler||view!=="task"||e.metaKey||e.ctrlKey||e.altKey) return;
  if(document.activeElement&&/^(INPUT|TEXTAREA)$/.test(document.activeElement.tagName)) return;
  let k=null;
  if(/^\d$/.test(e.key)) k=e.key; else if(e.key===","||e.key===".") k=","; else if(e.key==="-"||e.key==="−") k="neg";
  else if(e.key==="Backspace") k="del"; else if(e.key==="Enter") k="go"; else if(e.key==="Tab"&&task&&task.lvl===3&&!task.done) k="tab";
  if(k){ e.preventDefault(); npHandler(k); }
});
function bindPadKeys(onKey){
  npHandler=onKey;
  document.querySelectorAll(".npad .nk").forEach(b=>b.onclick=()=>onKey(b.id==="npGo"?"go":b.dataset.k));
}
function buzzEl(el){ if(!el) return; el.classList.remove("buzz"); void el.offsetWidth; el.classList.add("buzz"); if(navigator.vibrate) try{navigator.vibrate(30);}catch(e){} }

function renderTask(){
  const T=TYPES[task.t]; npHandler=null;
  if(task.val==null) task.val=""; if(!task.vals) task.vals={};
  if(T.self) return renderSelf();
  if(task.lvl===1) return renderWorked();
  if(task.lvl===2) return renderGuided();
  return renderFree();
}
const eqLine=s=>`<div class="eq">${esc(s.calc)}</div>`;
/* Lösungsschritt: Formel, Einsetzen, Begründung; am Ende Ergebnis und Deutung */
const stepRows=s=>`<div class="dlist">${s.f?`<b>Formel</b><span><span class="eq" style="display:block">${esc(s.f)}</span></span>`:""}<b>Einsetzen</b><span><span class="eq" style="display:block">${esc(s.calc)}</span></span>${s.why?`<b>Warum</b><span>${s.why}</span>`:""}</div>`;
const deutBox=d=>{ const t=d.deut||(TYPES[task.t]||{}).deut; return t?`<div class="bsp"><p class="bh">Deutung</p><p style="margin:0 0 8px">${t}</p></div>`:""; };

/* Stufe 1: vorgerechnet, Schritt für Schritt aufdecken */
function renderWorked(){
  const S=task.data.steps, n=task.shown;
  $("#app").innerHTML=head()+`
    <div class="stack">${S.slice(0,n+1).map((s,i)=>`<div class="step">
      <div class="lab">${i+1}. ${s.lab}</div>${stepRows(s)}</div>`).join("")}</div>
    ${n>=S.length-1?deutBox(task.data):""}
    <div class="row" style="margin-top:14px">${n<S.length-1?`<button class="btn" id="more">Nächster Schritt</button>`:`<button class="btn" id="self">Jetzt selbst rechnen</button>`}</div>`;
  bindHead();
  if($("#more")) $("#more").onclick=()=>{ task.shown++; renderWorked(); };
  if($("#self")) $("#self").onclick=()=>{ state.lvl[task.t]=2; state.streak[task.t]=0; save(); startTask(task.t,task.mix); };
}

/* Stufe 2: geführt, ein Schritt nach dem anderen, Eingabe über die eigene Zahlentastatur */
function doneRow(s,i,ok){ return `<div class="tdone ${ok?"ok":"no"}"><span class="ic" aria-hidden="true">${ok?"✓":"!"}</span><div><div class="tl">${i+1}. ${s.lab}</div>${eqLine(s)}</div></div>`; }
function renderGuided(){
  const S=task.data.steps, cur=task.cur, s=S[cur];
  const prev=S.slice(0,Math.min(cur,S.length)).map((x,i)=>doneRow(x,i,task.first[i])).join("");
  let body;
  if(task.done) body=deutBox(task.data)+finishBox();
  else body=`<div class="card tstep" id="tstep">
      <button class="qhint" id="hint" aria-label="Formel zeigen" aria-pressed="${!!task.hint}"><svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round" aria-hidden="true"><path d="M9 18h6M10 21h4M12 3a6 6 0 0 0-3.5 10.9c.6.4 1 1.1 1 1.8V16h5v-.3c0-.7.4-1.4 1-1.8A6 6 0 0 0 12 3z"/></svg></button>
      <p class="cctx">Schritt ${cur+1} von ${S.length}</p>
      <p class="front">${s.lab}</p>
      <p class="twhy">${s.why}</p>
      ${task.hint?`<div class="tform"><span>Formel</span><div class="eq">${esc(s.f)}</div></div>`:""}
      <div class="nfield${task.wrong?" bad":""}" role="textbox" aria-readonly="true" aria-label="Deine Antwort">${showNum(task.val)}<i class="caret" aria-hidden="true"></i></div>
      ${task.wrong?`<div class="kzv no"><span class="ic">!</span><div><b>Noch nicht.</b><span>${s.sign?"Achte auch aufs Vorzeichen. ":""}Versuch es nochmal oder lass dir den Schritt zeigen.</span><button class="qlink" id="reveal">Schritt zeigen</button></div></div>`:""}
    </div>
    ${padKeys("Prüfen")}`;
  $("#app").innerHTML=head()+(prev?`<div class="tdlist">${prev}</div>`:"")+body;
  bindHead();
  if(task.done){ bindFinish(); return; }
  if(cur>0||task.wrong) $("#tstep").scrollIntoView({block:"nearest",behavior:"instant"});
  const field=()=>$(".nfield");
  const check=()=>{
    const res=judge(s,task.val);
    if(res===null){ buzzEl($("#tstep")); return; }
    if(!(cur in task.first)) task.first[cur]=res;
    if(res){ task.cur++; task.val=""; task.wrong=false; task.hint=false; if(task.cur>=S.length){ task.done=true; record(Object.values(task.first).every(Boolean)); } renderGuided(); }
    else{ task.wrong=true; renderGuided(); buzzEl($("#tstep")); }
  };
  bindPadKeys(k=>{ if(k==="tab") return; if(k==="go") return check(); task.val=editNum(task.val,k); if(task.wrong){ task.wrong=false; renderGuided(); return; } field().innerHTML=showNum(task.val)+'<i class="caret" aria-hidden="true"></i>'; });
  $("#hint").onclick=()=>{ task.hint=!task.hint; renderGuided(); };
  if($("#reveal")) $("#reveal").onclick=()=>{ task.first[cur]=false; task.cur++; task.val=""; task.wrong=false; task.hint=false; if(task.cur>=S.length){ task.done=true; record(false); } renderGuided(); };
}

/* Stufe 3: frei, nur die Klausurgrößen; Feld antippen, dann tippen */
function renderFree(){
  const S=task.data.steps, F=S.map((s,i)=>[s,i]).filter(([s])=>s.final);
  if(task.act==null||!F.some(([,i])=>i===task.act)) task.act=F[0][1];
  const fields=F.map(([s,i])=>{
    const res=task.done? judge(s,task.vals[i]||"") : null;
    return `<button class="tfld${!task.done&&task.act===i?" on":""}${task.done?(res?" ok":" no"):""}" data-i="${i}" ${task.done?"disabled":""}>
      <span class="tl">${s.lab}</span>
      <span class="nfield">${showNum(task.vals[i]||"")||(task.done?"–":"")}${!task.done&&task.act===i?'<i class="caret" aria-hidden="true"></i>':""}</span>
      ${task.done&&!res?`<span class="tfix">Richtig wäre ${fmt(s.ans)}${s.rate?" (= "+fmt(s.ans*100)+" Prozentpunkte)":""}${s.pct?" %":""}</span>`:""}
    </button>`;
  }).join("");
  const all=task.done&&F.every(([s,i])=>judge(s,task.vals[i]||""));
  $("#app").innerHTML=head()+`
    <div class="card tstep" id="tstep">
      <p class="cctx">${task.done?(all?"Alles richtig":"Ausgewertet"):"Nur die Ergebnisse, den Weg rechnest du selbst"}</p>
      <div class="tflds">${fields}</div>
    </div>
    ${task.done?`<div class="block"><h3>Lösungsweg</h3><div class="stack">${S.map((s,i)=>`<div><div class="small tlh">${i+1}. ${s.lab}</div>${stepRows(s)}</div>`).join("")}</div>${deutBox(task.data)}</div>`+finishBox(all):padKeys("Abgeben")}`;
  bindHead();
  if(task.done){ bindFinish(); return; }
  document.querySelectorAll(".tfld").forEach(b=>b.onclick=()=>{ task.act=+b.dataset.i; renderFree(); });
  const submit=()=>{
    const empty=F.some(([s,i])=>judge(s,task.vals[i]||"")===null);
    if(empty && !task.confirmEmpty){ task.confirmEmpty=true; toast("Noch leere Felder. Nochmal tippen zum Abgeben."); return; }
    task.done=true; record(F.every(([s,i])=>judge(s,task.vals[i]||""))); renderFree();
    if(!F.every(([s,i])=>judge(s,task.vals[i]||""))) buzzEl($("#tstep"));
  };
  bindPadKeys(k=>{
    if(k==="go") return submit();
    if(k==="tab"){ const ids=F.map(([,i])=>i); task.act=ids[(ids.indexOf(task.act)+1)%ids.length]; return renderFree(); }
    task.vals[task.act]=editNum(task.vals[task.act],k);
    const el=document.querySelector(`.tfld[data-i="${task.act}"] .nfield`); if(el) el.innerHTML=showNum(task.vals[task.act])+'<i class="caret" aria-hidden="true"></i>';
  });
}

/* Herleitung: selbst schreiben, dann aufdecken und abhaken */
function renderSelf(){
  const S=task.data.steps, guided=task.lvl===2, worked=task.lvl===1;
  const n= worked? S.length : (guided? task.shown : (task.done? S.length : 0));
  $("#app").innerHTML=head()+`
    ${worked?"":`<p class="small muted">${guided?"Überleg dir den nächsten Schritt, dann deck ihn auf.":"Schreib die Herleitung auf Papier oder sag sie dir vor. Danach vergleichen und abhaken, welche Schritte du hattest."}</p>`}
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
  bindHead();
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
    <div class="row">${sess?sessBtn():`<button class="btn" id="next">${task.mix?"Nächste Aufgabe":"Neue Zahlen"}</button><button class="btn ghost" id="list">Zur Liste</button>`}</div></div>`;
}
function bindFinish(){ if($("#next")) $("#next").onclick=nextTask; if($("#list")) $("#list").onclick=()=>go("calc"); }
