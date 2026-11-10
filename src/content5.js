/* ================= Kapitel 10: Klassische Konditionierung =================
   Grundlage: Folien Sitzung 3 (WiSe 26/27, Input 2: Folien 9–17).
   IDs mit „kk“, weil „10-…“, „c10-…“, „x10-…“, „k10-…“ schon zu Kapitel 16 (Normwerte, früher Nr. 10) gehören. */
LESSONS[10]=[
{id:"kk-1", t:"Was bei der klassischen Konditionierung passiert", html:`
<p><b>Klassische Konditionierung</b> ist ein Lernprozess, der dazu führt, dass</p>
<ul><li>ein ursprünglich <b>neutraler Reiz</b> (NS, später CS), der eine antizipatorische Reaktion nicht auslöst,</li>
<li>durch <b>Assoziation</b> mit einem Reiz, der diese Reaktion immer bzw. unbedingt auslöst (US),</li>
<li>ebenfalls eine antizipatorische Reaktion (CR) auslöst.</li></ul>
<table class="kvq"><tr><th>Kürzel</th><th>Bedeutung</th><th>Pawlows Hund</th></tr>
<tr><td><b>US</b></td><td>unkonditionierter Reiz (unconditioned stimulus)</td><td>Futter</td></tr>
<tr><td><b>UR</b></td><td>unkonditionierte, reflexartige Reaktion</td><td>Speichelfluss auf Futter</td></tr>
<tr><td><b>NS</b></td><td>neutraler Reiz</td><td>Ton vor dem Lernen</td></tr>
<tr><td><b>CS</b></td><td>konditionierter Reiz</td><td>Ton nach dem Lernen</td></tr>
<tr><td><b>CR</b></td><td>konditionierte Reaktion</td><td>Speichelfluss auf den Ton</td></tr></table>
<p><b>Schema des Erwerbs</b> (Akquisition):</p>
<table class="kvq"><tr><th>vorher</th><td>NS (Ton) → keine Reaktion · US (Futter) → UR (Speichelfluss)</td></tr>
<tr><th>Lernen</th><td>NS (Ton) + US (Futter) → UR (Speichelfluss), mehrfach</td></tr>
<tr><th>nachher</th><td>CS (Ton) → CR (Speichelfluss)</td></tr></table>
<p><b>Zwei Typen:</b></p>
<table class="kvq"><tr><th>Fall</th><th>Typ</th><th>US</th><th>UR</th><th>NS/CS</th><th>CR</th></tr>
<tr><td>Pawlows Hunde</td><td><b>appetitiv</b></td><td>Futter</td><td>Speichelfluss</td><td>Metronom</td><td>Speichelfluss</td></tr>
<tr><td>„Little Albert“</td><td><b>aversiv</b></td><td>lauter Ton</td><td>Schreckreaktion</td><td>Ratte</td><td>Angstreaktion</td></tr></table>
<p>„Little Albert“ (<b>Watson & Rayner</b>) ist das Beispiel für <b>Furchtkonditionierung</b> („Conditioned Emotional Response“, CER).</p>
<div class="merk"><b>Merksatz</b>Gelernt wird eine Verknüpfung zweier Reize (S1 → S2). Das eigene Verhalten spielt keine Rolle, anders als bei der operanten Konditionierung.</div>`,
check:[
 {q:"Bei „Little Albert“: Was ist die Ratte nach dem Lernen?", o:["Unkonditionierter Reiz (US)","Konditionierter Reiz (CS)","Unkonditionierte Reaktion (UR)","Konditionierte Reaktion (CR)"], a:1, ex:"Die Ratte war vorher neutral. Durch die Kopplung mit dem lauten Ton löst sie jetzt Angst aus, sie ist also der CS.", w:["Der US ist der laute Ton, der die Schreckreaktion von sich aus auslöst.",null,"Eine Reaktion ist ein Verhalten des Kindes, kein Reiz.","Die CR ist die Angstreaktion auf die Ratte, nicht die Ratte selbst."]},
 {q:"Was unterscheidet die Konditionierung bei Pawlows Hunden von der bei „Little Albert“?", o:["Bei Pawlow wird ein Verhalten belohnt","Pawlow ist appetitiv, Albert aversiv","Bei Albert gibt es keinen US","Bei Pawlow fehlt der neutrale Reiz"], a:1, ex:"Futter ist ein angenehmer, ein lauter Ton ein unangenehmer US. Albert ist das Beispiel für Furchtkonditionierung.", w:["Belohnung eines Verhaltens wäre operante Konditionierung.",null,"Der laute Ton ist bei Albert der US.","Bei Pawlow ist das Metronom bzw. der Ton der neutrale Reiz."]}
]},
{id:"kk-2", t:"Unterdrückung, Löschung und Spontanerholung", html:`
<p>Klassische Konditionierung bezieht sich nicht nur auf das Verstärken, sondern auch auf das <b>Unterdrücken</b> von Verhalten. Beispiel auf der Folie: Ein Ton (NS) kündigt einen Schock (US) an, der Erstarren (Freezing) auslöst. Danach löst der Ton allein Freezing aus.</p>
<p>Standard ist eine <b>zeitlich verzögerte</b> Darbietung des US: Der CS kommt zuerst und ist damit <b>prädiktiv</b>, er kündigt den US an.</p>
<p><b>Löschung?</b> Etablierte konditionierte Reaktionen sind <b>sehr stabil</b>. Trotzdem gibt es eine gewisse Dynamik:</p>
<ul><li><b>Extinktion</b> (Löschung): die vollständige oder teilweise Abschwächung einer CR durch wiederholte Darbietung des CS (Glocke) <b>ohne</b> den US (Futter).</li>
<li><b>Spontanerholung</b>: das Wiederaufflackern einer gelöschten CR auf den CS nach einer Ruhephase.</li></ul>
<div class="merk"><b>Schulbezug</b>Angst vor einem Fach lässt sich abschwächen, wenn das Fach immer wieder ohne die unangenehme Erfahrung erlebt wird. Nach den Ferien kann sie aber kurz wieder aufflackern (Spontanerholung).</div>`,
check:[
 {q:"Wie wird eine konditionierte Reaktion gelöscht?", o:["Indem man den US häufiger allein darbietet","Indem man den CS wiederholt ohne den US darbietet","Indem man das Verhalten bestraft","Indem man eine Pause macht"], a:1, ex:"Extinktion: CS (Glocke) immer wieder ohne US (Futter). Die CR schwächt sich ab.", w:["Der US allein ändert nichts an der Verknüpfung des CS.",null,"Bestrafung gehört zur operanten Konditionierung.","Nach einer Pause kommt die gelöschte Reaktion eher wieder (Spontanerholung)."]},
 {q:"Warum ist eine verzögerte Darbietung des US der Standard?", o:["Weil der CS dadurch den US vorhersagt","Weil der US sonst zu stark wirkt","Weil so die Löschung schneller geht","Weil die UR sonst ausbleibt"], a:0, ex:"Der CS kommt zuerst und wird so zum Signal, er ist prädiktiv.", w:[null,"Die Stärke des US hängt nicht an der Reihenfolge.","Löschung hat mit der Reihenfolge beim Erwerb nichts zu tun.","Die UR folgt auf den US in jedem Fall, sie ist reflexartig."]}
]},
{id:"kk-3", t:"Generalisierung, Diskrimination und Stärke", html:`
<p><b>Generalisierung:</b> Die CR folgt nicht nur auf den CS, sondern auch auf <b>ähnliche</b> Reize. Je ähnlicher der Reiz dem CS, desto stärker die CR: <b>Generalisierungsgradient</b>. Beispiel auf der Folie: Konditioniert auf einen Ton von 1000 Hz, reagiert das Tier auch auf 900 oder 1100 Hz, schwächer auf 700 oder 1300 Hz.</p>
<p><b>Diskriminierungstraining:</b> Ziel ist, die CR zu fokussieren. Grundlage ist die <b>konditionierte Inhibition</b>: Ein zweiter Reiz (CS2, z. B. 900 Hz) sagt vorher, dass der US <i>ausbleibt</i>.</p>
<p>Laut <b>Pawlow</b> bestimmen vor allem drei Parameter die Stärke der Konditionierung:</p>
<ol><li><b>Kontiguität</b>, also zeitliche Nähe der Reize, ist besonders bedeutsam.</li>
<li>Die Intensität der CR hängt stark von der <b>Intensität des US</b> ab.</li>
<li>Die <b>Häufigkeit</b> des gemeinsamen Auftretens ist zentral. Ausnahme: <b>erlernte Geschmacksaversion</b> (dort reicht ein Mal).</li></ol>
<p><b>Rescorla</b> ergänzte die <b>Kontingenz</b>: die Wahrscheinlichkeit des US bei Anwesenheit des CS im Verhältnis zu seiner Wahrscheinlichkeit ohne CS. Die Frage ist also: Ist der CS ein <b>zuverlässiger Prädiktor</b>?</p>`,
check:[
 {q:"Ein Hund ist auf einen Ton von 1000 Hz konditioniert. Auf welchen Ton speichelt er am stärksten, abgesehen von 1000 Hz?", o:["700 Hz","900 Hz","1300 Hz","Auf alle gleich stark"], a:1, ex:"Generalisierungsgradient: Je ähnlicher der Reiz dem CS, desto stärker die CR. 900 Hz liegt am nächsten an 1000 Hz.", w:["700 Hz ist weiter vom CS entfernt, die Reaktion ist schwächer.",null,"1300 Hz ist weiter vom CS entfernt als 900 Hz.","Gerade nicht: Die Stärke hängt von der Ähnlichkeit ab."]},
 {q:"Was ergänzte Rescorla zu Pawlows Parametern?", o:["Kontiguität, also die zeitliche Nähe der Reize","Kontingenz, also wie zuverlässig der CS den US vorhersagt","Die Intensität des US als Maß für die Stärke","Die Häufigkeit, mit der beide Reize gekoppelt werden"], a:1, ex:"Rescorla fragte, wie wahrscheinlich der US mit CS im Vergleich zu ohne CS ist.", w:["Kontiguität nennt schon Pawlow, als wichtigsten Parameter.",null,"Die Intensität des US ist einer von Pawlows drei Parametern.","Die Häufigkeit ist ebenfalls ein Parameter Pawlows."]}
]},
{id:"kk-4", t:"Konditionierung zweiter Ordnung und Matheangst", html:`
<p><b>Konditionierung zweiter Ordnung:</b> Durch die Verknüpfung mit einem CS erwirbt ein bisher neutraler <b>dritter Reiz</b> die Kraft eines (abgeschwächten) CS. Das ist <b>Lernen ohne US</b>.</p>
<table class="kvq"><tr><th>vorher</th><td>NS (Ton) → keine Reaktion · US (Futter) → UR (Speichelfluss)</td></tr>
<tr><th>danach</th><td>CS (Ton) → CR (Speichelfluss)</td></tr>
<tr><th>zweite Ordnung</th><td>Licht wird mit dem Ton gekoppelt, ganz ohne Futter. Danach: CS (Licht) → CR (Speichelfluss)</td></tr></table>
<p><b>Warum relevant für uns?</b> So erklärt Heine z. B. <b>Matheangst</b>:</p>
<table class="kvq"><tr><th>Schritt 1</th><td>NS (Lehrer) + US (Tadel) → UR (Angstreaktion). Danach: CS (Lehrer) → CR (Angstreaktion)</td></tr>
<tr><th>Schritt 2</th><td>NS („Zahlen“) + CS (Lehrer) → CR (Angstreaktion). Danach: CS („Zahlen“) → CR (Angstreaktion)</td></tr></table>
<div class="merk"><b>Merksatz</b>Die Zahlen selbst wurden nie getadelt. Sie lösen Angst aus, weil sie mit dem Lehrer gekoppelt waren, der seinerseits mit Tadel gekoppelt war. Genauso lassen sich Prüfungs- und Schulangst erklären.</div>`,
check:[
 {q:"Was ist das Besondere an der Konditionierung zweiter Ordnung?", o:["Sie braucht einen besonders starken und häufigen US","Ein neuer Reiz wird nur mit einem CS gekoppelt","Sie funktioniert nur bei Tieren im Labor, nicht bei Menschen","Sie löscht die erste Konditionierung vollständig aus"], a:1, ex:"Lernen ohne US: Der dritte Reiz bekommt die Kraft eines (abgeschwächten) CS.", w:["Bei der zweiten Ordnung ist gar kein US beteiligt.",null,"Heines Matheangst-Beispiel zeigt sie beim Menschen.","Die erste Konditionierung bleibt bestehen, sie ist sogar die Voraussetzung."]},
 {q:"Im Matheangst-Beispiel: Was ist der „Lehrer“ in Schritt 2?", o:["Der unkonditionierte Reiz (US)","Ein CS, der wie ein US wirkt","Die unkonditionierte Reaktion (UR)","Ein neutraler Reiz (NS)"], a:1, ex:"Der Lehrer ist nach Schritt 1 ein CS. In Schritt 2 übernimmt er die Rolle des US, damit „Zahlen“ zum CS werden.", w:["Der US war in Schritt 1 der Tadel, nicht der Lehrer.",null,"UR und CR sind die Angstreaktion, also kein Reiz.","Neutral war der Lehrer nur vor Schritt 1."]}
]}
];

