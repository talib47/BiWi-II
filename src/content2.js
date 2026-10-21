/* ================= Kapitel 9: Lernen und nicht-assoziatives Lernen =================
   Grundlage: Folien Sitzung 2 (WiSe 26/27), Klausur WiSe 24/25 (Lehr-Lernpsychologie, Aufgaben 1 und 2), Lehrbuch Urhahne/Dresel/Fischer (2019) Kap. 1 */
LESSONS[9]=[
{id:"9-1", t:"Was ist Lernen?", html:`
<p>Heine stellt drei Definitionen von Lernen gegenüber:</p>
<table class="kvq"><tr><th></th><th>Definition</th><th>Fokus</th></tr>
<tr><td>1</td><td>Eine Veränderung als Folge der Auseinandersetzung mit der Umwelt</td><td>eher unspezifisch</td></tr>
<tr><td>2</td><td>Ein biologischer Prozess, der die Anpassung an die Umwelt bewirkt</td><td>eher evolutionär, auf das Ziel gerichtet</td></tr>
<tr><td>3</td><td>Ein Veränderungsprozess, durch den sich <b>Verhalten bzw. Verhaltenspotenzial</b> in Abhängigkeit von <b>Erfahrung konsistent und relativ dauerhaft</b> ändert</td><td>auf Art und Qualität der Veränderung</td></tr></table>
<p>Mit Definition 3 wird gearbeitet. Ihre drei Bausteine haben jeweils einen Haken:</p>
<p><b>1. Verhalten vs. Verhaltenspotenzial.</b> Lernen wird sichtbar, wenn sich das Verhalten ändert (tatsächliche <b>Performanz</b>). Aber:</p>
<ul><li>Nicht jede beobachtbare Verhaltensänderung ist Lernen. Sie kann auch auf <b>Reifung</b> (langfristig) oder <b>Ermüdung</b> (kurzfristig) beruhen.</li>
<li>Nicht jedes Lernen zeigt sich sofort im Verhalten. Es kann als <b>Verhaltenspotenzial</b> vorhanden sein, ohne dass es ausgeführt wird. Das ist ein <i>messtheoretisches Problem</i>.</li></ul>
<p><b>2. Konsistent und dauerhaft.</b> Die Veränderung muss über gleichartige Situationen hinweg und zeitlich stabil sein. Offen bleibt: Was sind „gleichartige“ Situationen, und wie lange ist „dauerhaft“? Eine kurzfristige Motivationsschwankung ist jedenfalls kein Lernen.</p>
<p><b>3. Erfahrungsbasiert.</b> Lernen hängt von Erfahrung ab, Reifung nicht. Dafür müssen Informationen aufgenommen, verarbeitet und gespeichert werden. Deshalb ist das <b>Gedächtnis</b> so wichtig für das Lernen. Die Abgrenzung zur Reifung ist trotzdem schwierig, weil auch manche Reifungsprozesse umweltabhängig sind (z. B. die frühe Entwicklung des Sehens).</p>
<div class="merk"><b>Schulbeispiele aus dem Lehrbuch (Urhahne et al., 2019, Kap. 1)</b><div class="mrows">
<div><span class="ml">Erfahrung statt Reifung</span><span>Zeigt die Lehrkraft den „Schweigefuchs“, wird die Klasse still. Das Handzeichen hat erst durch frühere Erfahrungen seine Wirkung bekommen. Krabbeln, Laufen und Sprechen beim Kleinkind kommen dagegen mit der Reifung.</span></div>
<div><span class="ml">Keine physiologischen Ursachen</span><span>Bleibt am Abend vor der Prüfung nichts mehr hängen, kann das an Krankheit, Übermüdung oder Alkohol liegen. Das ist dann kein Lernen und kein Vergessen.</span></div>
<div><span class="ml">Verhaltenspotenzial</span><span>Auch ein Kind, das stumm im Unterricht sitzt, kann lernen. Ob es gelernt hat, zeigt sich erst, wenn es die Fragen der Lehrkraft beantworten kann.</span></div>
<div><span class="ml">Relativ dauerhaft</span><span>Wer mit Messer und Gabel essen gelernt hat, kann es bei jeder Gelegenheit. Schulwissen (Wer war Franz Ferdinand?) wirkt weniger stabil, lässt sich aber oft mit passenden Hinweisreizen wieder abrufen. Erst wenn auch das scheitert, war die Veränderung nicht dauerhaft genug.</span></div></div></div>
<div class="merk"><b>So stand es in der Klausur WiSe 24/25</b><div class="mrows">
<div><span class="ml"><span class="vd f">falsch</span></span><span>„Jede beobachtbare Veränderung des Verhaltens ist das Ergebnis von Lernprozessen.“<br><span class="small muted">Grund: Reifung, Ermüdung</span></span></div>
<div><span class="ml"><span class="vd t">wahr</span></span><span>„Ein Lernprozess führt nicht unbedingt zu einer unmittelbar beobachtbaren Veränderung des Verhaltens.“<br><span class="small muted">Grund: Verhaltenspotenzial</span></span></div></div></div>`,
check:[
 {q:"Ein Kind kann nach den Ferien plötzlich höher springen. Warum ist das nicht automatisch Lernen?", o:["Weil Springen kein Verhalten ist","Weil die Veränderung auch auf Reifung, also körperlichem Wachstum, beruhen kann","Weil Lernen immer bewusst ist","Weil die Veränderung zu dauerhaft ist"], a:1, ex:"Nicht jede beobachtbare Verhaltensänderung ist Lernen. Reifung ist nicht erfahrungsbasiert."},
 {q:"Eine Schülerin hat eine Rechenstrategie verstanden, wendet sie in der Arbeit aber vor Aufregung nicht an. Was liegt vor?", o:["Kein Lernen","Lernen auf der Ebene des Verhaltenspotenzials","Habituation","Reifung"], a:1, ex:"Gelernt ist gelernt, auch wenn es sich (noch) nicht im Verhalten zeigt. Deshalb spricht Definition 3 von Verhalten bzw. Verhaltenspotenzial."}
]},
{id:"9-2", t:"Arten des Lernens im Überblick", html:`
<p>Grundsätzlich unterscheidet man zwei Typen:</p>
<ul><li><b>Nichtassoziatives Lernen:</b> Die Stärke oder Art einer Reaktion auf einen Reiz verändert sich, weil der Reiz <i>wiederholt</i> auftritt. Es wird nichts verknüpft.</li>
<li><b>Assoziatives Lernen:</b> Gelernt werden <b>Kontingenzen</b>, also das zeitliche Zusammenfallen von Ereignissen. Es entstehen Verknüpfungen (Assoziationen)
 <ul><li>zwischen zwei Reizen, S → S: <b>klassische Konditionierung</b>,</li>
 <li>zwischen einer Reaktion und einem Reiz, R → S: <b>operante Konditionierung</b>.</li></ul></li></ul>
<table class="kvq"><tr><th>Nichtassoziativ</th><th>Assoziativ</th></tr>
<tr><td>Habituation, Sensitivierung</td><td>klassische Konditionierung (S1 → S2)</td></tr>
<tr><td>Lernen durch wiederholte Reizdarbietung: perzeptuelles Lernen, Priming, „mere exposure“</td><td>operante Konditionierung (R → S)</td></tr></table>
<p class="small muted">S = Stimulus (Reiz), R = Response (Reaktion). Weitere Formen auf Heines Übersicht: Diskriminationstraining, räumliches Lernen.</p>
<div class="merk"><b>Merksatz</b><div class="mrows">
<div><span class="ml">Nichtassoziativ</span><span>ein Reiz, oft wiederholt, die Reaktion ändert sich</span></div>
<div><span class="ml">Assoziativ</span><span>zwei Ereignisse, die zusammen auftreten, werden verknüpft</span></div></div></div>`,
check:[
 {q:"Was wird beim assoziativen Lernen gelernt?", o:["Reaktionen auf einen einzigen wiederholten Reiz","Kontingenzen, also das gemeinsame Auftreten von Ereignissen","Reflexe","Reifungsprozesse"], a:1, ex:"Zum Beispiel, dass auf einen Ton Futter folgt (klassisch) oder dass auf ein Verhalten Lob folgt (operant)."},
 {q:"Welche Form gehört zum nichtassoziativen Lernen?", o:["Klassische Konditionierung","Operante Konditionierung","Habituation","Lernen am Modell"], a:2, ex:"Habituation und Sensitivierung sind die beiden basalen nichtassoziativen Lernprozesse."}
]},
{id:"9-3", t:"Reflexe und Habituation", html:`
<p>Betrachtet werden die einfachsten Reaktionen auf Reize, die angeborenen <b>Reflexe</b>. Reflexe sind <b>unwillkürlich</b>, <b>invariant</b> (immer gleich ablaufend) und <b>schnell</b>. Drei Arten:</p>
<table class="kvq"><tr><th>Reflex</th><th>Beispiel</th><th>durch Lernen veränderbar?</th></tr>
<tr><td>Eigenreflex (Reizort = Effektort)</td><td>Kniesehnenreflex (Patellarreflex)</td><td>nein</td></tr>
<tr><td>Fremdreflex (Reizort ≠ Effektort)</td><td>Lidschlussreflex</td><td>ja</td></tr>
<tr><td>koordinierte, komplexe Reflexbewegung</td><td>Schreckreflex</td><td>ja</td></tr></table>
<p><b>Habituation</b> ist die Abschwächung einer Reflexreaktion (Stärke, Häufigkeit) auf einen Reiz, der wiederholt auftritt. Man gewöhnt sich daran, etwa an das Ticken einer Uhr. Habituation ist ein Lernprozess, der die Anpassung an eine bestimmte Umwelt erlaubt.</p>
<p>Wie schnell und stark habituiert wird, hängt ab von</p>
<ul><li>der <b>Intensität</b> des Reizes (schwache Reize: leichter),</li><li>der <b>Regelmäßigkeit</b> des Auftretens,</li><li>dem <b>Intervall</b> zwischen den Reizen,</li><li>dem <b>tonischen Zustand</b> des Organismus, also dem allgemeinen Erregungsniveau (<b>Arousal</b>).</li></ul>
<p>Weitere Eigenschaften:</p>
<ul><li><b>Reversibel:</b> Nach einer Pause kehrt die Reaktion teilweise zurück (<b>Spontanerholung</b>). Eine erneute Habituation geht dann aber schneller, denn es wurde etwas gelernt.</li>
<li>Der Effekt ist <b>anfangs stark</b> (steiler Abfall der Reaktion) und flacht dann ab.</li>
<li><b>Stimulusspezifisch:</b> Bei einem neuen, unbekannten Reiz ist die ursprüngliche Reaktion sofort wieder da (<b>Dishabituation</b>).</li></ul>`,
check:[
 {q:"Welcher Reflex ist durch Lernen nicht veränderbar?", o:["Lidschlussreflex","Schreckreflex","Patellarreflex","Alle sind veränderbar"], a:2, ex:"Beim Eigenreflex sind Reiz- und Effektort gleich; laut Folie ist keine lernbedingte Veränderung möglich."},
 {q:"Eine Klasse hat sich an das Brummen des Beamers gewöhnt. Plötzlich piept der Rauchmelder, und alle schrecken hoch. Welche Eigenschaft der Habituation zeigt sich?", o:["Spontanerholung","Stimulusspezifität (Dishabituation)","Sensitivierung","Reversibilität"], a:1, ex:"Die Habituation gilt nur für den gewohnten Reiz. Ein neuer Reiz löst die volle Reaktion aus."}
]},
{id:"9-4", t:"Sensitivierung und der Schulalltag", html:`
<p><b>Sensitivierung</b> ist das Gegenstück zur Habituation: Die Reflexreaktion auf einen Reiz wird bei wiederholter Darbietung <b>stärker</b> (Reaktionsstärke, Häufigkeit).</p>
<p>Eigenschaften:</p>
<ul><li>Auslöser sind eine <b>hohe Reizintensität</b> und ein <b>hohes allgemeines Erregungsniveau</b>.</li>
<li>Es braucht <b>nur wenige Darbietungen</b>.</li>
<li><b>Weniger stimulusspezifisch</b> als Habituation: Sensitivierung gegenüber Reiz 1 kann auch die Reaktion auf Reiz 2 verstärken, weil das allgemeine Erregungsniveau steigt.</li>
<li>Die <b>„Failure-to-habituate“-Theorie</b> erklärt damit z. B. Symptome bei posttraumatischer Belastungsstörung (PTBS): Die Betroffenen gewöhnen sich nicht an Reize, sondern reagieren immer stärker.</li></ul>
<table class="kvq"><tr><th></th><th>Habituation</th><th>Sensitivierung</th></tr>
<tr><td>Reaktion</td><td>wird schwächer</td><td>wird stärker</td></tr>
<tr><td>Reizintensität</td><td>eher gering</td><td>hoch</td></tr>
<tr><td>Erregungsniveau</td><td>eher niedrig</td><td>hoch</td></tr>
<tr><td>Spezifität</td><td>stimulusspezifisch</td><td>weniger spezifisch</td></tr></table>
<div class="merk"><b>Beispiel aus der Vorlesung</b>Im normalen Lernalltag stört das Schniefen des Sitznachbarn nicht (Habituation). In der Klausur ist das Erregungsniveau hoch: Man nimmt das Geräusch plötzlich wahr, kann es nicht mehr ausblenden, und es wirkt immer lauter (Sensitivierung).</div>
<p><b>Schulbezug:</b> In ersten Klassen wurden im Unterricht durchschnittlich 60 bis 85 dB gemessen (Schönwälder et al., 2004), eine Bohrmaschine liegt bei etwa 90 dB. Lärm und Prüfungsstress erhöhen das Erregungsniveau und begünstigen damit Sensitivierung. Für Lehrkräfte heißt das: Lärm senken und eine ruhige Atmosphäre schaffen, besonders in Prüfungen.</p>`,
check:[
 {q:"Unter welchen Bedingungen ist Sensitivierung besonders wahrscheinlich?", o:["Geringe Reizintensität, niedriges Erregungsniveau","Hohe Reizintensität, hohes Erregungsniveau","Viele regelmäßige Wiederholungen eines schwachen Reizes","Wenn der Reiz neu ist"], a:1, ex:"Bei schwachen, regelmäßigen Reizen und niedrigem Arousal tritt eher Habituation auf."},
 {q:"Nach einem lauten Knall zuckt man auch bei einer zufallenden Tür stark zusammen. Welche Eigenschaft der Sensitivierung zeigt sich?", o:["Stimulusspezifität","Sie ist weniger stimulusspezifisch","Spontanerholung","Dishabituation"], a:1, ex:"Das allgemeine Erregungsniveau ist gestiegen, deshalb wirkt sich die Sensitivierung auch auf andere Reize aus."}
]}
];

