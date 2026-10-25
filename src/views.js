/* Zeichenfläche für den Stift, wiederverwendbar */
function drawSurface(c,strokes){
  const ctx=c.getContext("2d"); let penSeen=false, cur=null;
  const color=()=>getComputedStyle(document.documentElement).getPropertyValue("--gold").trim()||"#A87B1F";
  function size(){ const r=c.getBoundingClientRect(), dpr=window.devicePixelRatio||1; c.width=r.width*dpr; c.height=r.height*dpr; ctx.setTransform(dpr,0,0,dpr,0,0); draw(); }
  function draw(){ const r=c.getBoundingClientRect(); ctx.clearRect(0,0,r.width,r.height); ctx.lineCap="round"; ctx.lineJoin="round"; ctx.strokeStyle=color();
    for(const s of strokes){ for(let i=1;i<s.length;i++){ ctx.lineWidth=s[i][2]; ctx.beginPath(); ctx.moveTo(s[i-1][0]*r.width,s[i-1][1]*r.height); ctx.lineTo(s[i][0]*r.width,s[i][1]*r.height); ctx.stroke(); } } }
  const pt=e=>{ const r=c.getBoundingClientRect(); const p=e.pressure&&e.pointerType==="pen"?e.pressure:.5; return [(e.clientX-r.left)/r.width,(e.clientY-r.top)/r.height,1.2+p*2.6]; };
  c.onpointerdown=e=>{ if(e.pointerType==="pen") penSeen=true; if(penSeen&&e.pointerType==="touch") return; cur=[pt(e)]; strokes.push(cur); try{c.setPointerCapture(e.pointerId);}catch(x){} };
  c.onpointermove=e=>{ if(!cur) return; const evs=e.getCoalescedEvents?e.getCoalescedEvents():[e]; for(const ev of evs) cur.push(pt(ev)); draw(); };
  c.onpointerup=c.onpointercancel=()=>{ cur=null; };
  size(); window.addEventListener("resize",size);
  return {undo(){ strokes.pop(); draw(); }, clear(){ strokes.length=0; draw(); }};
}

/* ================= Fortschritt ================= */
function lessonState(id){ return (state.lessons||{})[id]; }
function cardBox(id){ return (state.box||{})[id]||0; }
function chapterProgress(n){
  const L=LESSONS[n]||[], K=CARDS[n]||[], C=CALC[n]||[], G=GRAPHS[n]||[], X=kreuzOf(n), W=kurzOf(n);
  if(!L.length) return null;
  const l=L.filter(x=>lessonState(x.id)).length/L.length;
  const k=K.length? K.filter(x=>cardBox(x.id)>=3).length/K.length : 1;
  const x=X.length? X.filter(i=>(kzStat(i.id)||{}).best===4).length/X.length : 1;
  const c=C.length? C.filter(t=>lvlOf(t)===3 && (acc(t)||0)>=.6).length/C.length : 1;
  const g=G.length? G.filter(i=>(state.graphs||{})[i.id]).length/G.length : 1;
  const w=W.length? W.filter(i=>kurzScore(i.id)).length/W.length : 1;
  const parts=[[l,.25,1],[k,.2,K.length],[x,.25,X.length],[c,.15,C.length],[g,.05,G.length],[w,.1,W.length]].filter(p=>p[2]);
  const wsum=parts.reduce((s,p)=>s+p[1],0);
  return {l,k,x,c,g,w,total:Math.round(parts.reduce((s,p)=>s+p[0]*p[1],0)/wsum*100)};
}
function acc(t){ const h=state.hist[t]; return h&&h.n? h.r/h.n : null; }
/* Was ist als Nächstes dran? Theorie zuerst, dann abfragen, rechnen, zeichnen, schreiben */
function nextStep(){
  for(const ch of CHAPTERS){ const n=ch.n; if(!LESSONS[n]) continue;
    const L=LESSONS[n], li=L.findIndex(x=>!lessonState(x.id));
    if(li>=0) return {label:`Kapitel ${n} · Theorie`, title:L[li].t, go:()=>openLesson(n,li)};
    if((CARDS[n]||[]).some(x=>!isSeen(x.id))) return {label:`Kapitel ${n} · Karten`, title:"Begriffe festigen", go:()=>openCards(n)};
    if(kreuzOf(n).some(x=>!kzStat(x.id))) return {label:`Kapitel ${n} · Kreuzen`, title:"Kreuzaufgaben wie in der Klausur", go:()=>openKreuz(n)};
    const ct=(CALC[n]||[]).find(t=>lvlOf(t)<3);
    if(ct) return {label:`Kapitel ${n} · Rechnen`, title:TYPES[ct].name, go:()=>startTask(ct,false)};
    const g=(GRAPHS[n]||[]).findIndex(x=>!(state.graphs||{})[x.id]);
    if(g>=0) return {label:`Kapitel ${n} · Grafik`, title:GRAPHS[n][g].t, go:()=>openGraph(n,g)};
    if(kurzOf(n).some(x=>!kurzScore(x.id))) return {label:`Kapitel ${n} · Schreiben`, title:"Offene Klausuraufgaben", go:()=>openKurz(n)};
  }
  return {label:"Wiederholen", title:"Gemischt üben hält alles frisch", go:()=>openCards(0)};
}

/* ================= Navigation ================= */
let view="home", task=null, cur={};
const TABS=[["home","Lernpfad"],["practice","Üben"],["stats","Statistik"]];
const TAB_OF={home:"home",chapter:"home",lesson:"home",graph:"home",essay:"home",kreuz:"practice",cards:"practice",calc:"practice",task:"practice",practice:"practice",stats:"stats",exam:"practice",kurz:"practice",sym:"practice",recall:"practice",who:"practice",sessdone:"home"};
function renderNav(){
  $("#nav").innerHTML=TABS.map(([k,l])=>`<button data-v="${k}"${TAB_OF[view]===k?' aria-current="page"':""}>${l}</button>`).join("");
  $("#nav").querySelectorAll("button").forEach(b=>b.onclick=()=>go(b.dataset.v));
}
function go(v){ view=v; render(); window.scrollTo(0,0); }
function render(){ renderNav(); ({home:renderHome,chapter:renderChapter,lesson:renderLesson,cards:renderCards,graph:renderGraph,practice:renderPractice,calc:renderCalc,task:renderTask,stats:renderStats,exam:renderExam,kurz:renderKurz,kreuz:renderKreuz,sym:renderSym,recall:renderRecall,who:renderWho,sessdone:renderHome})[view](); }
const backTo=(label,fn)=>`<button class="crumb" id="crumb">← ${label}</button>`;
function bindCrumb(fn){ const b=$("#crumb"); if(b) b.onclick=fn; }

