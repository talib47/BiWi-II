/* ================= Inhalte =================
   Grundlage bisher: Altklausuren Heine (WiSe 17/18, 18/19, 22/23, 24/25) und der Fragenkatalog „Fragen Heine“.
   Sobald Folien vorliegen, werden die Kapitel daran abgeglichen und ergänzt.
   vl: 1 = Einführung in die Psychologie / Lehr-Lernpsychologie (Mi 8–10), 2 = Päd.-psych. Diagnostik & Inklusion (Mi 10–12)
   teil: Klausurteil (1 Einführung, 2 Lehr-Lernpsychologie, 3 Diagnostik, 4 Inklusion) */
const VL={1:"Einführung in die Psychologie · Lehr-Lernpsychologie", 2:"Pädagogisch-psychologische Diagnostik · Inklusion"};
const CHAPTERS=[
  {n:1,  vl:1, teil:1, title:"Gedächtnis", teaser:"Mehrspeichermodell, Arbeitsgedächtnis, Chunking, explizites und implizites Langzeitgedächtnis, Netzwerkmodell."},
  {n:2,  vl:1, teil:1, title:"Vergessen und Abruf", teaser:"Verarbeitungstiefe, Enkodierungsspezifität, Interferenz, Kontextfluktuation, Gedächtnis als Rekonstruktion."},
  {n:3,  vl:1, teil:1, title:"Motivation", teaser:"Intrinsisch und extrinsisch, Erwartungs-Wert-Modell nach Atkinson, Attribution und Feedback."},
  {n:4,  vl:1, teil:1, title:"Emotion", teaser:"Circumplexmodell nach Russell (Valenz und Erregung) und Strategien der Emotionsregulation."},
  {n:5,  vl:1, teil:2, title:"Lernen und nicht-assoziatives Lernen", teaser:"Was Lernen ist und was nicht, Habituation und Sensitivierung."},
  {n:6,  vl:1, teil:2, title:"Klassische Konditionierung", teaser:"Reflexe, neutrale und konditionierte Reize, Generalisierung, Konditionierung höherer Ordnung."},
  {n:7,  vl:1, teil:2, title:"Operante Konditionierung", teaser:"Die vier Konsequenzen nach Skinner und ihre Wirkung auf künftiges Verhalten."},
  {n:8,  vl:1, teil:2, title:"Lernen am Modell", teaser:"Beobachtungslernen nach Bandura, stellvertretende Verstärkung, Selbstwirksamkeit."},
  {n:9,  vl:2, teil:3, title:"Psychologie als empirische Wissenschaft", teaser:"Konstrukte und Merkmale, Operationalisierung, Messen, Skalenniveaus."},
  {n:10, vl:2, teil:3, title:"Normwerte und Standardisierung", teaser:"Normalverteilung, z-Wert, Abweichungs-IQ, T-Wert, Prozentrang und warum man Rohwerte standardisiert."},
  {n:11, vl:2, teil:3, title:"Gütekriterien", teaser:"Objektivität, Reliabilität, Validität, Nebengütekriterien und Facettentheorie."},
  {n:12, vl:2, teil:3, title:"Diagnostischer Prozess und Urteilsbildung", teaser:"Messzugänge, klinische und statistische Urteile, Verknüpfungsregeln, Urteilsfehler, Bezugsnormen."},
  {n:13, vl:2, teil:3, title:"Intelligenz", teaser:"Von Binet bis Wechsler, Generalfaktor, fluide und kristalline Intelligenz, Anlage und Umwelt nach Plomin."},
  {n:14, vl:2, teil:4, title:"Hochbegabung und Underachievement", teaser:"Kompetenz- und Performanzdefinition, Befunde zur Asynchronität, Probleme der Diagnostik."},
  {n:15, vl:2, teil:4, title:"Aufmerksamkeitsstörungen", teaser:"Kernsymptome, ICD-10 F90, Ätiologie, Komorbidität und multimodale Intervention."},
  {n:16, vl:2, teil:4, title:"Lese-Rechtschreibstörung", teaser:"Schriftspracherwerb nach Frith, Dual-Route-Modell, phonologische Bewusstheit, Diagnose nach F81."},
  {n:17, vl:2, teil:4, title:"Rechenstörung", teaser:"Numerische Kognition, Kernsymptome, Diagnoseverfahren und Diagnose nach F81.2."}
];
const LESSONS={}, CARDS={}, ESSAYS={}, GRAPHS={}, CALC={};