CARDS[9]=[
 {id:"c9-01", f:"Lernen: Arbeitsdefinition (Definition 3)", b:"Ein Veränderungsprozess, durch den sich Verhalten bzw. Verhaltenspotenzial in Abhängigkeit von Erfahrung konsistent und relativ dauerhaft ändert."},
 {id:"c9-02", f:"Die drei Lerndefinitionen und ihr Fokus", b:"1. Veränderung als Folge der Auseinandersetzung mit der Umwelt (eher unspezifisch)\n2. Biologischer Prozess der Anpassung an die Umwelt (eher evolutionär)\n3. Erfahrungsbedingte, konsistente, relativ dauerhafte Änderung von Verhalten bzw. Verhaltenspotenzial (Art und Qualität der Veränderung)"},
 {id:"c9-03", f:"Warum ist nicht jede Verhaltensänderung Lernen?", b:"Sie kann auch auf Reifung (langfristig, z. B. Wachstum) oder Ermüdung (kurzfristig) beruhen. Auch Krankheit, Alkohol oder Drogen erzeugen Veränderungen, die kein Lernen sind (Lehrbuch Kap. 1)."},
 {id:"c9-04", f:"Warum zeigt sich nicht jedes Lernen im Verhalten?", b:"Gelerntes kann als Verhaltenspotenzial vorhanden sein, ohne ausgeführt zu werden, weil die tatsächliche Ausführung von vielen Faktoren abhängt (z. B. Motivation, Aufregung). Ein messtheoretisches Problem."},
 {id:"c9-05", f:"Lernen vs. Reifung", b:"Lernen: erfahrungsabhängig. Informationen werden aufgenommen, verarbeitet und gespeichert (daher die Bedeutung des Gedächtnisses).\nReifung: nicht erfahrungsabhängig (z. B. Krabbeln, Laufen beim Kleinkind).\nProblem: Die Abgrenzung ist schwierig, weil auch manche Reifung umweltabhängig ist (frühe Entwicklung des Sehens)."},
 {id:"c9-06", f:"Nichtassoziatives vs. assoziatives Lernen", b:"Nichtassoziativ: Stärke oder Art einer Reaktion auf einen Reiz ändert sich durch wiederholte Darbietung (Habituation, Sensitivierung).\nAssoziativ: Lernen von Kontingenzen (gemeinsamem Auftreten) von Ereignissen, S → S (klassisch) oder R → S (operant)."},
 {id:"c9-07", f:"Kontingenz", b:"Das zeitliche Zusammenfallen bzw. die regelhafte Verknüpfung von Ereignissen, etwa Verhalten und Konsequenz."},
 {id:"c9-08", f:"Drei Eigenschaften von Reflexen", b:"unwillkürlich\ninvariant (stereotyp, immer gleich)\nschnell"},
 {id:"c9-09", f:"Eigenreflex, Fremdreflex, koordinierter Reflex", b:"Eigenreflex: Reizort = Effektort, z. B. Patellarreflex, nicht lernbar veränderbar\nFremdreflex: Reizort ≠ Effektort, z. B. Lidschlussreflex, veränderbar\nKoordinierte Reflexbewegung: z. B. Schreckreflex, veränderbar"},
 {id:"c9-10", f:"Habituation", b:"Abschwächung einer Reflexreaktion (Stärke, Häufigkeit) auf einen Reiz bei wiederholter Darbietung. Ermöglicht die Anpassung an eine bestimmte Umwelt (z. B. Gewöhnung an Straßenlärm)."},
 {id:"c9-11", f:"Vier Determinanten des Habituationsverlaufs", b:"Intensität des Reizes\nRegelmäßigkeit des Auftretens\nAuftretensintervall\ntonischer Zustand des Organismus (allgemeines Erregungsniveau, Arousal)"},
 {id:"c9-12", f:"Spontanerholung", b:"Nach einer Pause kehrt die habituierte Reaktion teilweise zurück. Die erneute Habituation erfolgt dann schneller, ein Hinweis darauf, dass gelernt wurde."},
 {id:"c9-13", f:"Dishabituation", b:"Weil Habituation stimulusspezifisch ist, zeigt sich bei einem neuen, unbekannten Reiz wieder die ursprüngliche volle Reaktion."},
 {id:"c9-14", f:"Sensitivierung", b:"Verstärkung einer Reflexreaktion (Stärke, Häufigkeit) auf einen Reiz bei wiederholter Darbietung."},
 {id:"c9-15", f:"Eigenschaften der Sensitivierung", b:"hohe Reizintensität und hohes allgemeines Erregungsniveau als Determinante\nnur geringe Expositionsraten nötig\nweniger stimulusspezifisch (S1 kann Reaktion auf S2 verstärken)\n„Failure-to-habituate“-Theorie, z. B. bei PTBS"},
 {id:"c9-16", f:"Habituation vs. Sensitivierung im Vergleich", b:"Reaktion: wird schwächer / wird stärker\nReizintensität: eher gering / hoch\nErregungsniveau: eher niedrig / hoch\nSpezifität: stimulusspezifisch / weniger spezifisch"},
 {id:"c9-17", f:"Sensitivierung in der Klausursituation", b:"Hohes Erregungsniveau (Stress) begünstigt Sensitivierung: Geräusche, die man sonst nicht bemerkt (Schniefen, Tüte), werden wahrgenommen, nicht mehr ausgeblendet und wirken immer lauter.\nSchulbezug: Unterrichtslärm von 60–85 dB in ersten Klassen (Schönwälder et al., 2004)."}
];

