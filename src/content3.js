/* ================= Kapitel 11: Operante Konditionierung =================
   Grundlage: Folien Sitzung 4 (WiSe 26/27, Input 1: Folien 5–14), Klausur WiSe 24/25 (Thema 6 „Operante Konditionierung“, 10 P.),
   Lehrbuch Urhahne/Dresel/Fischer (2019) Kap. 1.4 (Tab. 1.1). Die Folien von Sitzung 3 (Lernen 2, Grundlagen) fehlen noch:
   Die vier Konsequenzen stehen deshalb vorerst nach Lehrbuch und Klausur. */
LESSONS[11]=[
{id:"11-1", t:"Die vier operanten Konsequenzen", html:`
<p>Bei der operanten Konditionierung wird eine Verknüpfung zwischen einem <b>Verhalten</b> (R) und seiner <b>Konsequenz</b> (S) gelernt. Ob ein Verhalten künftig häufiger oder seltener auftritt, hängt von dieser Konsequenz ab (Skinner, aufbauend auf Thorndikes Gesetz der Wirkung).</p>
<p>Zwei Fragen ordnen jede Konsequenz ein:</p>
<ul><li><b>Positiv oder negativ?</b> Das heißt nur: Wird ein Reiz <b>dargeboten</b> (positiv, +) oder <b>entzogen</b> (negativ, −)? Mit „gut“ oder „schlecht“ hat es nichts zu tun.</li>
<li><b>Verstärkung oder Bestrafung?</b> Verstärkung macht das Verhalten <b>häufiger</b>, Bestrafung macht es <b>seltener</b>.</li></ul>
<table class="kvq"><tr><th></th><th>Reiz wird dargeboten</th><th>Reiz wird entzogen</th></tr>
<tr><td>angenehmer (appetitiver) Reiz</td><td><b>positive Verstärkung</b><br><span class="small muted">Lob für gute Mitarbeit</span></td><td><b>negative Bestrafung</b><br><span class="small muted">Wegnahme des Handys</span></td></tr>
<tr><td>unangenehmer (aversiver) Reiz</td><td><b>positive Bestrafung</b><br><span class="small muted">Ermahnung bei Unterrichtsstörung</span></td><td><b>negative Verstärkung</b><br><span class="small muted">Befreiung von Hausaufgaben</span></td></tr></table>
<p>Folgt gar keine Konsequenz mehr, wird das Verhalten nach und nach seltener: <b>Löschung</b> (Extinktion).</p>
<div class="merk"><b>So fragt Heine in der Klausur (WiSe 24/25)</b>Name der Konsequenz, dann der Mechanismus „allgemein“ (welche Art Konsequenz wird dargeboten oder entfernt?) und „im konkreten Fall“, dann der Effekt auf die Auftretenshäufigkeit, allgemein und konkret. Bei negativer Bestrafung also: Eine <i>appetitive</i> Konsequenz wird <i>entnommen</i>, die Auftretenshäufigkeit <i>sinkt</i>.</div>
<p class="small muted">Quelle: Lehrbuch Kap. 1.4, Tab. 1.1, und Klausur WiSe 24/25. Die Folien zu Sitzung 3 fehlen noch in der App.</p>`,
check:[
 {q:"Was bedeutet „negativ“ bei negativer Verstärkung?", o:["Die Konsequenz ist unangenehm","Ein Reiz wird entzogen","Das Verhalten wird seltener","Die Lehrkraft ist unzufrieden"], a:1, ex:"Positiv und negativ sagen nur, ob ein Reiz dargeboten oder entzogen wird. Bei negativer Verstärkung fällt etwas Unangenehmes weg, deshalb wird das Verhalten häufiger.", w:["Unangenehm ist der Reiz, der wegfällt. „Negativ“ bezeichnet aber das Wegnehmen, nicht die Qualität.",null,"Seltener wird ein Verhalten durch Bestrafung. Jede Verstärkung macht es häufiger.","Die Stimmung der Lehrkraft spielt für die Einteilung keine Rolle."]},
 {q:"Weil ein Schüler im Unterricht spielt, wird ihm das Handy bis Stundenende abgenommen. Welche Konsequenz liegt vor?", o:["Positive Bestrafung","Negative Verstärkung","Negative Bestrafung","Löschung"], a:2, ex:"Ein angenehmer (appetitiver) Reiz wird entzogen, das Spielen soll seltener werden.", w:["Bei positiver Bestrafung käme etwas Unangenehmes hinzu, z. B. eine Ermahnung.","Negative Verstärkung macht ein Verhalten häufiger, weil etwas Unangenehmes wegfällt.",null,"Löschung hieße, dass gar keine Konsequenz mehr folgt."]}
]},
{id:"11-2", t:"Verstärkungspläne und ihre Effekte", html:`
<p>Bei <b>kontinuierlicher Verstärkung</b> (continuous reinforcement, <b>CRF</b>) wird jede einzelne Verhaltensäußerung verstärkt. Wird nur manchmal verstärkt, spricht man von <b>intermittierender Verstärkung</b>. Die vier wichtigsten Pläne:</p>
<table class="kvq"><tr><th></th><th>Quotenpläne (nach Anzahl)</th><th>Intervallpläne (nach Zeit)</th></tr>
<tr><td>fest</td><td><b>Feste Quote</b> (FQ, fixed ratio): exakt jede x-te korrekte Reaktion wird verstärkt. Spezialfall: CRF</td><td><b>Festes Intervall</b> (FI): jeweils die erste korrekte Reaktion eines x-Minuten-Intervalls wird verstärkt</td></tr>
<tr><td>variabel</td><td><b>Variable Quote</b> (VQ): ungefähr jede x-te korrekte Reaktion wird verstärkt</td><td><b>Variables Intervall</b> (VI): durchschnittlich alle x Minuten wird eine korrekte Reaktion verstärkt</td></tr></table>
<p><b>Effekte:</b></p>
<ul><li><b>CRF</b> führt <b>rasch zum Erwerb</b> des Verhaltens. Bleibt die Verstärkung aus, wird das Verhalten aber <b>schnell eingestellt</b> (Extinktion).</li>
<li><b>Intermittierende Verstärkung</b> ist <b>extinktionsresistenter</b> als CRF („<b>partieller Verstärkungseffekt</b>“). Sie ist die Basis von <b>Fading/Thinning</b>: erst kontinuierlich verstärken, dann immer seltener.</li></ul>
<table class="kvq"><tr><th>Plan</th><th>Reaktionsrate</th><th>Besonderheit</th></tr>
<tr><td>FQ</td><td>hoch</td><td><b>Nachverstärkungspause</b> (post-reinforcement effect, PRE)</td></tr>
<tr><td>VQ</td><td>hoch, gleichmäßig</td><td>geringe Nachverstärkungspause</td></tr>
<tr><td>FI</td><td>moderat</td><td><b>FI-Bögen</b>: Pause nach der Verstärkung, dann immer schnellere Reaktion</td></tr>
<tr><td>VI</td><td>moderat, gleichmäßig</td><td></td></tr></table>
<div class="merk"><b>Merksatz</b><div class="mrows">
<div><span class="ml">Quote</span><span>hohe Raten, denn mehr Verhalten bringt mehr Verstärkung</span></div>
<div><span class="ml">Variabel</span><span>gleichmäßig, denn die nächste Verstärkung ist nie vorhersehbar</span></div></div></div>`,
check:[
 {q:"Ein Kind bekommt anfangs für jede gelesene Seite einen Sticker, später nur noch ab und zu. Was ist der Vorteil?", o:["Das Verhalten wird schneller erworben","Das Verhalten wird extinktionsresistenter","Die Nachverstärkungspause verschwindet ganz","Das Verhalten wird nicht mehr bewusst gesteuert"], a:1, ex:"Das ist Fading/Thinning: CRF für den schnellen Erwerb, dann intermittierend, weil das stabiler gegen Löschung ist (partieller Verstärkungseffekt).", w:["Schnell erworben wird mit CRF, also in der ersten Phase. Der Wechsel dient der Stabilität.",null,"Eine Nachverstärkungspause gibt es bei festen Quoten. Sie verschwindet durch Fading nicht automatisch.","Mit Bewusstheit hat der Verstärkungsplan nichts zu tun."]},
 {q:"Eine Lehrkraft sammelt jeden Freitag die Hefte ein und lobt die Mitarbeit. Viele arbeiten erst donnerstags richtig. Welcher Plan und welcher Effekt?", o:["Variable Quote, gleichmäßige Rate","Festes Intervall, FI-Bogen","Feste Quote, hohe Rate","Variables Intervall, kein Effekt"], a:1, ex:"Verstärkt wird nach festen Zeitabständen. Nach der Verstärkung folgt eine Pause, vor dem nächsten Termin steigt die Reaktion an: FI-Bogen.", w:["Bei variabler Quote hängt die Verstärkung von der Anzahl der Reaktionen ab und ist unvorhersehbar.",null,"Bei fester Quote zählt die Anzahl der Reaktionen, nicht der Wochentag.","Ein variables Intervall wäre ein unvorhersehbarer Termin. Es führt zu gleichmäßigen Raten."]}
]},
{id:"11-3", t:"Was die Lernkurve beeinflusst, und Bestrafung", html:`
<p>Wie schnell ein Verhalten erworben wird, hängt unter anderem ab von:</p>
<ul><li><b>Kontiguität:</b> Je geringer der zeitliche Abstand zwischen Verhalten und Verstärkung, desto schneller der Erwerb.</li>
<li><b>Kontingenz:</b> Wie regelmäßig das Verhalten verstärkt wird (→ Verstärkungspläne).</li>
<li><b>Motivation:</b> Die Wirkung des Verstärkers hängt von der momentanen motivationalen Lage ab (z. B. Hunger).</li>
<li><b>Verstärkereigenschaften:</b> Je potenter der Verstärker, desto schneller der Erwerb.</li></ul>
<p><b>Bestrafung</b> dient dazu, Verhaltenstendenzen zu schwächen. Positive Bestrafung (eine aversive Konsequenz) hat im echten Leben Probleme:</p>
<ul><li>Sie <b>stärkt kein erwünschtes Verhalten</b>.</li>
<li>Der Bestrafer wird <b>gemieden</b>, oder das Verhalten wird <b>nur in seiner Anwesenheit</b> unterdrückt.</li>
<li>Sie führt zu <b>emotionalen Reaktionen</b> wie Aggression.</li>
<li>Der Effekt von Bestrafung <b>verstärkt auch das Bestrafungsverhalten</b> des Bestrafers.</li></ul>
<p>Wenn positive (statt negative!) Bestrafung, dann</p>
<ul><li><b>ohne Verzögerung</b>,</li><li><b>nicht intermittierend</b>,</li><li><b>von Beginn an mit der notwendigen Intensität</b>,</li><li>mit <b>gleichzeitiger Verstärkung erwünschten Verhaltens</b>,</li><li>bei Menschen in Kombination mit <b>Erklärungen</b>.</li></ul>
<div class="merk"><b>Schulbezug</b>Wer nur ermahnt, bringt der Klasse nicht bei, was sie stattdessen tun soll. Deshalb gehört zur Strafe immer die Verstärkung des erwünschten Verhaltens. Ruft eine Lehrkraft selten und unberechenbar zur Ordnung, ist die Bestrafung intermittierend und wirkt schlecht.</div>`,
check:[
 {q:"Warum wirkt positive Bestrafung im Alltag oft nicht wie gewünscht?", o:["Weil sie das unerwünschte Verhalten immer noch verstärkt","Weil sie nichts Erwünschtes aufbaut und der Bestrafer gemieden wird","Weil sie nur bei Tieren im Labor zuverlässig funktioniert","Weil sie meist viel zu schnell auf das Verhalten folgt"], a:1, ex:"Laut Folie stärkt Bestrafung kein erwünschtes Verhalten, der Bestrafer wird gemieden oder das Verhalten nur in seiner Anwesenheit unterdrückt, dazu kommen Aggression und ein sich selbst verstärkendes Bestrafen.", w:["Bestrafung schwächt Verhaltenstendenzen. Dass sie das Verhalten immer verstärkt, steht nirgends.",null,"Die Probleme sind gerade aus dem menschlichen Alltag bekannt.","Im Gegenteil: Bestrafung soll ohne Verzögerung erfolgen."]},
 {q:"Welche Bedingung nennt Heine für den Einsatz positiver Bestrafung?", o:["Erst schwach beginnen und dann langsam steigern","Nur ab und zu, damit sie überraschend kommt","Sofort und von Beginn an mit nötiger Intensität","Ohne Erklärung, damit sie stärker wirkt"], a:2, ex:"Bestrafung soll sofort, nicht intermittierend, gleich mit der nötigen Intensität, mit Verstärkung des Erwünschten und mit Erklärung erfolgen.", w:["Langsames Steigern widerspricht der Bedingung „von Beginn an mit notwendiger Intensität“.","Gerade nicht intermittierend: Bestrafung soll jedes Mal erfolgen.",null,"Bei Menschen soll Bestrafung mit Erklärungen verbunden werden."]}
]},
{id:"11-4", t:"Erlernte Hilflosigkeit und Fallbeispiele", html:`
<p><b>Erlernte Hilflosigkeit</b> (Seligman) ist eine mögliche Folge, wenn jemand wiederholt aversiven Reizen ausgesetzt ist, die er als <b>nicht kontrollierbar</b> erlebt. Sie geht einher mit</p>
<ul><li>psychischen Symptomen wie Stress, Angst, Apathie, Depression und psychosomatischen Erkrankungen,</li><li>einer <b>Verminderung der Lernfähigkeit</b>.</li></ul>
<p>Zentral für die Entstehung ist ein <b>Mangel an Kontingenz</b> zwischen Verhalten und Konsequenz: Die Person erfährt, dass ihre Reaktion die Konsequenz nicht kontrolliert. <span class="small muted">Schulbezug: Wer trotz Anstrengung immer schlechte Noten bekommt, erlebt genau diese fehlende Kontingenz.</span></p>
<p><b>Fallbeispiele von den Folien</b> <span class="erg">Lösungsvorschlag</span> <span class="small muted">Die Folien stellen nur die Frage.</span></p>
<table class="kvq"><tr><th>Fall</th><th>Verhalten → Konsequenz</th><th>Art</th></tr>
<tr><td><b>Michael</b> (Klausur 24/25)</td><td>Ohrfeige → zwei Wochen Trainingsverbot, also wird eine appetitive Konsequenz (Fußballspielen) entnommen. Danach schlägt er nicht mehr.</td><td>negative Bestrafung</td></tr>
<tr><td><b>Mutter</b> (Fall 2)</td><td>Süßigkeit kaufen → Quengeln und Weinen hören auf, also fällt etwas Aversives weg. Beim nächsten Mal kauft sie schon vorher.</td><td>negative Verstärkung</td></tr>
<tr><td><b>Lina</b> (Fall 3)</td><td>Quengeln und Weinen → Süßigkeit, also kommt etwas Appetitives hinzu. Beim nächsten Einkauf quengelt sie wieder.</td><td>positive Verstärkung</td></tr>
<tr><td><b>Snoopy</b> (Fall 4)</td><td>dem Zaun nähern → schrilles Piepsen, also kommt etwas Aversives hinzu. Er meidet den Zaun.</td><td>positive Bestrafung</td></tr></table>
<div class="merk"><b>Merksatz</b>Immer zuerst fragen: Wessen Verhalten betrachte ich? Dieselbe Szene (Mutter und Lina) enthält zwei verschiedene Lernprozesse, je nachdem, auf wen man schaut.</div>`,
check:[
 {q:"Was ist laut Folie zentral für die Entstehung erlernter Hilflosigkeit?", o:["Zu häufige Verstärkung durch die Umwelt","Fehlende Kontingenz von Verhalten und Konsequenz","Eine einmalige, aber sehr starke Bestrafung","Die Beobachtung eines hilflosen Modells"], a:1, ex:"Die Person erfährt, dass ihre Reaktion die Konsequenz nicht kontrolliert.", w:["Häufige Verstärkung setzt gerade Kontingenz voraus.",null,"Stärke allein ist nicht entscheidend, sondern die Unkontrollierbarkeit.","Beobachtungslernen ist eine andere Lernform. Hilflosigkeit entsteht durch eigene Erfahrung."]},
 {q:"Fall 2 aus der Vorlesung, Fokus Mutter: Sie kauft die Süßigkeit, das Weinen hört auf, beim nächsten Mal kauft sie schon früher. Was liegt vor?", o:["Positive Verstärkung","Negative Verstärkung","Negative Bestrafung","Positive Bestrafung"], a:1, ex:"Das Verhalten der Mutter (kaufen) wird häufiger, weil dadurch etwas Aversives (Quengeln, Weinen) entfernt wird.", w:["Positive Verstärkung gilt für Lina: Sie bekommt etwas Angenehmes. Für die Mutter fällt etwas weg.",null,"Bestrafung macht ein Verhalten seltener. Das Kaufen wird aber häufiger.","Bei positiver Bestrafung käme etwas Unangenehmes hinzu und das Verhalten würde seltener."]}
]}
];

