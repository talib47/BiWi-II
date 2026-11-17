/* ================= Kapitel 6: Exekutive Funktionen und Selbststeuerung =================
   Grundlage: Folien Sitzung 6 (WiSe 26/27, Input 2–4: Folien 14–41); Input 1 (KZG und AG, Folien 5–12) steht schon in Kapitel 2.
   Dazu Fragenkatalog „Fragen Heine“ (Nr. 49) und Lehrbuch Urhahne/Dresel/Fischer (2019) Kap. 5 und 15 (als lit markiert).
   Deutungen von Bild- und Grafikfolien sind als Ergänzung markiert (erg). */
LESSONS[6]=[
{id:"6-1", t:"Exekutive Funktionen: Was sie sind", html:`
<p>Heine beginnt mit einem Fall: <b>Phineas Gage</b> (1823–1869). Nach einer Kopfverletzung, bei der eine Eisenstange sein Stirnhirn durchschlug, veränderte sich sein Verhalten tiefgreifend. Heute heißt das Bild <b>Frontalhirnsyndrom</b>, im ICD-10 <b>F07.2: dysexekutives Syndrom</b> (nach Schädelhirntrauma). Kennzeichen:</p>
<ul><li><b>Impulsivität</b>, also mangelnde inhibitorische Kontrolle,</li>
<li>mangelnde kognitive <b>Flexibilität</b>, also ein Hang zur <b>Perseveration</b> (Festhalten an einer Reaktion),</li>
<li>eingeschränkte <b>Planungsfähigkeit</b>,</li>
<li>mangelnde <b>Überwachung</b> der Zielerreichung,</li>
<li>verminderte Fähigkeit zur <b>Parallelverarbeitung</b>, also Fehleranfälligkeit beim Dual-Tasking,</li>
<li>Unfähigkeit, <b>Regeln</b> zu beachten (kognitiv, emotional und sozial).</li></ul>
<p>Was hier ausfällt, sind die <b>exekutiven Funktionen</b>: ein Set kognitiver Prozesse, die <b>andere kognitive Prozesse</b> (z. B. Wahrnehmung, Gedächtnis) kontrollieren bzw. deren Zusammenspiel optimieren, um <b>zielgerichtetes Verhalten</b> zu ermöglichen. Deshalb heißen sie auch <b>metakognitive</b> Funktionen.</p>
<p>Der Begriff ist ein konzeptuelles <b>„Sammelbecken“</b>: Handlungsplanung, Problemlösen, Aufmerksamkeitssteuerung, Inhibition, mentale Flexibilität, Multi-Tasking, Monitoring-Prozesse und mehr.</p>
<div class="merk"><b>Merksatz</b>Exekutive Funktionen arbeiten nicht selbst an der Aufgabe, sie steuern die Prozesse, die daran arbeiten. „Meta“ heißt: über der Kognition.</div>
<p class="small muted">Folien 14–15 (Sitzung 6)</p>`,
check:[
 {q:"Warum nennt Heine exekutive Funktionen „metakognitiv“?", o:["Weil sie selbst Wahrnehmung und Gedächtnis ersetzen","Weil sie andere kognitive Prozesse kontrollieren","Weil sie erst nach der Pubertät überhaupt entstehen","Weil sie nur bei bewusstem Lernen beteiligt sind"], a:1, ex:"Sie kontrollieren andere kognitive Prozesse (z. B. Wahrnehmung, Gedächtnis) bzw. optimieren deren Zusammenspiel, um zielgerichtetes Verhalten zu ermöglichen.", w:["Sie ersetzen diese Prozesse nicht, sie steuern sie.",null,"Sie reifen spät, entstehen aber nicht erst dann; Inhibition hat schon im Vorschulalter einen Spurt.","Von „nur bewusst“ ist auf der Folie keine Rede; gemeint ist die Steuerung anderer Prozesse."]},
 {q:"Welches Merkmal gehört laut Folie zum dysexekutiven Syndrom (F07.2)?", o:["Hang zur Perseveration","Verbesserte Leistung beim Dual-Tasking","Starre, übergenaue Regelbefolgung","Verlust des Langzeitgedächtnisses"], a:0, ex:"Mangelnde kognitive Flexibilität zeigt sich als Hang zur Perseveration.", w:[null,"Umgekehrt: Die Fehleranfälligkeit beim Dual-Tasking steigt.","Umgekehrt: Typisch ist die Unfähigkeit, Regeln zu beachten.","Ein Gedächtnisverlust steht nicht in der Liste; betroffen ist die Steuerung."]}
]},
{id:"6-2", t:"Zentrale Exekutive und „Unity and Diversity“", html:`
<p>Ein erstes explizites Modell exekutiver Kontrolle ist die <b>zentrale Exekutive</b> im Arbeitsgedächtnismodell von <b>Baddeley & Hitch (1974)</b> (siehe Kapitel 2). Sie ist ein <b>unitäres</b> System, das den untergeordneten Systemen Verarbeitungsressourcen zuordnet, vor allem für</p>
<ul><li>Fokussierung und Teilung von Aufmerksamkeit,</li><li>die Verbindung zum Langzeitgedächtnis.</li></ul>
<p><b>Baddeley (1996)</b> nennt vier konkrete Aufgaben der zentralen Exekutive:</p>
<ol><li>Koordination unter <b>Dual-Task</b>-Bedingungen,</li><li>flexibles <b>Wechseln</b> zwischen Strategien,</li><li><b>Aufmerksamkeitsfokussierung</b> und Inhibition,</li><li>selektive Aktivierung, Aufrechterhaltung und Manipulation von Information aus dem <b>LZG</b>.</li></ol>
<p><b>Moderne Sicht: „Unity and Diversity“</b> nach <b>Miyake & Friedman</b> (Miyake et al., 2000). Ausgangspunkt: Man muss die Leistung bei <b>komplexen</b> Aufgaben, die exekutive Kontrolle fordern, von der Leistung bei Aufgaben unterscheiden, die nur auf <b>einzelne Aspekte</b> laden. Komplexe Aufgaben erfordern das Zusammenspiel unterscheidbarer Aspekte.</p>
<table class="kvq"><tr><th>Diversity</th><td>Mit <b>clusteranalytischen</b> Verfahren lassen sich drei zentrale Aspekte trennen:<br><b>Updating</b>: Überwachung und Aktualisierung von Arbeitsgedächtnisrepräsentationen<br><b>Inhibition</b>: Unterdrückung jeweils aktuell vorherrschender (kognitiver und motorischer) Antworttendenzen<br><b>Switching/Shifting</b>: kognitive Flexibilität, zwischen Strategien und mentalen Zuständen zu wechseln</td></tr>
<tr><th>Unity</th><td>Die drei Aspekte sind eindeutig zu trennen, aber <b>moderat miteinander korreliert</b>. Vermutung: <b>Inhibitorische</b> Prozesse liegen allen drei Teilfunktionen zugrunde.</td></tr></table>
<div class="merk"><b>Aus dem Fragenkatalog (Nr. 49)</b>Steuerung unter Aufwendung von Aufmerksamkeitsressourcen ist erforderlich beim Umgang mit unbekannten oder unerwarteten Situationen, bei kognitiven Konflikten und für die Unterdrückung präpotenter (vorherrschender) Antwortmuster.</div>
<p class="small muted">Folien 16–20 (Sitzung 6), dazu Folie 12 (zentrale Exekutive, SAS)</p>`,
check:[
 {q:"Was meint der „Unity“-Teil im Modell von Miyake et al. (2000)?", o:["Alle drei Aspekte lassen sich nicht voneinander trennen","Die Aspekte sind trennbar, aber moderat korreliert","Die Aspekte hängen nur über das Langzeitgedächtnis zusammen","Updating liegt allen anderen Teilfunktionen zugrunde"], a:1, ex:"Trennbar (Diversity), aber moderat korreliert (Unity). Vermutet wird eine gemeinsame inhibitorische Basis.", w:["Gerade die Trennbarkeit ist der Diversity-Teil.",null,"Das LZG spielt im Unity-Argument keine Rolle; es geht um gemeinsame Prozesse.","Vermutet wird <b>Inhibition</b> als gemeinsame Grundlage, nicht Updating."]},
 {q:"Welche Aufgabe nennt Baddeley (1996) für die zentrale Exekutive nicht?", o:["Koordination unter Dual-Task-Bedingungen","Flexibles Wechseln zwischen Strategien","Speichern sprachlicher Information","Aufmerksamkeitsfokussierung und Inhibition"], a:2, ex:"Sprachliche Information hält die phonologische Schleife. Die zentrale Exekutive verteilt Ressourcen, sie speichert nicht.", w:["Das ist die erste der vier Aufgaben.","Das ist die zweite der vier Aufgaben.",null,"Das ist die dritte der vier Aufgaben."]},
 {q:"Ein Schüler soll bei einer Rechenaufgabe die gewohnte Addition unterdrücken, weil diesmal subtrahiert wird. Welcher Aspekt ist gefordert?", o:["Updating","Inhibition","Switching/Shifting","Chunking"], a:1, ex:"Eine vorherrschende Antworttendenz (gewohnte Addition) wird unterdrückt.", w:["Updating aktualisiert Inhalte im Arbeitsgedächtnis; hier wird eine Reaktion gebremst.",null,"Switching ist der Wechsel selbst; der Kern hier ist das Unterdrücken der gewohnten Antwort.","Chunking bündelt Elemente im KZG und ist kein Aspekt exekutiver Kontrolle."]}
]},
{id:"6-3", t:"Wie man exekutive Prozesse misst", html:`
<p><b>Klassische komplexe Maße</b>, z. B. der <b>Wisconsin Card Sorting-Test</b> (WCST; Monchi et al., 2001). Er fordert mehrere Aspekte zugleich:</p>
<ul><li>Updating eines Situationsmodells,</li><li>Wechseln der Strategie,</li><li>Unterdrücken alter Antworttendenzen.</li></ul>
<p>Gemessen wird die <b>Perseveration</b>: Wie oft sortiert jemand nach der alten Regel weiter, obwohl sie nicht mehr gilt?</p>
<p><b>Experimentelle Paradigmen</b>, die auf <b>einzelne</b> Aspekte laden:</p>
<table class="kvq"><tr><th>Aspekt</th><th>Paradigma</th></tr>
<tr><td>Updating</td><td><b>n-back</b>-Aufgabe</td></tr>
<tr><td>Inhibition</td><td><b>stop-signal</b>-Aufgabe</td></tr>
<tr><td>Switching</td><td><b>global-local</b>-Aufgabe</td></tr></table>
<div class="ergbox"><p><span class="erg">Ergänzung</span> <b>So laufen die Aufgaben ab</b> (gedeutet aus den Bildern auf Folie 21–22):</p>
<ul><li><b>WCST:</b> Karten mit Symbolen werden nach einer unbekannten Regel (Farbe, Form oder Anzahl) zugeordnet. Die Rückmeldung zeigt, ob es stimmt. Ohne Ankündigung wechselt die Regel.</li>
<li><b>n-back:</b> Eine Folge von Buchstaben läuft durch. Man meldet, ob der aktuelle Buchstabe derselbe ist wie der vor n Schritten (1-back, 2-back …). Der Inhalt des Arbeitsgedächtnisses muss ständig aktualisiert werden.</li>
<li><b>stop-signal:</b> Auf einen Pfeil („GO“) schnell reagieren, aber die schon gestartete Reaktion abbrechen, wenn ein Stoppsignal erscheint.</li>
<li><b>global-local:</b> Eine große Figur besteht aus kleinen Figuren. Mal ist die große (global), mal die kleine Form (lokal) zu benennen; bei inkonsistenten Figuren muss man zwischen den Ebenen umschalten.</li></ul></div>
<p class="small muted">Folien 21–22 (Sitzung 6)</p>`,
check:[
 {q:"Welches Maß liefert der Wisconsin Card Sorting-Test?", o:["Die Gedächtnisspanne (7 ± 2)","Die Perseveration","Die Reaktionszeit beim Stoppen","Den Prozentrang im Updating"], a:1, ex:"Gemessen wird, wie oft jemand an der alten Sortierregel festhält.", w:["Die Spanne misst das KZG, nicht der WCST.",null,"Das Stoppen misst die stop-signal-Aufgabe (Inhibition).","Der WCST ist ein komplexes Maß über mehrere Aspekte, kein reines Updating-Maß."]},
 {q:"Welches Paradigma lädt vor allem auf Updating?", o:["Die global-local-Aufgabe","Die stop-signal-Aufgabe","Die n-back-Aufgabe","Der Marshmallow-Test"], a:2, ex:"Bei n-back muss der Inhalt des Arbeitsgedächtnisses laufend aktualisiert werden.", w:["global-local lädt auf Switching.","stop-signal lädt auf Inhibition.",null,"Der Marshmallow-Test misst Gratifikationsaufschub, also Selbststeuerung."]}
]},
{id:"6-4", t:"Entwicklung und Förderung", html:`
<p>Exekutive Funktionen gehören zu den <b>am spätesten reifenden</b> kognitiven Funktionen. Die Basis ist die späte Reifung des <b>präfrontalen Kortex</b> (PFC): Er erreicht in der Ontogenese als <b>letzte Hirnregion</b> die volle Reife, vor allem wegen der späten <b>Myelinisierung</b>, die erst in der <b>Adoleszenz</b> abgeschlossen ist.</p>
<p>Die Entwicklung ist <b>inhomogen</b>:</p>
<table class="kvq"><tr><th>Aspekt</th><th>Verlauf</th></tr>
<tr><td><b>Inhibition</b></td><td>gilt als Basis höherer exekutiver Funktionen; entwickelt sich <b>relativ früh</b>: Spurt im Vorschulalter, Reife mit <b>11–12 Jahren</b></td></tr>
<tr><td><b>Shifting und Updating</b></td><td>entwickeln sich länger, erwachsene Funktion etwa mit <b>15 Jahren</b></td></tr>
<tr><td><b>Komplexe Funktionen</b> (Planning, Sequencing, Dual-Tasking)</td><td>folgen <b>noch später</b></td></tr></table>
<p><b>Förderung: eine problematische Situation.</b> Es gibt keinen Mangel an Trainings, aber einen massiven Mangel an <b>sauber evaluierten</b> Zugängen, vor allem beim <b>Transfer</b> (Nahtransfer? Ferntransfer?). Umschriebene und kurzfristige Trainings (PC-basiert, aerober Sport) bringen ernüchternde Ergebnisse. Was funktioniert, sind <b>lebenspraktische und langfristige</b> Zugänge:</p>
<ul><li>Rollenspiele</li><li>Achtsamkeitstraining und Yoga</li><li>zweisprachige Erziehung</li><li>regelbasiertes Spiel</li><li>Gruppensport</li><li>Montessori-Curriculum</li></ul>
<p><b>EF-Intervention, nur komplex:</b> Laut <b>Diamond & Lee (2011)</b> lassen sich exekutive Funktionen schon mit 4–5 Jahren verbessern, durch <b>reguläre Lehrkräfte</b> in regulären Klassen ohne teure Ausstattung. Beispiel: <b>Tools of the Mind</b>.</p>
<ul><li>Hintergrund: <b>Vygotskys</b> Annahme, dass „<b>als-ob-Spiel</b>“ metakognitive Steuerung befördert,</li>
<li><b>40</b> EF-relevante Aktivitäten (z. B. Verbalisierung, Peer-„Scaffolding“, Einbettung in den Alltag),</li>
<li>Start im Vorschulalter (5;1 Jahre), Dauer 1 oder 2 Jahre,</li>
<li>richtungsweisendes Ergebnis aus <b>Diamond et al. (2007)</b>.</li></ul>
<div class="ergbox"><p><span class="erg">Ergänzung</span> Das Säulendiagramm auf Folie 26 vergleicht vermutlich Kinder aus Tools of the Mind mit einer Vergleichsgruppe in EF-Aufgaben: Die Tools-Kinder schneiden besser ab, besonders bei den Aufgaben mit den höchsten Anforderungen an exekutive Kontrolle. Die Kurven auf Folie 24 zeigen, dass die Leistung in Inhibition früh flach wird, Planen und Wortflüssigkeit dagegen bis ins Jugendalter steigen.</p></div>
<p class="small muted">Folien 23–26 (Sitzung 6)</p>`,
check:[
 {q:"Welcher Aspekt exekutiver Kontrolle reift laut Folie am frühesten?", o:["Shifting, mit etwa 15 Jahren","Inhibition, mit etwa 11–12 Jahren","Planning, schon im frühen Vorschulalter","Updating, mit etwa 6 Jahren"], a:1, ex:"Inhibition: Spurt im Vorschulalter, Reife mit 11–12 Jahren. Sie gilt als Basis höherer Funktionen.", w:["Shifting reift später, etwa mit 15 Jahren.",null,"Komplexe Funktionen wie Planning folgen am spätesten.","Updating reift wie Shifting erst etwa mit 15 Jahren."]},
 {q:"Was gilt laut Heine für Trainings exekutiver Funktionen?", o:["Kurze PC-Trainings zeigen guten Ferntransfer","Langfristige, lebenspraktische Zugänge wirken","Aerober Sport allein reicht als Förderung","Wirksam sind nur Trainings ab dem Jugendalter"], a:1, ex:"Ernüchternd sind umschriebene, kurzfristige Trainings; was funktioniert, sind lebenspraktische, langfristige Zugänge wie Rollenspiel oder Gruppensport.", w:["Gerade beim Transfer, besonders Ferntransfer, sind die Ergebnisse ernüchternd.",null,"Aerober Sport steht bei den ernüchternden Ergebnissen; wirksam ist Gruppensport als langfristiger Zugang.","Tools of the Mind setzt schon im Vorschulalter an (5;1 Jahre)."]},
 {q:"Warum reifen exekutive Funktionen so spät?", o:["Weil das Kleinhirn als letzte Region reift","Weil der präfrontale Kortex spät myelinisiert","Weil das Arbeitsgedächtnis erst ab 15 entsteht","Weil Schule sie erst ab Klasse 5 fordert"], a:1, ex:"Der PFC erreicht als letzte Hirnregion die volle Reife, die Myelinisierung endet erst in der Adoleszenz.", w:["Gemeint ist der präfrontale Kortex, nicht das Kleinhirn.",null,"Das Arbeitsgedächtnis gibt es früh; reif werden einzelne Aspekte wie Updating etwa mit 15.","Die Folie begründet es biologisch, mit der Hirnreifung."]}
]},
{id:"6-5", t:"Selbststeuerung: Marshmallow und Entwicklung", html:`
<p>Richtungsweisend sind <b>Walter Mischels</b> Studien der 1970er Jahre, das <b>Marshmallow-Experiment</b>. Gemessen wird der <b>Gratifikationsaufschub</b> als Maß für Selbststeuerung: die (meist kindliche) Kapazität, <b>kurzfristige</b> Bedürfnisbefriedigung zugunsten <b>langfristiger</b> Zielerreichung aufzuschieben. Mehr oder weniger erfolgreiche Selbststeuerung und die Strategien dahinter sind dabei unmittelbar erkennbar.</p>
<p><span class="lit">Lehrbuch</span> Im klassischen Aufbau bekommt ein Kind eine Süßigkeit sofort oder die doppelte Menge, wenn es allein im Raum wartet. Kindergartenkindern fällt das sehr schwer; leichter wird es, wenn sie an etwas Schönes denken. Ältere Kinder berichten selbst Ablenkungsstrategien (Kap. 15, S. 302 f.).</p>
<p><b>Warum ist Selbststeuerung entwicklungspsychologisch bedeutsam?</b></p>
<ul><li><b>Querschnittlich:</b> Die Steuerung eigener kognitiver, affektiver und behavioraler/motorischer Tendenzen sagt zu jedem Zeitpunkt psychologisches <b>Well-Being</b> vorher.</li>
<li><b>Längsschnittlich:</b> Die Kapazität ist ein <b>früher Prädiktor</b> vieler Entwicklungsoutcomes, von akademischer Leistung über Zufriedenheit in Partnerschaften bis Substanzmissbrauch.</li></ul>
<p><b>Selbststeuerung im Kindesalter:</b> Es gibt eine solide empirische Basis für <b>massive Unterschiede</b>:</p>
<ul><li>interindividuell (Korrelation mit dem <b>IQ</b>),</li><li>innerindividuell,</li><li>interkulturell,</li>
<li>entwicklungsbezogen: erste Ansätze schon mit etwa <b>einem Jahr</b> (basale Affektkontrolle), Hauptphase der Reifung zwischen dem <b>3. und 6. Lebensjahr</b>.</li></ul>
<p>Daraus folgt die Bedeutung früher <b>Ko-Regulation</b> durch erwachsene Bezugspersonen und kompetente Peers.</p>
<div class="ergbox"><p><span class="erg">Ergänzung</span> <b>Folie 33 „Selbststeuerung ist umfassend!“ (Diamond, 2014)</b>: Kern sind drei Funktionen, <b>Arbeitsgedächtnis</b>, <b>inhibitorische Kontrolle</b> (Interferenzkontrolle: selektive Aufmerksamkeit und kognitive Inhibition; Reaktionshemmung: Selbstkontrolle) und daraus <b>kognitive Flexibilität</b>. Auf ihnen bauen die höheren exekutiven Funktionen auf: Schlussfolgern, Problemlösen, Planen. Arbeitsgedächtnis und Inhibition stützen sich gegenseitig: Wer sein Ziel im Kopf hält, weiß, was zu hemmen ist; wer Ablenkung hemmt, hält den Inhalt im Kopf. Selbstregulation überlappt mit der inhibitorischen Kontrolle. Die Grafik zeigt also, dass Selbststeuerung auf denselben Bausteinen ruht wie die exekutiven Funktionen.</p></div>
<p class="small muted">Folien 30–33 (Sitzung 6), Lehrbuch Kap. 15</p>`,
check:[
 {q:"Was misst das Marshmallow-Experiment nach Mischel?", o:["Die Kapazität des Arbeitsgedächtnisses bei Kindern","Den Gratifikationsaufschub (Selbststeuerung)","Die Stärke einer klassisch konditionierten Reaktion","Die Perseveration beim Wechsel einer Regel"], a:1, ex:"Kurzfristige Befriedigung wird zugunsten eines langfristigen Ziels aufgeschoben.", w:["Das Arbeitsgedächtnis prüfen n-back oder Spannenaufgaben.",null,"Es geht nicht um Reizkopplung, sondern um willentliches Aufschieben.","Perseveration misst der Wisconsin Card Sorting-Test."]},
 {q:"Wann liegt laut Folie die Hauptphase der Reifung der Selbststeuerung?", o:["Im ersten Lebensjahr","Zwischen dem 3. und 6. Lebensjahr","Zwischen dem 11. und 12. Lebensjahr","Erst in der Adoleszenz"], a:1, ex:"Erste Ansätze mit etwa einem Jahr, Hauptphase der Reifung 3. bis 6. Lebensjahr.", w:["Mit etwa einem Jahr zeigen sich erst erste Ansätze, etwa basale Affektkontrolle.",null,"Mit 11–12 Jahren ist die Inhibition ausgereift, das ist nicht die Hauptphase der Selbststeuerung.","In der Adoleszenz endet die PFC-Reifung; die Hauptphase der Selbststeuerung liegt früher."]}
]},
{id:"6-6", t:"Selbstregulation und Selbstkontrolle", html:`
<p><b>Fröhlich & Kuhl (2003)</b> teilen den allgemeinen Begriff der <b>Selbststeuerung</b> in zwei Komponenten:</p>
<table class="kvq"><tr><th>Selbstregulation</th><td>das <b>Bilden und Aufrechterhalten selbstkongruenter Ziele</b></td></tr>
<tr><th>Selbstkontrolle</th><td>die durch <b>explizite Absichten</b> vermittelte Zielverfolgung</td></tr></table>
<p><b>Selbstregulation</b> ist eine mentale Funktion, die die bewusste <b>oder unbewusste</b> Lenkung eigener kognitiver, affektiver, motivationaler, behavioraler und motorischer Aktionen und Reaktionen im Sinne übergeordneter, willentlich angestrebter kurz-, mittel- und langfristiger Zielzustände ermöglicht. Im Fokus steht die <b>Handlungssteuerung</b>: neben der eigentlichen Verhaltensregulation die begleitende Regulation von Kognitionen, von Emotionen und Motivation sowie des Kontexts. Damit verbunden sind die Fähigkeiten,</p>
<ul><li>sich Ziele zu setzen,</li><li>Handlungsoptionen auszuwählen und umzusetzen,</li><li>die Handlung zu überwachen,</li><li>Soll- und Ist-Zustand im Handlungsvollzug abzugleichen,</li><li>das System mit dem erforderlichen Handlungsimpetus (Energie) auszustatten.</li></ul>
<p><b>Selbstkontrolle</b> wird relevant, wenn man sich in realen Entscheidungssituationen zwischen <b>zielkongruenten</b> und (attraktiven!) <b>zielinkongruenten</b> Alternativen entscheiden muss. In solchen <b>Konfliktsituationen</b> gilt es,</p>
<ul><li>eingeschliffene Reaktionstendenzen zu <b>unterdrücken</b> bzw. reizvolle Wahlmöglichkeiten zugunsten übergeordneter Ziele zu ignorieren,</li>
<li>Alternativen (Reaktionen, Wahl) im Arbeitsgedächtnis zu <b>aktualisieren</b>,</li>
<li>alternative Handlungspfade zu <b>initiieren</b>.</li></ul>
<p><span class="erg">Ergänzung</span> Heine fragt dazu: „Woran erinnert Sie das?“ Gemeint sind vermutlich die drei Aspekte exekutiver Kontrolle: Unterdrücken = <b>Inhibition</b>, im AG aktualisieren = <b>Updating</b>, neue Pfade einschlagen = <b>Shifting</b>. Exekutive Funktionen sind die funktionalen Bausteine der Selbststeuerung (Titel von Input 2).</p>
<div class="merk"><b>Das heißt</b>Selbststeuerung umfasst Selbstregulation und Selbstkontrolle. Selbstregulation richtet uns allgemein nach eigenen Zielen aus. Willentliche Selbstkontrolle wird bei zu lösenden <b>Zielkonflikten</b> wirksam (siehe Gratifikationsaufschub). Kontrolliert werden dann, aufwändig, einerseits psychische Prozesse und Zustände (Kognition, Emotion, Motivation), andererseits die Umsetzungsebene, das Verhalten.</div>
<p class="small muted">Folien 34–38 (Sitzung 6)</p>`,
check:[
 {q:"Wie grenzen Fröhlich & Kuhl (2003) Selbstregulation ab?", o:["Als durch explizite Absichten vermittelte Zielverfolgung","Als Bilden und Aufrechterhalten selbstkongruenter Ziele","Als Unterdrücken attraktiver, zielinkongruenter Wahl","Als Oberbegriff für Selbststeuerung und Selbstkontrolle"], a:1, ex:"Selbstregulation = selbstkongruente Ziele bilden und aufrechterhalten; die über explizite Absichten vermittelte Zielverfolgung ist Selbstkontrolle.", w:["Das ist die Selbstkontrolle.",null,"Das Unterdrücken im Zielkonflikt gehört zur Selbstkontrolle.","Oberbegriff ist Selbststeuerung; sie umfasst Selbstregulation und Selbstkontrolle."]},
 {q:"Wann wird Selbstkontrolle laut Folie relevant?", o:["Bei jeder Handlung, auch bei automatisierten Routinen","Wenn ein attraktives, zielinkongruentes Angebot lockt","Nur bei bewusster Planung langfristiger Ziele","Wenn keine Alternative zur Wahl steht"], a:1, ex:"In Konfliktsituationen zwischen zielkongruenten und attraktiven zielinkongruenten Alternativen.", w:["Routinen laufen ohne Konflikt; Selbstkontrolle braucht es erst im Zielkonflikt.",null,"Planung von Zielen ist Selbstregulation; Selbstkontrolle ist an den Konflikt gebunden.","Ohne Alternative gibt es keinen Konflikt und nichts zu kontrollieren."]},
 {q:"Lenkung im Sinne der Selbstregulation geschieht laut Folie …", o:["nur bewusst und willentlich","bewusst oder unbewusst","nur unbewusst und automatisch","nur unter Anleitung Erwachsener"], a:1, ex:"Die Folie spricht von bewusster oder unbewusster Lenkung, im Sinne willentlich angestrebter Ziele.", w:["Die Ziele sind willentlich angestrebt, die Lenkung selbst kann auch unbewusst sein.",null,"Sie kann auch bewusst sein.","Ko-Regulation durch Erwachsene ist im Kindesalter wichtig, aber keine Bedingung der Definition."]}
]},
{id:"6-7", t:"Modelle selbstregulierten Lernens", html:`
<p><b>Bereiche der Selbstregulation beim Lernen</b> nach <b>Pintrich (2000)</b> (Quelle der Folie: Wild & Möller, 2009). Vier <b>Phasen</b> × vier <b>Bereiche</b>:</p>
<table class="kvq"><tr><th>1 Voraussicht, Planung, Aktivierung</th><td><b>Kognition:</b> Ziele setzen, Wissen und metakognitives Wissen aktivieren<br><b>Motivation/Affekt:</b> Zielorientierung, Selbstwirksamkeitseinschätzung, wahrgenommene Schwierigkeit, Aufgabenwert und Interesse<br><b>Verhalten:</b> Zeit und Anstrengung planen, Selbstbeobachtung planen<br><b>Kontext:</b> Aufgabe und Kontext wahrnehmen</td></tr>
<tr><th>2 Monitoring</th><td><b>Kognition:</b> metakognitive Bewusstheit, Monitoring der Kognitionen<br><b>Motivation/Affekt:</b> Monitoring von Motivation und Affekt<br><b>Verhalten:</b> Anstrengung, Zeit- und Hilfebedarf überwachen, Selbstbeobachtung<br><b>Kontext:</b> sich ändernde Aufgaben und Kontext überwachen</td></tr>
<tr><th>3 Kontrolle</th><td><b>Kognition:</b> kognitive Strategien auswählen und anpassen<br><b>Motivation/Affekt:</b> Strategien zur Motivations- und Affektregulation<br><b>Verhalten:</b> Anstrengung erhöhen/reduzieren, durchhalten, aufgeben, Hilfe suchen<br><b>Kontext:</b> Aufgabe ändern/beibehalten, Kontext ändern/verlassen</td></tr>
<tr><th>4 Reaktion, Reflexion</th><td><b>Kognition:</b> kognitive Beurteilung, Attributionen<br><b>Motivation/Affekt:</b> affektive Reaktionen, Attributionen<br><b>Verhalten:</b> Wahlverhalten<br><b>Kontext:</b> Ziele und Kontext evaluieren</td></tr></table>
<p><b>Ebenenmodell</b> (Schalenmodell) nach <b>Boekaerts (1999)</b>, drei Schalen von innen nach außen:</p>
<table class="kvq"><tr><th>innen</th><td><b>Regulation der Prozessmodi</b>: Wahl der kognitiven Strategien. Fokus <b>kognitive</b> Prozesse: Wie lerne ich dieses konkrete Material? (z. B. Wiederholung, Elaboration)</td></tr>
<tr><th>Mitte</th><td><b>Regulation der Lernprozesse</b>: Nutzung metakognitiven Wissens und Fähigkeiten, um das eigene Lernen zu steuern. Fokus <b>metakognitive</b> Prozesse: Planung, Überwachung, Regulation des Lernfortschritts (z. B. spezifische Lernziele, Lerntagebuch)</td></tr>
<tr><th>außen</th><td><b>Regulation des Selbst</b>: Wahl von Zielen und Ressourcen. Fokus <b>motivationale und emotionale</b> Prozesse (Ressourcen, Ziele: Identifikation, Attribuierung)</td></tr></table>
<p><b>20 Jahre später:</b> das <b>hierarchische Modell</b> von Selbstregulation beim Lernen nach <b>Landmann & Schmitz (2007)</b>. Der Lernprozess läuft in drei Phasen:</p>
<ul><li><b>präaktional</b>: Situation, Aufgabe, Emotion, Ziele, Motivation, Planung,</li>
<li><b>aktional</b>: Lernstrategien, Volition, Zeit, Leistung, begleitet von <b>Self-Monitoring</b>,</li>
<li><b>postaktional</b>: Bewertung, Reflexion, Emotion, Reaktion.</li></ul>
<p>Ist das Ziel erreicht, endet der Prozess (Stop). Wenn nicht, greifen nacheinander höhere Regelkreise des Self-Monitorings:</p>
<table class="kvq"><tr><th>0. Ordnung</th><td>→ Ausführungsregulation</td></tr>
<tr><th>1. Ordnung</th><td>→ Reflexion → Strategieregulation (zurück zum Strategiepool)</td></tr>
<tr><th>2. Ordnung</th><td>→ Reflexion → Mustererkennung</td></tr>
<tr><th>3. Ordnung</th><td>→ Reflexion → Zielregulation (zurück zur übergeordneten Zielklärung)</td></tr></table>
<p><span class="erg">Ergänzung</span> Lesart des Schaubilds: Erst wird an der Ausführung nachgesteuert; scheitert das mehrfach („n × nein“), wechselt man die Strategie, dann sucht man nach Mustern im eigenen Lernen und stellt zuletzt das Ziel selbst infrage. Gemeinsam ist allen drei Modellen: Selbstreguliertes Lernen verbindet kognitive, metakognitive und motivationale Steuerung, und Metakognition (Planen, Überwachen, Regulieren) ist das Bindeglied.</p>
<p class="small muted">Folien 39–41 (Sitzung 6), Lehrbuch Kap. 5</p>`,
check:[
 {q:"Welche Ebene steht bei Boekaerts (1999) außen?", o:["Regulation der Prozessmodi (kognitiv)","Regulation der Lernprozesse (metakognitiv)","Regulation des Selbst (Ziele, Motivation)","Self-Monitoring 3. Ordnung (Zielregulation)"], a:2, ex:"Von innen nach außen: kognitiv (Strategien), metakognitiv (Lernprozess), motivational-emotional (Selbst).", w:["Das ist die innere Schale.","Das ist die mittlere Schale.",null,"Das gehört zu Landmann & Schmitz (2007), nicht zu Boekaerts."]},
 {q:"In welche Phase nach Pintrich (2000) gehört „Hilfe suchen“?", o:["Voraussicht, Planung, Aktivierung","Monitoring","Kontrolle","Reaktion, Reflexion"], a:2, ex:"Kontrolle, Bereich Verhalten: Anstrengung erhöhen/reduzieren, durchhalten, aufgeben, Hilfe suchen.", w:["In der Planung wird Zeit und Anstrengung geplant, nicht Hilfe gesucht.","Im Monitoring wird der Hilfebedarf überwacht; das Suchen selbst ist Kontrolle.",null,"In Reaktion/Reflexion steht beim Verhalten das Wahlverhalten."]},
 {q:"Was folgt bei Landmann & Schmitz (2007) auf das Self-Monitoring 1. Ordnung?", o:["Ausführungsregulation","Strategieregulation","Mustererkennung","Zielregulation"], a:1, ex:"1. Ordnung → Reflexion → Strategieregulation.", w:["Das ist die 0. Ordnung.",null,"Das ist die 2. Ordnung.","Das ist die 3. Ordnung."]}
]}
];