/* ================= Lernpfad ================= */
function renderHome(){
  const nx=nextStep(), days=examDaysLeft();
  const chapRow=ch=>{ const p=chapterProgress(ch.n);
    return `<button class="chap${p?"":" off"}" data-n="${ch.n}" ${p?"":"disabled"}>
      <span class="no">${ch.n}</span><span class="t">${ch.title}</span>${p?`<span class="chip ${p.total>=80?"l3":p.total>0?"l2":""}">${p.total} %</span>`:`<span class="chip soon">folgt</span>`}
      <span class="d">${ch.teaser}</span>${p?`<span class="bar"><i style="width:${p.total}%"></i></span>`:""}
    </button>`; };
  $("#app").innerHTML=`
    <p class="eyebrow">Bildungswissenschaften II · Psychologie · Heine</p>
    <h1>Lernpfad</h1>
    <p class="muted">Alles für die Modulklausur in einer App: Theorie lesen, Karten wiederholen, Kreuzaufgaben üben, rechnen, offene Aufgaben schreiben.</p>
    ${todayBlock()}
    ${homeReview()}
    <div class="block">
      <p class="eyebrow">Als Nächstes · ${nx.label}</p>
      <h2>${nx.title}</h2>
      <button class="btn ghost" id="goNext">Weiter lernen</button>
    </div>
    ${[1,2,3,4].map(v=>`<p class="sect"><span>${VL[v]}</span><span>Klausurteil ${v}</span></p>
      <div class="block"><div class="tlist">${CHAPTERS.filter(c=>c.vl===v).map(chapRow).join("")}</div></div>`).join("")}
    <div class="block">
      <h2>So ist die Klausur gebaut</h2>
      <div class="klist">
        <b>Termin</b><span>${fmtDate(examDateTs())} ${new Date(examDateTs()).getFullYear()}${days>0?`, noch ${days} Tage`:""}</span>
        <b>Ort</b><span>am PC im PC-Raum. Laut Heine bleiben die Aufgaben dieselben wie bisher, nur am Rechner statt auf Papier.</span>
        <b>Aufbau</b><span>wie WiSe 24/25: vier Teile mit je 30 Punkten, passend zu den vier Schwerpunkten</span>
      </div>
      <p class="small muted" style="margin:0 0 6px">Jeder Teil beginnt mit Kreuzaufgaben (drei Aussagen, je wahr oder falsch), dann folgt eine offene Aufgabe, die du tippst.</p>
      <div class="partlist">
        <span>Teil 1</span><span>Einführung: 5 Kreuzaufgaben, offene Aufgabe (2024: Emotion nach Russell)</span><b>30&nbsp;P.</b>
        <span>Teil 2</span><span>Lehr-Lernpsychologie: 5 Kreuzaufgaben, offene Aufgabe (2024: operante Konditionierung)</span><b>30&nbsp;P.</b>
        <span>Teil 3</span><span>Diagnostik: 5 Kreuzaufgaben, offene Aufgabe (früher: Rechnen, Bezugsnormen, Skalen)</span><b>30&nbsp;P.</b>
        <span>Teil 4</span><span>Inklusion: 4 Kreuzaufgaben, Fallanalyse nach ICD-10 F81 (14 P.)</span><b>30&nbsp;P.</b>
      </div>
    </div>`;
  bindReview();
  $("#goNext").onclick=nx.go;
  $("#goSess").onclick=()=>{ if(sess) runStep(); else startSession(); };
  document.querySelectorAll(".chap").forEach(b=>b.onclick=()=>{ if(b.disabled) return; cur.ch=+b.dataset.n; go("chapter"); });
}
/* Startseite: als unklar markierte Lektionen */
function lessonRef(id){ for(const ch of CHAPTERS){ const i=(LESSONS[ch.n]||[]).findIndex(x=>x.id===id); if(i>=0) return {n:ch.n,i,t:LESSONS[ch.n][i].t,ch:ch.title}; } return null; }
function homeReview(){
  const unc=Object.keys(state.unclear||{}).map(lessonRef).filter(Boolean);
  if(!unc.length) return "";
  return `<div class="block"><h3>Nochmal anschauen</h3><p class="small muted" style="margin:0 0 4px">Als unklar markiert. Tippe in der Lektion auf „Jetzt verstanden“, wenn es sitzt.</p><div class="tlist">${unc.map(r=>`<button class="titem rv" data-n="${r.n}" data-i="${r.i}"><span class="t">${r.t}</span><span class="chip flag">unklar</span><span class="d">${r.ch}</span></button>`).join("")}</div></div>`;
}
function bindReview(){ document.querySelectorAll(".rv").forEach(b=>b.onclick=()=>openLesson(+b.dataset.n,+b.dataset.i)); }

