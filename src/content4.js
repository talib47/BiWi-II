/* ================= Kapitel 2: Gedächtnis =================
   Grundlage: Folien Sitzung 4 (Input 3/4: Folien 22–26) und Sitzung 5 (Input 2–4, Exkurs Schlaf: Folien 12–29), WiSe 26/27;
   Klausur WiSe 24/25 Teil 1 (Aufgaben 2 und 4); Lehrbuch Urhahne/Dresel/Fischer (2019) Kap. 2 (Chunking). */
LESSONS[2]=[
{id:"2-1", t:"Was Gedächtnis ist", html:`
<p><b>Gedächtnis</b> ist das Fortbestehen aufgenommener Information über die Zeit, das deren Verfügbarmachung ermöglicht.</p>
<p>Zwei Konzepte von Gedächtnis:</p>
<ul><li><b>Strukturelle Sicht:</b> Gedächtnis ist ein <i>Ort</i>, an dem Information aufbewahrt wird. Räumliche Metaphern dominieren („Speicher“).</li>
<li><b>Prozedurale Sicht:</b> Gedächtnis sind die <i>Prozesse</i>, durch die Gedächtnisinhalte entstehen. Eine dynamische Konzeption.</li></ul>
<p>Die drei zentralen <b>Gedächtnisprozesse</b>:</p>
<ol><li><b>Enkodierung</b> von Information,</li><li><b>Speicherung</b> von Information,</li><li><b>Abruf</b> von Information.</li></ol>
<p><b>Vergessen</b> bezeichnet den Verlust von zugreifbarer Information.</p>
<div class="merk"><b>Merksatz</b>Enkodieren, speichern, abrufen. Vergessen heißt: Die Information ist nicht mehr zugreifbar.</div>`,
check:[
 {q:"Wie definiert Heine Gedächtnis?", o:["Als fester Ort im Gehirn, an dem alles Wissen dauerhaft abgelegt ist","Als Fortbestehen aufgenommener Information über die Zeit, das sie verfügbar macht","Als allgemeine Fähigkeit, durch Erfahrung Neues dazuzulernen","Als Summe aller Erfahrungen, die ein Mensch im Leben gemacht hat"], a:1, ex:"So steht es auf der Folie. Die Sicht als „Ort“ ist nur eine von zwei Konzeptionen (strukturell).", w:["Das ist die strukturelle Sicht, aber nicht die Definition.",null,"Lernen und Gedächtnis hängen zusammen, sind aber nicht dasselbe.","Die Definition betont das Fortbestehen und die Verfügbarkeit von Information, nicht eine Summe."]},
 {q:"Welche Sicht betrachtet Gedächtnis als dynamisch?", o:["Die strukturelle Sicht","Die prozedurale Sicht","Das modale Modell","Die Speichersicht"], a:1, ex:"Prozedural: Gedächtnis sind die Prozesse, durch die Gedächtnisinhalte entstehen.", w:["Die strukturelle Sicht arbeitet mit räumlichen Metaphern, also eher statisch.",null,"Das modale Modell ist ein Mehrspeichermodell, also strukturell gedacht.","„Speicher“ ist gerade die räumliche Metapher der strukturellen Sicht."]}
]},
{id:"2-2", t:"Das modale Modell (Atkinson & Shiffrin, 1968)", html:`
<p>Das <b>Mehrkomponentenmodell</b> (modales Modell) von <b>Atkinson & Shiffrin (1968)</b> nimmt unterschiedliche Gedächtnissysteme an. Sie unterscheiden sich in</p>
<ul><li>zeitlichen Constraints,</li><li>Kapazitäts-Constraints,</li><li>Vergessensmechanismen,</li><li>ihrer neuroanatomischen Basis.</li></ul>
<table class="kvq"><tr><th>Speicher</th><th>Dauer</th><th>Vergessen</th></tr>
<tr><td><b>Sensorischer Speicher</b> (visuell, auditiv, haptisch)</td><td>unter 1 Sekunde</td><td>Zerfall nicht beachteter Information</td></tr>
<tr><td><b>Kurzzeitspeicher</b></td><td>mehrere Sekunden, aber verlängerbar durch <b>Rehearsal</b></td><td>Interferenz und Verdrängung durch neue Information</td></tr>
<tr><td><b>Langzeitgedächtnis</b> (episodisch, semantisch, prozedural)</td><td>beliebige Dauer</td><td>Interferenz oder Zerfall</td></tr></table>
<p>Der Weg: Reizinformation → sensorischer Speicher → (durch <b>Aufmerksamkeit</b>) Kurzzeitspeicher → (Transfer) Langzeitgedächtnis. Aus dem Langzeitgedächtnis wird in den Kurzzeitspeicher <b>abgerufen</b>. Kontrollprozesse im Kurzzeitspeicher sind z. B. Wiederholen (Rehearsal) und Elaboration.</p>`,
check:[
 {q:"Worin unterscheiden sich die Speicher im modalen Modell laut Folie nicht?", o:["Zeitliche Constraints","Kapazitäts-Constraints","Vergessensmechanismen","Persönlichkeit"], a:3, ex:"Genannt sind zeitliche Constraints, Kapazität, Vergessensmechanismen und neuroanatomische Basis.", w:["Zeitliche Constraints sind ein Unterscheidungsmerkmal (unter 1 Sek., mehrere Sek., beliebig).","Kapazität ist ein Unterscheidungsmerkmal.","Vergessensmechanismen sind ein Unterscheidungsmerkmal (Zerfall, Interferenz).",null]},
 {q:"Wie lange hält der Kurzzeitspeicher Information im modalen Modell?", o:["Unter einer Sekunde, dann zerfällt die Spur","Mehrere Sekunden, länger mit Rehearsal","Beliebig lange, ohne jede Wiederholung","Genau eine Minute, unabhängig vom Üben"], a:1, ex:"Ohne Wiederholung geht die Information nach Sekunden verloren. Rehearsal hält sie aktiv.", w:["Unter einer Sekunde gilt für den sensorischen Speicher.",null,"Beliebige Dauer gilt für das Langzeitgedächtnis.","Eine feste Minute nennt das Modell nicht."]}
]},
{id:"2-3", t:"Gedächtnissysteme und semantisches Netzwerk", html:`
<p>Heines Übersicht der Gedächtnissysteme:</p>
<table class="kvq"><tr><th colspan="2">Langzeitgedächtnis</th></tr>
<tr><td><b>deklarativ</b> (explizit)</td><td><b>episodisches Gedächtnis</b>: persönliche Erlebnisse<br><b>semantisches Gedächtnis</b>: Weltwissen, Sprache</td></tr>
<tr><td><b>non-deklarativ</b> (implizit)</td><td><b>prozedurales Gedächtnis</b>: motorische Fertigkeiten<br><b>PRS</b>: perzeptuelles Priming<br><b>klassische Konditionierung</b>: CS-UCS-Assoziation<br><b>non-assoziatives Lernen</b>: Habituation und Sensitivierung</td></tr>
<tr><th colspan="2">Transientes Gedächtnis</th></tr>
<tr><td colspan="2">sensorische Register, Kurzzeit- und Arbeitsgedächtnis</td></tr></table>
<p><b>Struktur des semantischen Gedächtnisses</b>: das <b>Spreading-Activation-Modell</b> von <b>Collins & Loftus (1975)</b>. Annahmen:</p>
<ul><li>Semantische Konzepte sind in einem <b>nicht-hierarchischen Netzwerk</b> gespeichert.</li>
<li>Je mehr Eigenschaften zwei Konzepte teilen, desto mehr Verbindungen haben sie.</li>
<li>Wird ein Konzept verarbeitet, wird es <b>aktiviert</b>. Die Aktivierung <b>breitet sich auf nahe liegende Knoten aus</b>.</li>
<li>Die Aktivierung nimmt mit zunehmender <b>Entfernung</b> vom Zielknoten ab, und sie nimmt mit der <b>Zeit</b> ab.</li></ul>
<div class="merk"><b>So stand es in der Klausur WiSe 24/25</b><div class="mrows">
<div><span class="ml"><span class="vd t">wahr</span></span><span>Spreading Activation: semantische Inhalte in einem nicht-hierarchischen Netzwerk</span></div>
<div><span class="ml"><span class="vd f">falsch</span></span><span>„Das prozedurale Gedächtnis ist Teil des transienten Gedächtnisses.“<br><span class="small muted">Grund: Es gehört zum (non-deklarativen) Langzeitgedächtnis.</span></span></div>
<div><span class="ml"><span class="vd f">falsch</span></span><span>„Inhalte aus dem expliziten LZG können nicht verbalisiert werden.“<br><span class="small muted">Grund: Explizite, deklarative Inhalte sind bewusst und berichtbar.</span></span></div></div></div>`,
check:[
 {q:"Wohin gehört das prozedurale Gedächtnis?", o:["Zum transienten Gedächtnis","Zum deklarativen Langzeitgedächtnis","Zum non-deklarativen Langzeitgedächtnis","Zum sensorischen Register"], a:2, ex:"Prozedurales Gedächtnis (motorische Fertigkeiten) ist Teil des impliziten, non-deklarativen LZG. Genau das wurde 24/25 abgefragt.", w:["Transient sind nur sensorische Register, Kurzzeit- und Arbeitsgedächtnis.","Deklarativ sind episodisches und semantisches Gedächtnis.",null,"Sensorische Register gehören zum transienten Gedächtnis."]},
 {q:"Was nimmt das Spreading-Activation-Modell an?", o:["Konzepte sind streng hierarchisch nach Oberbegriffen geordnet","Aktivierung breitet sich auf nahe Knoten aus, mit Entfernung schwächer","Jedes Konzept ist mit jedem anderen gleich stark verbunden","Einmal aktivierte Konzepte bleiben dauerhaft aktiviert"], a:1, ex:"Collins & Loftus (1975): nicht-hierarchisches Netzwerk, Aktivierung breitet sich aus, schwächer mit Entfernung und Zeit.", w:["Gerade nicht hierarchisch, das ist der Kern des Modells.",null,"Je mehr Eigenschaften Konzepte teilen, desto mehr Verbindungen. Also ungleich.","Die Aktivierung nimmt mit der Zeit ab."]}
]},
{id:"2-4", t:"Episodisches Gedächtnis und Kontext", html:`
<p>Neben dem semantischen Gedächtnis für Fakten und Objekte haben Menschen Wissen, das zum „was“ auch enthält:</p>
<ul><li>„<b>wann</b>“ (Zeitpunkt),</li><li>„<b>wo</b>“ (Ort),</li><li>„<b>wie</b>“ (situativer Kontext).</li></ul>
<p>Das <b>episodische Gedächtnis</b> ist für Enkodierung, Speicherung und Abruf von Wissen um spezifische Ereignisse (komplexe Episoden) verantwortlich, die ein Individuum erlebt hat. Das Wissen wird <b>kontextgebunden</b> enkodiert und abgerufen (→ <b>Quellengedächtnis</b>).</p>
<p>Der Abruferfolg hängt stark von der <b>Passung des externalen und internalen Kontexts</b> bei Enkodierung und Abruf ab:</p>
<table class="kvq"><tr><th>Effekt</th><th>Befund</th></tr>
<tr><td><b>Umgebung</b></td><td>Godden & Baddeley (1975): Abruf ist am besten, wenn Enkodierungs- und Abrufsituation ähnlich sind. <b>Mentales Simulieren</b> des Kontexts reicht oft aus.</td></tr>
<tr><td><b>physischer Status</b></td><td>Godwin et al. (1969): Unter Alkohol Gelerntes wird unter Alkohol besser abgerufen (auch andere psychotrope Substanzen). Miles & Hardman (1998): gleicher kardiovaskulärer Status hilft ebenfalls.</td></tr>
<tr><td><b>emotionaler Status</b></td><td><b>Stimmungsabhängigkeit</b> (Eich et al., 1994): Abruf am besten bei gleicher Stimmung.<br><b>Stimmungskongruenz</b>: Bei positiver bzw. negativer Stimmung werden vor allem positive bzw. negative Ereignisse erinnert (→ Depression).</td></tr></table>
<p>Belegt ist Kontextabhängigkeit auch für Musik, Temperatur, Geruch, Körperlage und Tageszeit.</p>
<div class="merk"><b>Schulbezug</b>Die Klausur wird am PC im PC-Raum geschrieben. Wer am PC übt und sich den Raum vorstellt, nutzt die Kontextpassung.</div>`,
check:[
 {q:"Was unterscheidet Stimmungskongruenz von Stimmungsabhängigkeit?", o:["Es gibt keinen Unterschied, beides meint dasselbe","Kongruenz: Man erinnert eher, was zur aktuellen Stimmung passt","Kongruenz: Man erinnert sich nur in guter Stimmung gut","Kongruenz: Sie betrifft nur Lernen unter Alkohol"], a:1, ex:"Abhängigkeit: Abruf am besten bei gleicher Stimmung wie beim Lernen. Kongruenz: ein Bias zu stimmungspassenden Inhalten, etwa bei Depression zu negativen.", w:["Die Folie unterscheidet beide ausdrücklich.",null,"Die Kongruenz gilt für positive wie negative Stimmung.","Alkohol gehört zum physischen Status, nicht zum emotionalen."]},
 {q:"Welche drei Informationen enthält episodisches Wissen über das „was“ hinaus?", o:["wer, warum, wozu","wann, wo, wie","wie viel, wie oft, wie lange","was, womit, wodurch"], a:1, ex:"Zeitpunkt, Ort und situativer Kontext.", w:["Diese W-Fragen nennt die Folie nicht.",null,"Häufigkeiten und Dauer stehen nicht auf der Folie.","„Was“ ist der semantische Teil. Gefragt ist, was darüber hinaus kommt."]}
]},
{id:"2-5", t:"Prozedurales Gedächtnis und Schlaf", html:`
<p>Das <b>implizite, nicht-deklarative Gedächtnis</b> wirkt sich auf Verhalten aus, ohne zwangsläufig ins Bewusstsein zu treten (<b>Schacter, 1987</b>). Davon abzugrenzen ist das <b>explizite Gedächtnis</b>: Seine Inhalte sind bewusst und können berichtet werden, also „deklarativ“.</p>
<p><b>Prozedurales Gedächtnis</b>: durch Übung erworbenes Wissen um automatisierte motorische Muster und Handlungsabläufe, etwa Gehen, Sprechen, Jonglieren.</p>
<p><b>Phasenmodell des Erwerbs prozeduralen Wissens:</b></p>
<table class="kvq"><tr><th>Phase</th><th>Kennzeichen</th></tr>
<tr><td>1. <b>kognitive Phase</b></td><td>Wissen ist explizit, oft verbal repräsentiert (Schemata); die Ausführung erfordert starke Aufmerksamkeit.</td></tr>
<tr><td>2. <b>assoziative Phase</b></td><td>Durch wiederholtes Üben prägen sich zunehmend automatisierte Antwortmuster auf relevante Reize ein.</td></tr>
<tr><td>3. <b>autonome Phase</b></td><td>Sehr genaue, schnelle Ausführung ohne Aufmerksamkeit.</td></tr></table>
<p><b>Exkurs: Langzeitgedächtnis und Schlaf.</b> Schlaf ist unabdingbar für die <b>Konsolidierung</b> (Verfestigung) von LZG-Inhalten. Dabei werden dieselben Hirnareale aktiv wie bei der ersten Reizverarbeitung (Interaktion Hippocampus und Kortex). Schlafphasen wechseln zyklisch:</p>
<ul><li><b>Non-REM-Schlaf</b> (slow-wave sleep, <b>SWS</b>, Stadien III und IV): stärker in der <b>ersten Schlafhälfte</b>, langsame EEG-Oszillationen. Befördert vor allem die Konsolidierung <b>deklarativer</b> Inhalte (Wortpaare).</li>
<li><b>REM-Schlaf</b>: stärker in der <b>zweiten Schlafhälfte</b>, schnelle EEG-Oszillationen und Augenbewegungen. Befördert vor allem <b>nicht-deklarative</b> Inhalte (Mirror-Tracing).</li></ul>`,
check:[
 {q:"In welcher Phase des Fertigkeitserwerbs braucht die Ausführung starke Aufmerksamkeit?", o:["Kognitive Phase","Assoziative Phase","Autonome Phase","In keiner Phase"], a:0, ex:"Zu Beginn ist das Wissen explizit, oft verbal, und die Ausführung erfordert starke Aufmerksamkeitsfokussierung.", w:[null,"In der assoziativen Phase werden die Muster schon zunehmend automatisiert.","In der autonomen Phase läuft die Ausführung gerade ohne Aufmerksamkeit.","Die kognitive Phase ist ausdrücklich so beschrieben."]},
 {q:"Welcher Schlaf befördert vor allem die Konsolidierung deklarativer Inhalte?", o:["REM-Schlaf in der zweiten Nachthälfte","Früher, SWS-reicher Schlaf","Nur der Mittagsschlaf","Schlaf hat darauf keinen Einfluss"], a:1, ex:"Im klassischen Paradigma profitiert das Lernen von Wortpaaren vor allem vom frühen Tiefschlaf (SWS).", w:["REM-Schlaf befördert vor allem nicht-deklarative Inhalte wie Mirror-Tracing.",null,"Die Folie unterscheidet frühen und späten Nachtschlaf, nicht Mittagsschlaf.","Schlaf ist laut Folie unabdingbar für die Konsolidierung."]}
]},
{id:"2-6", t:"Sensorisches Gedächtnis und Kurzzeitgedächtnis", html:`
<p>Zum <b>transienten Gedächtnis</b> gehören sensorische Register, Kurzzeit- und Arbeitsgedächtnis.</p>
<p><b>Sensorisches Gedächtnis</b>: unmittelbare und sehr kurze Speicherung eingehender sensorischer Information. Eigenschaften:</p>
<ul><li>streng <b>modalitätsspezifisch</b>,</li><li>sehr kurze Speicherdauer (je nach Sinnesmodalität unterschiedlich),</li><li>Kapazität relativ <b>hoch</b> (z. B. mehr als 7),</li><li><b>unabhängig von Aufmerksamkeit</b> und Bewusstsein,</li><li>Vergessen durch <b>Spurenzerfall</b>.</li></ul>
<p>Funktion: Basis des kontinuierlichen Informationsflusses, den spätere Gedächtnissysteme übernehmen.</p>
<p><b>Kurzzeitgedächtnis</b> (KZG), nach Atkinson & Shiffrin (1968): die Funktion, kleine Informationsmengen kurz in einem aktiven Zustand zu halten.</p>
<ul><li>eine <b>bewusste</b> Verarbeitungsstufe, Information ist leicht zugreifbar,</li>
<li>Information geht nach etwa <b>20 Sekunden</b> verloren, außer sie wird durch <b>Rehearsal</b> aufgefrischt,</li>
<li>Kapazität bei Ungeübten etwa <b>7 ± 2</b> Einheiten (<b>Miller, 1956</b>),</li>
<li><b>Chunking</b>, die Bündelung einfacher Elemente zu Stimuluskomplexen, erlaubt größere Mengen. Chunks werden auf Basis von <b>Vorwissen aus dem LZG</b> gebildet (Lehrbuch Kap. 2: „i-t-b-m-w“ → „IT“, „BMW“),</li>
<li>durch <b>Elaboration</b> (Enkodierung in ein Format, z. B. visuell, semantisch) kann Information ins LZG übergehen.</li></ul>
<p><b>Vergessen im KZG:</b> Spurenverlust über die Zeit (<b>Peterson & Peterson, 1959</b>). Wahrscheinlicher ist aber, dass vor allem <b>Interferenz</b> zwischen Elementen den Abruf behindert (<b>Waugh & Norman, 1965</b>).</p>
<div class="merk"><b>So stand es in der Klausur WiSe 24/25</b><div class="mrows">
<div><span class="ml"><span class="vd t">wahr</span></span><span>Chunking setzt Zugriff auf Information aus dem LZG voraus.</span></div>
<div><span class="ml"><span class="vd t">wahr</span></span><span>Gesunde Erwachsene können Information im KZG länger als 20 Sekunden halten.<br><span class="small muted">Grund: Rehearsal</span></span></div></div></div>`,
check:[
 {q:"Was gilt für das sensorische Gedächtnis?", o:["Es hängt von Aufmerksamkeit ab","Es ist streng modalitätsspezifisch","Es hat eine Kapazität von 7 ± 2","Es speichert über Minuten"], a:1, ex:"Jeder Sinn hat sein eigenes Register mit eigener, sehr kurzer Dauer.", w:["Es ist gerade unabhängig von Aufmerksamkeit und Bewusstsein.",null,"7 ± 2 ist die Kapazität des Kurzzeitgedächtnisses. Das sensorische Gedächtnis fasst mehr.","Die Speicherdauer ist sehr kurz, im visuellen Bereich unter einer Sekunde."]},
 {q:"Warum kann man Information länger als 20 Sekunden im KZG halten?", o:["Durch Rehearsal, also Auffrischen","Weil das KZG unbegrenzt ist","Durch Spurenzerfall","Weil Chunking die Zeit verlängert"], a:0, ex:"Ohne Wiederholung geht die Information nach etwa 20 Sekunden verloren, mit Rehearsal bleibt sie aktiv. In der Klausur 24/25 war die Aussage deshalb wahr.", w:[null,"Das KZG ist in Kapazität und Dauer begrenzt.","Spurenzerfall ist ein Grund für Vergessen, nicht für Behalten.","Chunking erhöht die Menge, nicht die Dauer."]}
]},
{id:"2-7", t:"Arbeitsgedächtnis (Baddeley & Hitch, 1974)", html:`
<p>Zwei Schwächen des modalen Modells mit seinem KZG führten zum Konzept des Arbeitsgedächtnisses:</p>
<ul><li><b>Annahme eines passiven Speichers:</b> Wie soll dann aktive Manipulation von Information beim Problemlösen gehen?</li>
<li><b>Annahme eines unitären Speichers:</b> <b>Dual-Task-Studien</b> zeigen, dass bestimmte Aufgabentypen kaum interferieren.</li></ul>
<p>Das <b>Arbeitsgedächtnis</b> (AG) nach <b>Baddeley & Hitch (1974)</b> ist ein <b>aktives</b> Verarbeitungssystem, das die für die aktuelle Aufgabe nötige Information temporär bereitstellt und <b>manipuliert</b>. Es besteht aus mindestens vier Subsystemen, die untereinander und mit dem LZG interagieren:</p>
<table class="kvq"><tr><th>Subsystem</th><th>Aufgabe</th></tr>
<tr><td><b>phonologische Schleife</b></td><td>hält sprachbasierte Information aufrecht</td></tr>
<tr><td><b>räumlich-visueller Notizblock</b></td><td>hält visuell-räumliche Information aufrecht</td></tr>
<tr><td><b>episodischer Puffer</b></td><td>multimodaler Speicher; bindet unterschiedliche Informationsflüsse zu komplexen Mustern („<b>Binding</b>“)</td></tr>
<tr><td><b>zentrale Exekutive</b></td><td>überwacht Verarbeitungsprozesse, verteilt Ressourcen, lenkt Aufmerksamkeit</td></tr></table>
<p>Schleife und Notizblock bestehen jeweils aus einem <b>Speicher</b> und einem <b>Rehearsal-Mechanismus</b>. Die zentrale Exekutive ist angelehnt an das <b>supervisory attentional system</b> (SAS) von Norman & Shallice (1986). Sie ist gefragt, wenn nicht-automatisierte Handlungen ausgeführt werden oder ein Konflikt auftritt und unerwünschte Tendenzen unterdrückt werden müssen.</p>
<div class="merk"><b>So stand es in der Klausur WiSe 24/25</b><div class="mrows">
<div><span class="ml"><span class="vd f">falsch</span></span><span>„Räumlich-visuelle und verbale Informationen parallel zu verarbeiten (Dual-Tasking), ist nur mit deutlichen Leistungseinbußen möglich.“<br><span class="small muted">Grund: Getrennte Subsysteme, die Aufgaben interferieren kaum.</span></span></div></div></div>`,
check:[
 {q:"Warum kann man gleichzeitig ein Bild ansehen und einem Satz zuhören, ohne dass die Leistung stark sinkt?", o:["Weil das Kurzzeitgedächtnis unbegrenzt viel aufnehmen kann","Weil getrennte Subsysteme verbale und visuelle Information halten","Weil die zentrale Exekutive beide Informationen selbst speichert","Weil das sensorische Gedächtnis die Bilder dauerhaft übernimmt"], a:1, ex:"Phonologische Schleife und räumlich-visueller Notizblock sind getrennt. Darum interferieren solche Aufgaben kaum (Dual-Task-Befunde).", w:["Das KZG ist begrenzt. Der Grund liegt in getrennten Subsystemen.",null,"Die zentrale Exekutive steuert und verteilt Ressourcen, sie ist kein Speicher für beides.","Das sensorische Gedächtnis hält Information nur extrem kurz."]},
 {q:"Welches Subsystem verbindet Information aus verschiedenen Quellen zu komplexen Mustern?", o:["Phonologische Schleife","Räumlich-visueller Notizblock","Episodischer Puffer","Zentrale Exekutive"], a:2, ex:"Der episodische Puffer ist multimodal und für das „Binding“ zuständig.", w:["Die Schleife hält nur sprachbasierte Information.","Der Notizblock hält nur visuell-räumliche Information.",null,"Die zentrale Exekutive überwacht und lenkt, verbindet aber nicht selbst."]}
]}
];