CARDS[6]=[
 {id:"c6-01", f:"Phineas Gage und das Frontalhirnsyndrom", b:"Phineas Gage (1823–1869): Verhaltensänderung nach Verletzung des Stirnhirns.\nICD-10 F07.2: dysexekutives Syndrom (nach Schädelhirntrauma)."},
 {id:"c6-02", f:"Sechs Merkmale des dysexekutiven Syndroms (F07.2)", b:"Impulsivität (mangelnde inhibitorische Kontrolle)\nmangelnde kognitive Flexibilität (Perseveration)\neingeschränkte Planungsfähigkeit\nmangelnde Überwachung der Zielerreichung\nverminderte Parallelverarbeitung (Fehler beim Dual-Tasking)\nUnfähigkeit, Regeln zu beachten (kognitiv, emotional, sozial)"},
 {id:"c6-03", f:"Exekutive Funktionen (Definition)", b:"Set kognitiver Prozesse, die andere kognitive Prozesse (z. B. Wahrnehmung, Gedächtnis) kontrollieren bzw. deren Zusammenspiel optimieren, um zielgerichtetes Verhalten zu ermöglichen. Deshalb metakognitive Funktionen."},
 {id:"c6-04", f:"Exekutive Funktionen als „Sammelbecken“: Was gehört dazu?", b:"Handlungsplanung, Problemlösen, Aufmerksamkeitssteuerung, Inhibition, mentale Flexibilität, Multi-Tasking, Monitoring-Prozesse usw."},
 {id:"c6-05", f:"Zentrale Exekutive als erstes Modell exekutiver Kontrolle", b:"Teil des Arbeitsgedächtnismodells (Baddeley & Hitch, 1974). Unitäres System, das untergeordneten Systemen Ressourcen zuordnet, v. a. für Fokussierung und Teilung von Aufmerksamkeit und für die Verbindung zum LZG."},
 {id:"c6-06", f:"Vier Aufgaben der zentralen Exekutive (Baddeley, 1996)", b:"Koordination unter Dual-Task-Bedingungen\nflexibles Wechseln zwischen Strategien\nAufmerksamkeitsfokussierung und Inhibition\nselektive Aktivierung, Aufrechterhaltung und Manipulation von Information aus dem LZG"},
 {id:"c6-07", f:"„Unity and Diversity“ (Miyake et al., 2000): Ausgangspunkt", b:"Leistung bei komplexen Aufgaben, die exekutive Kontrolle fordern, ist zu unterscheiden von Leistung bei Aufgaben, die nur auf einzelne Aspekte laden. Komplexe Aufgaben erfordern das Zusammenspiel der Aspekte."},
 {id:"c6-08", f:"Die drei Aspekte exekutiver Kontrolle (Diversity)", b:"Updating: Überwachung und Aktualisierung von Arbeitsgedächtnisrepräsentationen\nInhibition: Unterdrückung aktuell vorherrschender (kognitiver und motorischer) Antworttendenzen\nSwitching/Shifting: kognitive Flexibilität, zwischen Strategien und mentalen Zuständen zu wechseln"},
 {id:"c6-09", f:"Der „Unity“-Part", b:"Die drei Aspekte sind eindeutig zu trennen (clusteranalytisch), aber moderat korreliert. Vermutung: Inhibitorische Prozesse liegen allen drei Teilfunktionen zugrunde."},
 {id:"c6-10", f:"Wann ist Steuerung unter Aufmerksamkeitsressourcen nötig? (Fragenkatalog)", b:"bei unbekannten oder unerwarteten Situationen\nbei kognitiven Konflikten\nfür die Unterdrückung präpotenter Antwortmuster"},
 {id:"c6-11", f:"Wisconsin Card Sorting-Test (WCST)", b:"Klassisches komplexes Maß (Monchi et al., 2001). Fordert Updating eines Situationsmodells, Wechseln der Strategie und Unterdrücken alter Antworttendenzen.\nMaß: Perseveration."},
 {id:"c6-12", f:"Paradigmen für einzelne Aspekte exekutiver Kontrolle", b:"Updating: n-back-Aufgabe\nInhibition: stop-signal-Aufgabe\nSwitching: global-local-Aufgabe"},
 {id:"c6-13", f:"Warum reifen exekutive Funktionen spät?", b:"Basis ist der präfrontale Kortex. Er erreicht als letzte Hirnregion die volle Reife, v. a. wegen später Myelinisierung, die erst in der Adoleszenz endet."},
 {id:"c6-14", f:"Inhomogene Entwicklung exekutiver Funktionen", b:"Inhibition: früh, Spurt im Vorschulalter, Reife mit 11–12 Jahren (Basis höherer Funktionen)\nShifting und Updating: erwachsen etwa mit 15 Jahren\nKomplexe Funktionen (Planning, Sequencing, Dual-Tasking): noch später"},
 {id:"c6-15", f:"Förderung exekutiver Funktionen: die problematische Situation", b:"Kein Mangel an Trainings, aber an sauber evaluierten Zugängen, v. a. zum Transfer (Nah-, Ferntransfer).\nUmschriebene, kurzfristige Trainings (PC-basiert, aerober Sport): ernüchternd."},
 {id:"c6-16", f:"Was bei der EF-Förderung funktioniert", b:"Lebenspraktische und langfristige Zugänge:\nRollenspiele\nAchtsamkeitstraining und Yoga\nzweisprachige Erziehung\nregelbasiertes Spiel\nGruppensport\nMontessori-Curriculum"},
 {id:"c6-17", f:"Tools of the Mind", b:"EF-Curriculum (Diamond & Lee, 2011; Ergebnis Diamond et al., 2007).\nHintergrund: Vygotsky, „als-ob-Spiel“ befördert metakognitive Steuerung.\n40 EF-relevante Aktivitäten (Verbalisierung, Peer-Scaffolding, Einbettung in den Alltag)\nStart im Vorschulalter (5;1 Jahre), Dauer 1 oder 2 Jahre\nDurch reguläre Lehrkräfte in regulären Klassen."},
 {id:"c6-18", f:"Marshmallow-Experiment (Mischel)", b:"Studien der 1970er Jahre. Gratifikationsaufschub als Maß für Selbststeuerung: die (meist kindliche) Kapazität, kurzfristige Bedürfnisbefriedigung zugunsten langfristiger Zielerreichung aufzuschieben."},
 {id:"c6-19", f:"Warum ist Selbststeuerung entwicklungspsychologisch bedeutsam?", b:"Querschnittlich: sagt zu jedem Zeitpunkt psychologisches Well-Being vorher.\nLängsschnittlich: früher Prädiktor vieler Entwicklungsoutcomes (akademische Leistung, Zufriedenheit in Partnerschaften, Substanzmissbrauch)."},
 {id:"c6-20", f:"Selbststeuerung im Kindesalter: Unterschiede und Entwicklung", b:"Massive Unterschiede: interindividuell (Korrelation mit IQ), innerindividuell, interkulturell, entwicklungsbezogen.\nErste Ansätze mit etwa einem Jahr (basale Affektkontrolle), Hauptphase 3. bis 6. Lebensjahr.\nFolge: Relevanz früher Ko-Regulation (Erwachsene, kompetente Peers)."},
 {id:"c6-21", f:"Selbststeuerung nach Fröhlich & Kuhl (2003)", b:"Zwei Komponenten:\nSelbstregulation: Bilden und Aufrechterhalten selbstkongruenter Ziele\nSelbstkontrolle: durch explizite Absichten vermittelte Zielverfolgung"},
 {id:"c6-22", f:"Selbstregulation (Definition)", b:"Mentale Funktion, die die bewusste oder unbewusste Lenkung eigener kognitiver, affektiver, motivationaler, behavioraler und motorischer Aktionen und Reaktionen im Sinne übergeordneter, willentlich angestrebter kurz-, mittel- und langfristiger Ziele ermöglicht. Fokus: Handlungssteuerung, mit Regulation von Kognitionen, Emotionen/Motivation und Kontext."},
 {id:"c6-23", f:"Fähigkeiten der Selbstregulation", b:"Ziele setzen\nHandlungsoptionen auswählen und umsetzen\nHandlung überwachen\nSoll- und Ist-Zustand abgleichen\nSystem mit Handlungsimpetus/-energie ausstatten"},
 {id:"c6-24", f:"Selbstkontrolle: wann und was?", b:"Wann: im Konflikt zwischen zielkongruenten und attraktiven zielinkongruenten Alternativen.\nWas: eingeschliffene Reaktionstendenzen unterdrücken bzw. Reizvolles ignorieren, Alternativen im AG aktualisieren, alternative Handlungspfade initiieren."},
 {id:"c6-25", erg:true, f:"Selbstkontrolle: „Woran erinnert Sie das?“", b:"An die drei Aspekte exekutiver Kontrolle:\nunterdrücken: Inhibition\nim AG aktualisieren: Updating\nneue Pfade einschlagen: Shifting\nExekutive Funktionen sind die Bausteine der Selbststeuerung."},
 {id:"c6-26", f:"Selbststeuerung zusammengefasst", b:"Selbststeuerung umfasst Selbstregulation und Selbstkontrolle.\nSelbstregulation richtet uns allgemein nach eigenen Zielen aus.\nSelbstkontrolle wirkt bei zu lösenden Zielkonflikten (Gratifikationsaufschub).\nKontrolliert werden psychische Prozesse (Kognition, Emotion, Motivation) und das Verhalten."},
 {id:"c6-27", f:"Pintrich (2000): vier Phasen der Selbstregulation beim Lernen", b:"1 Voraussicht, Planung, Aktivierung\n2 Monitoring\n3 Kontrolle\n4 Reaktion, Reflexion\nJeweils in vier Bereichen: Kognition, Motivation/Affekt, Verhalten, Kontext."},
 {id:"c6-28", f:"Pintrich (2000): Beispiele je Phase (Bereich Kognition)", b:"Planung: Ziele setzen, Wissen und metakognitives Wissen aktivieren\nMonitoring: metakognitive Bewusstheit, Monitoring der Kognitionen\nKontrolle: kognitive Strategien auswählen und anpassen\nReflexion: kognitive Beurteilung, Attributionen"},
 {id:"c6-29", f:"Ebenenmodell nach Boekaerts (1999)", b:"innen: Regulation der Prozessmodi, kognitiv (Wahl der Strategien, z. B. Wiederholung, Elaboration)\nMitte: Regulation der Lernprozesse, metakognitiv (Planung, Überwachung, z. B. Lerntagebuch)\naußen: Regulation des Selbst, motivational-emotional (Ziele, Ressourcen, Attribuierung)"},
 {id:"c6-30", f:"Hierarchisches Modell (Landmann & Schmitz, 2007): Phasen", b:"präaktional: Situation, Aufgabe, Emotion, Ziele, Motivation, Planung\naktional: Lernstrategien, Volition, Zeit, Leistung, mit Self-Monitoring\npostaktional: Bewertung, Reflexion, Emotion, Reaktion"},
 {id:"c6-31", f:"Landmann & Schmitz (2007): Self-Monitoring 0. bis 3. Ordnung", b:"0. Ordnung: Ausführungsregulation\n1. Ordnung: Reflexion, Strategieregulation\n2. Ordnung: Reflexion, Mustererkennung\n3. Ordnung: Reflexion, Zielregulation"},
 {id:"c6-32", erg:true, f:"Diamond (2014), Folie „Selbststeuerung ist umfassend!“: Aufbau", b:"Kern: Arbeitsgedächtnis und inhibitorische Kontrolle (Interferenzkontrolle, Reaktionshemmung = Selbstkontrolle), daraus kognitive Flexibilität.\nDarauf: höhere exekutive Funktionen (Schlussfolgern, Problemlösen, Planen).\nSelbstregulation überlappt mit inhibitorischer Kontrolle."}
];
Object.assign(CARD_INFO,{
 "c6-02":"Perseveration: Festhalten an einer Reaktion, obwohl sie nicht mehr passt.",
 "c6-05":"Unitär: einheitlich, ein einziges System.",
 "c6-08":"Clusteranalyse: statistisches Verfahren, das zusammengehörige Messwerte zu Gruppen bündelt.",
 "c6-10":"Präpotent: vorherrschend, die Reaktion, die sich zuerst aufdrängt.",
 "c6-13":"Myelinisierung: Ummantelung der Nervenfasern, die die Weiterleitung beschleunigt.",
 "c6-17":"Scaffolding: Unterstützung, die schrittweise zurückgenommen wird.",
 "c6-21":"Selbstkongruent: zu den eigenen Bedürfnissen und Werten passend.",
 "c6-29":"Die Folie zeigt drei Schalen (Ellipsen) ineinander."
});
Object.assign(CARD_CTX,{
 "c6-01":"Ein klassischer Fall","c6-02":"Wenn die Steuerung ausfällt","c6-03":"Was exekutive Funktionen sind","c6-04":"Ein Sammelbecken",
 "c6-05":"Das erste Modell","c6-06":"Baddeley (1996)","c6-07":"Unity and Diversity","c6-08":"Drei trennbare Aspekte",
 "c6-09":"Was sie verbindet","c6-10":"Aus dem Fragenkatalog","c6-11":"Ein komplexes Maß","c6-12":"Je Aspekt eine Aufgabe",
 "c6-13":"Späte Reifung","c6-14":"Unterschiedliche Verläufe","c6-15":"Trainings auf dem Prüfstand","c6-16":"Was wirkt",
 "c6-17":"Ein Curriculum","c6-18":"Selbststeuerung messen","c6-19":"Warum sie zählt","c6-20":"Im Kindesalter",
 "c6-21":"Zwei Komponenten","c6-22":"Selbstregulation","c6-23":"Was dazugehört","c6-24":"Selbstkontrolle",
 "c6-25":"Eine Verbindung","c6-26":"Das heißt …","c6-27":"Selbstreguliertes Lernen","c6-28":"Phasen in der Kognition",
 "c6-29":"Drei Schalen","c6-30":"Drei Handlungsphasen","c6-31":"Regelkreise","c6-32":"Grafik Diamond (2014)"
});