/* ================= Kapitel ================= */
function renderChapter(){
  const n=cur.ch, ch=CHAPTERS.find(c=>c.n===n), p=chapterProgress(n);
  const L=LESSONS[n]||[], K=CARDS[n]||[], C=CALC[n]||[], G=GRAPHS[n]||[], X=kreuzOf(n), W=kurzOf(n);
  const nl=L.filter(x=>lessonState(x.id)).length;
  const nc=C.filter(t=>lvlOf(t)===3).length, ng=G.filter(x=>(state.graphs||{})[x.id]).length;
  const nx=X.filter(x=>(kzStat(x.id)||{}).best===4).length, nw=W.filter(x=>kurzScore(x.id)).length;
  $("#app").innerHTML=`${backTo("Lernpfad")}
    <p class="eyebrow">Kapitel ${n} · Klausurteil ${ch.teil} · ${p.total} % geschafft</p>
    <h1>${ch.title}</h1>
    <div class="block"><div class="modes">
      <button class="mode" id="mL"><span class="t">Theorie</span><span class="n">${nl}/${L.length}</span><span class="d">${L.length} kurze Lektionen mit Verständnisfragen. Hier fängst du an.</span></button>
      ${K.length?`<button class="mode" id="mK"><span class="t">Karten</span><span class="n">${dueCards(n).length} fällig · ${K.filter(x=>!isSeen(x.id)).length} neu</span><span class="d">Begriffe, Formeln, Aufzählungen. Gewusste Karten kommen nach 1, 3, 7, 16 und 35 Tagen wieder.</span></button>`:""}
      ${X.length?`<button class="mode" id="mX"><span class="t">Kreuzen</span><span class="n">${nx}/${X.length} fehlerfrei</span><span class="d">Kreuzaufgaben im Klausurformat: drei Aussagen, je wahr oder falsch, bis zu 4 Punkte.</span></button>`:""}
      ${SYMBOL_GROUPS.some(g=>g.kap===n)?`<button class="mode" id="mS"><span class="t">Zeichen</span><span class="n">${SYMBOL_GROUPS.filter(g=>g.kap===n).reduce((k,g)=>k+g.items.length,0)} Zeichen</span><span class="d">Erst die Zeichen sicher kennen (z, σ, PR …), dann rechnet es sich leichter. Mit Lexikon.</span></button>`:""}
      ${Object.values(WHO_SETS).some(S=>S.kap===n)?`<button class="mode" id="mZ"><span class="t">Zuordnen</span><span class="n">${WHO.filter(x=>WHO_SETS[x.set].kap===n).length} Beispiele</span><span class="d">Alltagsbeispiele dem richtigen Begriff zuordnen, wie in Fallaufgaben.</span></button>`:""}
      ${C.length?`<button class="mode" id="mC"><span class="t">Rechnen</span><span class="n">${nc}/${C.length} frei</span><span class="d">Immer neue Zahlen: erst vorgerechnet, dann geführt, dann frei wie in der Klausur.</span></button>`:""}
      ${G.length?`<button class="mode" id="mG"><span class="t">Grafiken</span><span class="n">${ng}/${G.length}</span><span class="d">Mit dem Stift zeichnen, dann die Musterlösung darüberlegen.</span></button>`:""}
      ${W.length?`<button class="mode" id="mW"><span class="t">Schreiben</span><span class="n">${nw}/${W.length}</span><span class="d">Offene Aufgaben: Antwort schreiben, mit dem Erwartungshorizont abhaken, auf Wunsch von Claude bewerten lassen.</span></button>`:""}
    </div></div>
    <div class="block"><h3>Lektionen</h3><p class="small muted" style="margin:0 0 6px">${tagOf("")} brauchst du für die Klausur. ${tagOf("hg")} einmal lesen genügt.</p><div class="tlist">${L.map((x,i)=>{ const s=lessonState(x.id);
      return `<button class="titem" data-i="${i}"><span class="t">${i+1}. ${x.t} ${tagOf(x.id)}</span>${state.unclear[x.id]?`<span class="chip flag">unklar</span>`:`<span class="chip ${s?(s.ok?"l3":"l2"):""}">${s?(s.ok?"sicher":"gelesen"):"offen"}</span>`}</button>`;}).join("")}</div></div>`;
  bindCrumb(()=>go("home"));
  $("#mL").onclick=()=>openLesson(n,Math.max(0,L.findIndex(x=>!lessonState(x.id))));
  if($("#mK")) $("#mK").onclick=()=>openCards(n);
  if($("#mC")) $("#mC").onclick=()=>{ cur.calcCh=n; go("calc"); };
  if($("#mG")) $("#mG").onclick=()=>openGraph(n,Math.max(0,G.findIndex(x=>!(state.graphs||{})[x.id])));
  if($("#mX")) $("#mX").onclick=()=>openKreuz(n);
  if($("#mS")) $("#mS").onclick=()=>go("sym");
  if($("#mZ")) $("#mZ").onclick=()=>openWho(8);
  if($("#mW")) $("#mW").onclick=()=>openKurz(n);
  document.querySelectorAll(".titem").forEach(b=>b.onclick=()=>openLesson(n,+b.dataset.i));
}