/* ================= Kapitel 10: Normwerte und Standardisierung ================= */
LESSONS[10]=[
{id:"10-1", t:"Warum ein Rohwert allein nichts sagt", html:`
<p>Ein Kind löst in einem Lesetest 36 Aufgaben. Ist das gut? Das lässt sich erst beurteilen, wenn man weiß, wie andere Kinder <i>desselben Alters im selben Test</i> abgeschnitten haben. Die Zahl der gelösten Aufgaben heißt <b>Testrohwert</b>. Er bekommt seine Bedeutung erst durch den Vergleich mit einer <b>Referenzgruppe</b>, der sogenannten <b>Normstichprobe</b>.</p>
<p>Viele psychologische Merkmale, etwa die Intelligenz, sind in der Bevölkerung annähernd <b>normalverteilt</b>: Die meisten Menschen liegen nahe am Mittelwert, nach außen hin werden es symmetrisch immer weniger. Beschrieben wird so eine Verteilung durch zwei Kennwerte:</p>
<ul><li><b>Mittelwert</b> (μ oder x̄): wo die Mitte liegt.</li>
<li><b>Standardabweichung</b> (σ oder sd): wie weit die Werte typischerweise um die Mitte streuen.</li></ul>
{{fig:nv}}
<p>Bei jeder Normalverteilung liegen immer dieselben Anteile in denselben Abschnitten, gemessen in Standardabweichungen (SD):</p>
<table class="kvq"><tr><th>Bereich</th><th>Anteil</th><th>Beim IQ (100/15)</th></tr>
<tr><td>zwischen Mittelwert und ±1 SD</td><td class="nw">je 34,13 %</td><td>85–115 zusammen 68,26 %</td></tr>
<tr><td>zwischen 1 und 2 SD</td><td class="nw">je 13,59 %</td><td>70–85 und 115–130</td></tr>
<tr><td>zwischen 2 und 3 SD</td><td class="nw">je 2,14 %</td><td>55–70 und 130–145</td></tr>
<tr><td>jenseits von 3 SD</td><td class="nw">je 0,13 %</td><td>unter 55, über 145</td></tr></table>
<p>Daraus folgt die <b>deskriptive Einordnung</b>, die Heine in den Klausuren abfragt:</p>
<table class="kvq"><tr><th>IQ</th><th>Einordnung</th></tr>
<tr><td class="nw">unter 70</td><td>weit unterdurchschnittlich (z. B. geistige Behinderung)</td></tr>
<tr><td class="nw">70–85</td><td>unterdurchschnittlich</td></tr>
<tr><td class="nw">85–115</td><td>durchschnittlich</td></tr>
<tr><td class="nw">115–130</td><td>überdurchschnittlich</td></tr>
<tr><td class="nw">über 130</td><td>weit überdurchschnittlich (z. B. Hochbegabung)</td></tr></table>
<div class="merk"><b>Merksatz</b>Zwei Drittel (68,26 %) liegen innerhalb von einer Standardabweichung um den Mittelwert. Jenseits von zwei Standardabweichungen liegen auf jeder Seite nur 2,27 % (2,14 + 0,13).</div>`,
check:[
 {q:"Wie viel Prozent der Bevölkerung haben einen IQ von 130 oder mehr?", o:["0,13 %","2,27 %","13,59 %","15,87 %"], a:1, ex:"130 liegt zwei Standardabweichungen über dem Mittelwert. Darüber liegen 2,14 % + 0,13 % = 2,27 %."},
 {q:"Eine Schülerin hat einen IQ von 117. Wie ordnen Sie das deskriptiv ein?", o:["Durchschnittlich","Überdurchschnittlich","Weit überdurchschnittlich","Hochbegabt"], a:1, ex:"117 liegt zwischen 115 und 130, also zwischen einer und zwei Standardabweichungen über dem Mittelwert."}
]},
{id:"10-2", t:"z-Wert und Abweichungs-IQ", html:`
<p>Um einen Rohwert einzuordnen, rechnet man ihn zuerst in einen <b>z-Wert</b> um. Der z-Wert sagt, um wie viele Standardabweichungen ein Wert über oder unter dem Mittelwert liegt:</p>
<div class="eq">z = (x − μ) / σ</div>
<p class="small muted" style="margin-top:6px">x = Rohwert der Person, μ = Mittelwert der Normstichprobe, σ = Standardabweichung der Normstichprobe</p>
<p>Ein z-Wert von +1 heißt „eine Standardabweichung über dem Durchschnitt“, ein z-Wert von −0,5 „eine halbe Standardabweichung darunter“. Die z-Skala hat den Mittelwert 0 und die Standardabweichung 1.</p>
<p>Weil Kommazahlen und negative Werte im Alltag schwer zu vermitteln sind, rechnet man z in eine andere Skala um. Das Prinzip ist immer gleich: <b>neuer Mittelwert + neue Standardabweichung · z</b>.</p>
<table class="kvq"><tr><th>Skala</th><th>Mittelwert</th><th>SD</th><th>Umrechnung</th></tr>
<tr><td>z-Skala</td><td>0</td><td>1</td><td>z</td></tr>
<tr><td>IQ-Skala</td><td>100</td><td>15</td><td>100 + 15 · z</td></tr>
<tr><td>T-Skala</td><td>50</td><td>10</td><td>50 + 10 · z</td></tr>
<tr><td>C-Skala</td><td>5</td><td>2</td><td>5 + 2 · z</td></tr></table>
<p>Die IQ-Umrechnung heißt <b>Abweichungs-IQ</b> und geht auf David Wechsler (1939) zurück:</p>
<div class="eq">AIQ = 100 + 15 · (x − μ) / σ</div>
<div class="merk"><b>Klausurbeispiel</b>Testrohwert 500 in einem Test mit μ = 460 und σ = 50.<br>z = (500 − 460) / 50 = 0,8<br>IQ = 100 + 15 · 0,8 = 112, also durchschnittlich.</div>
<p>Früher wurde der IQ anders berechnet: Binet führte das <b>Intelligenzalter</b> (mentale Alter) ein, Stern teilte es durch das Lebensalter: <span style="font-family:var(--mono)">IQ = Intelligenzalter / Lebensalter · 100</span>. Das funktioniert bei Kindern, aber nicht bei Erwachsenen, deren Intelligenz nicht mehr jedes Jahr wächst. Deshalb setzte sich Wechslers Abweichungs-IQ durch.</p>`,
check:[
 {q:"Ein Testrohwert liegt 18 Punkte unter dem Mittelwert, die Standardabweichung beträgt 12. Welcher IQ ergibt sich?", o:["82","77,5","122,5","85"], a:1, ex:"z = −18 / 12 = −1,5. IQ = 100 + 15 · (−1,5) = 77,5. Achtung aufs Vorzeichen, sonst kommt 122,5 heraus."},
 {q:"Welchen Mittelwert und welche Standardabweichung hat die T-Skala?", o:["100 und 15","50 und 10","5 und 2","0 und 1"], a:1, ex:"T = 50 + 10 · z. Ein IQ von 115 entspricht z = 1 und damit T = 60."}
]},
{id:"10-3", t:"Der Prozentrang", html:`
<p>Der <b>Prozentrang</b> (PR) beschreibt ein Ergebnis anders als der z-Wert: Er gibt an, wie viel Prozent der Referenzgruppe <b>gleich gut oder schlechter</b> abgeschnitten haben. Er braucht keine Normalverteilung, sondern nur eine Reihenfolge der Werte.</p>
<div class="eq">PR = cumf / N · 100</div>
<p class="small muted" style="margin-top:6px">cumf = kumulierte Häufigkeit, also die Anzahl der Werte bis einschließlich des gesuchten Werts · N = Gesamtzahl der Werte (Probanden)</p>
<p>So gehst du in der Klausur vor:</p>
<ul><li><b>Sortieren:</b> alle Werte der Größe nach ordnen.</li>
<li><b>cumf bestimmen:</b> zählen, wie viele Werte kleiner oder gleich dem gesuchten Wert sind.</li>
<li><b>N bestimmen</b> und in die Formel einsetzen.</li></ul>
<div class="merk"><b>Klausurbeispiel (WiSe 22/23)</b>Werte: 21; 18; 19; 12; 13; 16; 13; 12; 25; 10; 13; 16. Gesucht: PR von 18.<br>Sortiert: 10, 12, 12, 13, 13, 13, 16, 16, <b>18</b>, 19, 21, 25<br>cumf = 9, N = 12, PR = 9/12 · 100 = 75</div>
<p><b>Interpretation:</b> Ein Prozentrang von 75 heißt, dass 75 % der Gruppe gleich gut oder schlechter abgeschnitten haben, also 25 % besser. Ein Prozentrang von 25 heißt umgekehrt: 75 % waren besser.</p>
<p>Prozentrang und z-Wert hängen über die Normalverteilung zusammen: Der Mittelwert (z = 0) hat PR 50, z = +1 entspricht PR 84,1, z = −2 entspricht PR 2,3.</p>`,
check:[
 {q:"Ein Student hat in einer Klausur den Prozentrang 25. Was bedeutet das?", o:["Er hat 25 % der Punkte erreicht","25 % haben besser abgeschnitten","75 % haben besser abgeschnitten","Er liegt eine Standardabweichung unter dem Mittel"], a:2, ex:"25 % haben gleich gut oder schlechter abgeschnitten, also 75 % besser. Mit der Punktzahl hat der Prozentrang nichts zu tun."},
 {q:"In einer Verteilung von 20 Werten sind 14 Werte kleiner oder gleich dem gesuchten Wert. Wie hoch ist der Prozentrang?", o:["14","70","30","65"], a:1, ex:"PR = 14 / 20 · 100 = 70."}
]},
{id:"10-4", t:"Standardisieren in der Praxis", html:`
<p>Rohwerte aus <b>verschiedenen Tests</b> lassen sich nicht direkt vergleichen. Wer in Test A und Test B je 36 Punkte hat, kann ganz unterschiedlich gut sein, weil die Tests unterschiedlich schwer sind und anders streuen. Erst die Umrechnung in Standardwerte (z, IQ, T) macht sie vergleichbar.</p>
<div class="merk"><b>Klausuraufgabe (WiSe 22/23)</b>Drei Viertklässlerinnen, drei verschiedene Lesetests, ein Platz im Lesetraining für die Schwächste.
<table class="kvq" style="margin-top:6px"><tr><th></th><th>Rohwert</th><th>M</th><th>SD</th><th>z</th><th>IQ-Skala</th></tr>
<tr><td>A</td><td>36</td><td>42</td><td>3</td><td>−2</td><td>70</td></tr>
<tr><td>B</td><td>36</td><td>39</td><td>6</td><td>−0,5</td><td>92,5</td></tr>
<tr><td>C</td><td>36</td><td>42</td><td>6</td><td>−1</td><td>85</td></tr></table>
Alle haben 36 Punkte, aber Schülerin A liegt zwei Standardabweichungen unter ihrer Referenzgruppe. Sie bekommt den Platz.</div>
<p>Damit Standardwerte stimmen, müssen die Normen selbst gut sein. Die <b>Normierung</b> ist ein Nebengütekriterium: Die Normen sollen <b>aktuell</b> und an einer <b>repräsentativen</b> Stichprobe gewonnen sein. Drei typische Probleme, gerade in extremen Leistungsbereichen wie der Hochbegabungsdiagnostik:</p>
<ul><li><b>Deckeneffekt:</b> Der Test ist zu leicht, sehr gute Personen lösen fast alles. Er kann oben nicht mehr unterscheiden (Messfehler durch Überschreiten des Messbereichs).</li>
<li><b>Größerer Messfehler</b> an den Rändern der Verteilung, weil es dort nur wenige Aufgaben und Vergleichspersonen gibt.</li>
<li><b>Flynn-Effekt:</b> Die durchschnittlichen Testleistungen sind über Jahrzehnte gestiegen. Mit veralteten Normen wirkt eine Person deshalb besser, als sie im Vergleich zu heute ist.</li></ul>`,
check:[
 {q:"Warum lässt man in der Aufgabe nicht einfach die Rohwerte entscheiden?", o:["Weil alle drei gleich sind","Weil die Tests unterschiedliche Mittelwerte und Streuungen haben","Weil Rohwerte immer ungenau sind","Weil nur IQ-Werte zulässig sind"], a:1, ex:"Gleiche Rohwerte bedeuten in unterschiedlich schweren Tests Unterschiedliches. Erst z-Werte zeigen die Position in der jeweiligen Referenzgruppe."},
 {q:"Ein Intelligenztest wurde vor 30 Jahren normiert. Was ist zu erwarten?", o:["Die IQ-Werte fallen zu niedrig aus","Die IQ-Werte fallen zu hoch aus","Es gibt keinen Unterschied","Der Test wird reliabler"], a:1, ex:"Wegen des Flynn-Effekts war die alte Normstichprobe im Schnitt schwächer. Im Vergleich zu ihr schneidet man heute besser ab, der IQ wird überschätzt."}
]}
];

