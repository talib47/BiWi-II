/* ================= Rechentrainer Diagnostik (Kapitel 16) =================
   Jede Aufgabe liefert Schritte {lab, why, f, calc, ans, final?}; Stufen wie in Wirtschaft II: vorgerechnet, geführt, frei. */
const ZS=[-2.5,-2,-1.75,-1.5,-1.25,-1,-.8,-.75,-.6,-.5,-.4,-.25,.25,.4,.5,.6,.75,.8,1,1.25,1.5,1.75,2,2.5];
function rawCase(){
  for(;;){ const mu=pick([20,24,30,36,40,42,50,60,100,120,200,300,460,500,600]), sd=pick([2,3,4,5,6,8,10,12,15,20,25,40,50,100]), z=pick(ZS);
    const x=mu+z*sd; if(!isInt(x)||x<0||sd>=mu) continue; return {mu,sd,z,x}; }
}
const tblRow=(h,v)=>`<div class="tablewrap"><table class="data"><tr>${h.map(x=>`<th>${x}</th>`).join("")}</tr><tr>${v.map(x=>`<td>${typeof x==="number"?fmt(x):x}</td>`).join("")}</tr></table></div>`;
const zSteps=(c,lab="")=>[
  {lab:`Abstand zum Mittelwert x − μ${lab}`, why:"Erst schauen, wie weit der Rohwert vom Mittelwert der Referenzgruppe entfernt ist. Liegt er darunter, wird es negativ.", f:"x − μ", calc:`${fmt(c.x)} − ${fmt(c.mu)} = ${fmt(c.x-c.mu)}`, ans:c.x-c.mu, sign:true},
  {lab:`z-Wert${lab}`, why:"Den Abstand durch die Standardabweichung teilen: So viele Standardabweichungen liegt die Person vom Mittel entfernt.", f:"z = (x − μ) / σ", calc:`z = ${par(c.x-c.mu)} / ${fmt(c.sd)} = ${fmt(c.z)}`, ans:c.z, final:true, sign:true}
];
const posTxt=(z,ref)=>`Die Person liegt ${fmt(Math.abs(z))} ${Math.abs(z)===1?"Standardabweichung":"Standardabweichungen"} ${z<0?"unter":"über"} ${ref}.`;
const iqBand=iq=>iq<70?"unter 70":iq<85?"70 bis 85":iq<=115?"85 bis 115":iq<=130?"115 bis 130":"über 130";
const iqLabel=iq=>iq<70?"weit unterdurchschnittlich":iq<85?"unterdurchschnittlich":iq<=115?"durchschnittlich":iq<=130?"überdurchschnittlich":"weit überdurchschnittlich";
/* Flächen unter der Normalverteilung nach Heines Tabelle (in %) */
const NV_SEG=[[-99,-3,.13],[-3,-2,2.14],[-2,-1,13.59],[-1,0,34.13],[0,1,34.13],[1,2,13.59],[2,3,2.14],[3,99,.13]];
const nvArea=(a,b)=>r(NV_SEG.filter(([lo,hi])=>lo>=a&&hi<=b).reduce((s,x)=>s+x[2],0));
const SCALES={z:{n:"z-Wert",m:0,s:1},IQ:{n:"IQ",m:100,s:15},T:{n:"T-Wert",m:50,s:10},C:{n:"C-Wert",m:5,s:2}};