CARDS[2]=[
 {id:"c2-01", f:"Gedächtnis (Definition)", b:"Das Fortbestehen aufgenommener Information über die Zeit, das deren Verfügbarmachung ermöglicht."},
 {id:"c2-02", f:"Strukturelle vs. prozedurale Sicht auf Gedächtnis", b:"Strukturell: Gedächtnis ist ein Ort, an dem Information aufbewahrt wird (räumliche Metaphern).\nProzedural: Gedächtnis sind die Prozesse, durch die Inhalte entstehen (dynamisch)."},
 {id:"c2-03", f:"Die drei zentralen Gedächtnisprozesse", b:"Enkodierung\nSpeicherung\nAbruf"},
 {id:"c2-04", f:"Vergessen (Definition)", b:"Verlust von zugreifbarer Information."},
 {id:"c2-05", f:"Modales Modell (Atkinson & Shiffrin, 1968): Worin unterscheiden sich die Speicher?", b:"zeitliche Constraints\nKapazitäts-Constraints\nVergessensmechanismen\nneuroanatomische Basis"},
 {id:"c2-06", f:"Die drei Speicher im modalen Modell mit Dauer", b:"Sensorischer Speicher: unter 1 Sekunde\nKurzzeitspeicher: mehrere Sekunden (aber Rehearsal)\nLangzeitgedächtnis: beliebige Dauer"},
 {id:"c2-07", f:"Deklaratives Langzeitgedächtnis", b:"Explizit, bewusst und berichtbar.\nEpisodisch: persönliche Erlebnisse\nSemantisch: Weltwissen, Sprache"},
 {id:"c2-08", f:"Non-deklaratives Langzeitgedächtnis", b:"Implizit, wirkt sich auf Verhalten aus, ohne zwangsläufig bewusst zu werden.\nProzedural (motorische Fertigkeiten), perzeptuelles Priming (PRS), klassische Konditionierung, non-assoziatives Lernen"},
 {id:"c2-09", f:"Transientes Gedächtnis", b:"Sensorische Register, Kurzzeit- und Arbeitsgedächtnis. Das prozedurale Gedächtnis gehört nicht dazu (Klausur 24/25)."},
 {id:"c2-10", f:"Spreading-Activation-Modell (Collins & Loftus, 1975)", b:"Semantische Konzepte in einem nicht-hierarchischen Netzwerk. Mehr gemeinsame Eigenschaften → mehr Verbindungen. Aktivierung breitet sich auf nahe Knoten aus und nimmt mit Entfernung und Zeit ab."},
 {id:"c2-11", f:"Episodisches Gedächtnis", b:"Enkodierung, Speicherung und Abruf von Wissen um spezifische, selbst erlebte Ereignisse. Enthält neben dem „was“ auch wann, wo und wie. Kontextgebunden (Quellengedächtnis)."},
 {id:"c2-12", f:"Godden & Baddeley (1975)", b:"Abruf ist am besten, wenn Enkodierungs- und Abrufsituation ähnlich sind (Umgebung). Mentales Simulieren des Kontexts reicht häufig aus."},
 {id:"c2-13", f:"Kontexteffekte des physischen Status", b:"Godwin et al. (1969): unter Alkohol Gelerntes wird unter Alkohol besser abgerufen (auch andere psychotrope Substanzen).\nMiles & Hardman (1998): gleicher kardiovaskulärer Status verbessert die Gedächtnisleistung."},
 {id:"c2-14", f:"Stimmungsabhängigkeit vs. Stimmungskongruenz", b:"Abhängigkeit (Eich et al., 1994): Abruf am besten bei gleicher Stimmung bei Enkodierung und Abruf.\nKongruenz: Bias, bei positiver bzw. negativer Stimmung vor allem positive bzw. negative Ereignisse zu erinnern (→ Depression)."},
 {id:"c2-15", f:"Implizites Gedächtnis (Schacter, 1987)", b:"Teil des Gedächtnisses, der sich auf Verhalten auswirkt, ohne zwangsläufig ins Bewusstsein zu treten. Abgrenzung: explizites Gedächtnis mit bewussten, berichtbaren (deklarativen) Inhalten."},
 {id:"c2-16", f:"Prozedurales Gedächtnis", b:"Durch Übung erworbenes Wissen um automatisierte motorische Muster bzw. Handlungsabläufe wie Gehen, Sprechen, Jonglieren."},
 {id:"c2-17", f:"Drei Phasen des Erwerbs prozeduralen Wissens", b:"Kognitiv: explizit, oft verbal, starke Aufmerksamkeit nötig\nAssoziativ: durch Üben zunehmend automatisierte Antwortmuster\nAutonom: genau und schnell, ohne Aufmerksamkeit"},
 {id:"c2-18", f:"Schlaf und Konsolidierung: SWS vs. REM", b:"Früher, SWS-reicher Schlaf (Non-REM, Stadien III/IV, langsame EEG-Wellen): vor allem deklarative Inhalte.\nSpäter REM-Schlaf (schnelle EEG-Wellen, Augenbewegungen): vor allem nicht-deklarative Inhalte."},
 {id:"c2-19", f:"Sensorisches Gedächtnis: Eigenschaften", b:"streng modalitätsspezifisch\nsehr kurze Speicherdauer\nrelativ hohe Kapazität (z. B. > 7)\nunabhängig von Aufmerksamkeit/Bewusstsein\nVergessen durch Spurenzerfall"},
 {id:"c2-20", f:"Kurzzeitgedächtnis: Eigenschaften", b:"bewusste Verarbeitungsstufe, leicht zugreifbar\nVerlust nach etwa 20 Sekunden, außer bei Rehearsal\nKapazität 7 ± 2 Einheiten bei Ungeübten (Miller, 1956)\nChunking erlaubt größere Mengen"},
 {id:"c2-21", f:"Chunking", b:"Bündelung einfacher Elemente zu größeren Einheiten (Stimuluskomplexen). Setzt Zugriff auf Vorwissen aus dem LZG voraus (Klausur 24/25: wahr). Beispiel Lehrbuch: i-t-b-m-w → IT, BMW."},
 {id:"c2-22", f:"Vergessen im KZG: zwei Erklärungen", b:"Spurenverlust in Abhängigkeit von der Zeit (Peterson & Peterson, 1959).\nWahrscheinlicher: Interferenz zwischen Elementen im KZG (Waugh & Norman, 1965)."},
 {id:"c2-23", f:"Zwei Schwächen des modalen Modells (KZG)", b:"Annahme eines passiven Speichers: Wie geht aktive Manipulation beim Problemlösen?\nAnnahme eines unitären Speichers: Dual-Task-Studien zeigen, dass bestimmte Aufgabentypen kaum interferieren."},
 {id:"c2-24", f:"Arbeitsgedächtnis (Baddeley & Hitch, 1974)", b:"Aktives, multikomponentielles Verarbeitungssystem, das die für die aktuelle Aufgabe nötige Information temporär bereitstellt und manipuliert, nicht nur ein passiver Kurzzeitspeicher."},
 {id:"c2-25", f:"Die vier Subsysteme des Arbeitsgedächtnisses", b:"Phonologische Schleife: sprachbasierte Information\nRäumlich-visueller Notizblock: visuell-räumliche Information\nEpisodischer Puffer: multimodal, Binding\nZentrale Exekutive: überwacht, verteilt Ressourcen, lenkt Aufmerksamkeit"},
 {id:"c2-26", f:"Zentrale Exekutive: wann ist sie gefragt?", b:"Angelehnt an das supervisory attentional system (Norman & Shallice, 1986). Relevant bei nicht-automatisierten Handlungen und bei Konflikten, wenn unerwünschte Tendenzen unterdrückt werden müssen."}
];
Object.assign(CARD_INFO,{
 "c2-03":"Enkodierung: Information in eine speicherbare Form bringen (englisch encoding).",
 "c2-05":"Constraints: Beschränkungen.",
 "c2-06":"Rehearsal: englisch „Probe“, inneres Wiederholen.",
 "c2-07":"Deklarativ: lateinisch declarare, „erklären, kundtun“, also berichtbar.",
 "c2-08":"Priming: Vorerfahrung mit einem Reiz erleichtert seine spätere Verarbeitung.\nCS-UCS: konditionierter und unkonditionierter Reiz.",
 "c2-09":"Transient: lateinisch transire, „vorübergehen“, also flüchtig.",
 "c2-11":"Episode: ein abgeschlossenes Ereignis aus dem eigenen Leben.",
 "c2-13":"Psychotrop: auf die Psyche wirkend.\nKardiovaskulär: Herz und Kreislauf betreffend.",
 "c2-14":"Kongruenz: Übereinstimmung.",
 "c2-18":"SWS: slow-wave sleep, Tiefschlaf.\nREM: rapid eye movement.\nMirror-Tracing: eine Figur im Spiegel nachzeichnen.",
 "c2-19":"Modalität: Sinneskanal (Sehen, Hören, Tasten …).",
 "c2-25":"Binding: englisch „Bindung“, das Verknüpfen zu einem Ganzen."
});
Object.assign(CARD_CTX,{
 "c2-01":"Grundbegriff","c2-02":"Zwei Konzepte von Gedächtnis","c2-03":"Was das Gedächtnis tut","c2-04":"Grundbegriff",
 "c2-05":"Das Mehrspeichermodell","c2-06":"Wie lange jeder Speicher hält","c2-07":"Bewusstes Langzeitwissen","c2-08":"Unbewusstes Langzeitwissen",
 "c2-09":"Das flüchtige Gedächtnis","c2-10":"Wie Weltwissen gespeichert ist","c2-11":"Erinnerung an Erlebtes","c2-12":"Kontext: Umgebung",
 "c2-13":"Kontext: Körperzustand","c2-14":"Kontext: Gefühle","c2-15":"Abgrenzung explizit und implizit","c2-16":"Können statt Wissen",
 "c2-17":"Wie Fertigkeiten automatisch werden","c2-18":"Exkurs Schlaf","c2-19":"Die erste Station","c2-20":"Der kurze Zwischenspeicher",
 "c2-21":"Mehr Platz im KZG","c2-22":"Warum Inhalte aus dem KZG verschwinden","c2-23":"Warum ein neues Modell nötig war","c2-24":"Das aktive Modell",
 "c2-25":"Aufbau des Arbeitsgedächtnisses","c2-26":"Die Steuerzentrale"
});