CARDS[11]=[
 {id:"c11-01", f:"Operante Konditionierung: was wird gelernt?", b:"Die Verknüpfung von Verhalten und Konsequenz (R → S). Die Konsequenz bestimmt, ob das Verhalten künftig häufiger oder seltener auftritt."},
 {id:"c11-02", f:"„Positiv“ und „negativ“ bei operanten Konsequenzen", b:"Positiv: Ein Reiz wird dargeboten.\nNegativ: Ein Reiz wird entzogen.\nKeine Wertung („gut“/„schlecht“)."},
 {id:"c11-03", f:"Positive Verstärkung", b:"Ein appetitiver (angenehmer) Reiz wird dargeboten, das Verhalten wird häufiger.\nBeispiel: Lob für gute Mitarbeit."},
 {id:"c11-04", f:"Negative Verstärkung", b:"Ein aversiver (unangenehmer) Reiz wird entzogen, das Verhalten wird häufiger.\nBeispiel: Befreiung von Hausaufgaben."},
 {id:"c11-05", f:"Positive Bestrafung", b:"Ein aversiver Reiz wird dargeboten, das Verhalten wird seltener.\nBeispiel: Ermahnung bei Unterrichtsstörung."},
 {id:"c11-06", f:"Negative Bestrafung", b:"Ein appetitiver Reiz wird entzogen, das Verhalten wird seltener.\nBeispiel: Wegnahme des Handys, Trainingsverbot (Klausur 24/25)."},
 {id:"c11-07", f:"Kontinuierliche Verstärkung (CRF)", b:"Jede einzelne Verhaltensäußerung wird verstärkt.\nEffekt: rascher Erwerb, aber schnelle Extinktion, wenn die Verstärkung ausbleibt."},
 {id:"c11-08", f:"Die vier intermittierenden Verstärkungspläne", b:"Feste Quote (FQ): exakt jede x-te Reaktion\nVariable Quote (VQ): ungefähr jede x-te Reaktion\nFestes Intervall (FI): erste Reaktion nach x Minuten\nVariables Intervall (VI): durchschnittlich alle x Minuten"},
 {id:"c11-09", f:"Partieller Verstärkungseffekt", b:"Intermittierend verstärktes Verhalten ist extinktionsresistenter als kontinuierlich verstärktes. Basis von Fading/Thinning."},
 {id:"c11-10", f:"Effekte der vier Pläne", b:"FQ: hohe Raten, Nachverstärkungspause (PRE)\nVQ: hohe, gleichmäßige Raten, geringe PRE\nFI: moderate Raten, FI-Bögen\nVI: moderate, gleichmäßige Raten"},
 {id:"c11-11", f:"FI-Bogen", b:"Typischer Verlauf beim festen Intervall: Nach der Verstärkung eine Pause (PRE), dann immer schnellere Reaktion bis zum nächsten Verstärkungszeitpunkt."},
 {id:"c11-12", f:"Vier Variablen, die die Lernkurve beeinflussen", b:"Kontiguität (zeitliche Nähe von Verhalten und Verstärkung)\nKontingenz (Regelmäßigkeit der Verstärkung)\nMotivation (momentane Lage, z. B. Hunger)\nVerstärkereigenschaften (Potenz des Verstärkers)"},
 {id:"c11-13", f:"Probleme positiver Bestrafung im Alltag", b:"keine Stärkung erwünschten Verhaltens\nBestrafer wird gemieden bzw. Verhalten nur in seiner Anwesenheit unterdrückt\nemotionale Reaktionen wie Aggression\nEffekt verstärkt auch das Bestrafungsverhalten"},
 {id:"c11-14", f:"Bedingungen, wenn positiv bestraft wird", b:"ohne Verzögerung\nnicht intermittierend\nvon Beginn an mit notwendiger Intensität\nmit gleichzeitiger Verstärkung erwünschten Verhaltens\nbei Menschen mit Erklärungen"},
 {id:"c11-15", f:"Erlernte Hilflosigkeit (Seligman)", b:"Mögliche Folge wiederholter, als unkontrollierbar erlebter aversiver Reize. Symptome: Stress, Angst, Apathie, Depression, psychosomatische Erkrankungen, verminderte Lernfähigkeit.\nZentral: Mangel an Kontingenz von Verhalten und Konsequenz."},
 {id:"c11-16", f:"Fall Michael (Klausur 24/25): Ohrfeige → zwei Wochen Trainingsverbot", b:"Negative Bestrafung: Eine appetitive Konsequenz (Fußballspielen) wird entnommen. Die Auftretenshäufigkeit des Verhaltens sinkt: Michael schlägt beim nächsten Foul nicht mehr."}
];
Object.assign(CARD_INFO,{
 "c11-01":"Operant: Das Verhalten „operiert“ auf die Umwelt und verändert sie.",
 "c11-03":"Appetitiv: lateinisch appetere, „begehren“, also angenehm, erstrebt.",
 "c11-04":"Aversiv: lateinisch aversus, „abgewandt“, also unangenehm, gemieden.",
 "c11-07":"CRF: continuous reinforcement.\nExtinktion: Löschung, das Verhalten verschwindet ohne Verstärkung.",
 "c11-08":"Intermittierend: lateinisch „unterbrochen“, also nicht jedes Mal.\nRatio: Quote. Interval: Zeitspanne.",
 "c11-09":"Fading/Thinning: Verstärkung schrittweise „ausblenden“ bzw. „ausdünnen“.",
 "c11-10":"PRE: post-reinforcement effect, die Pause direkt nach einer Verstärkung.",
 "c11-12":"Kontiguität: zeitliche Nähe. Kontingenz: regelhafte Verknüpfung.",
 "c11-15":"Martin Seligman, US-amerikanischer Psychologe, Experimente mit unausweichlichen Reizen."
});
Object.assign(CARD_CTX,{
 "c11-01":"Lernen durch Konsequenzen","c11-02":"Vorsicht vor der Alltagsbedeutung","c11-03":"Erste der vier Konsequenzen","c11-04":"Zweite der vier Konsequenzen",
 "c11-05":"Dritte der vier Konsequenzen","c11-06":"Vierte der vier Konsequenzen","c11-07":"Jedes Mal verstärken","c11-08":"Nur manchmal verstärken",
 "c11-09":"Warum seltener verstärken hilft","c11-10":"Wie sich die Pläne auswirken","c11-11":"Ein typischer Verlauf","c11-12":"Wovon die Lernkurve abhängt",
 "c11-13":"Warum Strafen oft schiefgeht","c11-14":"Wenn schon strafen, dann so","c11-15":"Wenn Verhalten nichts bewirkt","c11-16":"Echte Klausuraufgabe"
});