CARDS[10]=[
 {id:"c10-01", f:"Testrohwert und Normstichprobe", b:"Testrohwert: das unmittelbare Testergebnis, etwa die Zahl gelöster Aufgaben.\nNormstichprobe (Referenzgruppe): eine große, möglichst repräsentative Vergleichsgruppe, an der der Test erprobt wurde. Erst der Vergleich mit ihr macht den Rohwert interpretierbar."},
 {id:"c10-02", f:"Mittelwert und Standardabweichung der IQ-Skala", b:"Mittelwert 100, Standardabweichung 15. Der IQ ist in der Bevölkerung annähernd normalverteilt."},
 {id:"c10-03", f:"Flächenanteile der Normalverteilung", b:"Mittelwert bis ±1 SD: je 34,13 % (zusammen 68,26 %)\n1 bis 2 SD: je 13,59 %\n2 bis 3 SD: je 2,14 %\njenseits von 3 SD: je 0,13 %"},
 {id:"c10-04", f:"Deskriptive Einordnung von IQ-Werten", b:"unter 70: weit unterdurchschnittlich (z. B. geistige Behinderung)\n70–85: unterdurchschnittlich\n85–115: durchschnittlich\n115–130: überdurchschnittlich\nüber 130: weit überdurchschnittlich (z. B. Hochbegabung)"},
 {id:"c10-05", f:"Formel des z-Werts und Bedeutung der Variablen", b:"z = (x − μ) / σ\nx: Rohwert der Person\nμ: Mittelwert der Referenzgruppe\nσ: Standardabweichung (Streuung) der Referenzgruppe\nz sagt, um wie viele Standardabweichungen der Wert vom Mittel abweicht."},
 {id:"c10-06", f:"Abweichungs-IQ: Formel und Urheber", b:"AIQ = 100 + 15 · (x − μ) / σ, also 100 + 15 · z.\nEingeführt von David Wechsler (1939)."},
 {id:"c10-07", f:"Mittelwert und SD der Standardskalen", b:"z-Skala: 0 und 1\nIQ-Skala: 100 und 15\nT-Skala: 50 und 10\nC-Skala: 5 und 2\nUmrechnung immer: Mittelwert + SD · z"},
 {id:"c10-08", f:"IQ nach Stern", b:"IQ = Intelligenzalter / Lebensalter · 100.\nDas Intelligenzalter (mentale Alter, z. B. „löst Aufgaben wie ein Achtjähriger“) geht auf Binet zurück. Für Erwachsene ungeeignet, deshalb abgelöst vom Abweichungs-IQ."},
 {id:"c10-09", f:"Formel des Prozentrangs und Bedeutung der Variablen", b:"PR = cumf / N · 100\ncumf: kumulierte Häufigkeit, also Anzahl der Werte bis einschließlich des gesuchten Werts\nN: Gesamtzahl der Werte (Probanden)"},
 {id:"c10-10", f:"Was bedeutet ein Prozentrang von 90?", b:"90 % der Referenzgruppe haben gleich gut oder schlechter abgeschnitten, nur 10 % besser."},
 {id:"c10-11", f:"Anteil der Bevölkerung mit IQ 85 bis 115", b:"68,26 % (zweimal 34,13 %), also der durchschnittliche Leistungsbereich."},
 {id:"c10-12", f:"Anteil mit IQ ≥ 130 und mit IQ ≥ 70", b:"IQ ≥ 130: 2,27 % (2,14 + 0,13)\nIQ ≥ 70: 97,73 % (100 − 2,27)"},
 {id:"c10-13", f:"Warum standardisiert man Rohwerte?", b:"Rohwerte verschiedener Tests sind nicht vergleichbar, weil die Tests unterschiedlich schwer sind und anders streuen. Standardwerte (z, IQ, T) zeigen die Position in der jeweiligen Referenzgruppe und machen Ergebnisse vergleichbar (z. B. drei Schülerinnen mit drei verschiedenen Lesetests)."},
 {id:"c10-14", f:"Deckeneffekt", b:"Messfehler, der auf dem Überschreiten des Messbereichs beruht: Der Test ist für sehr leistungsstarke Personen zu leicht und kann oben nicht mehr unterscheiden (z. B. fast alle lösen alle Aufgaben)."},
 {id:"c10-15", f:"Flynn-Effekt", b:"Die durchschnittlichen Intelligenztestleistungen sind über Jahrzehnte gestiegen. Veraltete Normen überschätzen deshalb die Intelligenz (die Person wird mit einer schwächeren früheren Generation verglichen)."},
 {id:"c10-16", f:"Drei Probleme unausgereifter Zugänge in der Hochbegabungsdiagnostik", b:"Deckeneffekte: im extremen Leistungsbereich kann nicht mehr unterschieden werden\nMessfehler: größere Ungenauigkeit im Extrembereich\nFlynn-Effekt: veraltete Normen sind dort besonders problematisch"},
 {id:"c10-17", f:"Normierung als Nebengütekriterium", b:"Für den Test liegen aktuelle und an einer repräsentativen Stichprobe ermittelte Normen vor."}
];
CALC[10]=["zwert","iq","skalen","nv","pr","prrev","vergleich"];