/* Kreuzaufgaben nach dem Muster der Altklausur 24/25: insgesamt etwa die Hälfte wahr, meist eine oder zwei wahre Aussagen. */
KREUZ.push(
 {id:"x6-01", ch:6, stem:"Für exekutive Funktionen gilt:", s:[
  ["Exekutive Funktionen kontrollieren andere kognitive Prozesse wie Wahrnehmung und Gedächtnis.", true, "Deshalb heißen sie metakognitive Funktionen (Folie 15)."],
  ["Inhibition bezeichnet die Aktualisierung von Arbeitsgedächtnisrepräsentationen.", false, "Das ist <b>Updating</b>. Inhibition ist die Unterdrückung vorherrschender Antworttendenzen."],
  ["Die drei Aspekte exekutiver Kontrolle sind nach Miyake et al. (2000) voneinander unabhängig.", false, "Sie sind trennbar, aber <b>moderat korreliert</b> (Unity)."]]},
 {id:"x6-02", ch:6, stem:"Für die Aspekte exekutiver Kontrolle gilt:", s:[
  ["Vermutlich liegen inhibitorische Prozesse allen drei Teilfunktionen zugrunde.", true, "So die Folie zum „Unity“-Part."],
  ["Switching bezeichnet die Fähigkeit, flexibel zwischen Strategien und mentalen Zuständen zu wechseln.", true, "Kognitive Flexibilität."],
  ["Die drei Aspekte lassen sich nur theoretisch, nicht empirisch voneinander trennen.", false, "Sie lassen sich mit <b>clusteranalytischen</b> Verfahren empirisch trennen."]]},
 {id:"x6-03", ch:6, stem:"Für die Diagnostik exekutiver Prozesse gilt:", s:[
  ["Die n-back-Aufgabe lädt vor allem auf Inhibition.", false, "n-back lädt auf <b>Updating</b>; Inhibition misst die stop-signal-Aufgabe."],
  ["Der Wisconsin Card Sorting-Test erfasst als Maß die Perseveration.", true, "Komplexes Maß; es fordert Updating, Strategiewechsel und Unterdrücken alter Antworten."],
  ["Die stop-signal-Aufgabe lädt vor allem auf Inhibition.", true, "Sie misst, ob eine schon gestartete Reaktion abgebrochen werden kann."]]},
 {id:"x6-04", ch:6, stem:"Für die Entwicklung exekutiver Funktionen gilt:", s:[
  ["Shifting und Updating erreichen die erwachsene Funktion früher als die Inhibition.", false, "Umgekehrt: Inhibition reift mit 11–12, Shifting und Updating etwa mit 15 Jahren."],
  ["Der präfrontale Kortex erreicht als letzte Hirnregion die volle Reife.", true, "Vor allem wegen später Myelinisierung, die erst in der Adoleszenz endet."],
  ["Komplexe Funktionen wie Planning und Dual-Tasking reifen vor den einzelnen Aspekten.", false, "Sie folgen <b>noch später</b> als Shifting und Updating."]]},
 {id:"x6-05", ch:6, stem:"Zur Förderung exekutiver Funktionen gilt:", s:[
  ["Kurzfristige PC-basierte Trainings zeigen zuverlässig Ferntransfer.", false, "Die Ergebnisse umschriebener, kurzfristiger Trainings sind <b>ernüchternd</b>, gerade beim Transfer."],
  ["Zweisprachige Erziehung und regelbasiertes Spiel zählen zu den wirksamen Zugängen.", true, "Lebenspraktische, langfristige Zugänge funktionieren."],
  ["Laut Diamond & Lee (2011) braucht EF-Förderung im Kindergarten teure Spezialausstattung.", false, "Gerade <b>ohne</b> teure Ausstattung, durch reguläre Lehrkräfte in regulären Klassen."]]},
 {id:"x6-06", ch:6, stem:"Für Selbststeuerung gilt:", s:[
  ["Selbststeuerung umfasst Selbstregulation und Selbstkontrolle.", true, "So fassen es Fröhlich & Kuhl (2003) und die Folie „Das heißt …“."],
  ["Selbstkontrolle bezeichnet nach Fröhlich & Kuhl das Bilden und Aufrechterhalten selbstkongruenter Ziele.", false, "Das ist <b>Selbstregulation</b>. Selbstkontrolle ist die durch explizite Absichten vermittelte Zielverfolgung."],
  ["Selbstkontrolle wird vor allem bei zu lösenden Zielkonflikten wirksam.", true, "Etwa beim Gratifikationsaufschub."]]},
 {id:"x6-07", ch:6, stem:"Für die Selbststeuerung im Kindesalter gilt:", s:[
  ["Die Kapazität zur Selbststeuerung korreliert nicht mit dem IQ.", false, "Die Folie nennt interindividuelle Unterschiede mit <b>Korrelation mit dem IQ</b>."],
  ["Erste Ansätze der Selbststeuerung sind erst mit Schuleintritt beobachtbar.", false, "Schon mit etwa <b>einem Jahr</b> (basale Affektkontrolle); Hauptphase 3. bis 6. Lebensjahr."],
  ["Längsschnittlich ist Selbststeuerung ein früher Prädiktor u. a. für Substanzmissbrauch.", true, "Von akademischer Leistung über Partnerschaft bis Substanzmissbrauch."]]},
 {id:"x6-08", ch:6, stem:"Für Modelle selbstregulierten Lernens gilt:", s:[
  ["Bei Boekaerts (1999) richtet die innere Schale den Fokus auf motivationale Prozesse.", false, "Innen stehen <b>kognitive</b> Prozesse (Strategien); motivational-emotional ist die äußere Schale."],
  ["Bei Pintrich (2000) gehört das Setzen von Zielen zur Phase der Kontrolle.", false, "Ziele setzen gehört zu <b>Voraussicht, Planung, Aktivierung</b>."],
  ["Bei Landmann & Schmitz (2007) führt das Self-Monitoring 3. Ordnung zur Zielregulation.", true, "0.: Ausführung, 1.: Strategie, 2.: Muster, 3.: Ziel."]]},
 {id:"x6-09", ch:6, stem:"Für Selbstregulation gilt:", s:[
  ["Selbstregulation kann auch unbewusst erfolgen.", true, "Die Folie spricht von bewusster oder unbewusster Lenkung."],
  ["Zu den Fähigkeiten der Selbstregulation gehört der Abgleich von Soll- und Ist-Zustand.", true, "Ebenso Ziele setzen, Optionen wählen, überwachen und Handlungsenergie bereitstellen."],
  ["Selbstregulation bezieht sich ausschließlich auf beobachtbares Verhalten.", false, "Sie umfasst auch die begleitende Regulation von Kognitionen, Emotionen, Motivation und Kontext."]]},
 {id:"x6-10", ch:6, stem:"Für das dysexekutive Syndrom (ICD-10 F07.2) gilt:", s:[
  ["Typisch ist eine erhöhte inhibitorische Kontrolle.", false, "Typisch ist <b>Impulsivität</b>, also <b>mangelnde</b> inhibitorische Kontrolle."],
  ["Zu den Merkmalen gehört eine eingeschränkte Planungsfähigkeit.", true, "Ebenso mangelnde Überwachung der Zielerreichung und Fehler beim Dual-Tasking."],
  ["Es kann nach einem Schädelhirntrauma auftreten, wie im Fall Phineas Gage.", true, "So auf Folie 14."]]},
 /* Verbindungsfrage zu Kapitel 2 */
 {id:"xv-61", ch:6, stem:"Für die zentrale Exekutive im Arbeitsgedächtnis gilt:", s:[
  ["Sie ist nach Baddeley ein unitäres System, das untergeordneten Systemen Ressourcen zuordnet.", true, "Erstes explizites Modell exekutiver Kontrolle (Folie 16)."],
  ["Sie hält vor allem sprachbasierte Information aufrecht.", false, "Das leistet die <b>phonologische Schleife</b>. Die zentrale Exekutive überwacht und verteilt Ressourcen."],
  ["Sie ist besonders bei automatisierten Handlungen gefragt.", false, "Bei <b>nicht-automatisierten</b> Handlungen und bei Konflikt (SAS nach Norman & Shallice)."]]}
);

