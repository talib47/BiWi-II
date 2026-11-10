/* ================= Einstellungen nur dieser App für die gemeinsamen Bausteine (status.js) ================= */
const APP={
 name:"BiWi II",
 /* Unterlagen-Muster, korrigiert am 10.11. aus den Uploads: Heine stellt je Sitzung eine eigene Datei
    „Psy-Lehramt_WiSe-26-27_Sitzung<Nr>.pdf“ in Moodle (kein wachsender Foliensatz). Rhythmus wöchentlich, Wochentag unbekannt.
    Sitzung 3 wurde am 10.11. nachgereicht; die Lücke verschwindet, sobald sie in UPLOADS mit added steht. */
 projectUrl:"https://claude.ai/project/01a15557-90c1-7400-9208-1196e80443c9",
 expect:(h,L)=>{ const W=weeklyAfter(L,{end:"2027-02-06", items:["Folien der Sitzung (eigene Datei Psy-Lehramt_WiSe-26-27_Sitzung…pdf)"]});
   const gap=L.some(u=>u.no===3&&u.added)?[]:[{ch:3, label:"Sitzung 3", date:"schon gehalten", ts:new Date("2026-10-28").getTime(), items:["Folien Sitzung 3: Lernen 2 (Konditionierung)"]}];
   return {list:gap.concat(W.list), unsure:true}; },
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