/* ================= Kapitel 12: Lernen am Modell =================
   Grundlage: Folien Sitzung 4 (WiSe 26/27, Input 2: Folien 16–21) */
LESSONS[12]=[
{id:"12-1", t:"Soziales Lernen und Modelle", html:`
<p>Allgemein ist Lernen eine Änderung von Verhalten, die durch Erfahrung bedingt ist. <b>Banduras Theorie des sozialen Lernens</b> betont: Höhere Lebewesen lernen nicht in Isolation, sondern zunächst und vor allem <b>eingebettet in soziale Kontexte</b>.</p>
<p>Unter dem Oberbegriff <b>soziales Lernen</b> werden diskutiert:</p>
<ul><li><b>Beobachtungslernen</b> (observational learning),</li><li><b>Imitationslernen</b> (imitation learning),</li><li><b>stellvertretendes Lernen</b> (vicarious learning).</li></ul>
<p>Zentral ist jeweils das <b>Modell</b>, also eine Verhaltensvorgabe, die der Beobachter erwerben soll. Heine unterscheidet vier Arten:</p>
<table class="kvq"><tr><th>Modell</th><th>Was passiert</th></tr>
<tr><td><b>reales Modell</b></td><td>Ein Anderer (Person, Tier) zeigt ein Verhalten und dessen Konsequenz.</td></tr>
<tr><td><b>symbolisch-verbales Modell</b></td><td>Ein Anderer beschreibt ein Verhalten und instruiert, wie man es ausführt.</td></tr>
<tr><td><b>symbolisch-bildhaftes Modell</b></td><td>Ein Medium zeigt das Verhalten (Film usw.).</td></tr>
<tr><td><b>imaginäres Modell</b></td><td>Ein vorgestellter Anderer dient als Vorbild.</td></tr></table>`,
check:[
 {q:"Eine Sportlehrerin erklärt nur mit Worten, wie der Handstand geht, ohne ihn vorzumachen. Welches Modell ist das?", o:["Reales Modell","Symbolisch-verbales Modell","Symbolisch-bildhaftes Modell","Imaginäres Modell"], a:1, ex:"Das Verhalten wird beschrieben und es wird instruiert, wie man es ausführt.", w:["Ein reales Modell würde den Handstand selbst vormachen.",null,"Symbolisch-bildhaft wäre ein Video oder ein Bild.","Imaginär wäre ein vorgestelltes Vorbild, kein Mensch, der gerade spricht."]},
 {q:"Was ist der Kern von Banduras Theorie des sozialen Lernens?", o:["Lernen geschieht nur durch eigene Konsequenzen","Lernen ist vor allem in soziale Kontexte eingebettet","Lernen ist angeboren","Lernen braucht immer Belohnung"], a:1, ex:"Höhere Lebewesen lernen nicht isoliert, sondern zunächst und vor allem im sozialen Kontext.", w:["Eigene Konsequenzen sind operante Konditionierung. Bandura betont das Lernen von anderen.",null,"Angeborenes ist gerade kein Lernen.","Beobachtungslernen findet auch ohne Belohnung des Beobachters statt."]}
]},
{id:"12-2", t:"Beobachtungslernen und Abgrenzung", html:`
<p>Beim <b>Beobachtungslernen</b> ändert sich das Verhalten (Verhaltenskopie), nachdem das Individuum (Mensch oder Tier) ein Modell bei der Ausführung einer Handlung beobachtet hat.</p>
<ul><li>Es ist <b>unabhängig davon, ob Beobachter oder Modell sich bewusst sind, dass gelernt wird</b>.</li>
<li>Weil die Leistung davon profitiert, ein anderes, im Idealfall <b>kompetenteres</b> Individuum zu beobachten, nutzt man es z. B. im <b>Sport</b> oder in der <b>Verhaltenstherapie</b>.</li></ul>
<p>Abzugrenzen sind einfachere Formen sozialer Verhaltensbeeinflussung, die typischerweise nur zu <b>kurzfristiger</b> Verhaltensänderung führen:</p>
<table class="kvq"><tr><th>Form</th><th>Was passiert</th><th>Beispiel</th></tr>
<tr><td><b>Verhaltensansteckung</b></td><td>Ausführung (mehr oder weniger) instinktiver Verhaltensmuster nach Beobachtung bei einem Artgenossen</td><td>gähnen, fliehen, lachen</td></tr>
<tr><td><b>Aufmerksamkeitslenkung</b></td><td>Das Verhalten eines Artgenossen verändert die Salienz eines Reizes</td><td>Zeigegeste</td></tr></table>
<div class="merk"><b>Merksatz</b>Beobachtungslernen: eine neue Verhaltenskopie, die bleibt. Ansteckung und Aufmerksamkeitslenkung: kurzfristig, ohne dass etwas Neues erworben wird.</div>`,
check:[
 {q:"Im Klassenraum gähnt eine Schülerin, kurz darauf gähnen drei weitere. Was liegt vor?", o:["Beobachtungslernen","Verhaltensansteckung","Aufmerksamkeitslenkung","Stellvertretende Verstärkung"], a:1, ex:"Ein instinktives Verhaltensmuster wird nach Beobachtung ausgeführt, kurzfristig und ohne Erwerb von etwas Neuem.", w:["Beobachtungslernen erwirbt ein neues Verhalten dauerhaft. Gähnen ist instinktiv.",null,"Aufmerksamkeitslenkung hieße, dass ein Reiz durch das Verhalten anderer auffälliger wird, etwa durch Zeigen.","Hier wird nichts verstärkt, das Gähnen wird einfach ausgelöst."]},
 {q:"Was gilt laut Folie für Beobachtungslernen?", o:["Es setzt voraus, dass das Modell bewusst lehren will","Es findet ausschließlich bei Menschen statt, nicht bei Tieren","Es ist unabhängig davon, ob das Lernen bewusst geschieht","Es führt nur zu einer kurzfristigen Änderung im Verhalten"], a:2, ex:"Weder Beobachter noch Modell müssen wissen, dass gelernt wird.", w:["Das Modell muss nichts davon wissen.","Die Folie nennt ausdrücklich Mensch und Tier.",null,"Kurzfristig sind gerade die einfacheren Formen wie Verhaltensansteckung."]}
]},
{id:"12-3", t:"Determinanten und Selbstwirksamkeitserwartung", html:`
<p>Ob beobachtetes Verhalten übernommen wird, hängt ab von:</p>
<table class="kvq"><tr><th>Determinante</th><th>Wirkung</th></tr>
<tr><td><b>beobachtete Konsequenzen für das Modell</b></td><td>Je positiver, desto eher wird das Verhalten übernommen.</td></tr>
<tr><td><b>Konsequenzen für den Beobachter</b></td><td>Je positiver, desto eher wird es wiederholt (vgl. „see aggression, do aggression“, <b>Bobo-Doll-Experimente</b> der 1960er).</td></tr>
<tr><td><b>Eigenschaften des Modells</b></td><td>Je attraktiver und ähnlicher dem Beobachter, desto eher wird übernommen.</td></tr>
<tr><td><b>Fähigkeiten des Beobachters</b></td><td>Er muss grundsätzlich in der Lage sein, das Verhalten auszuführen.</td></tr>
<tr><td><b>Lerngeschichte des Beobachters</b></td><td>Bisherige Erfahrungen mit dem Übernehmen von Modellverhalten (→ Selbstwirksamkeitserwartung).</td></tr></table>
<p>Bandura geht davon aus, dass Lernprozesse stark von <b>kognitiven Bewertungsprozessen</b> abhängen. Die wichtigste ist die <b>Selbstwirksamkeitserwartung</b>: die Beurteilung der eigenen Fähigkeiten, ein Zielverhalten zu planen und auszuführen.</p>
<ul><li>Relevant ist <b>nicht das tatsächliche Können</b>, sondern die individuelle Beurteilung, was man mit seinen Fähigkeiten erreichen kann.</li>
<li>Lernen wird wahrscheinlicher, wenn die Selbstwirksamkeitserwartung positiv ist, also ein Ergebnis als möglich erkannt wird.</li></ul>
<div class="merk"><b>Schulbezug</b>Ein Mitschüler als Modell wirkt oft besser als die Lehrkraft, weil er ähnlicher ist. Wer sieht, dass ein ähnlicher Schüler die Aufgabe schafft und dafür gelobt wird, traut es sich eher selbst zu.</div>`,
check:[
 {q:"Welches Modell wird laut Folie am ehesten nachgeahmt?", o:["Ein unbekanntes Modell, das dem Beobachter sehr unähnlich ist","Ein attraktives Modell, das dem Beobachter ähnlich ist","Ein Modell, das für sein Verhalten sichtbar bestraft wird","Ein Modell, dessen Verhalten der Beobachter nicht ausführen kann"], a:1, ex:"Attraktivität und Ähnlichkeit des Modells erhöhen die Wahrscheinlichkeit der Übernahme.", w:["Unähnlichkeit senkt die Übernahme.",null,"Negative beobachtete Konsequenzen machen die Übernahme unwahrscheinlicher.","Der Beobachter muss das Verhalten grundsätzlich ausführen können."]},
 {q:"Was ist bei der Selbstwirksamkeitserwartung entscheidend?", o:["Das tatsächliche, messbare Können der Person","Die eigene Beurteilung, was man erreichen kann","Die Bewertung der Person durch die Lehrkraft","Die Zahl der bisher erhaltenen Belohnungen"], a:1, ex:"Nicht das Können zählt, sondern die subjektive Einschätzung, ein Ergebnis zu erreichen.", w:["Die Folie betont ausdrücklich, dass es nicht um das tatsächliche Können geht.",null,"Es ist eine Selbstbeurteilung, keine Fremdbeurteilung.","Belohnungen können die Lerngeschichte prägen, entscheidend ist aber die eigene Beurteilung."]}
]}
];