/* ================= Lektion ================= */
function openLesson(n,i){ cur.ch=n; cur.li=i; cur.ans={}; cur.shown={}; go("lesson"); }
function renderLesson(){
  const n=cur.ch, L=LESSONS[n], x=L[cur.li];
  const html=nb(x.html).replace(/\{\{fig:(\w+)\}\}/g,(_,id)=>figSVG(id,true));
  const allAns=x.check.every((_,j)=>cur.ans[j]!==undefined);
  const inSess=sess&&sess.steps[sess.i]&&sess.steps[sess.i].k==="lesson";
  $("#app").innerHTML=`${backTo("Kapitel "+n)}
    <p class="eyebrow">Kapitel ${n} · Lektion ${cur.li+1} von ${L.length} ${tagOf(x.id)}</p>
    <article class="block lesson"><h1>${x.t}</h1>${html}</article>
    ${unclearBox(x)}
    <div class="block"><h3>Kurz prüfen</h3>${x.check.map((c,j)=>qBlock(c,j,cur.ans[j],cur.shown[j],j===0)).join("")}</div>
    <div class="lnav">
      ${cur.li>0?`<button class="btn ghost" id="prev">← Vorherige</button>`:"<span></span>"}
      ${allAns&&inSess?sessBtn():allAns?(cur.li<L.length-1?`<button class="btn" id="next">Nächste Lektion →</button>`:`<button class="btn" id="fin">Kapitel-Übersicht</button>`):`<span class="small muted">Beantworte die Fragen, dann geht es weiter.</span>`}
    </div>`;
  bindCrumb(()=>go("chapter"));
  const keep=f=>{ const y=window.scrollY; f(); renderLesson(); window.scrollTo(0,y); };
  document.querySelectorAll("[data-show]").forEach(b=>b.onclick=()=>keep(()=>{ cur.shown[+b.dataset.show]=true; }));
  document.querySelectorAll("[data-q]").forEach(b=>b.onclick=()=>{
    const j=+b.dataset.q, k=+b.dataset.k; if(cur.ans[j]!==undefined) return; cur.ans[j]=k; qGrade(qid(x.id,j),k===x.check[j].a);
    if(x.check.every((_,q)=>cur.ans[q]!==undefined)){ state.lessons=state.lessons||{}; const ok=x.check.every((c,q)=>cur.ans[q]===c.a);
      state.lessons[x.id]={ok, t:Date.now()}; logDay(); save(); }
    keep(()=>{});
  });
  bindUnclear(x);
  if($("#prev")) $("#prev").onclick=()=>openLesson(n,cur.li-1);
  if($("#next")) $("#next").onclick=()=>openLesson(n,cur.li+1);
  if($("#fin")) $("#fin").onclick=()=>go("chapter");
}
/* Kernstoff oder Hintergrund (laut Altklausuren und Fragenkatalog) */
const HINTERGRUND=new Set(["hg"]);
const tagOf=id=>HINTERGRUND.has(id)?'<span class="tag bg">Hintergrund</span>':'<span class="tag core">Kernstoff</span>';
/* „Verstehe ich nicht“: Lektion vormerken und eine Bitte um einfachere Erklärung für Claude kopieren */
function unclearBox(x){
  const on=!!state.unclear[x.id];
  return `<div class="block unclear"><div style="flex:1"><p class="small muted">${on?"Als unklar vorgemerkt. Die Lektion ist in der Kapitelübersicht markiert, bis du sie wieder freigibst.":"Hängt es irgendwo? Merk dir die Lektion vor und lass sie dir von Claude anders erklären."}</p>
    <div class="row" style="margin-top:8px"><button class="btn ghost small" id="ucOn">${on?"Jetzt verstanden":"Verstehe ich nicht"}</button>${on?`<button class="btn ghost small" id="ucCl">Erklärung bei Claude holen</button>`:""}</div><div id="ucCopy"></div></div></div>`;
}
function bindUnclear(x){
  const plain=x.html.replace(/\{\{fig:\w+\}\}/g,"").replace(/<br>/g,"\n").replace(/<\/(p|li|tr|div)>/g,"\n").replace(/<[^>]+>/g," ").replace(/[ \t]+/g," ").replace(/\n\s+/g,"\n").trim();
  const ask=()=>copyForClaude(`Ich lerne für die Modulklausur Bildungswissenschaften II (UDE, Prof. Heine, Pädagogische Psychologie). Diese Lektion verstehe ich noch nicht richtig. Erkläre sie mir bitte einfacher: kurze Sätze, Fachbegriffe kurz erklärt, mit einem Beispiel aus der Schule. Bleib bei den Begriffen und Formeln aus Heines Folien. Stell mir danach zwei Kontrollfragen, die Lösungen bitte erst, wenn ich geantwortet habe.\n\nKapitel: ${CHAPTERS.find(c=>c.n===cur.ch).title}\nLektion „${x.t}“:\n${plain}`,"#ucCopy");
  $("#ucOn").onclick=()=>{ if(state.unclear[x.id]) delete state.unclear[x.id]; else { state.unclear[x.id]=Date.now(); ask(); } save(); const y=window.scrollY; renderLesson(); window.scrollTo(0,y); };
  if($("#ucCl")) $("#ucCl").onclick=ask;
}
function logDay(){ const k=today(); state.days[k]=(state.days[k]||0)+1; }

/* ================= Karten (Karteikasten, Fächer 0–5) ================= */
/* Rückseite aus Zeilen aufbauen: „Begriff: Text“ wird zum Begriffspaar, „1. …“ zur nummerierten Liste,
   mehrere einfache Zeilen zur Aufzählung, „A vs. B“ mit „Merkmal: a / b“ zur Vergleichstabelle */