Object.assign(CARD_INFO,{
 "c9-02":"Evolutionär: auf die Anpassung einer Art an ihre Umwelt bezogen (Darwin).",
 "c9-04":"Performanz: das tatsächlich gezeigte Verhalten, im Unterschied zum Potenzial.",
 "c9-06":"Assoziation: lateinisch associare, „verbinden“.\nS: Stimulus, Reiz.\nR: Response, Reaktion.",
 "c9-07":"Kontingenz: lateinisch contingere, „berühren, zusammentreffen“.",
 "c9-08":"Invariant: lateinisch „unveränderlich“.\nStereotyp: immer nach demselben Muster.",
 "c9-09":"Patellarreflex: Schlag unter die Kniescheibe (lateinisch patella) lässt das Bein nach vorn schnellen.",
 "c9-10":"Habituation: lateinisch habituari, „sich gewöhnen“.",
 "c9-11":"Tonisch: dauerhaft anhaltend, im Gegensatz zu kurzfristig (phasisch).\nArousal: englisch „Erregung“.",
 "c9-14":"Sensitivierung: von lateinisch sentire, „fühlen“. Man wird empfindlicher.",
 "c9-15":"PTBS: posttraumatische Belastungsstörung, anhaltende Reaktion nach einem traumatischen Erlebnis.\nExposition: lateinisch „Aussetzen“, hier: dem Reiz ausgesetzt sein.",
 "c9-17":"dB: Dezibel, Maß für Lautstärke. +10 dB werden etwa als doppelt so laut empfunden."
});
Object.assign(CARD_CTX,{
 "c9-01":"Womit die Lehr-Lernpsychologie arbeitet","c9-02":"Drei Blickwinkel auf Lernen","c9-03":"Erster Haken an der Lerndefinition","c9-04":"Zweiter Haken an der Lerndefinition",
 "c9-05":"Dritter Haken an der Lerndefinition","c9-06":"Die zwei Grundtypen des Lernens","c9-07":"Was beim assoziativen Lernen gelernt wird","c9-08":"Die einfachsten Reaktionen auf Reize",
 "c9-09":"Welche Reflexe sich durch Lernen ändern","c9-10":"Erster nichtassoziativer Lernprozess","c9-11":"Wovon Gewöhnung abhängt","c9-12":"Eigenschaft der Habituation",
 "c9-13":"Eigenschaft der Habituation","c9-14":"Zweiter nichtassoziativer Lernprozess","c9-15":"Wann Reaktionen stärker statt schwächer werden","c9-16":"Die beiden Prozesse gegenübergestellt","c9-17":"Anwendung auf Schule und Prüfungen"
});