CARDS[12]=[
 {id:"c12-01", f:"Banduras Theorie des sozialen Lernens: Kernannahme", b:"Höhere Lebewesen lernen nicht in Isolation, sondern zunächst und vor allem eingebettet in soziale Kontexte."},
 {id:"c12-02", f:"Drei Begriffe unter dem Dach des sozialen Lernens", b:"Beobachtungslernen (observational learning)\nImitationslernen (imitation learning)\nstellvertretendes Lernen (vicarious learning)"},
 {id:"c12-03", f:"Modell (beim sozialen Lernen)", b:"Eine Verhaltensvorgabe, die vom Beobachter erworben werden soll."},
 {id:"c12-04", f:"Die vier Arten von Modellen", b:"Real: ein Anderer zeigt Verhalten und Konsequenz\nSymbolisch-verbal: ein Anderer beschreibt und instruiert\nSymbolisch-bildhaft: ein Medium (Film) zeigt das Verhalten\nImaginär: ein vorgestellter Anderer als Vorbild"},
 {id:"c12-05", f:"Beobachtungslernen", b:"Verhaltensänderung (Verhaltenskopie), nachdem ein Individuum ein Modell bei der Ausführung einer Handlung beobachtet hat. Unabhängig davon, ob Beobachter oder Modell sich des Lernens bewusst sind."},
 {id:"c12-06", f:"Wo wird Beobachtungslernen gezielt genutzt?", b:"Im Sport und in der Verhaltenstherapie, weil die Leistung davon profitiert, ein (im Idealfall kompetenteres) Modell zu beobachten."},
 {id:"c12-07", f:"Verhaltensansteckung", b:"Ausführung (mehr oder weniger) instinktiver Verhaltensmuster nach Beobachtung bei einem Artgenossen, z. B. gähnen, fliehen, lachen. Kurzfristig, kein Beobachtungslernen."},
 {id:"c12-08", f:"Aufmerksamkeitslenkung", b:"Verhaltensänderung, weil das Verhalten eines Artgenossen die Salienz eines Reizes verändert, z. B. durch Zeigegesten. Kurzfristig, kein Beobachtungslernen."},
 {id:"c12-09", f:"Fünf Determinanten des Beobachtungslernens", b:"beobachtete Konsequenzen für das Modell\nKonsequenzen für den Beobachter\nEigenschaften des Modells (attraktiv, ähnlich)\nFähigkeiten des Beobachters\nLerngeschichte des Beobachters"},
 {id:"c12-10", f:"Bobo-Doll-Experimente (1960er)", b:"Beleg für „see aggression, do aggression“: Kinder übernehmen beobachtetes aggressives Verhalten, besonders wenn die Konsequenzen positiv sind."},
 {id:"c12-11", f:"Selbstwirksamkeitserwartung", b:"Beurteilung der eigenen Fähigkeiten zur Planung und Ausführung eines Zielverhaltens. Relevant ist nicht das tatsächliche Können, sondern die eigene Beurteilung. Positive Erwartung macht Lernen wahrscheinlicher."}
];
Object.assign(CARD_INFO,{
 "c12-01":"Albert Bandura (1925–2021), kanadisch-amerikanischer Psychologe.",
 "c12-02":"Vicarious: englisch „stellvertretend“.",
 "c12-08":"Salienz: wie auffällig ein Reiz ist.",
 "c12-10":"Bobo: aufblasbare Stehaufpuppe, die Kinder nach einem aggressiven Modell schlugen."
});
Object.assign(CARD_CTX,{
 "c12-01":"Lernen von anderen","c12-02":"Was zum sozialen Lernen gehört","c12-03":"Zentraler Begriff","c12-04":"Wer oder was als Vorbild dient",
 "c12-05":"Die eigentliche Lernform","c12-06":"Anwendung","c12-07":"Abgrenzung: kurzfristig","c12-08":"Abgrenzung: kurzfristig",
 "c12-09":"Wovon die Übernahme abhängt","c12-10":"Ein klassischer Befund","c12-11":"Kognitive Bewertung nach Bandura"
});