function cardBackHTML(c){
  if(c.rt) return richText(c.b);
  const lines=c.b.split("\n").map(s=>s.trim()).filter(Boolean);
  const kvRe=/^([^:]{1,38}):\s+(.+)$/, numRe=/^\d+\.\s+(.+)$/;
  const kind=l=>{ if(/^\$ /.test(l)) return "eq"; if(/^[-•] /.test(l)) return "plain"; if(numRe.test(l)) return "num"; const m=l.match(kvRe); if(m&&!/,\s|\sheißt/.test(m[1])&&!/[.!?]$/.test(m[1])) return "kv"; if(/ = /.test(l)&&l.length<44) return "eq"; return "plain"; };
  const clean=l=>l.replace(/^[-•$] /,"");
  if(lines.length===1) return `<p>${inl(clean(lines[0]))}</p>`;
  const vs=c.f.split(/\s+vs\.\s+/);
  if(vs.length===2 && lines.every(l=>kind(l)==="kv"&&l.match(kvRe)[2].includes(" / "))){
    const h=vs.map(x=>x.replace(/\s+im Vergleich$/,"").replace(/[?:]$/,""));
    return `<table class="cb-tbl"><tr><th>${inl(h[0])}</th><th>${inl(h[1])}</th></tr>${lines.map(l=>{ const m=l.match(kvRe), p=m[2].split(" / "); return `<tr class="lab"><td colspan="2">${inl(m[1])}</td></tr><tr><td>${inl(p[0])}</td><td>${inl(p.slice(1).join(" / "))}</td></tr>`; }).join("")}</table>`;
  }
  /* „Begriff (Fachbegriff)“ am Zeilenanfang: Begriff fett, Klammer leiser */
  const nm=l=>{ const m=l.match(/^([^()]{2,40}?) \((.+)\)$/); return m?`<b>${inl(m[1])}</b> <span class="pz">(${m[2]})</span>`:inl(l); };
  const groups=[]; for(const l of lines){ const k=kind(l), g=groups[groups.length-1]; if(g&&g.k===k&&k!=="eq") g.l.push(l); else groups.push({k,l:[l]}); }
  return groups.map(g=>{
    if(g.k==="num") return `<ol class="cb-ol">${g.l.map(l=>`<li><span>${nm(l.match(numRe)[1])}</span></li>`).join("")}</ol>`;
    if(g.k==="kv") return `<dl class="cb-dl">${g.l.map(l=>{ const m=l.match(kvRe); return `<div><dt>${inl(m[1])}</dt><dd>${inl(m[2])}</dd></div>`; }).join("")}</dl>`;
    if(g.k==="eq") return `<div class="eq">${fx(clean(g.l[0]))}</div>`;
    if(g.l.length===1) return `<p>${inl(clean(g.l[0]))}</p>`;
    return `<ul class="cb-ul">${g.l.map(l=>`<li>${nm(clean(l))}</li>`).join("")}</ul>`;
  }).join("");
}
function allCards(n){ return n? (CARDS[n]||[]) : Object.values(CARDS).flat(); }
/* Wiederholung mit Fälligkeitsdatum (wie Anki): sicherer gewusst = längerer Abstand */
const INTERVAL=[0,0,1,3,7,16];   // Tage bis zur nächsten Abfrage je Fach; Fach 5 erneut gewusst: 35 Tage
const dayStart=(t=Date.now())=>{ const d=new Date(t); d.setHours(0,0,0,0); return d.getTime(); };
const isSeen=id=>!!(state.box||{})[id];
const isDue=id=>isSeen(id) && ((state.due||{})[id]||0)<=Date.now();
function dueCards(n){ return allCards(n).filter(x=>isDue(x.id)).sort((a,b)=>((state.due||{})[a.id]||0)-((state.due||{})[b.id]||0)); }
function openCards(n,free,deck){ cur.cardCh=n; cur.free=!!free; cur.deck=deck?deck.slice():(free?buildDeck(n):buildDueDeck(n)); cur.ci=0; cur.flip=false; cur.right=0; cur.unsure=0; cur.typed=""; cur.tyOpen=false; cur.hist=[]; cur.requeued={}; go("cards"); }
const deckLabel=n=>DECK_NAME[n]?"Zeichen":n?"Kapitel "+n:"Üben";
const deckBack=n=>DECK_NAME[n]?go("sym"):n?go("chapter"):go("practice");
let CARD_CH=null;
function cardChapter(id){ if(!CARD_CH){ CARD_CH={}; CHAPTERS.forEach(ch=>(CARDS[ch.n]||[]).forEach(c=>CARD_CH[c.id]=ch)); } return CARD_CH[id]; }
function buildDueDeck(n){
  const due=dueCards(n), fresh=n? allCards(n).filter(x=>!isSeen(x.id)) : [];
  return due.concat(fresh).slice(0,Math.max(10,Math.min(due.length,30)));
}
function buildDeck(n){
  const pool=allCards(n).slice(), deck=[];
  while(deck.length<Math.min(10,pool.length)){
    const w=pool.map(x=>[6,5,4,3,2,1][cardBox(x.id)]); let r=Math.random()*w.reduce((a,b)=>a+b,0), i=0;
    for(;i<pool.length;i++){ r-=w[i]; if(r<=0) break; } deck.push(pool.splice(Math.min(i,pool.length-1),1)[0]);
  }
  return deck;
}
function renderCards(){
  const D=cur.deck, n=cur.cardCh;
  if(cur.ci>=D.length){
    const left=dueCards(n).length+(n?allCards(n).filter(x=>!isSeen(x.id)).length:0);
    const nextDue=allCards(n).filter(x=>isSeen(x.id)&&!isDue(x.id)).map(x=>(state.due||{})[x.id]).sort((a,b)=>a-b)[0];
    const when=nextDue? Math.round((dayStart(nextDue)-dayStart())/864e5) : null;
    $("#app").innerHTML=`${backTo(deckLabel(n))}<h1>${D.length?(left?"Runde geschafft":"Für heute erledigt"):"Nichts fällig"}</h1>
      <div class="block">${D.length?`<p>${cur.right} sicher, ${cur.unsure||0} nicht sicher.</p>`:""}
      <p class="small muted">${left?`Noch ${left} Karten fällig oder neu.`:`Alle Karten${n?" dieses Stapels":""} sind auf dem Stand. ${when!=null?`Die nächsten werden ${when<=0?"heute":when===1?"morgen":"in "+when+" Tagen"} fällig.`:""}`} Sichere Karten kommen nach 1, 3, 7, 16 und 35 Tagen wieder, nicht sichere gleich in dieser Runde und morgen noch einmal.</p>
      <div class="row">${sess?sessBtn():`${left?`<button class="btn" id="again">Weiter</button>`:""}<button class="btn ghost" id="free">Freiwillig weiterüben</button><button class="btn ghost" id="out">Fertig</button>`}</div></div>`;
    bindCrumb(()=>deckBack(n)); if($("#again")) $("#again").onclick=()=>openCards(n); if($("#free")) $("#free").onclick=()=>openCards(n,true); if($("#out")) $("#out").onclick=()=>deckBack(n); return;
  }
  const c=D[cur.ci], b=cardBox(c.id), ch=cardChapter(c.id), sym=/^[sr]-/.test(c.id);
  const ctx=CARD_CTX[c.id]||(ch?ch.title:"");
  const esc=t=>t.replace(/&/g,"&amp;").replace(/</g,"&lt;");
  $("#app").innerHTML=`${backTo(deckLabel(n))}
    <div class="row between"><p class="eyebrow" style="margin:0">Karte ${cur.ci+1} von ${D.length}${cur.free?" · freiwillig":isSeen(c.id)?" · fällig":" · neu"}</p><span class="dots" aria-label="Fach ${b} von 5">${[1,2,3,4,5].map(i=>`<i class="${i<=b?"on":""}"></i>`).join("")}</span></div>
    <div class="swipewrap"><span class="swl" aria-hidden="true">Nicht sicher</span><span class="swr" aria-hidden="true">Sicher</span>
    <div class="block card" id="theCard" style="margin-top:8px" role="button" tabindex="0" aria-label="Karte umdrehen">
      ${ctx?`<p class="cctx">${inl(ctx)}</p>`:""}
      <div class="front${sym&&c.id.startsWith("s-")?" symf":""}">${inl(c.f)}</div>
      ${cur.flip?`${cur.typed.trim()?`<div class="typed"><span class="small muted">Deine Antwort</span><p>${esc(cur.typed)}</p></div>`:""}<div class="back cb">${cardBackHTML(c)}</div>${cardInfoHTML(c.id)}`:`<span class="tapnote">Tippen zum Umdrehen</span>`}</div></div>
    ${cur.flip?`<div class="grade"><button class="btn ghost" id="mid">← Nicht sicher</button><button class="btn" id="yes">Sicher →</button></div><p class="hint">Wischen: ← nicht sicher · sicher →</p>`
      :`${cur.tyOpen||cur.typed?`<textarea id="cty" class="cty" rows="1" placeholder="Deine Antwort …" aria-label="Antwort tippen">${esc(cur.typed)}</textarea>`:""}
      <div class="row"><button class="btn" id="flip" style="flex:1">Antwort zeigen</button>${cur.tyOpen||cur.typed?"":`<button class="tylink" id="tyO">Tippen</button>`}</div><p class="hint">Erst antworten, dann aufdecken.</p>`}
    ${cur.hist.length?`<button class="btn ghost small" id="cprev" style="margin-top:6px">← Vorherige Karte</button>`:""}`;
  bindCrumb(()=>deckBack(n));
  if($("#tyO")) $("#tyO").onclick=()=>{ cur.tyOpen=true; renderCards(); $("#cty").focus(); };
  const ta=$("#cty"); if(ta){ const fit=()=>{ ta.style.height="auto"; ta.style.height=ta.scrollHeight+"px"; }; fit(); ta.oninput=()=>{ cur.typed=ta.value; fit(); }; }
  if($("#flip")) $("#flip").onclick=()=>{ cur.flip=true; renderCards(); };
  const cd=$("#theCard"); let moved=false;
  cd.onclick=e=>{ if(e.target.closest("a")||moved) return; cur.flip=!cur.flip; renderCards(); };
  cd.onkeydown=e=>{ if(e.key==="Enter"||e.key===" "){ e.preventDefault(); cd.click(); } else if(cur.flip&&e.key==="ArrowRight") grade(2); else if(cur.flip&&e.key==="ArrowLeft") grade(1); };
  /* Wischen wie bei Dating-Apps, erst nach dem Aufdecken: rechts sicher, links nicht sicher */
  if(cur.flip){ const wrap=cd.parentNode; let x0=null, y0=0, dx=0;
    cd.onpointerdown=e=>{ if(e.target.closest("a")) return; x0=e.clientX; y0=e.clientY; dx=0; moved=false; };
    cd.onpointermove=e=>{ if(x0===null) return; dx=e.clientX-x0;
      if(!moved&&Math.abs(dx)>10&&Math.abs(dx)>Math.abs(e.clientY-y0)){ moved=true; try{cd.setPointerCapture(e.pointerId);}catch(x){} cd.style.transition="none"; }
      if(!moved) return; e.preventDefault(); cd.style.transform=`translateX(${dx}px) rotate(${dx/20}deg)`;
      wrap.classList.toggle("goR",dx>40); wrap.classList.toggle("goL",dx<-40); };
    cd.onpointerup=cd.onpointercancel=()=>{ if(x0===null) return; x0=null;
      if(!moved) return; const lim=Math.min(110,cd.offsetWidth*.28);
      if(Math.abs(dx)>lim){ cd.style.transition="transform .2s ease-out, opacity .2s"; cd.style.transform=`translateX(${dx>0?600:-600}px) rotate(${dx>0?25:-25}deg)`; cd.style.opacity="0"; setTimeout(()=>grade(dx>0?2:1),180); }
      else { cd.style.transition="transform .2s"; cd.style.transform=""; wrap.classList.remove("goR","goL"); setTimeout(()=>{ moved=false; },0); } };
  }
  /* Bewertung: 2 sicher (nächstes Fach), 1 nicht sicher (ein Fach zurück, morgen wieder, in dieser Runde noch einmal) */
  function grade(lv){ state.box=state.box||{}; state.due=state.due||{}; state.lapses=state.lapses||{};
    const b0=cardBox(c.id), old=state.due[c.id]||0;
    cur.hist.push({ci:cur.ci, id:c.id, box:state.box[c.id], due:state.due[c.id], lapse:state.lapses[c.id], right:cur.right, unsure:cur.unsure, len:D.length, rq:Object.assign({},cur.requeued), typed:cur.typed});
    const b1= lv===2? Math.min(5,Math.max(b0,1)+1) : Math.max(1,b0-1);
    const nd= lv===2? dayStart()+(b0===5?35:INTERVAL[b1])*864e5 : dayStart()+864e5;
    if(!cur.free){ state.box[c.id]=b1; state.due[c.id]=nd; }
    else if(lv<2){ state.box[c.id]=Math.min(b0||1,b1); state.due[c.id]=Math.min(old||nd,nd); }
    if(lv===2) cur.right++;
    else { cur.unsure=(cur.unsure||0)+1; state.lapses[c.id]=(state.lapses[c.id]||0)+1; if(!cur.requeued[c.id]){ cur.requeued[c.id]=1; D.push(c); } }
    logDay(); save(); cur.ci++; cur.flip=false; cur.typed=""; renderCards(); window.scrollTo(0,0); }
  if($("#yes")) $("#yes").onclick=()=>grade(2);
  if($("#mid")) $("#mid").onclick=()=>grade(1);
  /* Eine Karte zurück: letzte Bewertung rückgängig machen */
  if($("#cprev")) $("#cprev").onclick=()=>{ const h=cur.hist.pop(); if(!h) return;
    const put=(o,k,v)=>{ if(v===undefined) delete o[k]; else o[k]=v; };
    put(state.box,h.id,h.box); put(state.due,h.id,h.due); put(state.lapses,h.id,h.lapse);
    cur.right=h.right; cur.unsure=h.unsure; D.length=h.len; cur.requeued=h.rq; cur.ci=h.ci; cur.flip=true; cur.typed=h.typed; save(); renderCards(); };
}