/* ================= Kapitel 3: Vergessen und Abruf =================
   Grundlage: Folien Sitzung 4 (Input 4: Folien 27–33) und Sitzung 5 (Input 1: Folien 7–11), WiSe 26/27;
   Klausur WiSe 24/25 Teil 1 (Aufgaben 1 und 3). */
LESSONS[3]=[
{id:"3-1", t:"Enkodierung und Gedächtnis als Konstruktion", html:`
<p><b>Enkodierung</b> ist der Prozess des Abspeicherns von Information, noch während der Reiz präsent ist. Für die Qualität der Enkodierung sind wichtig:</p>
<ul><li><b>Verarbeitungstiefe</b> („levels of processing“, „deep/shallow encoding“): Je tiefer, also z. B. semantisch statt nur oberflächlich verarbeitet, desto besser wird erinnert.</li>
<li><b>Passung der Enkodierungs- und Abrufprozesse</b>,</li>
<li><b>Vorwissen</b>,</li>
<li><b>Lernrate</b>: Bei expliziten Inhalten ist verteiltes Lernen dem massierten überlegen.</li></ul>
<p><b>Gedächtnis als konstruktiver Prozess:</b> Gedächtnisinhalte sind <b>keine objektiven Abbildungen</b> von Reizen oder Ereignissen (siehe <b>Augenzeugenberichte</b>). <b>Schemata</b> und <b>Skripte</b> (gelernte Muster von Ereignisabfolgen) wirken als „Situationsmodelle“ und lenken</p>
<ul><li>die Enkodierung durch Selektion, Abstraktion, Interpretation (inferenzielle Prozesse) und Integration von Informationseinheiten,</li>
<li>den Abruf durch <b>Rekonstruktion</b> von Inhalten.</li></ul>
<div class="merk"><b>So stand es in der Klausur WiSe 24/25</b><div class="mrows">
<div><span class="ml"><span class="vd f">falsch</span></span><span>„Gedächtnisinhalte sind objektive Repräsentationen von Stimuli und Ereignissen.“</span></div>
<div><span class="ml"><span class="vd f">falsch</span></span><span>„Je tiefer Information bei der Enkodierung verarbeitet wurde, desto schwieriger ist der Abruf.“</span></div></div></div>
<p class="small muted">Die Aussage zum verteilten Lernen stammt aus der Grafik auf Folie 27 (Sitzung 4).</p>`,
check:[
 {q:"Was gilt für die Verarbeitungstiefe bei der Enkodierung?", o:["Je tiefer verarbeitet, desto schwieriger der Abruf","Je tiefer verarbeitet, desto besser die Enkodierung","Die Tiefe spielt keine Rolle","Nur oberflächliche Verarbeitung gelangt ins LZG"], a:1, ex:"Tiefe (z. B. semantische) Verarbeitung verbessert die Enkodierung. Das Gegenteil war 24/25 als falsche Aussage in der Klausur.", w:["Genau diese Aussage war in der Klausur 24/25 falsch.",null,"Verarbeitungstiefe ist der erste Faktor auf Heines Liste.","Oberflächliche Verarbeitung führt zu schlechterem Behalten."]},
 {q:"Warum sind Augenzeugenberichte oft ungenau?", o:["Weil das Kurzzeitgedächtnis für ganze Szenen zu klein ist","Weil Gedächtnis konstruktiv ist und Schemata den Abruf lenken","Weil Augenzeugen in den meisten Fällen bewusst lügen","Weil bei Stress das sensorische Gedächtnis ausfällt"], a:1, ex:"Gedächtnisinhalte sind keine objektiven Abbilder. Schemata und Skripte wählen aus, interpretieren und rekonstruieren.", w:["Das KZG erklärt nicht, warum Erinnerungen verzerrt sind.",null,"Es geht nicht um Absicht. Auch ehrliche Erinnerungen sind rekonstruiert.","Jeder Mensch hat ein sensorisches Gedächtnis."]}
]},
{id:"3-2", t:"Behalten und Abruf", html:`
<p><b>Behaltensleistung:</b> Nach einem anfänglichen Abfall in den ersten <b>2 bis 3 Jahren</b> nach dem Lernen bleibt semantisches Wissen relativ stabil („<b>permastore</b>“). <b>Abruf wirkt konservierend</b>. Allerdings erinnert man bei jedem Abruf womöglich nicht das ursprüngliche Ereignis, sondern das, was zuletzt erinnert wurde.</p>
<p>Beim <b>Abruf</b> wird ein Gedächtnisinhalt (z. B. die Vokabel „agua“) nach einem <b>Schlüsselreiz</b> (retrieval cue, hier „water“) reproduziert. Was den Abruf bestimmt:</p>
<table class="kvq"><tr><th>Faktor</th><th>Wirkung</th></tr>
<tr><td><b>Aufmerksamkeitslenkung</b></td><td>Der Abruferfolg sinkt, wenn der Cue nicht beachtet wird.</td></tr>
<tr><td><b>Cue-Relevanz</b></td><td>Der Cue muss mit dem Ziel assoziiert sein, also Ähnlichkeit zwischen Enkodierungs- und Abrufphase.</td></tr>
<tr><td><b>assoziative Stärke</b></td><td>Cue und Ziel müssen hinreichend stark verknüpft sein.</td></tr>
<tr><td><b>Anzahl der Cues</b></td><td>Kombinationen von Cues wirken besser als einzelne.</td></tr>
<tr><td><b>Stärke der Gedächtnisspur</b></td><td>Schwach repräsentierte Inhalte sind schlechter abrufbar.</td></tr>
<tr><td><b>Abrufstrategie</b></td><td>Sie sollte der Enkodierungsstrategie ähneln.</td></tr>
<tr><td><b>mentaler Modus</b></td><td>Ein aktiviertes Schema richtet die Aufmerksamkeit auf relevante Cues.</td></tr></table>
<div class="merk"><b>Merksatz</b>Viele verschiedene Cues zu einem Inhalt helfen. Viele Inhalte an einem Cue schaden (Cue-Overload, nächste Lektion).</div>`,
check:[
 {q:"Was bedeutet „permastore“?", o:["Information im Kurzzeitgedächtnis bleibt dauerhaft erhalten","Semantisches Wissen bleibt nach anfänglichem Abfall relativ stabil","Alles Gelernte bleibt für immer gleich gut abrufbar","Ein eigener Speicher innerhalb des Arbeitsgedächtnisses"], a:1, ex:"Nach einem Abfall in den ersten 2 bis 3 Jahren scheint semantisches Wissen relativ stabil.", w:["Im KZG geht Information nach etwa 20 Sekunden verloren.",null,"Es gibt einen anfänglichen Abfall, danach erst bleibt das Wissen stabil.","Permastore bezieht sich auf das semantische LZG."]},
 {q:"Welcher Faktor fördert den Abruf?", o:["Ein unbeachteter Cue","Eine Abrufstrategie, die der Enkodierungsstrategie ähnelt","Eine schwache Gedächtnisspur","Ein Cue, der mit vielen Inhalten verknüpft ist"], a:1, ex:"Die Abrufstrategie sollte der Enkodierung ähneln.", w:["Wird der Cue nicht beachtet, sinkt der Abruferfolg.",null,"Schwach repräsentierte Inhalte sind schlechter abrufbar.","Ein Cue mit vielen Inhalten führt zu Cue-Overload."]}
]},
{id:"3-3", t:"Vergessen und Interferenz", html:`
<p><b>Inzidentelles Vergessen</b> im Laufe der Zeit entsteht durch:</p>
<ul><li><b>Spurenzerfall</b>: graduelles Abschwächen der Gedächtnisspur. Unklar, ob es ihn im LZG gibt, denn er lässt sich nicht untersuchen: Jeder Abruf zum Prüfen führt zur Konsolidierung.</li>
<li><b>Kontextfluktuation</b>: Abruf-Cues gehen verloren, weil sich der Kontext verändert.</li>
<li><b>Interferenz</b>: Der Abruf einer Information wird gestört, weil eine ähnliche Information gespeichert wird.
 <ul><li><b>Cue-Competition</b>: Ein Abruf-Cue ist mit mehr als einer Gedächtnisspur verknüpft, die Inhalte blockieren sich gegenseitig.</li>
 <li><b>Cue-Overload-Prinzip</b>: Die Abrufleistung sinkt systematisch mit der Anzahl der Einheiten, die mit einem Cue verknüpft sind.</li></ul></li></ul>
<table class="kvq"><tr><th>Interferenzphänomen</th><th>Was stört was?</th></tr>
<tr><td><b>retroaktive Interferenz</b></td><td><b>Neu</b> erworbene Information stört den Abruf <b>früher</b> erworbener Inhalte.</td></tr>
<tr><td><b>proaktive Interferenz</b></td><td><b>Früher</b> erworbene Information stört den Abruf <b>später</b> erworbener Inhalte.</td></tr>
<tr><td><b>abrufinduziertes Vergessen</b></td><td>Der Abruf bestimmter Teilinformationen behindert einen späteren Abruf anderer Informationsteile.</td></tr></table>
<div class="merk"><b>Eselsbrücke</b><div class="mrows">
<div><span class="ml">retro</span><span>„zurück“: Das Neue wirkt zurück auf das Alte.</span></div>
<div><span class="ml">pro</span><span>„vorwärts“: Das Alte wirkt nach vorn auf das Neue.</span></div></div></div>
<div class="merk"><b>So stand es in der Klausur WiSe 24/25</b><div class="mrows">
<div><span class="ml"><span class="vd f">falsch</span></span><span>„Je mehr unterschiedliche Gedächtnisspuren mit einem Cue verknüpft sind, desto besser der Abruf.“<br><span class="small muted">Grund: Cue-Overload</span></span></div>
<div><span class="ml"><span class="vd t">wahr</span></span><span>Proaktive Interferenz: Früheres stört den Abruf von Späterem.</span></div>
<div><span class="ml"><span class="vd t">wahr</span></span><span>Kontextfluktuation bedingt Vergessen, weil relevante Abrufreize verlorengehen können.</span></div></div></div>`,
check:[
 {q:"Nach dem Lernen der französischen Vokabeln fallen einer Schülerin die spanischen nicht mehr ein, die sie früher gelernt hat. Was liegt vor?", o:["Proaktive Interferenz","Retroaktive Interferenz","Spurenzerfall","Abrufinduziertes Vergessen"], a:1, ex:"Das Neue (Französisch) stört den Abruf des früher Gelernten (Spanisch).", w:["Proaktiv wäre es umgekehrt: Spanisch würde das spätere Französisch stören.",null,"Spurenzerfall wäre ein bloßes Abschwächen über die Zeit, ohne ähnliche neue Information.","Abrufinduziert hieße, dass das Abrufen einiger Teile den Abruf anderer Teile behindert."]},
 {q:"Warum lässt sich Spurenzerfall im LZG laut Folie kaum nachweisen?", o:["Weil er zu schnell abläuft, um ihn zu messen","Weil jeder Abruf zur Prüfung die Spur festigt","Weil es kein dauerhaftes Langzeitgedächtnis gibt","Weil er nur bei Tieren beobachtet werden kann"], a:1, ex:"Um zu prüfen, ob eine Spur zerfallen ist, muss man abrufen, und Abruf führt zur Konsolidierung.", w:["Über die Geschwindigkeit sagt die Folie nichts.",null,"Das LZG ist ein zentrales Gedächtnissystem.","Die Folie nennt keine Beschränkung auf Tiere."]}
]}
];