KURZ.push(
 {id:"k6-1", ch:6, pts:10,
  q:"Im Marshmallow-Experiment wartet ein Kind allein vor einer Süßigkeit. Erläutern Sie am Beispiel, was Selbststeuerung nach Fröhlich & Kuhl (2003) umfasst, wann Selbstkontrolle gefordert ist und welche Aspekte exekutiver Kontrolle das Kind dabei braucht.",
  k:["Gemessen wird Gratifikationsaufschub: kurzfristige Befriedigung zugunsten eines langfristigen Ziels aufschieben (Mischel)","Selbststeuerung umfasst Selbstregulation und Selbstkontrolle","Selbstregulation: selbstkongruente Ziele bilden und aufrechterhalten (später zwei Süßigkeiten)","Selbstkontrolle: über explizite Absichten vermittelte Zielverfolgung, gefordert im Zielkonflikt mit einer attraktiven, zielinkongruenten Alternative","Inhibition: den Impuls, sofort zu essen, unterdrücken","Updating: Ziel und Alternative im Arbeitsgedächtnis aktuell halten","Shifting: alternative Handlungspfade einschlagen, z. B. Aufmerksamkeit umlenken","Entwicklung: Hauptphase 3. bis 6. Lebensjahr, Ko-Regulation wichtig"],
  m:"Das Marshmallow-Experiment von Mischel misst den Gratifikationsaufschub, also die Fähigkeit, eine kurzfristige Befriedigung zugunsten eines langfristigen Ziels aufzuschieben. Nach Fröhlich und Kuhl umfasst Selbststeuerung zwei Komponenten. Selbstregulation ist das Bilden und Aufrechterhalten selbstkongruenter Ziele, hier das Ziel, später zwei Süßigkeiten zu bekommen. Selbstkontrolle ist die über explizite Absichten vermittelte Zielverfolgung; sie wird gefordert, sobald ein Zielkonflikt entsteht, denn die Süßigkeit vor dem Kind ist eine attraktive, aber zielinkongruente Alternative. Dafür braucht das Kind die drei Aspekte exekutiver Kontrolle: Inhibition, um den Impuls zu unterdrücken, sofort zu essen; Updating, um das Ziel und die Alternative im Arbeitsgedächtnis präsent zu halten; und Shifting, um einen alternativen Handlungspfad einzuschlagen, etwa die Aufmerksamkeit auf etwas anderes zu lenken. Weil die zugrunde liegenden Funktionen vor allem zwischen dem dritten und sechsten Lebensjahr reifen, unterscheiden sich gleichaltrige Kinder stark, und frühe Ko-Regulation durch Erwachsene ist bedeutsam."},
 {id:"k6-2", ch:6, pts:8,
  q:"Eine Schulleitung will die exekutiven Funktionen ihrer Erstklässler mit einem sechswöchigen Computertraining fördern. Nehmen Sie auf Basis der Vorlesung kritisch Stellung und schlagen Sie eine Alternative vor.",
  k:["Kein Mangel an Trainings, aber an sauber evaluierten Zugängen","Problem Transfer: Nahtransfer fraglich, Ferntransfer kaum belegt","Kurzfristige, umschriebene Trainings (PC-basiert) zeigen ernüchternde Ergebnisse","Wirksam: lebenspraktische, langfristige Zugänge (Rollenspiel, Achtsamkeit/Yoga, regelbasiertes Spiel, Gruppensport, Montessori, zweisprachige Erziehung)","Beispiel Tools of the Mind: als-ob-Spiel (Vygotsky), 40 Aktivitäten, 1–2 Jahre, reguläre Lehrkräfte ohne teure Ausstattung (Diamond & Lee, 2011)","Entwicklung: EF reifen spät und inhomogen, Förderung daher langfristig anlegen"],
  m:"Das Vorhaben ist kritisch zu sehen. An Trainings exekutiver Funktionen herrscht kein Mangel, wohl aber an sauber evaluierten Zugängen, vor allem was den Transfer angeht: Schon Nahtransfer ist fraglich, Ferntransfer auf schulische Leistungen kaum belegt. Gerade umschriebene und kurzfristige Trainings wie PC-basierte Programme zeigen ernüchternde Ergebnisse. Da exekutive Funktionen spät und ungleichmäßig reifen, ist eine Förderung über wenige Wochen ohnehin zu kurz. Wirksam sind lebenspraktische und langfristige Zugänge wie Rollenspiele, regelbasiertes Spiel, Gruppensport oder Achtsamkeitsübungen. Ein Beispiel ist Tools of the Mind: Nach Vygotskys Annahme, dass Als-ob-Spiel metakognitive Steuerung befördert, setzen reguläre Lehrkräfte über ein bis zwei Jahre rund 40 EF-relevante Aktivitäten in den Alltag ein, etwa Verbalisierung und Peer-Scaffolding, ohne teure Ausstattung. Die Schule sollte daher solche Elemente dauerhaft in den Unterricht einbauen statt eines kurzen Computertrainings."}
);
OPEN.push({id:"o6-k1", ch:6, kind:"kurz", k:"k6-1", pts:10, title:"Selbststeuerung"});
OPEN.push({id:"o6-k2", ch:6, kind:"kurz", k:"k6-2", pts:8, title:"Förderung exekutiver Funktionen"});

UPLOADS.push({no:6, added:"2026-11-17", known:true, items:[{k:"Folien", t:"Sitzung 6: Gedächtnis 3, exekutive Funktionen, Selbststeuerung (42 Folien)", ok:true}]});