KREUZ.push(
 {id:"x9-01", ch:9, stem:"In Bezug auf das menschliche Lernen gilt:", klausur:"WiSe 24/25", s:[
  ["Jede beobachtbare Veränderung auf der Ebene des Verhaltens ist das Ergebnis von Lernprozessen.", false, "Verhaltensänderungen können auch auf <b>Reifung</b> oder <b>Ermüdung</b> beruhen."],
  ["Hat ein Lernprozess stattgefunden, so führt das nicht unbedingt zu einer unmittelbar beobachtbaren Veränderung des Verhaltens.", true, "Gelerntes kann als Verhaltenspotenzial vorliegen."],
  ["Lernen führt dazu, dass sich das Verhalten oder Verhaltenspotenzial in Situationen dauerhaft ändert, die mit der Lernsituation vergleichbar sind.", true, "Konsistent über gleichartige Situationen und relativ dauerhaft."]]},
 {id:"x9-02", ch:9, stem:"Für nicht-assoziatives Lernen gilt:", klausur:"WiSe 24/25", s:[
  ["Je geringer die Reizintensität, desto wahrscheinlicher ist es, dass der Organismus sensitiviert.", false, "Umgekehrt: <b>Hohe</b> Reizintensität begünstigt Sensitivierung, geringe eher Habituation."],
  ["Die Habituation ist stimulusspezifisch.", true, "Bei einem neuen Reiz kehrt die volle Reaktion zurück (Dishabituation)."],
  ["Je höher der allgemeine Erregtheitszustand des Organismus ist, desto wahrscheinlicher ist es, dass Sensitivierungsprozesse stattfinden.", true, "Hohes Arousal ist neben hoher Reizintensität die Determinante der Sensitivierung."]]},
 {id:"x9-03", ch:9, stem:"Für Reflexe gilt:", s:[
  ["Reflexe sind unwillkürliche, invariante und schnelle Reaktionen auf spezifische Reize.", true, "So definiert auf der Folie."],
  ["Der Patellarreflex kann durch Lernprozesse verändert werden.", false, "Als <b>Eigenreflex</b> (Reizort = Effektort) ist er laut Folie nicht lernbedingt veränderbar."],
  ["Der Lidschlussreflex ist ein Fremdreflex.", true, "Reizort (z. B. Luftstoß aufs Auge) und Effektort (Lidmuskel) sind verschieden. Fremdreflexe sind lernbar veränderbar."]]},
 {id:"x9-04", ch:9, stem:"Für die Habituation gilt:", s:[
  ["Habituation ist reversibel.", true, "Nach einer Pause zeigt sich Spontanerholung."],
  ["Nach einer Spontanerholung erfolgt die erneute Habituation langsamer als beim ersten Mal.", false, "Sie erfolgt <b>schneller</b>, ein Zeichen dafür, dass gelernt wurde."],
  ["Der Habituationseffekt ist anfangs stark und schwächt sich im Verlauf der Exposition ab.", true, "Steiler Abfall der Reaktion zu Beginn, dann flacher."]]},
 {id:"x9-05", ch:9, stem:"Für die Sensitivierung gilt:", s:[
  ["Für eine Sensitivierung sind meist viele Darbietungen des Reizes nötig.", false, "Es reichen <b>geringe Expositionsraten</b>."],
  ["Sensitivierung ist weniger stimulusspezifisch als Habituation.", true, "Sensitivierung gegenüber S1 kann die Reaktion auf S2 verstärken."],
  ["Die „Failure-to-habituate“-Theorie wird z. B. zur Erklärung von Symptomen bei PTBS herangezogen.", true, "Betroffene gewöhnen sich nicht an Reize, sondern reagieren verstärkt."]]},
 {id:"x9-06", ch:9, stem:"Für die Unterscheidung von Lernformen gilt:", s:[
  ["Beim assoziativen Lernen werden Kontingenzen von Ereignissen gelernt.", true, "Also das gemeinsame Auftreten, z. B. Reiz und Reiz oder Reaktion und Reiz."],
  ["Bei der operanten Konditionierung wird eine Verbindung zwischen zwei Reizen (S → S) gelernt.", false, "S → S ist die <b>klassische</b> Konditionierung. Operant wird R → S gelernt."],
  ["Priming und „mere exposure“ gehören zum Lernen infolge wiederholter Reizdarbietung.", true, "So geordnet in Heines Übersicht, neben Habituation und Sensitivierung."]]}
);

