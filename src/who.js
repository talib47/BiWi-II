/* ================= Zuordnen: Beispiele dem richtigen Begriff zuordnen =================
   Trainiert das Unterscheiden ähnlicher Begriffe, wie es die Kreuzaufgaben und Fallbeispiele verlangen.
   Nur Kategorien, die in Heines Folien schon vorkommen. Weitere Sätze (z. B. Lerntheorien) kommen mit den Folien dazu.
   Je Satz: t Titel, q Frage, hint Tipp, cats Kategorien. Je Beispiel: id (bleibt fest), set, t Text, s richtige Kategorie,
   alt ähnliche Kategorien, die nicht als falsche Antwort angeboten werden, ex Begründung, kap Kapitel */
const WHO_SETS={
  lern:{t:"Welche Lernform?", kap:9, q:"Was steckt hinter dieser Beobachtung?",
    hint:"Wird die Reaktion schwächer oder stärker? Werden zwei Ereignisse verknüpft? Oder steckt Reifung oder Müdigkeit dahinter?",
    cats:{hab:"Habituation", sens:"Sensitivierung", kk:"Klassische Konditionierung (S → S)", ok:"Operante Konditionierung (R → S)", kein:"Kein Lernen (Reifung, Ermüdung)"}}
};
const WHO=[
 {id:"l01", set:"lern", t:"Nach zwei Wochen im neuen Klassenraum bemerkt Ayla das Rauschen der Lüftung nicht mehr.", s:"hab", ex:"Ein schwacher, regelmäßiger Reiz wird wiederholt dargeboten, die Reaktion wird schwächer."},
 {id:"l02", set:"lern", t:"Während der Klassenarbeit wirkt das Schniefen des Sitznachbarn immer lauter. Tom kann es nicht mehr ausblenden.", s:"sens", ex:"Beispiel aus der Vorlesung: Das hohe Erregungsniveau in der Prüfung macht die Reaktion auf denselben Reiz stärker."},
 {id:"l03", set:"lern", t:"Nach einem lauten Knall auf dem Flur zuckt die ganze Klasse auch beim Zufallen eines Mäppchens stark zusammen.", s:"sens", ex:"Sensitivierung ist weniger stimulusspezifisch: Die Erregung durch Reiz 1 verstärkt auch die Reaktion auf Reiz 2."},
 {id:"l04", set:"lern", t:"Ein Erstklässler springt im Sommer deutlich höher als im Winter davor.", s:"kein", ex:"Das kann Reifung sein, also körperliches Wachstum. Reifung hängt nicht von Erfahrung ab und ist deshalb kein Lernen."},
 {id:"l05", set:"lern", t:"In der sechsten Stunde macht Lena beim Kopfrechnen viel mehr Fehler als am Morgen.", s:"kein", ex:"Ermüdung: eine kurzfristige Verhaltensänderung, nicht konsistent und nicht dauerhaft."},
 {id:"l06", set:"lern", t:"Die Klasse hört das Brummen des Beamers nicht mehr. Als der Rauchmelder piept, schrecken alle hoch.", s:"hab", alt:["sens"], ex:"Habituation ist stimulusspezifisch: An den Beamer haben sich alle gewöhnt, ein neuer Reiz löst die volle Reaktion aus (Dishabituation)."},
 {id:"l07", set:"lern", t:"Ben meldet sich viel häufiger, seit die Lehrkraft jede Meldung mit einem Lob beantwortet.", s:"ok", ex:"Verknüpft werden ein Verhalten (R: melden) und seine Konsequenz (S: Lob)."},
 {id:"l08", set:"lern", t:"Auf ein bestimmtes Klingelzeichen folgte mehrmals eine sehr laute Durchsage. Inzwischen zuckt Mia schon beim Klingelzeichen zusammen.", s:"kk", ex:"Verknüpft werden zwei Reize (S → S): Klingelzeichen und laute Durchsage. Das eigene Verhalten spielt dabei keine Rolle."},
 {id:"l09", set:"lern", t:"Nach den Ferien hört Jonas das Ticken der Uhr zuerst wieder. Nach ein paar Minuten ist es aber schneller „weg“ als im September.", s:"hab", ex:"Spontanerholung nach der Pause, dann erneute Habituation, die schneller geht. Ein Zeichen, dass gelernt wurde."},
 {id:"l10", set:"lern", t:"Eine Schülerin stört seltener, seit sie danach jedes Mal die Pause im Klassenraum verbringen muss.", s:"ok", ex:"Auf ihr Verhalten (R: stören) folgt eine Konsequenz (S: Pause verpasst). Gelernt wird diese Verknüpfung."},
 {id:"l11", set:"lern", t:"Ein Kleinkind fängt an zu laufen, ohne dass es jemand gezielt geübt hat.", s:"kein", ex:"Laufen und Krabbeln sind Beispiele für Reifung auf Heines Folie: nicht erfahrungsabhängig."},
 {id:"l12", set:"lern", t:"Ein Jugendlicher reagiert nach einem belastenden Erlebnis auf laute Geräusche nicht ruhiger, sondern jedes Mal heftiger.", s:"sens", ex:"„Failure to habituate“: Statt Gewöhnung tritt eine immer stärkere Reaktion auf. So erklärt man z. B. Symptome bei PTBS."},
 {id:"l13", set:"lern", t:"Mit Fieber bleibt am Abend vor der Prüfung kaum etwas hängen.", s:"kein", ex:"Eine körperliche Ursache wie Krankheit ist weder Lernen noch Vergessen (Lehrbuch Kap. 1)."},
 {id:"l14", set:"lern", t:"Neu an der Schule an der Hauptstraße, stört Elif der Verkehrslärm. Nach einigen Wochen nimmt sie ihn kaum noch wahr.", s:"hab", ex:"Gewöhnung an einen wiederholten Reiz ermöglicht die Anpassung an eine bestimmte Umwelt."}
];
const whoCats=x=>WHO_SETS[x.set].cats;
function whoOptions(x){
  const C=whoCats(x), pool=Object.keys(C).filter(k=>k!==x.s&&!(x.alt||[]).includes(k));
  return shuffle([x.s].concat(shuffle(pool).slice(0,3)));
}
/* Auswahl: neue Beispiele und verwechselte kommen öfter */
function whoPick(n){
  const st=state.who||{}, pool=WHO.filter(x=>LESSONS[WHO_SETS[x.set].kap]), out=[];
  const w=pool.map(x=>{ const h=st[x.id]; return !h?3 : h.last?1:4; });
  while(out.length<Math.min(n,pool.length)){ let q=Math.random()*w.reduce((a,b)=>a+b,0), i=0; for(;i<pool.length;i++){ q-=w[i]; if(q<=0) break; } i=Math.min(i,pool.length-1); out.push(pool.splice(i,1)[0]); w.splice(i,1); }
  return out;
}
function openWho(n){ cur.wh={list:whoPick(n||8).map(x=>({x,o:whoOptions(x)})), i:0, a:null, right:0}; go("who"); }
function renderWho(){
  const W=cur.wh, L=W.list;
  if(W.i>=L.length){
    $("#app").innerHTML=`${backTo("Üben")}<h1>Runde geschafft</h1><div class="block"><p>${W.right} von ${L.length} richtig zugeordnet.</p>
      <p class="small muted">Falsch zugeordnete Beispiele kommen in den nächsten Runden häufiger.</p>
      <div class="row">${sess?sessBtn():`<button class="btn" id="wAgain">Neue Runde</button><button class="btn ghost" id="wOut">Fertig</button>`}</div></div>`;
    bindCrumb(()=>go("practice")); if($("#wAgain")) $("#wAgain").onclick=()=>openWho(8); if($("#wOut")) $("#wOut").onclick=()=>go("practice"); return;
  }
  const {x,o}=L[W.i], S=WHO_SETS[x.set], C=S.cats;
  $("#app").innerHTML=`${backTo("Üben")}
    <p class="eyebrow">Zuordnen · ${S.t} · ${W.i+1} von ${L.length}</p>
    <div class="block"><p class="small muted" style="margin:0 0 6px">${S.q}</p><p class="who">${inl(x.t)}</p>
      <div class="mc">${o.map(k=>{ const cls=W.a===null?"":(k===x.s?"r":(k===W.a?"w":"")); return `<button data-s="${k}" class="${cls}" ${W.a!==null?"disabled":""}>${C[k]}</button>`; }).join("")}</div>
      ${W.a===null?"":W.a===x.s?`<div class="fb good"><p class="fh">Richtig.</p><p style="margin:0">${inl(x.ex)}</p></div>`
        :`<div class="fb bad"><p class="fh">Nicht ganz.</p><div class="dlist"><b>Richtig</b><span>${C[x.s]}</span><b>Warum</b><span>${inl(x.ex)}</span></div></div>`}</div>
    ${W.a!==null?`<button class="btn" id="wNext">Weiter</button>`:`<p class="small muted">Tipp: ${S.hint}</p>`}`;
  bindCrumb(()=>go("practice"));
  document.querySelectorAll("[data-s]").forEach(b=>b.onclick=()=>{ if(W.a!==null) return; W.a=b.dataset.s; const ok=W.a===x.s; if(ok) W.right++;
    state.who=state.who||{}; const h=state.who[x.id]||{n:0,r:0}; h.n++; if(ok) h.r++; h.last=ok; if(!ok) h.conf=W.a; state.who[x.id]=h; logDay(); save(); renderWho(); });
  if($("#wNext")) $("#wNext").onclick=()=>{ W.i++; W.a=null; renderWho(); window.scrollTo(0,0); };
}