CARDS[3]=[
 {id:"c3-01", f:"Enkodierung", b:"Prozess des Abspeicherns von Information, noch während der Stimulus präsent ist."},
 {id:"c3-02", f:"Vier Faktoren für die Qualität der Enkodierung", b:"Verarbeitungstiefe (levels of processing, deep/shallow encoding)\nPassung der Enkodierungs- und Abrufprozesse\nVorwissen\nLernrate"},
 {id:"c3-03", f:"Verarbeitungstiefe", b:"Je tiefer (z. B. semantisch) Information bei der Enkodierung verarbeitet wird, desto besser wird sie behalten. Die Gegenaussage („desto schwieriger der Abruf“) war 24/25 falsch."},
 {id:"c3-04", f:"Gedächtnis als konstruktiver Prozess", b:"Gedächtnisinhalte sind keine objektiven Abbildungen (Augenzeugenberichte!). Schemata und Skripte lenken die Enkodierung (Selektion, Abstraktion, Interpretation, Integration) und den Abruf (Rekonstruktion)."},
 {id:"c3-05", f:"Schemata und Skripte", b:"Gelernte Muster von Ereignisabfolgen, die als „Situationsmodelle“ Enkodierung und Abruf lenken."},
 {id:"c3-06", f:"Behaltensleistung: permastore", b:"Nach anfänglichem Abfall in den ersten 2–3 Jahren bleibt semantisches Gedächtnis relativ stabil. Abruf wirkt konservierend, ggf. wird aber das zuletzt Erinnerte erinnert, nicht das Original."},
 {id:"c3-07", f:"Abruf und retrieval cue", b:"Beim Abruf wird ein Gedächtnisinhalt nach einem Schlüsselreiz reproduziert, z. B. „agua“ nach dem Cue „water“."},
 {id:"c3-08", f:"Vier Faktoren des Abrufs (erste Folie)", b:"Aufmerksamkeitslenkung (unbeachteter Cue senkt den Erfolg)\nCue-Relevanz (Ähnlichkeit von Enkodierung und Abruf)\nassoziative Stärke von Cue und Target\nAnzahl der Cues (Kombinationen wirken besser)"},
 {id:"c3-09", f:"Drei weitere Faktoren des Abrufs", b:"Stärke der Gedächtnisspur\nAbrufstrategie (ähnlich der Enkodierungsstrategie)\nmentaler Modus (aktiviertes Schema lenkt auf relevante Cues)"},
 {id:"c3-10", f:"Drei Ursachen inzidentellen Vergessens", b:"Spurenzerfall (unklar, ob es ihn gibt)\nKontextfluktuation (Abruf-Cues gehen verloren)\nInterferenz (ähnliche Information stört den Abruf)"},
 {id:"c3-11", f:"Spurenzerfall im LZG", b:"Graduelles Abschwächen der Gedächtnisspur. Unklar, ob es existiert, weil es nicht zu untersuchen ist: Abruf führt zu Konsolidierung."},
 {id:"c3-12", f:"Kontextfluktuation", b:"Verlust von Abruf-Cues durch Veränderung des Kontextes. Bedingt Vergessen (Klausur 24/25: wahr)."},
 {id:"c3-13", f:"Cue-Competition und Cue-Overload-Prinzip", b:"Cue-Competition: Ein Cue ist mit mehr als einer Spur verknüpft, die Inhalte blockieren sich.\nCue-Overload: Die Abrufleistung sinkt systematisch mit der Anzahl der Einheiten an einem Cue."},
 {id:"c3-14", f:"Retroaktive Interferenz", b:"Neu erworbene Information stört den Abruf früher erworbener Inhalte."},
 {id:"c3-15", f:"Proaktive Interferenz", b:"Früher erworbene Information stört den Abruf später erworbener Inhalte (Klausur 24/25: wahr)."},
 {id:"c3-16", f:"Abrufinduziertes Vergessen", b:"Der Abruf bestimmter Teilinformationen behindert einen späteren Abruf anderer Informationsteile."}
];
Object.assign(CARD_INFO,{
 "c3-02":"Ergänzung (nicht auf der Folie): Der Ansatz „levels of processing“ geht auf Craik & Lockhart (1972) zurück.",
 "c3-05":"Skript: ein Schema für typische Abläufe, etwa „Restaurantbesuch“.",
 "c3-06":"Permastore: englisch, etwa „Dauerspeicher“.",
 "c3-07":"Retrieval: englisch „Abruf“. Cue: Hinweisreiz.",
 "c3-10":"Inzidentell: nebenbei, ohne Absicht.",
 "c3-13":"Overload: Überlastung.",
 "c3-14":"Retro: lateinisch „zurück“.",
 "c3-15":"Pro: lateinisch „vor, nach vorn“."
});
Object.assign(CARD_CTX,{
 "c3-01":"Der erste Gedächtnisprozess","c3-02":"Wovon gutes Abspeichern abhängt","c3-03":"Echte Klausuraussage","c3-04":"Kein Abbild der Wirklichkeit",
 "c3-05":"Was die Konstruktion lenkt","c3-06":"Wie lange Wissen hält","c3-07":"Der Abruf","c3-08":"Was den Abruf bestimmt",
 "c3-09":"Was den Abruf noch bestimmt","c3-10":"Warum wir vergessen","c3-11":"Erste Ursache","c3-12":"Zweite Ursache",
 "c3-13":"Dritte Ursache: Interferenz","c3-14":"Interferenz: neu stört alt","c3-15":"Interferenz: alt stört neu","c3-16":"Vergessen durch Erinnern"
});