KREUZ.push(
 {id:"x11-01", ch:11, stem:"Für Verstärkungspläne gilt:", s:[
  ["Kontinuierliche Verstärkung führt rasch zum Erwerb des angestrebten Verhaltens.", true, "So auf der Folie: CRF führt rasch zum Erwerb."],
  ["Kontinuierlich verstärktes Verhalten ist extinktionsresistenter als intermittierend verstärktes.", false, "Umgekehrt: <b>Intermittierende</b> Verstärkung ist extinktionsresistenter (partieller Verstärkungseffekt)."],
  ["Bei einem festen Intervallplan zeigen sich typischerweise FI-Bögen.", true, "Pause nach der Verstärkung, dann beschleunigte Reaktion."]]},
 {id:"x11-02", ch:11, stem:"In Bezug auf operante Konsequenzen gilt:", s:[
  ["Bei negativer Verstärkung wird ein aversiver Reiz entfernt.", true, "Das Verhalten wird häufiger, weil etwas Unangenehmes wegfällt."],
  ["Negative Bestrafung bedeutet, dass ein unangenehmer Reiz dargeboten wird.", false, "Das ist <b>positive</b> Bestrafung. Bei negativer Bestrafung wird ein <b>appetitiver</b> Reiz entzogen."],
  ["Wenn positive Bestrafung eingesetzt wird, dann ohne Verzögerung und nicht intermittierend.", true, "So die Bedingungen auf der Folie."]]},
 {id:"x11-03", ch:11, stem:"Für das instrumentelle Lernen gilt:", s:[
  ["Je größer der zeitliche Abstand zwischen Verhalten und Verstärkung, desto schneller der Erwerb.", false, "Kontiguität: Je <b>geringer</b> der Abstand, desto schneller der Erwerb."],
  ["Zentral für erlernte Hilflosigkeit ist ein Mangel an Kontingenz von Verhalten und Konsequenz.", true, "Die Person erfährt, dass ihre Reaktion die Konsequenz nicht kontrolliert."],
  ["Erlernte Hilflosigkeit geht mit einer verminderten Lernfähigkeit einher.", true, "Neben Stress, Angst, Apathie und Depression."]]},
 {id:"x12-01", ch:12, stem:"Für das Beobachtungslernen gilt:", s:[
  ["Beobachtungslernen setzt voraus, dass sich das Modell bewusst ist, dass es beobachtet wird.", false, "Es ist <b>unabhängig</b> davon, ob Beobachter oder Modell sich des Lernens bewusst sind."],
  ["Je ähnlicher das Modell dem Beobachter ist, desto wahrscheinlicher wird das Verhalten übernommen.", true, "Attraktivität und Ähnlichkeit sind Eigenschaften des Modells, die die Übernahme fördern."],
  ["Verhaltensansteckung ist eine Form des Beobachtungslernens mit dauerhafter Verhaltensänderung.", false, "Sie wird vom Beobachtungslernen <b>abgegrenzt</b> und führt typischerweise nur zu kurzfristiger Änderung."]]},
 {id:"x12-02", ch:12, stem:"In Bezug auf Banduras soziale Lerntheorie gilt:", s:[
  ["Die Selbstwirksamkeitserwartung beschreibt das tatsächliche Können einer Person.", false, "Relevant ist die <b>individuelle Beurteilung</b>, nicht das tatsächliche Können."],
  ["Lernprozesse hängen stark von kognitiven Bewertungsprozessen des Individuums ab.", true, "Das ist eine Grundannahme Banduras."],
  ["Auch ein Film kann als Modell dienen.", true, "Symbolisch-bildhaftes Modell."]]}
);

