/* ================= Klausurtermin, Probeklausur-Plan und Schwachstellen ================= */
const EXAM_DEFAULT="2027-02-17";   // laut Unterlagen: Modulklausur am PC im PC-Raum; änderbar unter Statistik
const fmtDate=t=>{ const d=new Date(t); return ["So","Mo","Di","Mi","Do","Fr","Sa"][d.getDay()]+" "+d.getDate()+"."+(d.getMonth()+1)+"."; };
const examDateTs=()=>{ const s=state.examDate||EXAM_DEFAULT; const [y,m,d]=s.split("-").map(Number); return new Date(y,m-1,d).getTime(); };
const examDaysLeft=()=>Math.ceil((examDateTs()-dayStart())/864e5);
/* Plan: eine Probeklausur früh als Standortbestimmung, dann 21, 14 und 7 Tage vor dem Termin */
function examPlan(){
  const T=examDateTs(), ex=(state.exams||[]).map(e=>e.t).sort((a,b)=>a-b);
  const P=[{lab:"Standortbestimmung", when:null}];
  [21,14,7].forEach(d=>P.push({lab:`${d} Tage vor der Klausur`, when:T-d*864e5}));
  const used=new Set();
  P.forEach(p=>{ const i=ex.findIndex((t,k)=>!used.has(k)&&(p.when==null||t>=p.when-3*864e5)); if(i>=0){ used.add(i); p.done=ex[i]; } });
  return P;
}
function examPlanToday(){
  const P=examPlan(), now=Date.now(), open=P.find(p=>!p.done);
  if(!open) return "";
  if(open.when==null) return "Schreib bald eine als Standortbestimmung (unter Üben).";
  if(open.when-now<=864e5) return `Laut Plan ist jetzt die nächste dran (${open.lab}).`;
  return "";
}
function examPlanBlock(){
  const days=examDaysLeft(), P=examPlan(), own=!!state.examDate;
  return `<div class="block"><h2>Klausur und Probeklausuren</h2>
    <div class="row" style="margin-bottom:8px"><label class="small" for="exD">Klausurtermin</label><input type="date" id="exD" value="${state.examDate||EXAM_DEFAULT}" class="dateinp"><button class="btn ghost small" id="exS">Speichern</button></div>
    <p class="small" style="margin:0 0 6px">${days>0?`Noch <b>${days} Tage</b> bis zur Klausur.`:days===0?"<b>Heute ist Klausur.</b> Viel Erfolg!":"Der Termin liegt in der Vergangenheit."}${own?"":` <span class="muted">Termin laut deinen Unterlagen (17.02.2027). Ändert er sich, trag ihn hier neu ein.</span>`}</p>
    <div class="klist">${P.map(p=>`<b>${p.done?"✓ ":""}${p.lab}</b><span>${p.done?`geschrieben am ${fmtDate(p.done)}`:p.when?fmtDate(p.when):"so bald wie möglich"}</span>`).join("")}</div></div>`;
}
function bindExamPlan(){ if($("#exS")) $("#exS").onclick=()=>{ const v=$("#exD").value; state.examDate=v||null; save(); toast(v?"Termin gespeichert":"Termin zurückgesetzt"); render(); }; }