KREUZ.push(
 {id:"x3-01", ch:3, stem:"Für Gedächtnisprozesse allgemein gilt:", klausur:"WiSe 24/25", s:[
  ["Gedächtnisinhalte sind objektive Repräsentationen von Stimuli und Ereignissen, mit denen das Individuum zu einem früheren Zeitpunkt konfrontiert war.", false, "Gedächtnis ist <b>konstruktiv</b>: Schemata lenken Enkodierung und Abruf (Augenzeugenberichte)."],
  ["Je tiefer Information bei der Enkodierung verarbeitet wurde, desto schwieriger ist der Abruf der Information.", false, "Umgekehrt: Tiefere Verarbeitung verbessert die Enkodierung und damit den Abruf."],
  ["Je weniger ähnlich sich Enkodierungs- und Abrufsituation sind, desto wahrscheinlicher ist der Abruf aus dem episodischen Gedächtnis gestört.", true, "Episodischer Abruf ist kontextabhängig (Godden & Baddeley, 1975)."]]},
 {id:"x2-01", ch:2, stem:"Für das Langzeitgedächtnis gilt:", klausur:"WiSe 24/25", s:[
  ["Das Spreading-Activation-Modell (Collins & Loftus, 1975) geht davon aus, dass semantische Gedächtnisinhalte in Form eines nicht-hierarchischen Netzwerks gespeichert sind.", true, "So auf der Folie."],
  ["Inhalte, die aus dem expliziten Langzeitgedächtnis abgerufen werden, können nicht verbalisiert werden.", false, "Explizite Inhalte sind bewusst und <b>berichtbar</b>, also deklarativ."],
  ["Das prozedurale Gedächtnis ist Teil des transienten Gedächtnisses.", false, "Es gehört zum <b>non-deklarativen Langzeitgedächtnis</b>."]]},
 {id:"x3-02", ch:3, stem:"Für das Vergessen von Information aus dem Langzeitgedächtnis gilt:", klausur:"WiSe 24/25", s:[
  ["Je mehr unterschiedliche Gedächtnisspuren mit einem Abrufreiz (Cue) verknüpft sind, desto besser ist der Gedächtnisabruf.", false, "Cue-Overload: Die Abrufleistung <b>sinkt</b> mit der Anzahl der Einheiten an einem Cue."],
  ["Proaktive Interferenz bezeichnet das Phänomen, dass früher erworbene Gedächtnisinhalte den Abruf später erworbener Gedächtnisinhalte stören.", true, "Retroaktiv wäre umgekehrt."],
  ["Kontextfluktuation bedingt Vergessen, da dadurch relevante Abrufreize verlorengehen können.", true, "So auf der Folie."]]},
 {id:"x2-02", ch:2, stem:"Für das transiente Gedächtnis gilt:", klausur:"WiSe 24/25", s:[
  ["Chunking, also die Bündelung von Information im Kurzzeitgedächtnis, setzt Zugriff auf Information aus dem Langzeitgedächtnis voraus.", true, "Chunks entstehen auf Basis von <b>Vorwissen</b> aus dem LZG (Lehrbuch Kap. 2)."],
  ["Werden räumlich-visuelle und verbale Informationen parallel verarbeitet (Dual-Tasking), ist das nur mit deutlichen Leistungseinbußen möglich.", false, "Getrennte Subsysteme (Schleife, Notizblock): Diese Aufgaben interferieren <b>kaum</b>."],
  ["Von gesunden Erwachsenen kann Information im Kurzzeitgedächtnis länger als 20 Sekunden aufrechterhalten werden.", true, "Mit <b>Rehearsal</b>."]]},
 {id:"x2-03", ch:2, stem:"Für das episodische Gedächtnis gilt:", s:[
  ["Episodisches Wissen enthält neben dem „was“ auch Information über wann, wo und wie.", true, "Zeitpunkt, Ort, situativer Kontext."],
  ["Stimmungskongruenz bedeutet, dass der Abruf am besten ist, wenn die Stimmung bei Enkodierung und Abruf identisch ist.", false, "Das ist <b>Stimmungsabhängigkeit</b>. Kongruenz ist der Bias zu stimmungspassenden Inhalten."],
  ["Mentales Simulieren des Lernkontexts kann den Abruf bereits verbessern.", true, "Laut Folie ist das häufig ausreichend."]]},
 {id:"x2-04", ch:2, stem:"Für das Arbeitsgedächtnis und den Schlaf gilt:", s:[
  ["Die zentrale Exekutive ist besonders bei automatisierten Handlungen gefragt.", false, "Sie ist bei <b>nicht-automatisierten</b> Handlungen und bei Konflikten relevant."],
  ["Der episodische Puffer bindet Information unterschiedlicher Verarbeitungssysteme zusammen.", true, "Binding, multimodal."],
  ["Früher, SWS-reicher Schlaf befördert vor allem die Konsolidierung deklarativer Gedächtnisinhalte.", true, "REM-Schlaf eher nicht-deklarative Inhalte."]]},
 {id:"x3-03", ch:3, stem:"Für den Abruf von Information gilt:", s:[
  ["Kombinationen von Abruf-Cues sind effektiver als einzelne Cues.", true, "Anzahl der Cues als Faktor."],
  ["Die Abrufstrategie sollte sich möglichst von der Enkodierungsstrategie unterscheiden.", false, "Sie sollte der Enkodierungsstrategie <b>ähneln</b>."],
  ["Beim abrufinduzierten Vergessen behindert der Abruf bestimmter Teilinformationen den späteren Abruf anderer Teile.", true, "So definiert auf der Folie."]]}
);