/* ================= Grafiken ================= */
let gStrokes={};
function openGraph(n,i){ cur.ch=n; cur.gi=i; cur.gshow=false; cur.gchecks={}; go("graph"); }
function renderGraph(){
  const n=cur.ch, G=GRAPHS[n], g=G[cur.gi], st=(state.graphs||{})[g.id];
  gStrokes[g.id]=gStrokes[g.id]||[];
  $("#app").innerHTML=`${backTo("Kapitel "+n)}
    <p class="eyebrow">Kapitel ${n} · Grafik ${cur.gi+1} von ${G.length}${g.klausur?" · "+g.klausur:""}</p>
    <h1>${g.t}</h1>
    <div class="block"><p style="margin:0"><b>${g.task}</b></p></div>
    <div class="gbox" id="gbox">
      <svg viewBox="0 0 400 300" aria-hidden="true">${GFX[g.id].base()}</svg>
      <canvas id="gc" aria-label="Zeichenfläche"></canvas>
      <svg class="solsvg" viewBox="0 0 400 300" ${cur.gshow?"":"hidden"}>${GFX[g.id].sol()}</svg>
    </div>
    <div class="row" style="margin:10px 0 14px"><button class="btn ghost small" id="gu">Zurück</button><button class="btn ghost small" id="gx">Leeren</button>
      <button class="btn small" id="gs" style="margin-left:auto">${cur.gshow?"Musterlösung ausblenden":"Musterlösung darüberlegen"}</button></div>
    ${cur.gshow?`<div class="block"><h3>Hast du das drin?</h3>${g.check.map((c,j)=>`<label class="check"><input type="checkbox" id="k${j}" ${cur.gchecks[j]?"checked":""}><span>${c}</span></label>`).join("")}
      <div class="row" style="margin-top:8px"><button class="btn" id="gsave">Ergebnis speichern</button>${st?`<span class="small muted">Zuletzt: ${st.p} von ${st.max}</span>`:""}</div></div>`
      :`<p class="hint">Mit dem Stift einzeichnen, die Lösung erscheint in Blau.</p>`}
    <div class="lnav">${cur.gi>0?`<button class="btn ghost" id="gp">← Vorherige</button>`:"<span></span>"}${cur.gi<G.length-1?`<button class="btn ghost" id="gn">Nächste →</button>`:""}</div>`;
  bindCrumb(()=>go("chapter"));
  const s=drawSurface($("#gc"),gStrokes[g.id]);
  $("#gu").onclick=()=>s.undo(); $("#gx").onclick=()=>s.clear();
  $("#gs").onclick=()=>{ cur.gshow=!cur.gshow; renderGraph(); };
  document.querySelectorAll(".check input").forEach(c=>c.onchange=()=>{ cur.gchecks[+c.id.slice(1)]=c.checked; });
  if($("#gsave")) $("#gsave").onclick=()=>{ const p=g.check.filter((_,j)=>cur.gchecks[j]).length; state.graphs=state.graphs||{}; state.graphs[g.id]={p,max:g.check.length,t:Date.now()}; logDay(); save(); toast(`Gespeichert: ${p} von ${g.check.length}`); renderGraph(); };
  if($("#gp")) $("#gp").onclick=()=>openGraph(n,cur.gi-1);
  if($("#gn")) $("#gn").onclick=()=>openGraph(n,cur.gi+1);
}

