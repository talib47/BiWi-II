/* ================= Klausurschärfung (17.11.2026) =================
   Grundlage: Folien Sitzung 1–5 (WiSe 26/27) und Klausur WiSe 24/25 (Kreuzaufgaben: je drei Aussagen wahr/falsch).
   In der Altklausur sind etwa die Hälfte der Aussagen wahr; Aufgaben mit nur einer wahren Aussage sind fast so häufig
   wie mit zwei, ganz selten sind alle drei wahr oder alle drei falsch. Die App hatte fast nur „zwei wahr, eine falsch“.
   Diese Datei gleicht das aus: Kreuzaufgaben mit einer, keiner oder drei wahren Aussagen, Kombinations- und
   Verbindungsfragen über Kapitel hinweg, dazu Karten zu Bild- und Grafikfolien (erg = Ergänzung, vermutlich mündlich).
   IDs neu und stabil; die Reihenfolge der wahren Aussage wechselt bewusst. */

KREUZ.push(
 /* Kapitel 1 */
 {id:"x1-07", ch:1, stem:"Für die Ziele empirischer Zugänge gilt:", s:[
  ["Beim Erklären wird die Ausprägung des unabhängigen Indikators durch die des abhängigen Indikators bedingt.", false, "Umgekehrt: Der <b>unabhängige</b> Indikator (Ursache) bedingt den <b>abhängigen</b> (Wirkung), etwa Frustration → Aggression."],
  ["Prädiktoren sind beim Vorhersagen die Variablen, die vorhergesagt werden.", false, "Vorhergesagt wird das <b>Kriterium</b>. Prädiktoren sind die Variablen, mit denen vorhergesagt wird."],
  ["Dass Fachwissen und Motivation korrelieren, ist eine Beschreibung und noch keine Erklärung.", true, "Beschreiben schließt Zusammenhänge ein; über Ursache und Wirkung sagt eine Korrelation nichts."]]},
 {id:"x1-08", ch:1, stem:"In Bezug auf Lernziele und Kompetenz gilt:", s:[
  ["Wer kompetent ist, zeigt nicht automatisch eine gute Performanz.", true, "Kompetenz ist die Voraussetzung (Disposition), Performanz das gezeigte Handeln, z. B. gestört durch Prüfungsangst."],
  ["Laut Heine sind in einer Vorlesung vor allem die oberen Lernzielstufen wie Synthese und Bewertung erreichbar.", false, "Umgekehrt: vor allem die <b>unteren</b> Stufen, Wissen und Verstehen sehr stark, Anwenden und Analysieren etwas."],
  ["Handlungskompetenz besteht laut KMK aus Sach-, Methoden- und Sozialkompetenz; Selbstkompetenz gehört nicht dazu.", false, "Selbstkompetenz ist der <b>vierte</b> Teil der Handlungskompetenz."]]},
 {id:"x1-09", ch:1, stem:"Für das Modell professioneller Unterrichtswahrnehmung (Seidel, 2022) gilt:", s:[
  ["Selbst-Monitoring und Zeitmanagement zählt das Modell zur professionellen Unterrichtswahrnehmung.", false, "Das sind <b>metakognitive Wissensbestände</b>. Zur Unterrichtswahrnehmung gehören Noticing und Reasoning."],
  ["Reasoning bezeichnet die interpretative Verarbeitung des Wahrgenommenen.", true, "So im Modell: interpretative Informationsverarbeitung = Reasoning."],
  ["Professionsbezogene Anforderungssituationen gliedert das Modell in Routine- und Krisensituationen.", false, "Im Modell stehen <b>Routinesituationen</b> und <b>Problemsituationen</b>."]]},

 /* Kapitel 9 */
 {id:"x9-07", ch:9, stem:"Für Heines Übersicht „Strukturierung des Schwerpunkts Lernen“ gilt:", s:[
  ["Priming gehört wie „mere exposure“ zum perzeptuellen Lernen.", false, "Priming steht unter <b>Lernen infolge wiederholter Stimulusdarbietung</b>, „mere exposure“ unter perzeptuellem Lernen."],
  ["Assoziatives Lernen heißt, dass ein einzelner Reiz durch Wiederholung seine Wirkung verliert.", false, "Das beschreibt Habituation, also nichtassoziatives Lernen. Assoziativ heißt: E1 → E2."],
  ["Habituation und Sensitivierung sind Formen des Lernens infolge wiederholter Stimulusdarbietung.", true, "So im Baum unter „Nichtassoziativ“."]]},
 {id:"x9-08", ch:9, stem:"Für Habituation und Sensitivierung gilt:", s:[
  ["Je höher die Reizintensität, desto wahrscheinlicher ist Habituation.", false, "Hohe Reizintensität begünstigt <b>Sensitivierung</b>; Habituation eher bei geringer Intensität."],
  ["Habituation ist nicht reversibel: Eine abgeschwächte Reaktion kehrt nicht zurück.", false, "Sie ist reversibel: Nach einer Pause zeigt sich <b>Spontanerholung</b>."],
  ["Sensitivierung ist stimulusspezifischer als Habituation.", false, "Umgekehrt: Sensitivierung ist <b>weniger</b> stimulusspezifisch."]]},

 /* Kapitel 10: Klassische Konditionierung */
 {id:"xkk-04", ch:10, stem:"Für die klassische Konditionierung gilt:", klausur:"WiSe 24/25", s:[
  ["Nach einem klassischen Konditionierungsprozess wird eine konditionierte Reaktion auch durch Reize ausgelöst, die dem konditionierten Stimulus ähnlich sind.", true, "Generalisierung (Generalisierungsgradient). Lösung nach Folie Sitzung 3."],
  ["Die Intensität der konditionierten Reaktion ist auch von der Reizintensität des unkonditionierten Stimulus abhängig.", true, "Folie: „Die Intensität der CR hängt stark von der Intensität des US ab.“ Eine handschriftliche Lösung im Projekt kreuzt hier falsch an; die Folie geht vor."],
  ["Neutrale Stimuli können durch Assoziation mit einem konditionierten Stimulus die Kapazität erwerben, eine konditionierte Reaktion auszulösen.", true, "Konditionierung zweiter Ordnung: Lernen ohne US."]]},
 {id:"xkk-05", ch:10, stem:"Für Extinktion und Spontanerholung gilt:", s:[
  ["Nach einer Extinktion ist die konditionierte Reaktion stets vollständig und dauerhaft gelöscht.", false, "Extinktion ist die <b>vollständige oder partielle</b> Abschwächung; nach einer Ruhephase kann die CR wieder aufflackern."],
  ["Extinktion erfolgt durch wiederholte Darbietung des US ohne den CS.", false, "Umgekehrt: der <b>CS</b> (Glocke) in Abwesenheit des <b>US</b> (Futter)."],
  ["Das Wiederaufflackern einer gelöschten CR auf den CS nach einer Ruhephase heißt Spontanerholung.", true, "So auf der Folie."]]},
 {id:"xkk-06", ch:10, stem:"Für klassische Konditionierung im Vergleich zur Habituation gilt:", s:[
  ["Wie bei der Habituation wird bei der klassischen Konditionierung nur ein einzelner Reiz wiederholt dargeboten.", false, "Klassische Konditionierung ist assoziativ: Zwei Reize (NS/CS und US) werden gekoppelt."],
  ["Prüfungs- und Schulangst lassen sich als Ergebnis klassischer Konditionierung illustrieren.", true, "Lernziel der Sitzung 3; Beispiel Matheangst."],
  ["Beim Diskriminierungstraining sagt ein zweiter CS das Ausbleiben des US vorher, die CR wird dadurch breiter.", false, "Ziel ist eine <b>Fokussierung</b> der CR (konditionierte Inhibition), nicht eine breitere CR."]]},

 /* Kapitel 11: Operante Konditionierung */
 {id:"x11-05", ch:11, stem:"Für Variablen, die die Lernkurve beim instrumentellen Lernen beeinflussen, gilt:", s:[
  ["Je schwächer der Verstärker, desto schneller erfolgt der Erwerb.", false, "Verstärkereigenschaften: Je <b>potenter</b> der Verstärker, desto schneller der Erwerb."],
  ["Kontingenz meint hier den zeitlichen Abstand zwischen Verhalten und Verstärkung.", false, "Das ist <b>Kontiguität</b>. Kontingenz: wie regelmäßig das Verhalten verstärkt wird (Verstärkungspläne)."],
  ["Die Wirkung eines Verstärkers hängt von der gegenwärtigen motivationalen Lage ab, etwa von Hunger.", true, "Variable „Motivation“ auf der Folie."]]},
 {id:"x11-06", ch:11, stem:"Für operante Konsequenzen gilt:", s:[
  ["Bei negativer Verstärkung wird ein appetitiver Reiz entzogen, wodurch das Verhalten häufiger wird.", false, "Entzogen wird ein <b>aversiver</b> Reiz. Entzug eines appetitiven Reizes ist negative Bestrafung."],
  ["Positive Bestrafung bedeutet, dass ein appetitiver Reiz dargeboten wird und das Verhalten seltener wird.", false, "Dargeboten wird ein <b>aversiver</b> Reiz."],
  ["Ob Verstärkung oder Bestrafung vorliegt, hängt davon ab, ob ein Reiz dargeboten oder entzogen wird.", false, "Darbieten/entziehen entscheidet über <b>positiv/negativ</b>. Verstärkung oder Bestrafung hängt an der Zu- oder Abnahme des Verhaltens."]]},
 {id:"x11-07", ch:11, stem:"Für Bestrafung gilt laut Folie:", s:[
  ["Positive Bestrafung sollte anfangs schwach dosiert und dann allmählich gesteigert werden.", false, "Wenn, dann <b>von Beginn an mit notwendiger Intensität</b>."],
  ["Bestrafung kann auch das Bestrafungsverhalten des Bestrafenden verstärken.", true, "Folie: „Effekt von Bestrafung verstärkt auch Bestrafungsverhalten!!“"],
  ["Positive Bestrafung stärkt erwünschtes Verhalten auch ohne zusätzliche Verstärkung.", false, "Sie stärkt <b>kein</b> erwünschtes Verhalten; deshalb soll sie mit Verstärkung erwünschten Verhaltens kombiniert werden."]]},
 {id:"x11-08", ch:11, stem:"Für Thorndike und Skinner gilt:", s:[
  ["Laut Thorndike befreien sich die Tiere im Problemkäfig durch Einsicht, nicht durch Versuch und Irrtum.", false, "Thorndike beschreibt <b>Trial and Error</b>: zufällig eine passende Handlung."],
  ["In Thorndikes Problemkäfigen sinkt die Latenz bis zur Befreiung mit jeder Wiederholung.", true, "Erste Durchläufe dauern lang, dann wird das Tier schneller."],
  ["Skinners Fokus lag auf natürlichen Situationen, der Begriff „instrumentelles Lernen“ eher auf kontrollierten Experimenten.", false, "Umgekehrt: Skinner untersuchte vor allem <b>kontrollierte Lernexperimente</b>; „instrumentelles Lernen“ trifft eher auf natürliche Situationen zu."]]},
 {id:"x11-09", ch:11, stem:"Für klassische und operante Konditionierung gilt:", s:[
  ["Beide sind Formen assoziativen Lernens.", true, "Klassisch S1 → S2, operant R → S."],
  ["Bei der operanten Konditionierung steht reflexartiges Verhalten im Fokus, das ein vorausgehender Reiz auslöst.", false, "Das ist die klassische Konditionierung. Operantes Verhalten wirkt auf die Umwelt ein („operates on“)."],
  ["Operant wird eine Assoziation zwischen zwei Reizen gelernt, klassisch eine zwischen Reaktion und Konsequenz.", false, "Vertauscht: klassisch <b>S → S</b>, operant <b>R → S</b>."]]},

 /* Kapitel 12: Lernen am Modell */
 {id:"x12-03", ch:12, stem:"Für das Lernen am Modell gilt:", klausur:"WiSe 24/25", s:[
  ["Je positiver eine Verhaltenskonsequenz für das Modell ist, desto wahrscheinlicher ist es, dass das Verhalten von der beobachtenden Person übernommen wird.", true, "Determinante „beobachtete Konsequenzen für das Modell“."],
  ["Damit Beobachtungslernen stattfinden kann, muss sich das lernende Individuum dessen bewusst sein.", false, "Beobachtungslernen ist <b>unabhängig</b> davon, ob das Lernen bewusst geschieht."],
  ["Beobachtungslernen ist abhängig von der subjektiven Bewertung der lernenden Person bezüglich ihrer Fähigkeit, ein beobachtetes Verhalten tatsächlich auszuführen.", true, "Selbstwirksamkeitserwartung: die eigene Beurteilung, nicht das tatsächliche Können."]]},
 {id:"x12-04", ch:12, stem:"Für die Determinanten des Beobachtungslernens gilt:", s:[
  ["Ob ein Verhalten übernommen wird, hängt auch von der Lerngeschichte des Beobachters ab.", true, "Bisherige Erfahrungen mit der Übernahme von Modellverhalten."],
  ["Je positiver die Konsequenz für den Beobachter selbst, desto wahrscheinlicher wird das Verhalten wiederholt.", true, "Konsequenzen für den Beobachter (vgl. Bobo-Doll)."],
  ["Ein Verhalten kann nur übernommen werden, wenn der Beobachter prinzipiell in der Lage ist, es auszuführen.", true, "Fähigkeiten des Beobachters."]]},
 {id:"x12-05", ch:12, stem:"In Bezug auf Modelle und Abgrenzungen gilt:", s:[
  ["Eine Lehrkraft, die eine Turnübung nur mit Worten beschreibt, ist ein symbolisch-bildhaftes Modell.", false, "Nur mit Worten: <b>symbolisch-verbales</b> Modell. Bildhaft wäre etwa ein Film."],
  ["Die Selbstwirksamkeitserwartung ist die eigene Beurteilung, ein Ergebnis erreichen zu können.", true, "So auf der Folie."],
  ["Aufmerksamkeitslenkung, etwa durch Zeigegesten, ist eine Form des Beobachtungslernens mit dauerhafter Wirkung.", false, "Sie wird vom Beobachtungslernen <b>abgegrenzt</b> und führt typischerweise nur zu kurzfristiger Änderung."]]},

 /* Kapitel 2: Gedächtnis */
 {id:"x2-05", ch:2, stem:"Für Kurzzeit- und Arbeitsgedächtnis gilt:", s:[
  ["Das Arbeitsgedächtnis ist nach Baddeley & Hitch (1974) ein passiver Kurzzeitspeicher.", false, "Es ist ein <b>aktives Verarbeitungssystem</b>, nicht lediglich ein passiver Speicher."],
  ["Die Kapazität des KZG beträgt bei Ungeübten etwa 7 ± 2 Sekunden.", false, "7 ± 2 <b>Informationseinheiten</b> (Miller, 1956); die Dauer liegt ohne Rehearsal bei etwa 20 Sekunden."],
  ["Durch Elaboration, also Enkodierung in ein bestimmtes Format, kann Information aus dem KZG ins LZG übergehen.", true, "Etwa visuell oder semantisch (Folie Sitzung 5)."]]},
 {id:"x2-06", ch:2, stem:"Für das prozedurale Gedächtnis gilt:", s:[
  ["In der kognitiven Phase ist das Wissen um eine Fertigkeit zunächst explizit, häufig auch verbal repräsentiert.", true, "Danach assoziative und autonome Phase."],
  ["In der autonomen Phase erfordert die Ausführung starke Aufmerksamkeitsfokussierung.", false, "Das gilt für die <b>kognitive</b> Phase. Autonom: genau und schnell, ohne Aufmerksamkeit."],
  ["Prozedurale Inhalte treten zwangsläufig ins Bewusstsein und lassen sich daher berichten.", false, "Prozedural ist <b>implizit</b>: wirkt auf Verhalten, ohne zwangsläufig bewusst zu werden."]]},
 {id:"x2-07", ch:2, stem:"Für Gedächtnis und Schlaf gilt:", s:[
  ["Später, REM-reicher Schlaf befördert vor allem die Konsolidierung deklarativer Inhalte.", false, "REM vor allem <b>nicht-deklarativ</b>; deklarativ profitiert vom frühen, SWS-reichen Schlaf."],
  ["In den klassischen Schlafstudien dienen Wortpaare als prozedurale und Spiegelzeichnen als deklarative Lernaufgabe.", false, "Vertauscht: Wortpaare deklarativ, Mirror-Tracing (Spiegelzeichnen) prozedural."],
  ["Bei der Konsolidierung im Schlaf sind dieselben Hirnareale aktiv wie bei der ersten Reizverarbeitung.", true, "So auf der Folie (Interaktion Hippocampus und Kortex)."]]},

 /* Kapitel 3: Vergessen und Abruf */
 {id:"x3-04", ch:3, stem:"Für das Vergessen gilt:", s:[
  ["Bei retroaktiver Interferenz stören früher gelernte Inhalte den Abruf später gelernter.", false, "Das ist <b>proaktive</b> Interferenz. Retroaktiv: Neues stört Altes."],
  ["Spurenzerfall im Langzeitgedächtnis ist durch Studien eindeutig belegt.", false, "Unklar, ob es ihn gibt: Er ist nicht zu untersuchen, weil jeder Abruf konsolidiert."],
  ["Nach dem Cue-overload-Prinzip steigt die Abrufleistung mit der Zahl der Einheiten, die an einem Cue hängen.", false, "Sie <b>sinkt</b> systematisch mit der Zahl der Einheiten (Klausur 24/25)."]]},
 {id:"x3-05", ch:3, stem:"Für Gedächtnis als konstruktiven Prozess gilt:", s:[
  ["Schemata wirken erst beim Abruf; die Enkodierung bleibt von ihnen unberührt.", false, "Schemata lenken <b>auch die Enkodierung</b>: Selektion, Abstraktion, Interpretation, Integration."],
  ["Schemata lenken den Abruf durch Rekonstruktion von Inhalten.", true, "So auf der Folie."],
  ["Laut Folie wirkt Abruf eher zerstörend als konservierend auf Gedächtnisinhalte.", false, "Abruf scheint <b>konservierend</b> zu wirken, wobei ggf. das zuletzt Erinnerte erinnert wird."]]},
 {id:"x3-06", ch:3, erg:true, stem:"Zu den Grafiken der Folie „LZG/Enkodierung“ (Sitzung 4) gilt:", s:[
  ["Massiertes Lernen ist bei expliziten Inhalten dem verteilten Lernen überlegen.", false, "Die Kurve „multiple distributed“ liegt über allen Behaltensintervallen deutlich über „multiple massed“."],
  ["Nach semantischer Verarbeitung werden Wörter besser erinnert als nach rein struktureller.", true, "Die Balken steigen von der Prüfung des Schriftbilds bis zur Bedeutung (Angenehmheit) an: Verarbeitungstiefe."],
  ["Ohne Lernabsicht (inzidentell) spielt die Verarbeitungstiefe in der Grafik keine Rolle.", false, "Auch die Balken für inzidentelles Lernen steigen mit der Tiefe; Lernabsicht ändert daran wenig."]]},

 /* Verbindungsfragen über Kapitel hinweg */
 {id:"xv-01", ch:2, stem:"Für Lernformen und Gedächtnissysteme gilt:", s:[
  ["Klassische Konditionierung wird im deklarativen Langzeitgedächtnis verortet.", false, "Sie gehört zum <b>non-deklarativen</b> LZG (CS–UCS-Assoziation)."],
  ["Habituation und Sensitivierung werden im non-deklarativen Langzeitgedächtnis verortet.", true, "Als non-assoziative Lernformen, so im Baum der Gedächtnissysteme."],
  ["Priming wird im episodischen Gedächtnis verortet.", false, "Perzeptuelles Priming gehört zum <b>PRS</b>, also zum non-deklarativen Gedächtnis."]]},
 {id:"xv-02", ch:12, stem:"Für Lernen in schulischen Situationen gilt:", s:[
  ["Löst schon der Anblick des Mathebuchs Angst aus, ist das ein Beispiel für operante Konditionierung.", false, "Ein vorher neutraler Reiz löst eine emotionale Reaktion aus: <b>klassische</b> Konditionierung."],
  ["Nimmt eine Lehrkraft einem Schüler nach dem Spielen das Handy ab, ist das positive Bestrafung.", false, "Ein appetitiver Reiz wird entzogen: <b>negative</b> Bestrafung."],
  ["Lobt eine Lehrkraft erwünschtes Verhalten sichtbar, kann die Klasse über die beobachtete Konsequenz lernen.", true, "Determinante „beobachtete Konsequenzen für das Modell“ (Bandura)."]]},
 {id:"xv-03", ch:3, stem:"In Bezug auf Vergessen in Kurzzeit- und Langzeitgedächtnis gilt:", s:[
  ["Sowohl im KZG als auch im LZG wird Vergessen auch mit Interferenz erklärt.", true, "KZG: Waugh & Norman (1965); LZG: Interferenzphänomene."],
  ["Im KZG gilt nach Waugh & Norman (1965) Spurenzerfall als wahrscheinlichste Ursache des Vergessens.", false, "Waugh & Norman: eher <b>Interferenz</b>. Spurenverlust über die Zeit vertreten Peterson & Peterson (1959)."],
  ["Kontextfluktuation erklärt das Vergessen im sensorischen Gedächtnis.", false, "Kontextfluktuation ist ein Mechanismus im <b>LZG</b>; sensorisch zerfallen nicht beachtete Spuren."]]},
 {id:"xv-04", ch:1, stem:"Für Konstrukte in der Lern- und Gedächtnispsychologie gilt:", s:[
  ["Die Selbstwirksamkeitserwartung ist ein proximales Merkmal, weil sie direkt beobachtbar ist.", false, "Sie ist ein Konstrukt, also <b>distal</b>; beobachtbar sind nur Indikatoren."],
  ["Auch das Kurzzeitgedächtnis ist ein psychologisches Konstrukt.", true, "Die Folie spricht ausdrücklich vom „Konstrukt: Kurzzeitgedächtnis“."],
  ["Lernen lässt sich direkt beobachten, ein Verhaltenspotenzial dagegen nur erschließen.", false, "Auch Lernen wird nur aus Verhaltensänderungen <b>erschlossen</b>."]]}
);

