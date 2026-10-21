/* ================= Kleine Erklärhilfen zu Karten =================
   Jede Zeile ein Begriff. „Begriff: Erklärung“ wird als fetter Begriff dargestellt. */
const CARD_INFO={
 /* Kapitel 10 */
 "c10-01":"Norm: von lateinisch norma, „Richtschnur“.\nRepräsentativ: die Stichprobe bildet die Zielgruppe im Kleinen ab, etwa nach Alter, Geschlecht und Schulform.",
 "c10-02":"Eselsbrücke: „Hundert und eine Fünfzehn“, jede SD sind 15 IQ-Punkte.",
 "c10-03":"Eselsbrücke: 34 – 14 – 2 (gerundet), von innen nach außen.\nGauß: Die Glockenkurve heißt nach Carl Friedrich Gauß auch Gauß-Kurve.",
 "c10-04":"Grenzen: liegen genau eine und zwei Standardabweichungen vom Mittelwert entfernt (85/115 und 70/130).",
 "c10-05":"μ: griechisch „mü“, Mittelwert der Grundgesamtheit.\nσ: griechisch „sigma“, Standardabweichung.\nIn manchen Klausuren auch x̄ (x quer) und sd.",
 "c10-06":"Wechsler: Autor der Wechsler-Tests (WISC für Kinder, WAIS für Erwachsene), bis heute verbreitet.",
 "c10-07":"T-Wert: in Schulleistungstests verbreitet.\nC-Wert: von „Centil“, grobe Skala mit nur 11 Stufen (0 bis 10).",
 "c10-08":"Binet: Alfred Binet, französischer Psychologe, entwickelte um 1905 den ersten Intelligenztest für Schulkinder.\nStern: William Stern, deutscher Psychologe, prägte 1912 den Begriff Intelligenzquotient.",
 "c10-09":"Kumuliert: von lateinisch cumulus, „Haufen“, also aufgehäuft oder aufsummiert.\ncumf: cumulative frequency.",
 "c10-12":"Rechenweg: 50 % liegen über 100, davon 34,13 % bis 115 und 13,59 % bis 130. Bleibt 50 − 34,13 − 13,59 = 2,28 (≈ 2,27 wegen Rundung).",
 "c10-14":"Gegenstück: Bodeneffekt, wenn ein Test zu schwer ist und unten nicht mehr unterscheidet.",
 "c10-15":"Flynn: James R. Flynn, neuseeländischer Politikwissenschaftler, beschrieb den Effekt 1984.",
 "c10-17":"Nebengütekriterien: Fairness, Ökonomie, Nützlichkeit, Akzeptanz, Normierung (mehr dazu in Kapitel 11)."
};
function cardInfoHTML(id){
  const t=CARD_INFO[id]; if(!t) return "";
  const lines=t.split("\n").map(l=>{ const m=l.match(/^([^:]{1,32}): (.*)$/); return m?`<span class="cl"><b>${m[1]}</b> ${m[2]}</span>`:`<span class="cl">${l}</span>`; }).join("");
  return `<div class="cinfo"><span class="ci">i</span><div>${lines}</div></div>`;
}

/* Kontext auf der Vorderseite: worum es bei der Frage überhaupt geht */
const CARD_CTX={
 "c10-01":"Wie man Testergebnisse überhaupt interpretierbar macht",
 "c10-02":"Die bekannteste Normskala",
 "c10-03":"Wie sich Werte um den Mittelwert verteilen",
 "c10-04":"Wie man einen IQ in Worte fasst, wie in der Klausur verlangt",
 "c10-05":"Rohwert in Standardabweichungen ausdrücken",
 "c10-06":"Vom z-Wert zum IQ",
 "c10-07":"Verschiedene Normskalen, ein Prinzip",
 "c10-08":"Historischer Vorläufer des heutigen IQ",
 "c10-09":"Position in einer Werteverteilung, ohne Normalverteilung",
 "c10-10":"Prozentränge richtig interpretieren",
 "c10-11":"Prozentanteile unter der Normalverteilung",
 "c10-12":"Prozentanteile unter der Normalverteilung",
 "c10-13":"Vergleich von Ergebnissen aus unterschiedlichen Tests",
 "c10-14":"Messprobleme im extremen Leistungsbereich",
 "c10-15":"Warum alte Normen verzerren",
 "c10-16":"Messprobleme, wenn man Hochbegabung feststellen will",
 "c10-17":"Gütekriterien von Tests"
};