CARDS[10]=[
 {id:"ckk-01", f:"Klassische Konditionierung (Definition)", b:"Ein ursprünglich neutraler Reiz (NS → CS), der eine antizipatorische Reaktion nicht auslöst, löst durch Assoziation mit einem Reiz, der diese Reaktion unbedingt auslöst (US), ebenfalls eine antizipatorische Reaktion (CR) aus."},
 {id:"ckk-02", f:"US, UR, NS, CS, CR", b:"US: unkonditionierter Reiz\nUR: unkonditionierte, reflexartige Reaktion\nNS: neutraler Reiz\nCS: konditionierter Reiz\nCR: konditionierte Reaktion"},
 {id:"ckk-03", f:"Schema des Erwerbs (Pawlow)", b:"Vorher: Ton (NS) → keine Reaktion; Futter (US) → Speichelfluss (UR)\nLernen: Ton + Futter → Speichelfluss\nNachher: Ton (CS) → Speichelfluss (CR)"},
 {id:"ckk-04", f:"Appetitive vs. aversive Konditionierung", b:"Appetitiv: Pawlows Hunde, US Futter, UR/CR Speichelfluss, CS Metronom.\nAversiv: „Little Albert“, US lauter Ton, UR Schreckreaktion, CS Ratte, CR Angstreaktion."},
 {id:"ckk-05", f:"„Little Albert“ (Watson & Rayner)", b:"Beispiel für Furchtkonditionierung bzw. „Conditioned Emotional Response“ (CER): Eine Ratte (NS) wird mit einem lauten Ton (US) gekoppelt und löst danach Angst aus (CR)."},
 {id:"ckk-06", f:"Klassische Konditionierung: nur Verstärkung von Verhalten?", b:"Nein, auch Unterdrückung: Ton (CS) kündigt Schock (US) an und löst danach Freezing aus.\nStandard: zeitlich verzögerte Darbietung des US, der CS ist prädiktiv."},
 {id:"ckk-07", f:"Extinktion (klassische Konditionierung)", b:"Vollständige oder teilweise Abschwächung einer CR durch wiederholte Darbietung des CS (Glocke) ohne den US (Futter). Etablierte CRs sind aber sehr stabil."},
 {id:"ckk-08", f:"Spontanerholung (klassische Konditionierung)", b:"Das Wiederaufflackern einer gelöschten CR auf den CS nach einer Ruhephase."},
 {id:"ckk-09", f:"Generalisierung und Generalisierungsgradient", b:"Die CR folgt auch auf Reize, die dem CS ähneln. Ihre Stärke hängt von der Ähnlichkeit zum CS ab (Gradient), z. B. CS 1000 Hz, schwächere CR auf 900 oder 1100 Hz."},
 {id:"ckk-10", f:"Diskriminierungstraining", b:"Ziel: die CR auf den CS fokussieren. Basis: konditionierte Inhibition, d. h. ein CS2 sagt das Ausbleiben des US vorher."},
 {id:"ckk-11", f:"Drei Parameter der Konditionierungsstärke nach Pawlow", b:"Kontiguität (zeitliche Nähe der Reize, vor allem)\nIntensität des US (bestimmt Intensität der CR)\nHäufigkeit des gemeinsamen Auftretens (Ausnahme: erlernte Geschmacksaversion)"},
 {id:"ckk-12", f:"Kontingenz nach Rescorla", b:"Wahrscheinlichkeit des US bei Anwesenheit des CS im Verhältnis zur Wahrscheinlichkeit des US ohne CS. Frage: Ist der CS ein zuverlässiger Prädiktor?"},
 {id:"ckk-13", f:"Konditionierung zweiter Ordnung", b:"Durch Assoziation mit einem CS erwirbt ein bisher neutraler dritter Reiz die Kapazität eines (abgeschwächten) CS. Lernen ohne US! Beispiel: Licht wird mit dem Ton gekoppelt."},
 {id:"ckk-14", f:"Matheangst als klassische Konditionierung", b:"Schritt 1: Lehrer (NS) + Tadel (US) → Angst (UR); danach Lehrer (CS) → Angst (CR).\nSchritt 2: „Zahlen“ (NS) + Lehrer (CS) → Angst; danach „Zahlen“ (CS) → Angst (CR). Konditionierung zweiter Ordnung."}
];
Object.assign(CARD_INFO,{
 "ckk-01":"Antizipatorisch: vorwegnehmend, die Reaktion bereitet auf den kommenden US vor.",
 "ckk-02":"Englisch: unconditioned/conditioned stimulus bzw. response.",
 "ckk-03":"Akquisition: Erwerb.",
 "ckk-05":"John B. Watson und Rosalie Rayner, 1920. Albert war ein elf Monate altes Kind.",
 "ckk-06":"Freezing: Erstarren als Angstreaktion.",
 "ckk-10":"Inhibition: Hemmung.",
 "ckk-11":"Erlernte Geschmacksaversion: Nach einer einzigen Übelkeit meidet man ein Essen lange.",
 "ckk-12":"Robert Rescorla, US-amerikanischer Psychologe (Rescorla-Wagner-Modell)."
});
Object.assign(CARD_CTX,{
 "ckk-01":"Lernen durch Reizkopplung","ckk-02":"Die Kürzel","ckk-03":"Wie der Erwerb abläuft","ckk-04":"Zwei Typen",
 "ckk-05":"Ein klassisches Experiment","ckk-06":"Auch Unterdrückung ist lernbar","ckk-07":"Wie man eine CR abschwächt","ckk-08":"Wenn die CR zurückkommt",
 "ckk-09":"Auch ähnliche Reize wirken","ckk-10":"Die CR schärfen","ckk-11":"Wovon die Stärke abhängt","ckk-12":"Rescorlas Ergänzung",
 "ckk-13":"Lernen ohne US","ckk-14":"Anwendung auf Schule"
});

