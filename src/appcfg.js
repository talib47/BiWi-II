/* ================= Einstellungen nur dieser App für die gemeinsamen Bausteine (status.js) ================= */
const APP={
 name:"BiWi II",
 /* Unterlagen-Muster, hergeleitet aus den Uploads bis 21.10.: Heine stellt einen Foliensatz in Moodle, der jede Woche
    um die neue Sitzung wächst. Darum immer die ganze, neueste Datei hochladen. Rhythmus wöchentlich, Wochentag unbekannt. */
 expect:(h,L)=>weeklyAfter(L,{grow:true, end:"2027-02-06", items:["neuester Foliensatz aus Moodle (eine Datei, sie wächst jede Woche)"]}),
 halves:false,
 chap:n=>CHAPTERS.find(c=>c.n===n),
 unit:()=>"Sitzung",
 unitNo:c=>c.n,
 examTs:()=>examDateTs(),
 focus:{                                        /* Lernmodus ohne Ablenkung (status.js) */
  views:["cards","recall","who","kreuz","kurz","task","graph","exam"],
  prog:()=>{ const P={cards:()=>cur.deck&&{i:cur.ci,n:cur.deck.length}, recall:()=>cur.rq&&{i:cur.rq.i,n:cur.rq.list.length},
    who:()=>cur.wh&&{i:cur.wh.i,n:cur.wh.list.length}, kreuz:()=>cur.kr&&{i:cur.kr.i,n:cur.kr.items.length}}[view];
    const r=P&&P(); return r&&r.n?r:null; },
  title:()=>({cards:"Karten",recall:"Verständnisfragen",who:"Zuordnen",kreuz:"Kreuzaufgaben",kurz:"Offene Aufgabe",task:"Rechenaufgabe",graph:"Grafik",exam:"Probeklausur"})[view]||"",
  exit:()=>go(TAB_OF[view]||"home")
 },
 todos:{main:[
  {id:"bw-his", t:"Zur Klausur in HIS in One angemeldet", d:"Frist im HIS prüfen"},
  {id:"bw-raum", t:"Uhrzeit und PC-Raum der Klausur nachgesehen", d:"Mi 17.02.2027"}
 ]}
};