KURZ.push(
 {id:"k2-1", ch:2, pts:8,
  q:"Erläutern Sie, warum das Kurzzeitgedächtnis im modalen Modell zum Konzept des Arbeitsgedächtnisses weiterentwickelt wurde, und beschreiben Sie die Subsysteme des Arbeitsgedächtnisses nach Baddeley & Hitch (1974).",
  k:["KZG im modalen Modell: kleine Mengen kurz aktiv halten (ca. 20 s, 7 ± 2)","Schwäche 1: passiver Speicher, erklärt keine aktive Manipulation (Problemlösen)","Schwäche 2: unitärer Speicher, aber Dual-Task-Befunde: manche Aufgaben interferieren kaum","Phonologische Schleife (sprachlich) und räumlich-visueller Notizblock (visuell-räumlich), je Speicher + Rehearsal","Episodischer Puffer: multimodal, Binding","Zentrale Exekutive: überwacht, verteilt Ressourcen, lenkt Aufmerksamkeit"],
  m:"Im modalen Modell von Atkinson und Shiffrin hält das Kurzzeitgedächtnis kleine Informationsmengen für kurze Zeit aktiv, etwa 20 Sekunden und 7 ± 2 Einheiten. Zwei Annahmen erwiesen sich als zu eng: Ein passiver Speicher kann nicht erklären, wie Information beim Problemlösen aktiv manipuliert wird, und ein einheitlicher Speicher passt nicht zu Dual-Task-Befunden, nach denen bestimmte Aufgaben kaum interferieren. Baddeley und Hitch fassen das Arbeitsgedächtnis daher als aktives System mit mindestens vier Subsystemen: Die phonologische Schleife hält sprachbasierte, der räumlich-visuelle Notizblock visuell-räumliche Information aufrecht, beide mit Speicher und Rehearsal-Mechanismus. Der episodische Puffer verbindet als multimodaler Speicher Informationen zu komplexen Mustern. Die zentrale Exekutive überwacht die Verarbeitung, verteilt Ressourcen und lenkt die Aufmerksamkeit."},
 {id:"k3-1", ch:3, pts:8,
  q:"Ein Schüler lernt am Montag englische, am Dienstag französische Vokabeln für ähnliche Begriffe. Am Mittwoch fallen ihm im Englischtest viele Wörter nicht ein. Erklären Sie das Vergessen mit Interferenz und nennen Sie zwei weitere Ursachen inzidentellen Vergessens.",
  k:["Interferenz: ähnliche gespeicherte Information stört den Abruf","Retroaktive Interferenz: das neu gelernte Französisch stört den Abruf des früher gelernten Englisch","Cue-Competition/Cue-Overload: derselbe Cue (deutsches Wort) ist mit mehreren Spuren verknüpft","Kontextfluktuation: Abruf-Cues gehen durch veränderten Kontext verloren","Spurenzerfall: graduelles Abschwächen, Existenz im LZG unklar"],
  m:"Interferenz liegt vor, wenn ähnliche Information den Abruf stört. Hier wirkt das später gelernte Französisch zurück auf das früher gelernte Englisch: retroaktive Interferenz. Der deutsche Begriff als Abrufreiz ist nun mit zwei Gedächtnisspuren verknüpft; diese blockieren sich (Cue-Competition), und mit jeder weiteren Verknüpfung sinkt die Abrufleistung (Cue-Overload). Weitere Ursachen sind Kontextfluktuation, also der Verlust von Abrufreizen, weil sich der Kontext ändert, und Spurenzerfall, ein graduelles Abschwächen der Spur, dessen Existenz im Langzeitgedächtnis allerdings unklar ist, weil jeder Abruf zur Konsolidierung führt."}
);
OPEN.push({id:"o2-k1", ch:2, kind:"kurz", k:"k2-1", pts:10, title:"Arbeitsgedächtnis"});
OPEN.push({id:"o3-k1", ch:3, kind:"kurz", k:"k3-1", pts:10, title:"Vergessen und Interferenz"});
