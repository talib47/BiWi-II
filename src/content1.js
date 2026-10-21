/* ================= Kapitel 1: Psychologie als Wissenschaft =================
   Grundlage: Folien Sitzung 1 und 2 (WiSe 26/27), dazu Klausur WiSe 22/23 (Aufgabe 1) und 24/25 (Diagnostik, Aufgabe 1) */
LESSONS[1]=[
{id:"1-1", t:"Lernziele und die Stufen nach Bloom", html:`
<p>Heine beginnt jede Sitzung mit <b>kognitiven Lernzielen</b>. Das ist kein Zufall: Lernziele sind selbst ein Thema der Vorlesung.</p>
<p>Nach Ingenkamp und Lissmann (2008) beschreiben <b>operationalisierte Lernziele</b> das beabsichtigte Verhalten, das Lernende nach Abschluss des Lernprozesses zeigen sollen. Ein angemessen operationalisiertes Lernziel enthält drei Dinge:</p>
<ul><li><b>beobachtbare Verhaltensweisen</b> (was genau soll man sehen können?),</li>
<li><b>Bedingungen</b>, unter denen das Verhalten überprüft wird (worauf reagieren, in welcher Zeit …),</li>
<li>einen <b>Bewertungsmaßstab</b>, an dem man ablesen kann, ob das Ziel erreicht ist.</li></ul>
<div class="merk"><b>Beispiel</b><div class="mrows">
<div><span class="ml">Nicht operationalisiert</span><span>„Die Schüler verstehen Brüche.“</span></div>
<div><span class="ml">Operationalisiert</span><span>„Die Schüler kürzen in 10 Minuten ohne Hilfsmittel mindestens 8 von 10 Brüchen richtig.“</span></div></div>
<table class="kvq" style="margin:8px 0 0"><tr><td>Verhalten</td><td>kürzen</td></tr><tr><td>Bedingung</td><td>10 Minuten, ohne Hilfsmittel</td></tr><tr><td>Maßstab</td><td>8 von 10 richtig</td></tr></table></div>
<p><b>Bloom (1956)</b> hat in seiner „Taxonomy of Educational Objectives“ kognitive Lernziele nach Komplexität geordnet, von einfach nach schwer:</p>
<table class="kvq"><tr><th>Stufe</th><th>englisch</th><th>Beispielverb</th></tr>
<tr><td>1. Wissen / Erinnerung</td><td>Remembering</td><td>nennen, benennen</td></tr>
<tr><td>2. Verständnis</td><td>Comprehending</td><td>erklären, unterscheiden</td></tr>
<tr><td>3. Anwendung</td><td>Applying</td><td>berechnen, übertragen</td></tr>
<tr><td>4. Analyse</td><td>Analyzing</td><td>zerlegen, vergleichen</td></tr>
<tr><td>5. Synthese</td><td>Synthesizing</td><td>entwerfen, zusammenführen</td></tr>
<tr><td>6. Bewertung</td><td>Evaluating</td><td>beurteilen, begründen</td></tr></table>
<p>Laut Heine sind in einer Vorlesung vor allem die unteren Stufen erreichbar: Wissen und Verstehen sehr stark, Anwenden und Analysieren etwas. Für die Klausur heißt das: Begriffe sicher <i>benennen</i> und <i>erklären</i> können, dazu einfache Anwendungen.</p>`,
check:[
 {q:"Welche Stufe steht bei Bloom über der Anwendung?", o:["Verständnis","Analyse","Synthese","Wissen"], a:1, ex:"Reihenfolge: Wissen, Verständnis, Anwendung, Analyse, Synthese, Bewertung."},
 {q:"Was fehlt dem Lernziel „Die Schüler können Vokabeln“?", o:["Nur der Bewertungsmaßstab","Beobachtbares Verhalten, Bedingungen und Maßstab","Nur die Bedingungen","Nichts, es ist operationalisiert"], a:1, ex:"„Können“ ist nicht beobachtbar, und weder Bedingungen (z. B. 20 Vokabeln, 5 Minuten) noch ein Maßstab (z. B. 18 richtig) sind genannt."}
]},
{id:"1-2", t:"Kompetenz und Handlungskompetenz", html:`
<p>Der bekannteste Kompetenzbegriff stammt von <b>Weinert (2001)</b>. Sinngemäß: Kompetenzen sind die verfügbaren oder erlernbaren <b>kognitiven Fähigkeiten und Fertigkeiten</b>, um bestimmte Probleme zu lösen, zusammen mit den <b>motivationalen, volitionalen und sozialen Bereitschaften</b>, diese Lösungen in wechselnden Situationen erfolgreich und verantwortungsvoll zu nutzen.</p>
<p>Kompetenz umfasst also drei Bestandteile:</p>
<ul><li><b>Wissen</b> (verstehen),</li><li><b>Fertigkeiten</b> (können),</li><li><b>motivationale Orientierungen und Emotionen</b> (wollen).</li></ul>
<p>Wichtig ist die Abgrenzung: Kompetenz ist die <b>Voraussetzung</b> für Handeln, also eine Disposition. Das tatsächlich gezeigte Handeln heißt <b>Performanz</b>. Wer kompetent ist, zeigt nicht automatisch gute Leistung, etwa bei Müdigkeit oder Prüfungsangst.</p>
<p>Die Kultusministerkonferenz (KMK, 1999) beschreibt <b>Handlungskompetenz</b> als die Fähigkeit, sich in beruflichen, gesellschaftlichen und privaten Situationen sachgerecht, durchdacht und verantwortlich zu verhalten. Sie setzt sich aus vier Kompetenzen zusammen:</p>
<table class="kvq"><tr><th>Kompetenz</th><th>Beispiele</th></tr>
<tr><td>Sachkompetenz</td><td>Grundlagen- und Fachwissen, Kenntnis wissenschaftlicher Methoden</td></tr>
<tr><td>Methodenkompetenz</td><td>selbstständig arbeiten, Transfer, eigene Wissenslücken erkennen und schließen, reflektieren</td></tr>
<tr><td>Sozialkompetenz</td><td>kommunizieren, Fachsprache, Perspektivwechsel</td></tr>
<tr><td>Selbstkompetenz</td><td>Verantwortung übernehmen, Selbstkritik, ethisches Bewusstsein (Berufsethos)</td></tr></table>
<p>Ziel der Vorlesung ist die professionelle Unterrichtswahrnehmung nach <b>Seidel (2022)</b>:</p>
<ul><li><b>Noticing:</b> Auf Basis von Fachwissen die Aufmerksamkeit gezielt auf Ereignisse im Klassenraum richten, die für das Lernen wichtig sind.</li>
<li><b>Reasoning:</b> Das Wahrgenommene mithilfe dieses Wissens deuten und erklären.</li></ul>
<div class="merk"><b>Wozu das Ganze?</b>Die Vorlesung will, dass du schulische Situationen mit psychologischen Modellen verstehst (Noticing und Reasoning) und daraus sinnvolle Handlungsmöglichkeiten ableitest.</div>`,
check:[
 {q:"Welche drei Bestandteile umfasst Kompetenz nach Weinert?", o:["Wissen, Fertigkeiten, motivationale Orientierungen und Emotionen","Sach-, Methoden- und Sozialkompetenz","Noticing, Reasoning, Handeln","Wissen, Verstehen, Anwenden"], a:0, ex:"Verstehen, Können, Wollen. Sach-, Methoden-, Sozial- und Selbstkompetenz sind die vier Teile der Handlungskompetenz nach KMK."},
 {q:"Was bezeichnet Seidel als „Noticing“?", o:["Das Mitschreiben im Unterricht","Die gezielte Wahrnehmung lernrelevanter Ereignisse im Klassenraum","Das Deuten beobachteter Ereignisse","Die Notengebung"], a:1, ex:"Das Deuten ist Reasoning. Noticing ist die selektive Aufmerksamkeit auf das, was für Lehr-Lern-Prozesse wichtig ist."}
]},
{id:"1-3", t:"Die vier Ziele der Psychologie", html:`
<p>Im Fokus der Psychologie steht die Untersuchung menschlichen <b>Erlebens und Verhaltens</b>. Sie will es</p>
<table class="kvq"><tr><th>Ziel</th><th>Fachbegriff</th><th>Leitfrage</th></tr>
<tr><td>beschreiben</td><td>Deskription</td><td>Was ist da, und was hängt zusammen?</td></tr>
<tr><td>erklären</td><td>Explikation</td><td>Was bedingt was?</td></tr>
<tr><td>vorhersagen</td><td>Prognose</td><td>Was wird passieren?</td></tr>
<tr><td>ggf. verändern</td><td>Intervention</td><td>Wie lässt es sich beeinflussen?</td></tr></table>
<p>Psychologie ist eine <b>empirische Wissenschaft</b>: Sie formuliert mögliche Antworten als <b>Hypothesen</b> und konfrontiert sie systematisch mit der Realität, durch Beobachtung und Messung.</p>
<p><b>Beschreiben</b> heißt: ein Phänomen benennen und definieren, ordnen und klassifizieren, Art und Intensität angeben und <b>Zusammenhänge</b> darstellen. Beispiel: Wissen in einem Fach und die Motivation, sich damit zu beschäftigen, <i>korrelieren</i>. Über Ursache und Wirkung sagt das noch nichts.</p>
<p><b>Erklären</b> heißt: Bedingungsverhältnisse angeben, also <i>A bedingt B</i>. Das setzt die Beschreibung voraus. Beispiel (Dollard et al.): Frustration führt zu Aggression. Die Ursache heißt <b>unabhängiger Indikator</b>, die Wirkung <b>abhängiger Indikator</b>.</p>
<p><b>Vorhersagen</b> heißt: Variablen mit Erklärungswert nutzen, um Prognosemodelle zu bauen. Die Vorhersagevariablen heißen <b>Prädiktoren</b>, das Vorhergesagte heißt <b>Kriterium</b>. Beispiel (Elbro, 1996): Phonologische Bewusstheit und Wortschatz bei der Einschulung sagen den späteren Schriftspracherwerb voraus.</p>
<p><b>Verändern</b> heißt: gezielt auf Sachverhalte einwirken, und zwar als</p>
<ul><li><b>Korrektur</b> (einen negativen Ausgangszustand ausgleichen),</li>
<li><b>Förderung</b> (einen Sachverhalt allgemein verbessern),</li>
<li><b>Prävention</b> (eine Verschlechterung verhindern).</li></ul>
<p>Beispiel: das Vorschulprogramm „Hören, lauschen, lernen“ (Küspert) zur Förderung der phonologischen Bewusstheit.</p>
<div class="merk"><b>Klausurfalle</b>Beim Erklären bedingt der <i>unabhängige</i> Indikator den <i>abhängigen</i>, nie umgekehrt. Achte in Kreuzaufgaben genau auf die Reihenfolge.</div>`,
check:[
 {q:"„Phonologische Bewusstheit in der Kita sagt den späteren Leseerfolg voraus.“ Welche Rolle hat die phonologische Bewusstheit?", o:["Kriterium","Prädiktor","Abhängiger Indikator","Intervention"], a:1, ex:"Die Variable, mit der vorhergesagt wird, ist der Prädiktor. Der Leseerfolg ist das Kriterium."},
 {q:"Ein Förderprogramm soll verhindern, dass sich die Lesefähigkeit verschlechtert. Welche Form der Veränderung ist das?", o:["Korrektur","Förderung","Prävention","Explikation"], a:2, ex:"Prävention verhindert eine Verschlechterung. Korrektur gleicht einen schon negativen Zustand aus."}
]},
{id:"1-4", t:"Konstrukte und Operationalisierung", html:`
<p>Begriffe wie Intelligenz, Konzentrationsfähigkeit, Motivation oder soziale Kompetenz bezeichnen keine Dinge, die man anfassen oder direkt sehen kann. Sie sind <b>psychologische Konstrukte</b>: angenommene Eigenschaften von Personen, mit denen man beobachtbares Verhalten erklärt.</p>
<ul><li><b>Distale Merkmale</b> (Brunswik, 1956): die Konstrukte selbst. Sie sind der direkten Beobachtung <i>nicht</i> zugänglich.</li>
<li><b>Proximale Merkmale</b>: beobachtbare und messbare <b>Indikatoren</b>, aus denen man auf das Konstrukt schließt. Wer misst, muss wissen, welche Indikatoren wirklich zum Konstrukt gehören (das ist eine Frage der Validität).</li></ul>
<p>Konstrukte sind <b>Erklärungszugänge</b>, keine realen Entitäten. Als warnendes Gegenbeispiel zeigt Heine die <b>Phrenologie</b> (19. Jahrhundert), die geistige Eigenschaften an Schädelformen ablesen wollte, als säßen sie als Organe im Kopf.</p>
<p>Schon das Beschreiben setzt eine <b>Operationalisierung</b> voraus: die Übersetzung eines Konstrukts in beobachtbare bzw. messbare Indikatoren. Beispiel: „Wissensniveau in Psychologie“ wird operationalisiert als Punktzahl in einem fachspezifischen Test.</p>
<div class="merk"><b>Klausuraufgabe (WiSe 22/23): Lernmotivation operationalisieren</b><p class="mi">Mögliche Indikatoren und was man bei <i>hoher</i> Lernmotivation erwartet:</p>
<table class="kvq" style="margin:0"><tr><th>Indikator</th><th>bei hoher Motivation</th></tr>
<tr><td>Aufmerksamkeit</td><td>hoch</td></tr><tr><td>Anstrengung</td><td>hoch</td></tr><tr><td>Latenz (Zeit bis zum Beginn)</td><td>kurz</td></tr>
<tr><td>Persistenz (Ausdauer)</td><td>groß</td></tr><tr><td>Präferenz für Lernaufgaben</td><td>groß</td></tr>
<tr><td>Verhaltenswahrscheinlichkeit</td><td>hoch</td></tr><tr><td>emotionaler Ausdruck</td><td>positiv</td></tr></table></div>
<p>Merkmale lassen sich außerdem nach ihrer Stabilität unterscheiden: <b>Traits</b> sind zeitlich stabile Merkmale (z. B. Intelligenz), <b>States</b> sind situationsabhängige Zustände (z. B. aktuelle Müdigkeit).</p>
<p><b>Berufspraktische Relevanz:</b> Wer „Intelligenz“ oder „Motivation“ als Konstrukt begreift, behandelt eine Zuschreibung wie „der ist halt faul“ als <i>Hypothese</i> über eine Person in einer Situation. Sie muss über Indikatoren geprüft werden, und zu jedem Konstrukt gibt es unterschiedliche theoretische Zugänge.</p>`,
check:[
 {q:"Was sind distale Merkmale?", o:["Messbare Indikatoren wie Testpunkte","Konstrukte, die der direkten Beobachtung nicht zugänglich sind","Merkmale, die weit in der Vergangenheit liegen","Situationsabhängige Zustände"], a:1, ex:"Distal (fern) ist das Konstrukt, proximal (nah) sind die beobachtbaren Indikatoren."},
 {q:"Was versteht man unter Operationalisierung?", o:["Die statistische Auswertung","Die Übersetzung eines Konstrukts in beobachtbare bzw. messbare Indikatoren","Die Durchführung eines Tests","Die Wahl einer Stichprobe"], a:1, ex:"Beispiel: Lernmotivation wird über Persistenz, Anstrengung oder Latenz messbar gemacht."}
]}
];