/* Schwachstellen aus allen Übungsformen */
function weakData(){
  const byId=Object.fromEntries(Object.values(CARDS).flat().map(c=>[c.id,c]));
  const weakCards=Object.entries(state.lapses||{}).filter(([,n])=>n>=2).sort((a,b)=>b[1]-a[1]).map(([id])=>byId[id]).filter(Boolean);
  const qById=Object.fromEntries(allQuestions().map(q=>[q.id,q]));
  const weakQ=Object.entries(state.qlapses||{}).filter(([id,n])=>n>=1&&qById[id]&&((state.qbox||{})[id]||{}).b<=2).sort((a,b)=>b[1]-a[1]).map(([id])=>qById[id]);
  const weakK=kreuzOf(0).filter(x=>{ const s=kzStat(x.id); return s&&s.p<4; }).sort((a,b)=>kzStat(a.id).p-kzStat(b.id).p);
  const weakCalc=calcTypes(0).filter(t=>{ const h=state.hist[t]; return h&&h.n>=2&&h.r/h.n<.7; }).sort((a,b)=>acc(a)-acc(b));
  const conf={}; Object.entries(state.who||{}).forEach(([id,h])=>{ if(h.conf&&!h.last){ const x=WHO.find(w=>w.id===id); if(x){ const C=whoCats(x), k=C[x.s]+" ↔ "+C[h.conf]; conf[k]=(conf[k]||0)+1; } } });
  return {weakCards,weakQ,weakK,weakCalc,confL:Object.entries(conf).sort((a,b)=>b[1]-a[1]).slice(0,3)};
}
function weakBlock(){
  const {weakCards,weakQ,weakK,weakCalc,confL}=weakData();
  const none=!weakCards.length&&!weakQ.length&&!weakK.length&&!weakCalc.length&&!confL.length;
  return `<div class="block"><h2>Deine Schwachstellen</h2>${none?`<p class="small muted" style="margin:0">Noch nichts Auffälliges. Die Übersicht füllt sich, sobald du übst: Karten, die du mehrmals nicht wusstest, falsche Verständnisfragen, Kreuzaufgaben unter 4 Punkten, Rechenaufgaben unter 70 % und verwechselte Begriffe.</p>`:""}
    ${weakCards.length?`<h3>Karten, die du mehrmals nicht wusstest</h3><ul class="weak">${weakCards.slice(0,5).map(c=>`<li>${inl(c.f)}</li>`).join("")}</ul><button class="btn ghost small" id="wkC">Diese ${Math.min(weakCards.length,15)} Karten üben</button>`:""}
    ${weakQ.length?`<h3 style="margin-top:14px">Verständnisfragen mit Fehlern</h3><ul class="weak">${weakQ.slice(0,5).map(q=>`<li>${inl(q.c.q)}</li>`).join("")}</ul><button class="btn ghost small" id="wkQ">Diese Fragen üben</button>`:""}
    ${weakK.length?`<h3 style="margin-top:14px">Kreuzaufgaben unter 4 Punkten</h3><ul class="weak">${weakK.slice(0,5).map(x=>`<li>${inl(x.stem.replace(/:$/,""))} <span class="muted">(zuletzt ${kzStat(x.id).p}/4)</span></li>`).join("")}</ul><button class="btn ghost small" id="wkK">Diese Kreuzaufgaben üben</button>`:""}
    ${weakCalc.length?`<h3 style="margin-top:14px">Rechenaufgaben unter 70 %</h3>${weakCalc.map(t=>`<div class="srow"><span>${TYPES[t].short}</span><span class="small muted">${Math.round(acc(t)*100)} %</span><button class="btn ghost small" data-wt="${t}">Üben</button></div>`).join("")}`:""}
    ${confL.length?`<h3 style="margin-top:14px">Oft verwechselt</h3><ul class="weak">${confL.map(([k,n])=>`<li>${k} (${n}×)</li>`).join("")}</ul><button class="btn ghost small" id="wkW">Zuordnen üben</button>`:""}
  </div>`;
}
function bindWeak(){
  const W=weakData();
  if($("#wkC")) $("#wkC").onclick=()=>openCards(0,true,W.weakCards.slice(0,15));
  if($("#wkQ")) $("#wkQ").onclick=()=>openRecall(W.weakQ.slice(0,8));
  if($("#wkK")) $("#wkK").onclick=()=>openKreuz(0,5,W.weakK.slice(0,5).map(x=>x.id));
  document.querySelectorAll("[data-wt]").forEach(b=>b.onclick=()=>startTask(b.dataset.wt,false));
  if($("#wkW")) $("#wkW").onclick=()=>openWho(8);
}