/* ================= Üben (kapitelübergreifend) ================= */
function renderPractice(){
  const ready=CHAPTERS.filter(c=>LESSONS[c.n]).map(c=>c.n);
  $("#app").innerHTML=`<p class="eyebrow">Wiederholen</p><h1>Üben</h1>
    <p class="muted">Gemischt aus allen fertigen Kapiteln (${ready.join(", ")}). Gemischtes Üben ist anstrengender als blockweises, bleibt aber deutlich besser hängen.</p>
    <div class="block"><div class="modes">
      <button class="mode" id="pK"><span class="t">Fällige Karten</span><span class="n">${dueCards(0).length} fällig</span><span class="d">Alle Karten, die heute dran sind. Neue Karten lernst du im jeweiligen Kapitel.</span></button>
      <button class="mode" id="pR"><span class="t">Verständnisfragen</span><span class="n">${qDue().length} fällig</span><span class="d">Die Fragen aus den Lektionen kommen mit wachsendem Abstand wieder. Erst selbst überlegen, dann die Auswahl.</span></button>
      <button class="mode" id="pKr"><span class="t">Kreuzaufgaben gemischt</span><span class="n">${kzDue().length} fällig · ${kreuzOf(0).filter(x=>(kzStat(x.id)||{}).best===4).length}/${kreuzOf(0).length} fehlerfrei</span><span class="d">Fünf Aufgaben wie ein Klausurblock, bevorzugt fällige und solche mit Fehlern.</span></button>
      <button class="mode" id="pW"><span class="t">Zuordnen</span><span class="d">Beispiele aus Schule und Alltag der richtigen Lernform zuordnen. Verwechselte kommen öfter.</span></button>
      <button class="mode" id="pS"><span class="t">Zeichen und Formeln</span><span class="n">${dueCards("sym").length+dueCards("symr").length} fällig</span><span class="d">Was bedeuten z, σ, PR oder cumf? Mit Mini-Beispielen und Lexikon zum Nachschlagen.</span></button>
      <button class="mode" id="pC"><span class="t">Rechnen gemischt</span><span class="d">Wechselnde Aufgabentypen, bevorzugt was dir schwerfällt.</span></button>
      <button class="mode" id="pL"><span class="t">Alle Rechenaufgaben</span><span class="d">Einzelne Typen gezielt üben.</span></button>
      <button class="mode" id="pKz"><span class="t">Offene Aufgaben schreiben</span><span class="n">${kurzOf(0).filter(x=>kurzScore(x.id)).length}/${kurzOf(0).length}</span><span class="d">Antwort tippen wie am PC in der Klausur, mit dem Erwartungshorizont vergleichen.</span></button>
      <button class="mode" id="pX"><span class="t">Probeklausur</span><span class="n">${state.examRun?"läuft":(state.exams||[]).length+"×"}</span><span class="d">Im Format der Klausur WiSe 24/25 mit Timer, jedes Mal neu zusammengestellt.</span></button>
    </div></div>`;
  $("#pK").onclick=()=>openCards(0);
  $("#pR").onclick=()=>openRecall();
  $("#pKr").onclick=()=>openKreuz(0);
  $("#pW").onclick=()=>openWho(8);
  $("#pS").onclick=()=>go("sym");
  $("#pC").onclick=()=>startTask(recommend(),true);
  $("#pL").onclick=()=>{ cur.calcCh=0; go("calc"); };
  $("#pKz").onclick=()=>openKurz(0);
  $("#pX").onclick=openExam;
}
function calcTypes(n){ return n? (CALC[n]||[]) : [...new Set(Object.values(CALC).flat())]; }
function recommend(){
  const T=calcTypes(0), started=T.filter(t=>state.hist[t]&&state.hist[t].n);
  const fresh=T.find(t=>!started.includes(t)), weak=started.filter(t=>acc(t)<.7).sort((a,b)=>acc(a)-acc(b))[0];
  return weak||fresh||T[Math.floor(Math.random()*T.length)];
}
function renderCalc(){
  const n=cur.calcCh||0, T=calcTypes(n);
  $("#app").innerHTML=`${backTo(n?"Kapitel "+n:"Üben")}
    <p class="eyebrow">Rechentrainer${n?" · Kapitel "+n:""}</p><h1>Rechnen</h1>
    <p class="muted">Jede Aufgabe läuft in drei Stufen: vorgerechnet, Schritt für Schritt geführt, dann frei wie in der Klausur. Nach zwei fehlerfreien Durchgängen steigst du auf.</p>
    <button class="btn" id="mix" style="width:100%;margin:4px 0 14px">Gemischt üben</button>
    <div class="block"><div class="tlist">${T.map(t=>{ const h=state.hist[t], a=acc(t), l=lvlOf(t);
      return `<button class="titem" data-t="${t}"><span class="t">${TYPES[t].name}</span><span class="chip l${l}">${LVL[l]}</span>
        <span class="d">${TYPES[t].desc}${h&&h.n?` · ${h.n}× gerechnet, ${Math.round(a*100)} % richtig`:""}</span>
        ${h&&h.n?`<span class="bar"><i style="width:${Math.round(a*100)}%"></i></span>`:""}</button>`;}).join("")}</div></div>`;
  bindCrumb(()=>{ if(n){ cur.ch=n; go("chapter"); } else go("practice"); });
  document.querySelectorAll(".titem").forEach(b=>b.onclick=()=>startTask(b.dataset.t,false));
  $("#mix").onclick=()=>startTask(recommend(),true);
}