KREUZ.push(
 {id:"xkk-01", ch:10, stem:"Für die klassische Konditionierung gilt:", s:[
  ["Ein ursprünglich neutraler Reiz löst nach der Konditionierung eine antizipatorische Reaktion aus.", true, "Aus dem NS wird ein CS, der eine CR auslöst."],
  ["Bei der Konditionierung zweiter Ordnung wird ein neutraler Reiz erneut mit dem US gekoppelt.", false, "Gerade <b>ohne US</b>: Der neue Reiz wird nur mit einem CS gekoppelt."],
  ["Klassische Konditionierung kann auch zur Unterdrückung von Verhalten führen.", true, "Beispiel: Ton kündigt Schock an, danach Freezing auf den Ton."]]},
 {id:"xkk-02", ch:10, stem:"In Bezug auf konditionierte Reaktionen gilt:", s:[
  ["Etablierte konditionierte Reaktionen sind sehr instabil und verschwinden von selbst.", false, "Sie sind <b>sehr stabil</b>. Abschwächung erfolgt durch Extinktion."],
  ["Extinktion erfolgt durch wiederholte Darbietung des CS in Abwesenheit des US.", true, "So auf der Folie: Glocke ohne Futter."],
  ["Die Stärke der CR auf einen neuen Reiz hängt von dessen Ähnlichkeit zum CS ab.", true, "Generalisierungsgradient."]]},
 {id:"xkk-03", ch:10, stem:"Für die Stärke der Konditionierung gilt:", s:[
  ["Laut Pawlow ist vor allem die Kontiguität, also die zeitliche Nähe der Reize, bedeutsam.", true, "Der erste und wichtigste der drei Parameter."],
  ["Die Intensität der CR ist unabhängig von der Intensität des US.", false, "Sie hängt <b>stark</b> von der Intensität des US ab."],
  ["Bei der erlernten Geschmacksaversion ist die Häufigkeit des gemeinsamen Auftretens weniger entscheidend.", true, "Sie ist die Ausnahme von der Regel, dass die Häufigkeit zentral ist."]]}
);