CARDS[1]=[
 {id:"c1-01", f:"Was beschreiben operationalisierte Lernziele?", b:"Das beabsichtigte Verhalten, das Lernende nach Abschluss des Lernprozesses zeigen sollen (Ingenkamp & Lissmann, 2008)."},
 {id:"c1-02", f:"Drei Bestandteile eines operationalisierten Lernziels", b:"beobachtbare Verhaltensweisen\nBedingungen, unter denen das Verhalten überprüft wird (worauf, in welcher Zeit …)\nBewertungsmaßstab für die Zielerreichung"},
 {id:"c1-03", f:"Die sechs Lernzielstufen nach Bloom (1956)", b:"1. Wissen / Erinnerung (Remembering)\n2. Verständnis (Comprehending)\n3. Anwendung (Applying)\n4. Analyse (Analyzing)\n5. Synthese (Synthesizing)\n6. Bewertung (Evaluating)"},
 {id:"c1-04", f:"Kompetenz nach Weinert (2001)", b:"Verfügbare oder erlernbare kognitive Fähigkeiten und Fertigkeiten, um Probleme zu lösen, samt motivationaler, volitionaler (willensbezogener) und sozialer Bereitschaft, die Lösungen in variablen Situationen erfolgreich und verantwortungsvoll zu nutzen."},
 {id:"c1-05", f:"Drei Bestandteile von Kompetenz", b:"Wissen (verstehen)\nFertigkeiten (können)\nmotivationale Orientierungen und Emotionen (wollen)"},
 {id:"c1-06", f:"Kompetenz vs. Performanz", b:"Kompetenz: die Voraussetzung (Disposition) für Handeln.\nPerformanz: das tatsächlich gezeigte Handeln (z. B. die Klausurleistung an einem bestimmten Tag)."},
 {id:"c1-07", f:"Vier Teile der Handlungskompetenz (KMK, 1999)", b:"Sachkompetenz (Fachwissen, Methodenkenntnis)\nMethodenkompetenz (selbstständig arbeiten, Transfer, Wissenslücken erkennen)\nSozialkompetenz (kommunizieren, Perspektivwechsel)\nSelbstkompetenz (Verantwortung, Selbstkritik, Berufsethos)"},
 {id:"c1-08", f:"Noticing und Reasoning (Seidel, 2022)", b:"Noticing: Aufmerksamkeit gezielt auf lernrelevante Ereignisse im Klassenraum richten.\nReasoning: das Wahrgenommene auf Basis von Fachwissen deuten und erklären."},
 {id:"c1-09", f:"Gegenstand der Psychologie", b:"Menschliches Erleben und Verhalten."},
 {id:"c1-10", f:"Die vier Ziele der Psychologie", b:"beschreiben (Deskription)\nerklären (Explikation)\nvorhersagen (Prognose)\nggf. verändern (Intervention)"},
 {id:"c1-11", f:"Was heißt „empirisch“?", b:"Mögliche Antworten auf Fragen werden als Hypothesen formuliert und systematisch mit der Realität konfrontiert (Beobachtung, Messung)."},
 {id:"c1-12", f:"Beschreiben: was gehört dazu?", b:"Phänomen benennen und definieren\nordnen und klassifizieren\nArt und Intensität angeben\nZusammenhänge (Korrelationen) darstellen, z. B. Fachwissen und Motivation hängen zusammen"},
 {id:"c1-13", f:"Erklären: unabhängiger und abhängiger Indikator", b:"Erklären heißt, Bedingungsverhältnisse anzugeben: A bedingt B.\nUnabhängiger Indikator: die Ursache (z. B. Frustration)\nAbhängiger Indikator: die Wirkung (z. B. Aggression; Dollard et al.)"},
 {id:"c1-14", f:"Vorhersagen: Prädiktor und Kriterium", b:"Prädiktoren: Variablen, mit denen vorhergesagt wird (z. B. phonologische Bewusstheit und Wortschatz bei Einschulung)\nKriterium: das Vorhergesagte (z. B. späterer Schriftspracherwerb; Elbro, 1996)"},
 {id:"c1-15", f:"Drei Formen des Veränderns", b:"Korrektur: negativen Ausgangszustand ausgleichen\nFörderung: Sachverhalt allgemein verbessern\nPrävention: Verschlechterung verhindern\nBeispiel: „Hören, lauschen, lernen“ (Küspert)"},
 {id:"c1-16", f:"Psychologisches Konstrukt", b:"Eine angenommene, nicht direkt beobachtbare Eigenschaft von Personen (z. B. Intelligenz, Motivation), mit der man beobachtbares Verhalten beschreibt, erklärt oder vorhersagt. Ein Erklärungszugang, keine reale Entität."},
 {id:"c1-17", f:"Distale vs. proximale Merkmale", b:"Distal: das Konstrukt selbst, der direkten Beobachtung nicht zugänglich (Brunswik, 1956).\nProximal: beobachtbare, messbare Indikatoren, aus denen auf das Konstrukt geschlossen wird."},
 {id:"c1-18", f:"Operationalisierung", b:"Übersetzung eines Konstrukts in beobachtbare bzw. messbare Indikatoren, die es abbilden können (z. B. Wissensniveau → Punktzahl in einem Fachtest)."},
 {id:"c1-19", f:"Indikatoren für Lernmotivation", b:"Aufmerksamkeit, Anstrengung, Latenz (Zeit bis zum Beginn), Persistenz (Ausdauer), Präferenz, Verhaltenswahrscheinlichkeit, emotionaler Ausdruck.\nBei hoher Motivation: Latenz kurz, alles andere hoch bzw. positiv."},
 {id:"c1-20", f:"Traits vs. States", b:"Traits: zeitlich stabile Merkmale von Personen (z. B. Intelligenz).\nStates: situationsabhängige Zustände (z. B. aktuelle Nervosität)."}
];

