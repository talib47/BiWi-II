/* ================= Einstellungen nur dieser App für die gemeinsamen Bausteine (status.js) ================= */
const APP={
 name:"BiWi II",
 halves:false,
 chap:n=>CHAPTERS.find(c=>c.n===n),
 unit:()=>"Sitzung",
 unitNo:c=>c.n,
 examTs:()=>examDateTs(),
 todos:{main:[
  {id:"bw-his", t:"Zur Klausur in HIS in One angemeldet", d:"Frist im HIS prüfen"},
  {id:"bw-raum", t:"Uhrzeit und PC-Raum der Klausur nachgesehen", d:"Mi 17.02.2027"}
 ]}
};
