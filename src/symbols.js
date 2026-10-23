/* ================= Zeichen der Diagnostik-Statistik =================
   Jedes Zeichen aus Heines Folien und den Altklausuren einmal erklärt: Bedeutung, wofür, Mini-Beispiel, wo es vorkommt,
   typische Verwechslung. Daraus entstehen zwei Kartenstapel (Zeichen → Bedeutung und Bedeutung → Zeichen) und das Lexikon.
   Nur was im Material schon vorkommt. Reliabilität, Konfidenzintervall usw. kommen mit den Folien zu den Gütekriterien.
   Felder: id (bleibt fest, sonst geht der Lernstand verloren), s Zeichen, n Bedeutung kurz,
   bed, wof, bsp, wo, merk (Merkhilfe), falle (typische Verwechslung), formel */
const SYMBOL_GROUPS=[
 {id:"norm", t:"Normwerte und Standardisierung", kap:16, items:[
  {id:"x", s:"x", n:"Testrohwert der Person",
   bed:"das **unmittelbare Testergebnis**, z. B. die Zahl der gelösten Aufgaben",
   wof:"Ausgangspunkt jeder Umrechnung in z, IQ, T oder Prozentrang",
   bsp:"Ein Kind löst 36 Aufgaben im Lesetest: x = 36.", wo:"z-Formel, Abweichungs-IQ",
   falle:"Ein Rohwert allein sagt nichts. Erst der Vergleich mit der Normstichprobe macht ihn deutbar."},
  {id:"mu", s:"μ", n:"Mittelwert der Normstichprobe",
   bed:"der **Durchschnitt** der Referenzgruppe. In Klausuren auch x̄ (x quer) oder M",
   wof:"zeigt, wo die Mitte der Verteilung liegt",
   bsp:"μ = 460: Gleichaltrige erreichen im Schnitt 460 Punkte.", wo:"z = (x − μ) / σ, Tabellen mit M und SD",
   merk:"μ, griechisch „mü“, wie Mittelwert"},
  {id:"sigma", s:"σ", n:"Standardabweichung der Normstichprobe",
   bed:"wie weit die Werte **typischerweise um den Mittelwert streuen**. Auch sd oder SD",
   wof:"Maßeinheit für Abstände: „eine Standardabweichung über dem Mittel“",
   bsp:"Bei μ = 460 und σ = 50 liegt ein Rohwert von 510 genau eine Standardabweichung über dem Mittel.", wo:"Nenner der z-Formel",
   merk:"σ, griechisch „sigma“, wie Streuung",
   falle:"Nicht mit dem Mittelwert verwechseln: Auf der IQ-Skala ist 100 der Mittelwert und 15 die Standardabweichung."},
  {id:"z", s:"z", n:"z-Wert: Abstand zum Mittel in Standardabweichungen",
   bed:"um **wie viele Standardabweichungen** ein Wert über oder unter dem Mittelwert liegt. Mittelwert 0, Standardabweichung 1",
   wof:"macht Ergebnisse aus verschiedenen Tests vergleichbar und ist der Zwischenschritt zu jeder Normskala",
   bsp:"z = (500 − 460) / 50 = 0,8", wo:"Lektion z-Wert, alle Umrechnungen",
   falle:"Vorzeichen beachten: Liegt x unter μ, wird z negativ.", formel:"z = (x − μ) / σ"},
  {id:"iq", s:"IQ", n:"Abweichungs-IQ",
   bed:"Normskala mit **Mittelwert 100** und **Standardabweichung 15**, nach Wechsler (1939). Auch AIQ",
   wof:"übliche Skala in der Intelligenzdiagnostik, mit deskriptiver Einordnung (85 bis 115 durchschnittlich)",
   bsp:"z = 0,8 → IQ = 100 + 15 · 0,8 = 112", wo:"Klausuraufgaben „Vom Rohwert zum IQ“",
   falle:"Nicht der IQ nach Stern: Intelligenzalter / Lebensalter · 100.", formel:"IQ = 100 + 15 · z"},
  {id:"t", s:"T", n:"T-Wert",
   bed:"Normskala mit **Mittelwert 50** und **Standardabweichung 10**",
   wof:"in Schulleistungstests verbreitet",
   bsp:"z = −1 → T = 50 + 10 · (−1) = 40, dieselbe Position wie IQ 85", wo:"Umrechnen zwischen Normskalen",
   formel:"T = 50 + 10 · z"},
  {id:"c", s:"C", n:"C-Wert",
   bed:"grobe Normskala mit **Mittelwert 5** und **Standardabweichung 2**, nur 11 Stufen (0 bis 10)",
   wof:"für grobe Einstufungen",
   bsp:"z = 1,5 → C = 5 + 2 · 1,5 = 8", wo:"Umrechnen zwischen Normskalen",
   merk:"C von „Centil“", formel:"C = 5 + 2 · z"},
  {id:"pr", s:"PR", n:"Prozentrang",
   bed:"Anteil der Referenzgruppe in Prozent, der **gleich gut oder schlechter** abgeschnitten hat. Braucht keine Normalverteilung",
   wof:"Position in einer beliebigen Werteverteilung beschreiben",
   bsp:"PR = 75: 75 % gleich gut oder schlechter, 25 % besser.", wo:"Klausuraufgaben mit Werteverteilung (WiSe 18/19, 22/23)",
   falle:"PR 25 heißt weder „25 % der Punkte“ noch „25 % waren besser“. Es waren 75 % besser.", formel:"PR = cumf / N · 100"},
  {id:"cumf", s:"cumf", n:"kumulierte Häufigkeit",
   bed:"Anzahl der Werte **bis einschließlich** des betrachteten Werts in der sortierten Verteilung",
   wof:"Zähler der Prozentrang-Formel",
   bsp:"10, 12, 12, 13, 13, 13, 16, 16, 18, 19, 21, 25: Für den Wert 18 ist cumf = 9.", wo:"Prozentrang",
   merk:"cumulative frequency, „aufgehäufte Häufigkeit“",
   falle:"Gleiche Werte zählen mit: kleiner oder gleich, nicht nur kleiner."},
  {id:"n", s:"N", n:"Anzahl aller Werte (Probanden)",
   bed:"die **Gesamtzahl** der Werte in der Verteilung",
   wof:"Nenner der Prozentrang-Formel",
   bsp:"12 Werte in der Verteilung: N = 12", wo:"Prozentrang"}
 ]}
];
const isFormula=f=>!!f;
const SYMBOLS=SYMBOL_GROUPS.flatMap(g=>g.items.map(x=>Object.assign({g:g.id, gt:g.t},x)));
function symBack(x){
  return [x.formel?`$ ${x.formel}`:"", `Bedeutung: ${x.bed}`, `Wofür: ${x.wof}`, `Beispiel: ${x.bsp}`, `Kommt vor: ${x.wo}`, x.falle?`Achtung: ${x.falle}`:""].filter(Boolean).join("\n");
}
function symBackRev(x){ return [`$ ${x.formel?x.formel:x.s}`, x.formel&&!x.formel.startsWith(x.s+" ")?`Zeichen: ${x.s}`:"", `Beispiel: ${x.bsp}`, x.falle?`Achtung: ${x.falle}`:""].filter(Boolean).join("\n"); }
CARDS.sym=SYMBOLS.map(x=>({id:"s-"+x.id, f:x.s, b:symBack(x), rt:true}));
CARDS.symr=SYMBOLS.map(x=>({id:"r-"+x.id, f:x.n, b:symBackRev(x), rt:true}));
SYMBOLS.forEach(x=>{ CARD_CTX["s-"+x.id]="Zeichen · "+x.gt+" · Was bedeutet es?"; CARD_CTX["r-"+x.id]="Zeichen · "+x.gt+" · Wie schreibt man es?"; if(x.merk) CARD_INFO["s-"+x.id]=CARD_INFO["r-"+x.id]="Merkhilfe: "+x.merk; });
const DECK_NAME={sym:"Zeichen", symr:"Zeichen umgekehrt"};