KURZ.push(
 {id:"k11-1", ch:11, pts:10, klausur:"WiSe 24/25",
  q:"Die Lerntheorie nach Skinner unterscheidet vier operante Konsequenzen. Fallbeispiel: Michael spielt in einem Fußballverein. Während eines Spiels foult ihn ein gegnerischer Spieler, woraufhin Michael dem Spieler eine Ohrfeige verpasst. Der Trainer erteilt Michael für zwei Wochen Trainingsverbot. Als Michael danach wieder spielt und erneut gefoult wird, reißt er sich zusammen. a) Benennen Sie die Art der operanten Konsequenz (2 P.). b) Beschreiben Sie den Mechanismus allgemein und identifizieren Sie den relevanten Aspekt im Fall (4 P.). c) Welche Effekte sind für künftiges Verhalten allgemein und im konkreten Fall zu erwarten? (4 P.)",
  k:["a) Negative Bestrafung","b) allgemein: Eine appetitive (angenehme) Konsequenz wird entnommen","b) konkret: Der Trainer entzieht ihm für zwei Wochen das Training bzw. Fußballspielen","c) allgemein: Die Auftretenshäufigkeit des Verhaltens sinkt","c) konkret: Michael schlägt seinen Gegenspieler beim nächsten Foul nicht"],
  m:"a) Es handelt sich um eine negative Bestrafung. b) Allgemein bedeutet das, dass eine appetitive Konsequenz entnommen wird. Im konkreten Fall entzieht der Trainer Michael für zwei Wochen das Training, also das Fußballspielen. c) Allgemein ist zu erwarten, dass die Auftretenshäufigkeit des bestraften Verhaltens sinkt. Im konkreten Fall zeigt sich der Lerneffekt darin, dass Michael seinem Gegenspieler nach einem Foul keine Ohrfeige mehr gibt."},
 {id:"k11-2", ch:11, pts:8,
  q:"Frau Schmidt kauft ihrer quengelnden Tochter Lina im Supermarkt nach einiger Zeit eine Süßigkeit. Beim nächsten Einkauf quengelt Lina wieder, und die Mutter kauft die Süßigkeit sofort. Beschreiben Sie die Situation mit Konzepten operanten Lernens, einmal mit Fokus auf die Mutter und einmal mit Fokus auf Lina.",
  k:["Fokus Mutter: Verhalten = Süßigkeit kaufen","Konsequenz: Quengeln/Weinen (aversiv) hört auf → negative Verstärkung","Kaufen wird häufiger, sie kauft sogar früher (bevor es eskaliert)","Fokus Lina: Verhalten = Quengeln/Weinen","Konsequenz: Süßigkeit (appetitiv) wird dargeboten → positive Verstärkung","Quengeln wird häufiger; beide verstärken sich gegenseitig"],
  m:"Mit Fokus auf die Mutter: Ihr Verhalten ist das Kaufen der Süßigkeit. Darauf hört das Quengeln und Weinen auf, ein aversiver Reiz wird also entfernt. Das ist negative Verstärkung, das Kaufen wird häufiger; beim nächsten Einkauf kauft sie schon, bevor die Situation eskaliert. Mit Fokus auf Lina: Ihr Verhalten ist das Quengeln und Weinen. Darauf folgt die Süßigkeit, ein appetitiver Reiz wird dargeboten. Das ist positive Verstärkung, das Quengeln wird häufiger, wie der nächste Einkauf zeigt. Mutter und Kind verstärken sich so gegenseitig."},
 {id:"k12-1", ch:12, pts:8,
  q:"Erläutern Sie, wovon es laut Bandura abhängt, ob Schülerinnen und Schüler das Verhalten eines Modells übernehmen. Leiten Sie zwei Konsequenzen für die Unterrichtsgestaltung ab.",
  k:["Beobachtete Konsequenzen für das Modell (je positiver, desto eher)","Konsequenzen für den Beobachter selbst","Eigenschaften des Modells: attraktiv, ähnlich","Fähigkeiten des Beobachters: muss Verhalten ausführen können","Lerngeschichte / Selbstwirksamkeitserwartung","zwei passende Konsequenzen, z. B. Mitschüler als Modell, erwünschtes Modellverhalten sichtbar loben, Aufgaben an Fähigkeiten anpassen"],
  m:"Übernommen wird Verhalten eher, wenn das Modell dafür positive Konsequenzen erfährt und wenn auch der Beobachter selbst positive Konsequenzen erlebt. Das Modell sollte attraktiv und dem Beobachter ähnlich sein. Der Beobachter muss grundsätzlich in der Lage sein, das Verhalten auszuführen, und seine Lerngeschichte spielt mit, vor allem seine Selbstwirksamkeitserwartung, also die eigene Beurteilung, das Ergebnis erreichen zu können. Für den Unterricht folgt daraus etwa, Mitschülerinnen und Mitschüler als Modelle einzusetzen, weil sie ähnlicher sind als die Lehrkraft, und erwünschtes Verhalten sichtbar zu verstärken, damit die Klasse die positiven Konsequenzen beobachtet. Aufgaben sollten so gestuft sein, dass die Lernenden sie sich zutrauen."}
);
OPEN.push({id:"o11-k1", ch:11, kind:"kurz", k:"k11-1", pts:10, title:"Operante Konditionierung"});
OPEN.push({id:"o12-k1", ch:12, kind:"kurz", k:"k12-1", pts:10, title:"Lernen am Modell"});