const TYPES={
  zwert:{name:"z-Wert berechnen", short:"z-Wert", desc:"Rohwert, Mittelwert und Standardabweichung gegeben: Wie viele Standardabweichungen liegt die Person vom Mittel entfernt?", gen(){
    const c=rawCase();
    return {intro:"Eine Person hat in einem standardisierten Leistungstest folgenden Testrohwert erzielt. Für die Normstichprobe sind Mittelwert und Standardabweichung angegeben.", table:tblRow(["Rohwert x","Mittelwert μ","Standardabw. σ"],[c.x,c.mu,c.sd]), q:"Berechnen Sie den z-Wert (exakt).", steps:zSteps(c), deut:posTxt(c.z,"dem Mittelwert der Normstichprobe")};
  }},
  iq:{name:"Vom Rohwert zum IQ", short:"Rohwert → IQ", desc:"Klausurklassiker (WiSe 17/18, 18/19): z-Wert berechnen, in den Abweichungs-IQ umrechnen, deskriptiv einordnen.", gen(){
    const c=rawCase(), iq=r(100+15*c.z);
    return {intro:`Eine Person hat bei einem standardisierten Intelligenztest (μ = ${fmt(c.mu)}, σ = ${fmt(c.sd)}) einen Testrohwert von ${fmt(c.x)} erzielt.`, table:"", q:"Berechnen Sie den z-Wert und den IQ-Wert (jeweils exakt) und ordnen Sie das Ergebnis deskriptiv ein.",
      deut:`IQ ${fmt(iq)}: ${iqLabel(iq)} (${iqBand(iq)}). ${posTxt(c.z,"dem Durchschnitt")}`,
      steps:[...zSteps(c),{lab:"IQ-Wert (Abweichungs-IQ)", why:"Die IQ-Skala hat Mittelwert 100 und Standardabweichung 15: 100 plus 15 mal z.", f:"IQ = 100 + 15 · z", calc:`IQ = 100 + 15 · ${par(c.z)} = ${fmt(iq)}  →  ${iqLabel(iq)}`, ans:iq, final:true}]};
  }},
  skalen:{name:"Zwischen Normskalen umrechnen", short:"Skalen", desc:"IQ, T-Wert, C-Wert und z-Wert ineinander umrechnen: immer erst zurück zu z.", gen(){
    for(;;){ const from=pick(["IQ","T","C","z"]), to=pick(["IQ","T","C","z"].filter(x=>x!==from)), z=pick(ZS), A=SCALES[from], B=SCALES[to];
      const v=r(A.m+A.s*z), w=r(B.m+B.s*z); if(!nice(v,2)) continue;
      const steps=[];
      if(from!=="z") steps.push({lab:"Zurück zum z-Wert", why:`Die ${A.n}-Skala hat Mittelwert ${A.m} und Standardabweichung ${A.s}. Abstand zum Mittel durch die Standardabweichung teilen.`, f:`z = (Wert − ${A.m}) / ${A.s}`, calc:`z = (${fmt(v)} − ${A.m}) / ${A.s} = ${fmt(z)}`, ans:z, sign:true, final:to==="z"});
      if(to!=="z") steps.push({lab:`${B.n}`, why:`Die ${B.n}-Skala hat Mittelwert ${B.m} und Standardabweichung ${B.s}: Mittelwert plus Standardabweichung mal z.`, f:`${B.n} = ${B.m} + ${B.s} · z`, calc:`${B.m} + ${B.s} · ${par(z)} = ${fmt(w)}`, ans:w, final:true});
      return {intro:`Ein Kind hat in einem Test ${from==="z"?"einen z-Wert":from==="IQ"?"einen IQ":"einen "+A.n} von ${fmt(v)} erreicht.`, table:"", q:`Welcher ${B.n} entspricht diesem Ergebnis?`, steps, deut:`${from==="z"?"z":A.n} ${fmt(v)} und ${to==="z"?"z":B.n} ${fmt(w)} beschreiben dieselbe Position in der Referenzgruppe. ${posTxt(z,"dem Mittel")}`};
    }
  }},
  nv:{name:"Anteile unter der Normalverteilung", short:"Anteile", desc:"Wie viel Prozent der Bevölkerung haben einen IQ in einem bestimmten Bereich? Mit Heines Tabelle 34,13 / 13,59 / 2,14 / 0,13.", gen(){
    const B=[55,70,85,100,115,130,145], kind=pick(["zw","ge","le"]);
    let a,b,txt;
    if(kind==="zw"){ const i=rint(0,5), j=rint(i+1,6); a=B[i]; b=B[j]; txt=`zwischen ${a} und ${b}`; }
    else if(kind==="ge"){ a=pick([70,85,100,115,130,145]); b=null; txt=`von ${a} oder mehr`; }
    else { a=null; b=pick([55,70,85,100,115,130]); txt=`von ${b} oder weniger`; }
    const za=a==null?-99:(a-100)/15, zb=b==null?99:(b-100)/15, p=nvArea(za,zb);
    const steps=[];
    if(a!=null) steps.push({lab:`Grenze ${a} als z-Wert`, why:"Jede Grenze in Standardabweichungen ausdrücken.", f:"z = (IQ − 100) / 15", calc:`z = (${a} − 100) / 15 = ${fmt(za)}`, ans:za, sign:true});
    if(b!=null) steps.push({lab:`Grenze ${b} als z-Wert`, why:"Jede Grenze in Standardabweichungen ausdrücken.", f:"z = (IQ − 100) / 15", calc:`z = (${b} − 100) / 15 = ${fmt(zb)}`, ans:zb, sign:true});
    const parts=NV_SEG.filter(([lo,hi])=>lo>=za&&hi<=zb).map(x=>String(x[2]).replace(".",","));
    steps.push({lab:"Anteil in Prozent", why:"Die Abschnitte zwischen den Grenzen aufaddieren: 34,13 innen, 13,59 zwischen 1 und 2 SD, 2,14 zwischen 2 und 3 SD, 0,13 außen.", f:"Summe der Abschnitte", calc:`${parts.join(" + ")} = ${fmt(p)} %`, ans:p, final:true, tol:.06});
    return {intro:"Der IQ ist normalverteilt mit Mittelwert 100 und Standardabweichung 15.", table:"", q:`Wie viel Prozent der Bevölkerung haben einen IQ ${txt}?`, steps, deut:`Etwa ${fmt(p)} % der Bevölkerung haben einen IQ ${txt}. Zum Vergleich: Zwei Drittel (68,26 %) liegen zwischen 85 und 115.`};
  }},
  pr:{name:"Prozentrang aus einer Werteverteilung", short:"Prozentrang", desc:"Klausur WiSe 18/19 und 22/23: Werte sortieren, cumf zählen, PR = cumf / N · 100.", gen(){
    for(;;){ const N=pick([10,12,15,16,20]), vals=[...Array(N)].map(()=>rint(8,40)); const x=pick(vals);
      const sorted=vals.slice().sort((a,b)=>a-b), cumf=sorted.filter(v=>v<=x).length, pr=r(cumf/N*100);
      if(cumf===N||cumf<3||!nice(pr,2)) continue;
      return {intro:"Gegeben ist die folgende Werteverteilung einer Referenzgruppe.", table:`<div class="eq" style="white-space:normal;margin-top:8px">${vals.join("; ")}</div>`, q:`Ermitteln Sie den Prozentrang des Testwerts ${x} und interpretieren Sie ihn.`, deut:`Prozentrang ${fmt(pr)}: ${fmt(pr)} % der Referenzgruppe haben gleich gut oder schlechter abgeschnitten, ${fmt(r(100-pr))} % besser.`,
        steps:[
          {lab:"cumf: Anzahl der Werte ≤ "+x, why:"Werte sortieren und zählen, wie viele kleiner oder gleich dem Testwert sind. Gleiche Werte zählen mit.", f:"cumf = Anzahl Werte ≤ x", calc:`${sorted.map(v=>v<=x?v:"·").join(" ").replace(/( ·)+$/,"")} → cumf = ${cumf}`, ans:cumf, tol:0},
          {lab:"N: Anzahl aller Werte", why:"Alle Werte der Verteilung zählen.", f:"N", calc:`N = ${N}`, ans:N, tol:0},
          {lab:"Prozentrang PR", why:"Anteil der Werte bis einschließlich des Testwerts in Prozent.", f:"PR = cumf / N · 100", calc:`PR = ${cumf} / ${N} · 100 = ${fmt(pr)}  →  ${fmt(pr)} % haben gleich gut oder schlechter abgeschnitten, ${fmt(r(100-pr))} % besser.`, ans:pr, final:true, tol:.06}
        ]};
    }
  }},
  prrev:{name:"Prozentrang rückwärts: welcher Testwert?", short:"PR rückwärts", desc:"Prozentrang gegeben, Testwert gesucht: Formel nach cumf auflösen, dann in der sortierten Verteilung abzählen.", gen(){
    for(;;){ const N=pick([10,12,16,20]), vals=[...Array(N)].map(()=>rint(8,40)), sorted=vals.slice().sort((a,b)=>a-b);
      const cumf=rint(2,N-1), pr=r(cumf/N*100), x=sorted[cumf-1];
      if(!nice(pr,2)||sorted[cumf]===x) continue;
      return {intro:"Gegeben ist die folgende Werteverteilung einer Referenzgruppe.", table:`<div class="eq" style="white-space:normal;margin-top:8px">${vals.join("; ")}</div>`, q:`Welcher Testwert hat in dieser Verteilung den Prozentrang ${fmt(pr)}?`, deut:`Der Testwert ${x}: ${cumf} von ${N} Werten sind kleiner oder gleich ${x}, das sind ${fmt(pr)} %.`,
        steps:[
          {lab:"cumf aus dem Prozentrang", why:"Formel nach cumf auflösen: durch 100 teilen, mit N malnehmen.", f:"cumf = PR / 100 · N", calc:`cumf = ${fmt(pr)} / 100 · ${N} = ${cumf}`, ans:cumf, tol:0},
          {lab:"Gesuchter Testwert", why:"Werte sortieren und bis zur Stelle cumf abzählen. Der Wert an dieser Stelle hat den Prozentrang.", f:"Wert an Stelle cumf", calc:`${sorted.map((v,i)=>i===cumf-1?"["+v+"]":v).join(" ")} → Stelle ${cumf}: Testwert ${x}`, ans:x, final:true, tol:0}
        ]};
    }
  }},
  vergleich:{name:"Ergebnisse aus verschiedenen Tests vergleichen", short:"Vergleich", desc:"Klausur WiSe 22/23 (14 P.): drei Schülerinnen, drei Lesetests. Rohwerte standardisieren und begründet auswählen.", gen(){
    for(;;){ const x=rint(25,45), M=[0,1,2].map(()=>x+pick([-3,-2,-1,1,2,3,4,5,6,8])), S=[0,1,2].map(()=>pick([2,3,4,5,6,8]));
      const Z=M.map((m,i)=>r((x-m)/S[i])); if(!Z.every(z=>nice(z,2))||new Set(Z).size<3) continue;
      const w=Z.indexOf(Math.min(...Z)), N=["A","B","C"];
      return {intro:"Ein letzter Platz in einem Lesetraining für leseschwache Kinder ist zu vergeben. Drei Schulen schlagen je eine Viertklässlerin vor, gemessen mit unterschiedlichen standardisierten Lesetests.",
        table:`<div class="tablewrap"><table class="data"><tr><th></th><th>Rohwert</th><th>M</th><th>SD</th></tr>${N.map((n,i)=>`<tr><th>${n}</th><td>${x}</td><td>${M[i]}</td><td>${S[i]}</td></tr>`).join("")}</table></div>`,
        q:"Wandeln Sie die Rohwerte in z-Werte um. Welche Schülerin sollte den Platz bekommen? (Antwort als Zahl: A = 1, B = 2, C = 3)", deut:`Gleicher Rohwert, aber unterschiedliche Tests: Schülerin ${N[w]} liegt mit z = ${fmt(Z[w])} am weitesten unter ihrer Referenzgruppe und bekommt den Platz.`,
        steps:[...N.map((n,i)=>({lab:`z-Wert Schülerin ${n}`, why:"Rohwert minus Mittelwert ihres Tests, geteilt durch die Standardabweichung ihres Tests.", f:"z = (x − M) / SD", calc:`z = (${x} − ${M[i]}) / ${S[i]} = ${fmt(Z[i])}  (IQ-Skala: ${fmt(r(100+15*Z[i]))})`, ans:Z[i], final:true, sign:true})),
          {lab:"Platz für Schülerin (A = 1, B = 2, C = 3)", why:"Gesucht ist die schwächste Leserin, also der niedrigste z-Wert: Sie liegt am weitesten unter ihrer Referenzgruppe.", f:"min(z)", calc:`Schülerin ${N[w]}: Ihre Leistung liegt ${fmt(Math.abs(Z[w]))} Standardabweichungen unter dem Mittel ihrer Referenzgruppe, weiter als bei den anderen.`, ans:w+1, final:true, tol:0}]};
    }
  }}
};
const ORDER=Object.keys(TYPES);
const LVL={1:"Vorgerechnet",2:"Geführt",3:"Frei"};
const lvlOf=t=>state.lvl[t]||1;