/* Lexikon: alle Zeichen nach Themen */
function lexiconHTML(){
  return SYMBOL_GROUPS.map(g=>`<div class="block"><h3>${g.t}</h3><div class="dlist lex">${g.items.map(x=>`<b class="sy">${x.s}</b><span>${inl(x.n)}${x.formel?`<span class="eq lexeq">${fx(x.formel)}</span>`:""}<span class="small muted">${inl(x.bsp)}</span>${x.falle?`<span class="small lexwarn">${inl(x.falle)}</span>`:""}</span>`).join("")}</div></div>`).join("");
}
function renderSym(){
  const st=n=>{ const A=allCards(n); return `${dueCards(n).length} fällig · ${A.filter(x=>!isSeen(x.id)).length} neu`; };
  $("#app").innerHTML=`${backTo("Üben")}<p class="eyebrow">Grundlage für die Rechenaufgaben in Teil 3</p><h1>Zeichen und Formeln</h1>
    <p class="muted">Jedes Zeichen der Diagnostik-Statistik mit Bedeutung, Mini-Beispiel und typischer Verwechslung. Gewusste Karten kommen nach 1, 3, 7, 16 und 35 Tagen wieder, wie die anderen Karten.</p>
    <div class="block"><div class="modes">
      <button class="mode" id="sy1"><span class="t">Zeichen → Bedeutung</span><span class="n">${st("sym")}</span><span class="d">Vorne steht das Zeichen, z. B. σ. Sag, was es bedeutet.</span></button>
      <button class="mode" id="sy2"><span class="t">Bedeutung → Zeichen</span><span class="n">${st("symr")}</span><span class="d">Vorne steht die Bedeutung. Schreib Zeichen und Formel auf, wie in der Klausur.</span></button>
    </div></div>
    <h2 style="margin-top:18px">Lexikon</h2>${lexiconHTML()}`;
  bindCrumb(()=>go("practice"));
  $("#sy1").onclick=()=>openCards("sym"); $("#sy2").onclick=()=>openCards("symr");
}
/* Lexikon als Blatt über einer Aufgabe, ohne sie zu verlassen */
function showLexicon(){
  const d=document.createElement("div"); d.className="sheet"; d.setAttribute("role","dialog"); d.setAttribute("aria-label","Lexikon der Zeichen");
  d.innerHTML=`<div class="sheetin"><div class="row between" style="margin-bottom:8px"><h2 style="margin:0">Zeichen</h2><button class="btn ghost small" id="lexX">Schließen</button></div>${lexiconHTML()}</div>`;
  document.body.appendChild(d); document.body.style.overflow="hidden";
  const close=()=>{ d.remove(); document.body.style.overflow=""; };
  d.querySelector("#lexX").onclick=close; d.onclick=e=>{ if(e.target===d) close(); };
}