Object.assign(CARD_INFO,{
 "c1-02":"Operationalisieren: von lateinisch operari, „arbeiten“. Etwas so fassen, dass man damit arbeiten, also es prüfen kann.",
 "c1-03":"Taxonomie: griechisch „Ordnung nach Regeln“.\nEselsbrücke: „Wer Viel Arbeitet, Analysiert Später Besser.“",
 "c1-04":"Volitional: von lateinisch velle, „wollen“. Die Willenskraft, ein Vorhaben auch umzusetzen.",
 "c1-06":"Performanz: von englisch to perform, „ausführen“.",
 "c1-07":"KMK: Kultusministerkonferenz, die Konferenz der Bildungsminister der Länder.",
 "c1-08":"Seidel: Tina Seidel, Bildungsforscherin an der TU München.",
 "c1-10":"Deskription: lateinisch describere, „beschreiben“.\nExplikation: lateinisch explicare, „entfalten, erklären“.\nPrognose: griechisch „Vorherwissen“.\nIntervention: lateinisch intervenire, „dazwischentreten“.",
 "c1-11":"Empirisch: griechisch empeiria, „Erfahrung“.\nHypothese: eine begründete, prüfbare Vermutung.",
 "c1-12":"Korrelation: statistischer Zusammenhang zweier Größen, sagt nichts über Ursache und Wirkung.",
 "c1-14":"Prädiktor: lateinisch praedicere, „vorhersagen“.",
 "c1-15":"Prävention: lateinisch praevenire, „zuvorkommen“.",
 "c1-16":"Konstrukt: lateinisch construere, „errichten“. Es wird vom Forscher gedanklich gebaut.",
 "c1-17":"Distal: „fern“, proximal: „nah“, wie in der Anatomie.\nBrunswik: Egon Brunswik, österreichisch-amerikanischer Psychologe (Linsenmodell).",
 "c1-19":"Latenz: lateinisch latere, „verborgen sein“. Die Zeit, bis eine Reaktion einsetzt.\nPersistenz: lateinisch persistere, „verharren“.",
 "c1-20":"Trait: englisch „Wesenszug“.\nState: englisch „Zustand“."
});
Object.assign(CARD_CTX,{
 "c1-01":"Lernziele formulieren, Grundlage jeder Unterrichtsplanung","c1-02":"Lernziele formulieren","c1-03":"Lernziele nach Schwierigkeit ordnen",
 "c1-04":"Der zentrale Kompetenzbegriff in der Bildungsforschung","c1-05":"Kompetenz zerlegen","c1-06":"Können haben und Können zeigen",
 "c1-07":"Welche Kompetenzen Lehrkräfte brauchen","c1-08":"Professionelle Unterrichtswahrnehmung","c1-09":"Womit sich Psychologie befasst",
 "c1-10":"Was Psychologie leisten will","c1-11":"Wie Psychologie zu Wissen kommt","c1-12":"Erstes Ziel der Psychologie","c1-13":"Zweites Ziel der Psychologie",
 "c1-14":"Drittes Ziel der Psychologie","c1-15":"Viertes Ziel der Psychologie","c1-16":"Grundbegriff für alles, was in der Diagnostik gemessen wird",
 "c1-17":"Wie Konstrukte und Messung zusammenhängen","c1-18":"Vom Begriff zur Messung","c1-19":"Klausur WiSe 22/23: ein Konstrukt operationalisieren","c1-20":"Stabile und schwankende Merkmale"
});