KURZ.push(
 {id:"k9-1", ch:9, pts:6,
  q:"Erläutern Sie die Definition von Lernen als „Veränderungsprozess, der dazu führt, dass sich Verhalten bzw. Verhaltenspotenzial in Abhängigkeit von Erfahrung konsistent und relativ dauerhaft ändert“. Gehen Sie auf je ein Problem der drei Bestandteile ein.",
  k:["Verhalten vs. Verhaltenspotenzial erläutert (Performanz)","Problem: nicht jede Verhaltensänderung ist Lernen (Reifung, Ermüdung) bzw. nicht jedes Lernen ist sichtbar","Konsistent und dauerhaft: stabil über gleichartige Situationen und über die Zeit","Problem: unklar, was gleichartige Situationen sind und wie lange dauerhaft ist","Erfahrungsbasiert: Information wird aufgenommen, verarbeitet, gespeichert (Gedächtnis)","Problem: Abgrenzung zur Reifung, da auch Reifung umweltabhängig sein kann"],
  m:"Lernen zeigt sich in Verhaltensänderungen, also in der Performanz. Allerdings ist nicht jede Verhaltensänderung Lernen (Reifung, Ermüdung), und nicht jedes Lernen ist sofort sichtbar, weil es als Verhaltenspotenzial vorliegen kann. Die Veränderung muss konsistent über gleichartige Situationen und relativ dauerhaft sein; offen bleibt, was gleichartige Situationen sind und wie dauerhaft eine Änderung sein muss. Schließlich ist Lernen erfahrungsbasiert: Informationen werden aufgenommen, verarbeitet und gespeichert, weshalb das Gedächtnis zentral ist. Die Abgrenzung zur Reifung bleibt schwierig, da auch Reifungsprozesse umweltabhängig sein können, etwa die frühe Entwicklung des visuellen Systems."},
 {id:"k9-2", ch:9, pts:6,
  q:"Ein Schüler bemerkt im Unterricht das Ticken der Wanduhr nicht. In der Klassenarbeit stört ihn dasselbe Ticken so sehr, dass er sich nicht konzentrieren kann. Erklären Sie beide Beobachtungen mit nichtassoziativen Lernprozessen und leiten Sie eine Handlungsmöglichkeit für die Lehrkraft ab.",
  k:["Unterricht: Habituation, Abschwächung der Reaktion bei wiederholtem Reiz","Bedingungen: schwacher, regelmäßiger Reiz, niedriges Erregungsniveau","Klassenarbeit: Sensitivierung, Verstärkung der Reaktion","Bedingung: hohes allgemeines Erregungsniveau (Prüfungsstress)","Weniger stimulusspezifisch: auch andere Geräusche stören stärker","Handlungsmöglichkeit, z. B. Störquellen beseitigen, Lärm senken, Stress reduzieren"],
  m:"Im Unterricht habituiert der Schüler: Das Ticken ist ein schwacher, regelmäßiger Reiz, sein Erregungsniveau ist niedrig, die Reaktion auf den Reiz schwächt sich ab. In der Klassenarbeit ist sein allgemeines Erregungsniveau durch den Prüfungsstress hoch. Das begünstigt Sensitivierung: Die Reaktion auf denselben Reiz wird stärker, er nimmt das Ticken wahr und kann es nicht mehr ausblenden. Da Sensitivierung weniger stimulusspezifisch ist, stören ihn auch andere Geräusche stärker. Die Lehrkraft kann Störquellen wie die Uhr entfernen, für eine ruhige Prüfungsatmosphäre sorgen und das Stressniveau senken, etwa durch klare Ansagen und einen ruhigen Einstieg."}
);
OPEN.push({id:"o9-k2", ch:9, kind:"kurz", k:"k9-2", pts:10, title:"Nichtassoziatives Lernen"});