/* ================= Statistik ================= */
let statsArmed=false;
function renderStats(){
  const days=[...Array(7)].map((_,i)=>{ const d=new Date(); d.setDate(d.getDate()-6+i); const k=d.getFullYear()+"-"+String(d.getMonth()+1).padStart(2,"0")+"-"+String(d.getDate()).padStart(2,"0"); return [d,state.days[k]||0]; });
  const mx=Math.max(1,...days.map(x=>x[1])), wd=["So","Mo","Di","Mi","Do","Fr","Sa"];
  const ready=CHAPTERS.filter(c=>LESSONS[c.n]);
  $("#app").innerHTML=`<h1>Statistik</h1>
    <div class="block"><h2>Letzte 7 Tage</h2>
      <p class="small muted" style="margin:0">Aktionen pro Tag: jede beantwortete Karte, Frage, Kreuz- oder Rechenaufgabe zählt.</p>
      <div class="week7">${days.map(([d,n],i)=>`<div class="d${i===6?" today":""}" title="${n===1?"1 Aktion":n+" Aktionen"}">
        <div class="bw"><i style="height:${n?Math.max(4,Math.round(n/mx*100)):0}%"></i></div>
        <span class="wd">${wd[d.getDay()]}</span><span class="dt">${d.getDate()}.${d.getMonth()+1}.</span>
        <span class="n">${n||"–"}</span><span class="u">${n?(n===1?"Aktion":"Aktionen"):""}</span></div>`).join("")}</div></div>
    ${examPlanBlock()}
    ${weakBlock()}
    <div class="block"><h2>Nach Kapitel</h2>${ready.map(c=>{ const p=chapterProgress(c.n);
      return `<div class="srow ch"><span>${c.n} · ${c.title}</span><span class="small muted">${[["Theorie",p.l,1],["Karten",p.k,(CARDS[c.n]||[]).length],["Kreuzen",p.x,kreuzOf(c.n).length],["Rechnen",p.c,(CALC[c.n]||[]).length]].filter(x=>x[2]).map(x=>x[0]+" "+Math.round(x[1]*100)).join(" · ")}</span><span class="pts">${p.total} %</span></div>`;}).join("")}</div>
    <div class="block"><h2>Rechenaufgaben</h2>${calcTypes(0).map(t=>{ const h=state.hist[t]; return `<div class="srow"><span>${TYPES[t].short}</span><span class="chip l${lvlOf(t)}">${LVL[lvlOf(t)]}</span><span>${h&&h.n?`${h.r}/${h.n}`:"–"}</span></div>`;}).join("")}</div>
    ${syncBox()}
    <div class="block"><h3>Fortschritt zurücksetzen</h3><p class="small muted">Löscht deinen gesamten Lernstand, auch auf den verbundenen Geräten.</p>
      <button class="btn warn" id="rst">${statsArmed?"Wirklich zurücksetzen":"Zurücksetzen"}</button></div>`;
  bindSync(); bindExamPlan(); bindWeak();
  $("#rst").onclick=()=>{ if(!statsArmed){ statsArmed=true; renderStats(); return; } state={}; norm(); save(); flushPush(); statsArmed=false; toast("Zurückgesetzt"); renderStats(); };
}