KREUZ.push(
 {id:"x1-01", ch:1, stem:"Für Lernziele gilt:", s:[
  ["Operationalisierte Lernziele beschreiben das Verhalten, das Lernende nach Abschluss des Lernprozesses zeigen sollen.", true, "Definition nach Ingenkamp und Lissmann (2008)."],
  ["In Blooms Taxonomie steht die Analyse unterhalb der Anwendung.", false, "Reihenfolge: Wissen, Verständnis, Anwendung, <b>Analyse</b>, Synthese, Bewertung. Die Analyse steht über der Anwendung."],
  ["Ein operationalisiertes Lernziel enthält einen Bewertungsmaßstab, an dem die Zielerreichung beurteilt werden kann.", true, "Dazu beobachtbares Verhalten und die Bedingungen der Überprüfung."]]},
 {id:"x1-02", ch:1, stem:"Für den Kompetenzbegriff nach Weinert gilt:", s:[
  ["Kompetenz umfasst neben Wissen und Fertigkeiten auch motivationale Orientierungen und Emotionen.", true, "Verstehen, Können, Wollen."],
  ["Kompetenz und Performanz sind zwei Begriffe für dasselbe.", false, "Kompetenz ist die <b>Voraussetzung</b> für Handeln, Performanz das tatsächlich gezeigte Handeln."],
  ["Kompetenzen können auch erlernbar sein, nicht nur bereits verfügbar.", true, "Weinert spricht von „verfügbaren oder erlernbaren“ Fähigkeiten und Fertigkeiten."]]},
 {id:"x1-03", ch:1, stem:"Für die Ziele der Psychologie gilt:", s:[
  ["Beim Beschreiben werden auch Zusammenhänge zwischen Sachverhalten dargestellt.", true, "Zum Beispiel die Korrelation von Fachwissen und Motivation."],
  ["Erklären ist ohne vorherige Beschreibung der Sachverhalte möglich.", false, "Erklären <b>setzt</b> die Beschreibung voraus."],
  ["Bei der Vorhersage werden die Variablen, mit denen vorhergesagt wird, als Prädiktoren bezeichnet.", true, "Das Vorhergesagte heißt Kriterium."]]},
 {id:"x1-04", ch:1, stem:"Für die empirische Untersuchung psychologischer Merkmale gilt:", klausur:"WiSe 24/25", s:[
  ["Distale Merkmale von Personen sind der Beobachtung nicht direkt zugänglich.", true, "Distale Merkmale sind die Konstrukte selbst; man schließt über proximale Indikatoren auf sie."],
  ["Erklärungsmodelle formulieren Wirkungszusammenhänge, bei denen die Ausprägung abhängiger Indikatoren durch die Ausprägung unabhängiger Indikatoren bedingt wird.", true, "Unabhängig = Ursache, abhängig = Wirkung (Folie: A bedingt B). Achtung: In der Klausur kann die Reihenfolge absichtlich vertauscht sein, dann ist die Aussage falsch."],
  ["Als Traits bezeichnet man zeitlich stabile Merkmale von Personen, wie z. B. die Intelligenz.", true, "Gegenstück: States, situationsabhängige Zustände."]]},
 {id:"x1-05", ch:1, stem:"Für psychologische Konstrukte gilt:", s:[
  ["Psychologische Konstrukte sind reale Entitäten, die sich im Gehirn genau lokalisieren lassen.", false, "Konstrukte sind <b>Erklärungszugänge</b> für beobachtbares Verhalten, keine realen Dinge. Abschreckendes Beispiel: die Phrenologie."],
  ["Bereits das Beschreiben eines Sachverhalts setzt eine Operationalisierung voraus.", true, "Man muss festlegen, woran man den Sachverhalt beobachten oder messen will."],
  ["Eine kürzere Latenz bis zum Arbeitsbeginn kann ein Indikator für hohe Lernmotivation sein.", true, "Latenz ist die Zeit bis zum Beginn; bei hoher Motivation ist sie kurz."]]},
 {id:"x1-06", ch:1, stem:"In Bezug auf das gezielte Verändern von Sachverhalten gilt:", s:[
  ["Prävention zielt darauf ab, eine Verschlechterung eines Sachverhalts zu verhindern.", true, "Vorbeugen, bevor ein Problem entsteht."],
  ["Korrektur bezeichnet die allgemeine Verbesserung eines Sachverhalts.", false, "Das ist <b>Förderung</b>. Korrektur gleicht einen negativen Ausgangszustand aus."],
  ["Ein Training der phonologischen Bewusstheit im Vorschulalter ist ein Beispiel für Intervention.", true, "Beispiel aus der Vorlesung: „Hören, lauschen, lernen“ (Küspert)."]]}
);