KURZ.push(
 {id:"kk-k1", ch:10, pts:8,
  q:"Erklären Sie mit Hilfe der klassischen Konditionierung, wie bei einem Schüler Matheangst entstehen kann, obwohl ihm Zahlen selbst nie etwas getan haben. Verwenden Sie die Fachbegriffe und gehen Sie auf die Konditionierung zweiter Ordnung ein.",
  k:["Schritt 1: Lehrer (NS) wird mit Tadel (US) gekoppelt, Tadel löst Angst (UR) aus","Danach ist der Lehrer ein CS und löst Angst (CR) aus","Schritt 2: „Zahlen“ (NS) werden mit dem Lehrer (CS) gekoppelt, ohne Tadel","Danach lösen „Zahlen“ als CS Angst (CR) aus","Das ist Konditionierung zweiter Ordnung: Lernen ohne US, der neue CS ist meist abgeschwächt","Generalisierung möglich, z. B. auf ähnliche Situationen (Prüfungen, Schule)"],
  m:"Zunächst ist der Lehrer ein neutraler Reiz. Er tritt wiederholt zusammen mit Tadel auf, einem unkonditionierten Reiz, der von sich aus eine Angstreaktion auslöst. Durch diese Kopplung wird der Lehrer zum konditionierten Reiz und löst selbst eine konditionierte Angstreaktion aus. In einem zweiten Schritt werden die Zahlen, bisher neutral, mit dem Lehrer gekoppelt, ohne dass noch getadelt wird. Nun lösen auch die Zahlen als konditionierter Reiz Angst aus. Das ist Konditionierung zweiter Ordnung: Ein neutraler Reiz erwirbt die Kraft eines meist abgeschwächten konditionierten Reizes allein über die Verknüpfung mit einem anderen konditionierten Reiz, also ohne US. Über Generalisierung kann sich die Angst auf ähnliche Reize wie Prüfungssituationen ausweiten."}
);
OPEN.push({id:"okk-k1", ch:10, kind:"kurz", k:"kk-k1", pts:10, title:"Klassische Konditionierung"});