/* Karten zu Bild- und Grafikfolien (Ergänzung) und zu bisher ungeübten Kernaussagen */
CARDS[1].push(
 {id:"c1-21", erg:true, f:"Seidel (2022): Aus welchen drei Blöcken besteht das Modell?", b:"1. Professionelle Wissensbestände & Dispositionen\n2. Professionelle Unterrichtswahrnehmung (Noticing, Reasoning)\n3. Professionsbezogene Anforderungssituationen (Routine- und Problemsituationen)\nDie Vorlesung will Block 1 und 2 aufbauen (auf der Folie rot umkreist)."},
 {id:"c1-23", erg:true, f:"Seidel (2022): Welche drei Arten von Wissensbeständen & Dispositionen gibt es?", b:"Kognitiv: Fachwissen, fachdidaktisches und pädagogisch-psychologisches Wissen\nMetakognitiv: Selbst-Monitoring, Zeitmanagement\nMotivational-affektiv: Motivation, Selbstwirksamkeit\nBeispiel: Du weißt, wie Verstärkung wirkt (kognitiv), merkst, dass du zu lange erklärst (metakognitiv), und traust dir die schwierige Klasse zu (motivational-affektiv)."},
 {id:"c1-24", erg:true, f:"Seidel (2022): Was bedeuten die Pfeile „bestimmen“ und „formen“?", b:"Bestimmen: Dein Wissen lenkt, was du im Unterricht wahrnimmst und wie du in Situationen handelst.\nFormen: Erfahrungen aus Routine- und Problemsituationen verändern dein Wissen zurück.\nBeispiel: Mit Wissen über operantes Lernen bemerkst du, dass ein Schüler fürs Stören Aufmerksamkeit bekommt (bestimmen). Klappt das Ignorieren, festigt das dein Wissen (formen)."},
 {id:"c1-22", erg:true, f:"Phrenologie-Foto (Sitzung 1 und 2): Wofür steht es?", b:"Ein Mann vermisst mit einem Gerät den Schädel einer Person.\nDie Phrenologie wollte geistige Eigenschaften an Schädelformen ablesen, als säßen sie als Organe im Kopf.\nLehre für die Klausur: Konstrukte sind Erklärungszugänge, keine realen, lokalisierbaren Dinge."}
);
CARDS[9].push(
 {id:"c9-18", erg:true, f:"Heines Baum zum Schwerpunkt Lernen: Was steht wo?", b:"Nichtassoziativ, Lernen infolge wiederholter Stimulusdarbietung: Habituation, Sensitivierung, Priming\nNichtassoziativ, perzeptuelles Lernen: „mere exposure“, Diskriminationstraining, räumliches Lernen\nAssoziativ (E1 → E2): klassische Konditionierung (S1 → S2), operante Konditionierung (R → S)\nGrau gedruckt: Priming und perzeptuelles Lernen, vermutlich nicht vertieft\nRot umkreist: das Thema der jeweiligen Sitzung"}
);
CARDS[10].push(
 {id:"ckk-15", erg:true, f:"Folie mit Ratte, Ton und Kurve (Sitzung 3): Was zeigt sie?", b:"Prä: Schock (US) löst Freezing (UR) aus, der Ton (NS) nicht.\nPost: Der Ton (CS) löst Freezing (CR) aus; die Kurve zeigt, dass die Aktivität auf den Ton hin einbricht.\nAussage: Klassische Konditionierung kann Verhalten auch unterdrücken.\nZeitleiste darunter: Der Ton beginnt vor dem Futter (verzögerte Darbietung), so wird der CS prädiktiv."}
);
CARDS[2].push(
 {id:"c2-27", f:"Wie gelangt Information aus dem KZG ins LZG?", b:"Durch Elaboration, also Enkodierung in ein bestimmtes Format (z. B. visuell, semantisch).\nBeispiel: „Habituation“ mit dem eigenen Gewöhnen an Straßenlärm verknüpfen, statt die Definition nur auswendig zu lernen."},
 {id:"c2-28", erg:true, f:"Schlafstudie (Sitzung 5): Wie ist das Paradigma aufgebaut?", b:"Frühschlaf: lernen 22–23 Uhr, Behaltensintervall 23–2 Uhr mit Schlaf (SWS-reich) oder wach, Abruf 2:30–3 Uhr\nSpätschlaf: erst schlafen, lernen 2:30–3 Uhr, Behaltensintervall 3–6 Uhr mit Schlaf (REM-reich) oder wach, Abruf 6:30–7 Uhr\nLernstoff: Wortpaare (deklarativ) und Nachzeichnen eines Sterns im Spiegel (prozedural)\nErgebnis: deklarativ profitiert vom Frühschlaf, prozedural vom Spätschlaf"},
 {id:"c2-29", erg:true, f:"Grafik Hippocampus und Kortex (Sitzung 5): Was passiert mit der Zeit?", b:"Anfangs verbindet der Hippocampus die verteilten Kortex-Anteile einer Erinnerung (starke Linien nach unten).\nMit der Zeit, vor allem im Schlaf, werden die Verbindungen im Kortex selbst stärker.\nAm Ende ist die Erinnerung im Kortex verankert, der Hippocampus wird weniger gebraucht."}
);
CARDS[3].push(
 {id:"c3-17", erg:true, f:"Balkengrafik zur Verarbeitungstiefe (Sitzung 4): Was zeigt sie?", b:"Wörter wurden unterschiedlich tief verarbeitet: Schriftbild prüfen, Wortart, Häufigkeit, Angenehmheit (Bedeutung).\nJe tiefer die Verarbeitung, desto mehr Wörter werden erinnert.\nDas gilt mit und ohne Lernabsicht (inzidentell und intentional) fast gleich."},
 {id:"c3-18", erg:true, f:"Kurvengrafik verteilt vs. massiert (Sitzung 4): Was zeigt sie?", b:"Verteiltes Lernen bringt über alle Behaltensintervalle (bis etwa 8 Tage) deutlich mehr als massiertes.\nFür die Folie heißt das: Die Lernrate ist ein Faktor der Enkodierung expliziter Inhalte."}
);