KURZ.push(
 {id:"k1-1", ch:1, pts:4, klausur:"WiSe 22/23, Aufgabe 1a",
  q:"Wir beschreiben und erklären menschliches Erleben und Verhalten unter Bezugnahme auf sogenannte psychologische Konstrukte. Bitte erläutern Sie diesen Begriff unter Bezugnahme auf den Begriff des Merkmals von Personen.",
  k:["Konstrukte sind hypothetische/angenommene Eigenschaften von Personen","Sie sind distale Merkmale, der direkten Beobachtung nicht zugänglich","Erschlossen werden sie über beobachtbare/messbare Indikatoren (proximale Merkmale)","Der Zusammenhang Indikator–Konstrukt beruht auf theoretischen oder empirischen Zugängen"],
  m:"Psychologische Konstrukte sind hypothetische, angenommene Eigenschaften von Personen, sogenannte distale Merkmale, die der direkten Beobachtung nicht zugänglich sind (z. B. Intelligenz). Erschlossen werden sie über beobachtbare bzw. messbare Indikatoren, die proximalen Merkmale, von denen man auf Basis theoretischer oder empirischer Zugänge annimmt, dass sie mit dem Konstrukt zusammenhängen."},
 {id:"k1-2", ch:1, pts:3, klausur:"WiSe 22/23, Aufgabe 1b; WiSe 18/19, Aufgabe 2",
  q:"Bitte erläutern Sie, was der Begriff Operationalisierung in diesem Zusammenhang bedeutet.",
  k:["Übersetzung psychologischer Konstrukte","in beobachtbare bzw. messbare Indikatoren","die das Konstrukt abbilden können (Beispiel genannt)"],
  m:"Operationalisierung ist die Übersetzung psychologischer Konstrukte in beobachtbare bzw. messbare Indikatoren, die das Konstrukt abbilden können. Beispiel: Das Wissensniveau in Psychologie wird als Punktzahl in einem fachspezifischen Test erfasst."},
 {id:"k1-3", ch:1, pts:9, klausur:"WiSe 22/23, Aufgabe 1c",
  q:"Wie lässt sich Lernmotivation operationalisieren? Nennen Sie drei unterschiedliche Möglichkeiten der Operationalisierung und führen Sie kurz aus, welche Effekte hoher bzw. niedriger Lernmotivation Sie jeweils annehmen („Ich erwarte, dass eine Person mit hoher Lernmotivation …“).",
  k:["Erster Indikator genannt (z. B. Persistenz/Ausdauer)","Erwarteter Effekt dazu richtig (z. B. arbeitet länger an schwierigen Aufgaben)","Zweiter Indikator genannt (z. B. Latenz)","Erwarteter Effekt dazu richtig (z. B. beginnt schneller)","Dritter Indikator genannt (z. B. Anstrengung, Aufmerksamkeit, Präferenz, emotionaler Ausdruck)","Erwarteter Effekt dazu richtig, jeweils als Erwartung formuliert"],
  m:"1) Persistenz: Ich erwarte, dass eine Person mit hoher Lernmotivation länger und ausdauernder an einer Aufgabe arbeitet, auch bei Schwierigkeiten. 2) Latenz: Ich erwarte, dass sie schneller mit dem Lernen beginnt, die Zeit bis zum Arbeitsbeginn also kurz ist. 3) Präferenz: Ich erwarte, dass sie Lernaufgaben bei freier Wahl häufiger anderen Tätigkeiten vorzieht. Bei niedriger Lernmotivation jeweils umgekehrt. Weitere mögliche Indikatoren: Anstrengung, Aufmerksamkeit, emotionaler Ausdruck."},
 {id:"k1-4", ch:1, pts:4,
  q:"Erläutern Sie, welche berufspraktische Relevanz es für Lehrkräfte hat, Intelligenz, Motivation oder Selbstkontrolle als psychologische Konstrukte zu begreifen.",
  k:["Konstrukte sind Erklärungszugänge für Verhalten, keine festen Eigenschaften/Dinge","Zuschreibungen (z. B. „faul“, „unbegabt“) werden zu prüfbaren Hypothesen über eine Person in einer Situation","Prüfung braucht Operationalisierung über beobachtbare Indikatoren","Zu jedem Konstrukt gibt es unterschiedliche theoretische Zugänge, daher Vorsicht bei vorschnellen Urteilen"],
  m:"Wer Intelligenz oder Motivation als Konstrukt versteht, behandelt sie als Erklärungszugang für beobachtbares Verhalten, nicht als feste Eigenschaft. Eine Einschätzung wie „der Schüler ist unmotiviert“ wird so zur Hypothese über eine Person in einer bestimmten Situation. Diese Hypothese muss über beobachtbare Indikatoren (z. B. Persistenz, Latenz) geprüft werden. Weil es zu jedem Konstrukt verschiedene theoretische Zugänge gibt, schützt diese Sicht vor vorschnellen, stigmatisierenden Urteilen und eröffnet Handlungsmöglichkeiten."}
);
OPEN.push({id:"o1-k3", ch:1, kind:"kurz", k:"k1-3", pts:10, title:"Psychologie als empirische Wissenschaft"});
