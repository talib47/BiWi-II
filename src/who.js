/* ================= Zuordnen: Beispiele dem richtigen Begriff zuordnen =================
   Trainiert das Unterscheiden ähnlicher Begriffe, wie es die Kreuzaufgaben und Fallbeispiele verlangen.
   Nur Kategorien, die in Heines Folien schon vorkommen. Weitere Sätze (z. B. Lerntheorien) kommen mit den Folien dazu.
   Je Satz: t Titel, q Frage, hint Tipp, cats Kategorien. Je Beispiel: id (bleibt fest), set, t Text, s richtige Kategorie,
   alt ähnliche Kategorien, die nicht als falsche Antwort angeboten werden, ex Begründung, kap Kapitel */
const WHO_SETS={
  lern:{t:"Welche Lernform?", kap:9, q:"Was steckt hinter dieser Beobachtung?",
    hint:"Wird die Reaktion schwächer oder stärker? Werden zwei Ereignisse verknüpft? Oder steckt Reifung oder Müdigkeit dahinter?",
    cats:{hab:"Habituation", sens:"Sensitivierung", kk:"Klassische Konditionierung (S → S)", ok:"Operante Konditionierung (R → S)", kein:"Kein Lernen (Reifung, Ermüdung)"}},
  konseq:{t:"Welche operante Konsequenz?", kap:11, q:"Wessen Verhalten wird wie beeinflusst?",
    hint:"Erst klären, wessen Verhalten gemeint ist. Dann: Kommt ein Reiz dazu (positiv) oder fällt er weg (negativ)? Wird das Verhalten häufiger (Verstärkung) oder seltener (Bestrafung)?",
    cats:{pv:"Positive Verstärkung", nv:"Negative Verstärkung", pb:"Positive Bestrafung", nb:"Negative Bestrafung", loe:"Löschung"}},
  gedsys:{t:"Welches Gedächtnissystem?", kap:2, q:"Welches Gedächtnissystem ist hier vor allem am Werk?",
    hint:"Bewusst berichtbar oder nur im Verhalten sichtbar? Erlebnis oder Weltwissen? Bruchteil einer Sekunde, ein paar Sekunden oder dauerhaft?",
    cats:{epis:"Episodisches Gedächtnis", sem:"Semantisches Gedächtnis", proz:"Prozedurales Gedächtnis", ag:"Kurzzeit- bzw. Arbeitsgedächtnis", sens:"Sensorisches Gedächtnis"}},
  kkb:{t:"Was passiert bei der Konditionierung?", kap:10, q:"Welches Phänomen der klassischen Konditionierung zeigt sich?",
    hint:"Kommt die Reaktion auf einen ähnlichen Reiz? Wird der CS ohne US gezeigt? Kommt eine gelöschte Reaktion nach einer Pause zurück? Wird ein neuer Reiz nur mit einem CS gekoppelt?",
    cats:{gen:"Generalisierung", ext:"Extinktion", spont:"Spontanerholung", dis:"Diskrimination", zwei:"Konditionierung zweiter Ordnung"}},
  verg:{t:"Warum vergessen?", kap:3, q:"Welcher Mechanismus erklärt das Vergessen am besten?",
    hint:"Stört Neues das Alte oder Altes das Neue? Hängen zu viele Inhalte an einem Hinweisreiz? Fehlt der alte Kontext?",
    cats:{retro:"Retroaktive Interferenz", pro:"Proaktive Interferenz", aiv:"Abrufinduziertes Vergessen", cue:"Cue-Overload", kf:"Kontextfluktuation"}},
  ef:{t:"Welcher Aspekt exekutiver Kontrolle?", kap:6, q:"Welcher Aspekt exekutiver Kontrolle ist hier vor allem gefordert?",
    hint:"Wird eine Reaktion gebremst? Muss ein Inhalt im Kopf laufend erneuert werden? Oder wird zwischen Regeln, Strategien oder Sichtweisen gewechselt?",
    cats:{upd:"Updating", inh:"Inhibition", shift:"Switching/Shifting"}},
  srl:{t:"Welche Phase nach Pintrich?", kap:6, q:"In welche Phase der Selbstregulation beim Lernen (Pintrich, 2000) gehört das?",
    hint:"Vorher (planen, Ziele, Erwartungen), währenddessen beobachten (Monitoring), währenddessen eingreifen (Kontrolle) oder hinterher bewerten (Reflexion)?",
    cats:{plan:"Voraussicht, Planung, Aktivierung", mon:"Monitoring", kon:"Kontrolle", ref:"Reaktion, Reflexion"}}
};
const WHO=[
 {id:"l01", set:"lern", t:"Nach zwei Wochen im neuen Klassenraum bemerkt Ayla das Rauschen der Lüftung nicht mehr.", s:"hab", ex:"Ein schwacher, regelmäßiger Reiz wird wiederholt dargeboten, die Reaktion wird schwächer."},
 {id:"l02", set:"lern", t:"Während der Klassenarbeit wirkt das Schniefen des Sitznachbarn immer lauter. Tom kann es nicht mehr ausblenden.", s:"sens", ex:"Beispiel aus der Vorlesung: Das hohe Erregungsniveau in der Prüfung macht die Reaktion auf denselben Reiz stärker."},
 {id:"l03", set:"lern", t:"Nach einem lauten Knall auf dem Flur zuckt die ganze Klasse auch beim Zufallen eines Mäppchens stark zusammen.", s:"sens", ex:"Sensitivierung ist weniger stimulusspezifisch: Die Erregung durch Reiz 1 verstärkt auch die Reaktion auf Reiz 2."},
 {id:"l04", set:"lern", t:"Ein Erstklässler springt im Sommer deutlich höher als im Winter davor.", s:"kein", ex:"Das kann Reifung sein, also körperliches Wachstum. Reifung hängt nicht von Erfahrung ab und ist deshalb kein Lernen."},
 {id:"l05", set:"lern", t:"In der sechsten Stunde macht Lena beim Kopfrechnen viel mehr Fehler als am Morgen.", s:"kein", ex:"Ermüdung: eine kurzfristige Verhaltensänderung, nicht konsistent und nicht dauerhaft."},
 {id:"l06", set:"lern", t:"Die Klasse hört das Brummen des Beamers nicht mehr. Als der Rauchmelder piept, schrecken alle hoch.", s:"hab", alt:["sens"], ex:"Habituation ist stimulusspezifisch: An den Beamer haben sich alle gewöhnt, ein neuer Reiz löst die volle Reaktion aus (Dishabituation)."},
 {id:"l07", set:"lern", t:"Ben meldet sich viel häufiger, seit die Lehrkraft jede Meldung mit einem Lob beantwortet.", s:"ok", ex:"Verknüpft werden ein Verhalten (R: melden) und seine Konsequenz (S: Lob)."},
 {id:"l08", set:"lern", t:"Auf ein bestimmtes Klingelzeichen folgte mehrmals eine sehr laute Durchsage. Inzwischen zuckt Mia schon beim Klingelzeichen zusammen.", s:"kk", ex:"Verknüpft werden zwei Reize (S → S): Klingelzeichen und laute Durchsage. Das eigene Verhalten spielt dabei keine Rolle."},
 {id:"l09", set:"lern", t:"Nach den Ferien hört Jonas das Ticken der Uhr zuerst wieder. Nach ein paar Minuten ist es aber schneller „weg“ als im September.", s:"hab", ex:"Spontanerholung nach der Pause, dann erneute Habituation, die schneller geht. Ein Zeichen, dass gelernt wurde."},
 {id:"l10", set:"lern", t:"Eine Schülerin stört seltener, seit sie danach jedes Mal die Pause im Klassenraum verbringen muss.", s:"ok", ex:"Auf ihr Verhalten (R: stören) folgt eine Konsequenz (S: Pause verpasst). Gelernt wird diese Verknüpfung."},
 {id:"l11", set:"lern", t:"Ein Kleinkind fängt an zu laufen, ohne dass es jemand gezielt geübt hat.", s:"kein", ex:"Laufen und Krabbeln sind Beispiele für Reifung auf Heines Folie: nicht erfahrungsabhängig."},
 {id:"l12", set:"lern", t:"Ein Jugendlicher reagiert nach einem belastenden Erlebnis auf laute Geräusche nicht ruhiger, sondern jedes Mal heftiger.", s:"sens", ex:"„Failure to habituate“: Statt Gewöhnung tritt eine immer stärkere Reaktion auf. So erklärt man z. B. Symptome bei PTBS."},
 {id:"l13", set:"lern", t:"Mit Fieber bleibt am Abend vor der Prüfung kaum etwas hängen.", s:"kein", ex:"Eine körperliche Ursache wie Krankheit ist weder Lernen noch Vergessen (Lehrbuch Kap. 1)."},
 {id:"l14", set:"lern", t:"Neu an der Schule an der Hauptstraße, stört Elif der Verkehrslärm. Nach einigen Wochen nimmt sie ihn kaum noch wahr.", s:"hab", ex:"Gewöhnung an einen wiederholten Reiz ermöglicht die Anpassung an eine bestimmte Umwelt."}
 ,{id:"o01", set:"konseq", t:"Ein Schüler meldet sich häufiger, seit die Lehrkraft jede gute Antwort lobt.", s:"pv", ex:"Ein appetitiver Reiz (Lob) kommt hinzu, das Melden wird häufiger."},
 {id:"o02", set:"konseq", t:"Michael bekommt nach einer Ohrfeige zwei Wochen Trainingsverbot und schlägt danach nicht mehr.", s:"nb", ex:"Klausur 24/25: Eine appetitive Konsequenz (Fußball) wird entnommen, das Verhalten wird seltener."},
 {id:"o03", set:"konseq", t:"Die Mutter kauft die Süßigkeit, und das Weinen ihrer Tochter hört auf. Beim nächsten Mal kauft sie sofort. (Fokus: Mutter)", s:"nv", ex:"Für die Mutter fällt etwas Aversives weg (Weinen). Ihr Kaufen wird häufiger."},
 {id:"o04", set:"konseq", t:"Lina quengelt, bekommt die Süßigkeit und quengelt beim nächsten Einkauf wieder. (Fokus: Lina)", s:"pv", ex:"Für Lina kommt etwas Appetitives hinzu (Süßigkeit). Ihr Quengeln wird häufiger."},
 {id:"o05", set:"konseq", t:"Snoopys Halsband piept schrill, sobald er sich dem Zaun nähert. Bald meidet er den Zaun.", s:"pb", ex:"Fall 4 der Vorlesung: Ein aversiver Reiz kommt hinzu, die Annäherung wird seltener."},
 {id:"o06", set:"konseq", t:"Wer die Hausaufgaben vollständig hat, muss die Wiederholungsübung am Freitag nicht machen. Die Abgaben werden vollständiger.", s:"nv", ex:"Etwas Unangenehmes (Wiederholungsübung) fällt weg, das Verhalten wird häufiger. Beispiel aus dem Lehrbuch: Befreiung von Hausaufgaben."},
 {id:"o07", set:"konseq", t:"Ein Schüler macht Witze, die Klasse lacht nicht mehr mit. Nach einigen Tagen hört er damit auf.", s:"loe", ex:"Die bisherige Verstärkung (Lachen) bleibt aus, es folgt keine Konsequenz mehr: Löschung."},
 {id:"o08", set:"konseq", t:"Nach jeder Störung ermahnt die Lehrkraft eine Schülerin vor der Klasse. Sie stört seltener.", s:"pb", ex:"Ein aversiver Reiz (Ermahnung) wird dargeboten. Lehrbuch: Ermahnung bei Unterrichtsstörung."},
 {id:"o09", set:"konseq", t:"Weil er im Unterricht chattet, wird einem Schüler das Handy bis Stundenende abgenommen.", s:"nb", ex:"Ein appetitiver Reiz (Handy) wird entzogen. Lehrbuch: Wegnahme des Handys."},
 {id:"g01", set:"gedsys", t:"Aylin weiß noch genau, wo und mit wem sie ihren ersten Schultag verbracht hat.", s:"epis", ex:"Ein persönliches Erlebnis mit wann, wo und wie."},
 {id:"g02", set:"gedsys", t:"Ben weiß, dass Paris die Hauptstadt Frankreichs ist, aber nicht, wann er das gelernt hat.", s:"sem", ex:"Weltwissen ohne den Kontext des Lernens."},
 {id:"g03", set:"gedsys", t:"Nach Monaten Training fährt Mia Fahrrad, ohne über das Gleichgewicht nachzudenken.", s:"proz", ex:"Eine durch Übung automatisierte motorische Fertigkeit (autonome Phase)."},
 {id:"g04", set:"gedsys", t:"Tom rechnet 17 · 6 im Kopf und hält dabei das Zwischenergebnis fest.", s:"ag", ex:"Information wird kurz aktiv gehalten und bearbeitet: Arbeitsgedächtnis."},
 {id:"g05", set:"gedsys", t:"Nach einem Blitz sieht man für einen Bruchteil einer Sekunde noch ein Nachbild der Szene.", s:"sens", ex:"Unmittelbare, sehr kurze, modalitätsspezifische Speicherung."},
 {id:"g06", set:"gedsys", t:"Lea wiederholt eine Telefonnummer leise, bis sie sie eingetippt hat.", s:"ag", ex:"Rehearsal hält Information im Kurzzeitgedächtnis aktiv."},
 {id:"g07", set:"gedsys", t:"Ein Schüler tippt auf der Tastatur blind, kann aber nicht sagen, wo das „k“ liegt.", s:"proz", ex:"Implizites Können, das sich im Verhalten zeigt, aber nicht berichtet werden kann."},
 {id:"g08", set:"gedsys", t:"Jonas kennt die Bedeutung des Wortes „Photosynthese“.", s:"sem", ex:"Sprach- und Weltwissen."},
 {id:"g09", set:"gedsys", t:"Elif erinnert sich, dass ihr Lehrer beim letzten Elternabend vor dem Fenster stand.", s:"epis", ex:"Ein selbst erlebtes Ereignis mit Ort und Situation."},
 {id:"v01", set:"verg", t:"Nach dem Lernen der neuen PIN fällt Ali seine alte PIN nicht mehr ein.", s:"retro", ex:"Das Neue stört den Abruf des Früheren."},
 {id:"v02", set:"verg", t:"Seit dem Umzug schreibt Sara im Formular immer wieder ihre alte Adresse statt der neuen.", s:"pro", ex:"Das früher Gelernte stört den Abruf des später Gelernten."},
 {id:"v03", set:"verg", t:"Unter dem Stichwort „Lerntheorie“ sollen 15 Begriffe einfallen. Je mehr es werden, desto weniger fällt pro Begriff ein.", s:"cue", ex:"Die Abrufleistung sinkt mit der Anzahl der Einheiten an einem Cue."},
 {id:"v04", set:"verg", t:"Im Klassenzimmer wusste Max alles, in der Turnhalle bei der Klausur fällt ihm wenig ein.", s:"kf", ex:"Der Kontext hat sich verändert, Abruf-Cues aus dem Lernraum fehlen."},
 {id:"v05", set:"verg", t:"Eine Schülerin übt nur drei der sechs Vokabeln einer Wortfamilie. Die drei anderen fallen ihr danach schlechter ein als vorher.", s:"aiv", ex:"Der Abruf einiger Teilinformationen behindert den späteren Abruf der anderen."},
 {id:"v06", set:"verg", t:"Nach Spanisch in der 7. Klasse kommt in der 8. Französisch. Die neuen französischen Wörter werden ständig von den spanischen verdrängt.", s:"pro", ex:"Das früher gelernte Spanisch stört das später gelernte Französisch."},
 {id:"v07", set:"verg", t:"Nach einem Wochenende mit neuen Spielregeln weiß Tim die Regeln des alten Spiels nicht mehr.", s:"retro", ex:"Neu erworbene Information stört den Abruf früher erworbener Inhalte."}
 ,{id:"k01", set:"kkb", t:"Nach Ärger mit einer Mathelehrerin bekommt Emre auch bei einer anderen, ähnlich strengen Lehrerin Herzklopfen.", s:"gen", ex:"Die CR tritt auch auf Reize auf, die dem CS ähneln."},
 {id:"k02", set:"kkb", t:"Der Hund hört die Glocke immer wieder, ohne dass Futter folgt. Der Speichelfluss wird immer schwächer.", s:"ext", ex:"CS ohne US: Die CR schwächt sich ab."},
 {id:"k03", set:"kkb", t:"Nach den Sommerferien spürt Lina beim Betreten des Chemieraums kurz wieder die alte Angst, die im Frühjahr schon verschwunden war.", s:"spont", ex:"Eine gelöschte CR flackert nach einer Ruhephase wieder auf."},
 {id:"k04", set:"kkb", t:"Der Hund speichelt nur noch beim Ton von 1000 Hz, nicht mehr bei 900 Hz, auf den nie Futter folgte.", s:"dis", ex:"Diskriminierungstraining: Der CS2 sagt das Ausbleiben des US vorher (konditionierte Inhibition)."},
 {id:"k05", set:"kkb", t:"Erst wurde der Lehrer mit Tadel verknüpft, dann die Zahlen mit dem Lehrer. Jetzt machen schon Zahlen Angst.", s:"zwei", ex:"Ein neuer Reiz wird nur mit einem CS gekoppelt, ohne US. Heines Beispiel für Matheangst."},
 {id:"k06", set:"kkb", t:"Ein Licht wird mehrmals vor dem Ton gezeigt, auf den der Hund schon speichelt, aber nie mit Futter. Bald speichelt er beim Licht.", s:"zwei", ex:"Folie Sitzung 3: Lernen ohne US, der dritte Reiz wird zum abgeschwächten CS."},
 {id:"k07", set:"kkb", t:"Ein Kind, das Angst vor einer weißen Ratte gelernt hat, reagiert auch auf ein weißes Kaninchen ängstlich.", s:"gen", ex:"Ähnliche Reize lösen eine (meist schwächere) CR aus."}
 ,{id:"e01", set:"ef", t:"Beim Diktat schreibt Lukas „das“ statt „dass“, obwohl er die Regel kennt. Er muss die gewohnte Schreibweise bewusst bremsen.", s:"inh", ex:"Eine vorherrschende, eingeschliffene Antworttendenz wird unterdrückt."},
 {id:"e02", set:"ef", t:"Beim Kopfrechnen einer langen Aufgabe merkt sich Nora jedes neue Zwischenergebnis und vergisst das alte.", s:"upd", ex:"Arbeitsgedächtnisinhalte werden überwacht und laufend aktualisiert."},
 {id:"e03", set:"ef", t:"Erst sortiert die Klasse Wörter nach Wortart, dann sollen sie dieselben Wörter nach Silbenzahl ordnen.", s:"shift", ex:"Wechsel zwischen Regeln bzw. Strategien: kognitive Flexibilität. Wer bei der alten Regel bleibt, perseveriert."},
 {id:"e04", set:"ef", t:"Obwohl draußen die Feuerwehr vorbeifährt, bleibt Emre bei seiner Aufgabe sitzen.", s:"inh", ex:"Eine naheliegende Reaktion (aufstehen, hinsehen) wird unterdrückt."},
 {id:"e05", set:"ef", t:"Beim Vokabelspiel soll Sara sagen, ob das aktuelle Wort dasselbe ist wie das vorletzte.", s:"upd", ex:"Das ist eine 2-back-Aufgabe, das Standardparadigma für Updating."},
 {id:"e06", set:"ef", t:"Als die Lösung mit dem Dreisatz nicht klappt, probiert Ben es mit einer Skizze.", s:"shift", ex:"Flexibler Wechsel zu einer anderen Strategie."},
 {id:"e07", set:"ef", t:"Ein Kind hat die Hand schon zum Melden erhoben, nimmt sie aber zurück, als die Lehrkraft „Stopp, noch nicht“ sagt.", s:"inh", ex:"Eine bereits gestartete Reaktion wird abgebrochen, wie in der stop-signal-Aufgabe."},
 {id:"e08", set:"ef", t:"Im Englischunterricht wird zwischen Englisch und Deutsch hin- und hergewechselt, und Mia antwortet jeweils in der richtigen Sprache.", s:"shift", ex:"Umschalten zwischen mentalen Zuständen bzw. Aufgabensets."},
 {id:"e09", set:"ef", t:"Während der Gruppenarbeit hält Jan im Kopf fest, welche Teilaufgaben schon erledigt sind, und streicht sie gedanklich ab.", s:"upd", ex:"Repräsentationen im Arbeitsgedächtnis werden überwacht und aktualisiert."},
 {id:"r01", set:"srl", t:"Vor dem Lernen überlegt Lea, bis wann sie die drei Kapitel schaffen will und wie viel Zeit sie dafür braucht.", s:"plan", ex:"Ziele setzen und Zeit und Anstrengung planen."},
 {id:"r02", set:"srl", t:"Nach der Hälfte merkt Tim, dass er die letzten Seiten gelesen, aber nicht verstanden hat.", s:"mon", ex:"Metakognitive Bewusstheit, Monitoring der Kognitionen."},
 {id:"r03", set:"srl", t:"Weil das bloße Lesen nicht hilft, wechselt Tim zu Karteikarten und fragt sich selbst ab.", s:"kon", ex:"Auswahl und Anpassung kognitiver Strategien."},
 {id:"r04", set:"srl", t:"Nach der Klausur erklärt sich Aylin ihre schlechte Note mit zu wenig Übung, nicht mit fehlender Begabung.", s:"ref", ex:"Attributionen gehören zu Reaktion und Reflexion."},
 {id:"r05", set:"srl", t:"Vor dem Referat schätzt Malik ein, ob er das Thema schaffen kann, und findet es spannend.", s:"plan", ex:"Selbstwirksamkeitseinschätzung und Interesse aktivieren (Motivation/Affekt in der Planung)."},
 {id:"r06", set:"srl", t:"Im Lernraum ist es zu laut, also geht Sophie in die Bibliothek.", s:"kon", ex:"Kontext ändern bzw. verlassen (Bereich Kontext, Kontrolle)."},
 {id:"r07", set:"srl", t:"Beim Üben bemerkt Paul, dass seine Lust stark nachlässt und er sich ärgert.", s:"mon", ex:"Bewusstheit für und Monitoring von Motivation und Affekt."},
 {id:"r08", set:"srl", t:"Als sie nicht weiterkommt, fragt Nele eine Mitschülerin um Hilfe.", s:"kon", ex:"Hilfe suchendes Verhalten (Bereich Verhalten, Kontrolle)."},
 {id:"r09", set:"srl", t:"Nach dem Test fragt sich Ali, ob sein Lernziel überhaupt zur Aufgabe gepasst hat.", s:"ref", ex:"Evaluation der Ziele und des Kontexts."}
];
const whoCats=x=>WHO_SETS[x.set].cats;
function whoOptions(x){
  const C=whoCats(x), pool=Object.keys(C).filter(k=>k!==x.s&&!(x.alt||[]).includes(k));
  return shuffle([x.s].concat(shuffle(pool).slice(0,3)));
}
/* Auswahl: neue Beispiele und verwechselte kommen öfter */
function whoPick(n){
  const st=state.who||{}, pool=WHO.filter(x=>LESSONS[WHO_SETS[x.set].kap]), out=[];
  const w=pool.map(x=>{ const h=st[x.id]; return !h?3 : h.last?1:4; });
  while(out.length<Math.min(n,pool.length)){ let q=Math.random()*w.reduce((a,b)=>a+b,0), i=0; for(;i<pool.length;i++){ q-=w[i]; if(q<=0) break; } i=Math.min(i,pool.length-1); out.push(pool.splice(i,1)[0]); w.splice(i,1); }
  return out;
}
function openWho(n){ cur.wh={list:whoPick(n||8).map(x=>({x,o:whoOptions(x)})), i:0, a:null, right:0}; go("who"); }
function renderWho(){
  const W=cur.wh, L=W.list;
  if(W.i>=L.length){
    $("#app").innerHTML=`${backTo("Üben")}<h1>Runde geschafft</h1><div class="block"><p>${W.right} von ${L.length} richtig zugeordnet.</p>
      <p class="small muted">Falsch zugeordnete Beispiele kommen in den nächsten Runden häufiger.</p>
      <div class="row">${sess?sessBtn():`<button class="btn" id="wAgain">Neue Runde</button><button class="btn ghost" id="wOut">Fertig</button>`}</div></div>`;
    bindCrumb(()=>go("practice")); if($("#wAgain")) $("#wAgain").onclick=()=>openWho(8); if($("#wOut")) $("#wOut").onclick=()=>go("practice"); return;
  }
  /* Zuordnen als Auswahlkarte: Beispiel auf der Karte, Kategorien darunter, Urteil auf der Karte, weiter mit Tippen oder Wischen */
  const {x,o}=L[W.i], S=WHO_SETS[x.set], C=S.cats, done=W.a!==null, ok=done&&W.a===x.s;
  qcRender({
    eye:`Zuordnen · ${S.t} · ${W.i+1} von ${L.length}`, stem:S.q,
    front:inl(x.t), phase:done?"done":"open",
    opts:o.map(k=>({k,l:C[k]})), hint:`Tipp: ${S.hint}`,
    ok:!done?undefined:ok,
    verdict:!done?null:ok?{t:"Richtig.",s:[C[x.s]]}:{t:"Falsch.",s:[`Du: ${C[W.a]}`,`Richtig: ${C[x.s]}`]},
    why:done?`<p>${inl(x.ex)}</p>`:"",
    next:W.i<L.length-1?"Nächstes Beispiel":"Auswertung",
    pick:k=>{ if(W.a!==null) return; W.a=k; const good=k===x.s; if(good) W.right++;
      state.who=state.who||{}; const h=state.who[x.id]||{n:0,r:0}; h.n++; if(good) h.r++; h.last=good; if(!good) h.conf=k; state.who[x.id]=h; logDay(); save(); renderWho(); if(!good) buzz(); },
    go:()=>{ W.i++; W.a=null; renderWho(); window.scrollTo(0,0); }
  });
}
