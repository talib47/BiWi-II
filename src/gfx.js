/* ================= Grafiken (SVG, Raster 400 × 300) ================= */
const tri=(x,y,dir,cls)=>{ const s=7, p={up:[[x,y],[x-s/1.6,y+s],[x+s/1.6,y+s]],right:[[x,y],[x-s,y-s/1.6],[x-s,y+s/1.6]],down:[[x,y],[x-s/1.6,y-s],[x+s/1.6,y-s]]}[dir]; return `<polygon class="${cls}" points="${p.map(q=>q.join(",")).join(" ")}"/>`; };
const ln=(x1,y1,x2,y2,cls)=>`<line class="${cls}" x1="${x1}" y1="${y1}" x2="${x2}" y2="${y2}"/>`;
const tx=(x,y,s,cls="",anchor="start",size)=>`<text class="${cls}" x="${x}" y="${y}" text-anchor="${anchor}"${size?` style="font-size:${size}px"`:""}>${s}</text>`;
const dot=(x,y,cls="dot")=>`<circle class="${cls}" cx="${x}" cy="${y}" r="5"/>`;

/* Normalverteilung mit Flächenanteilen und den üblichen Skalen (Mittelwert 200, 1 SD = 50 px) */
function nvCurve(){
  const X=z=>200+z*50, Y=z=>196-150*Math.exp(-z*z/2);
  let d=""; for(let i=0;i<=140;i++){ const z=-3.5+i*.05; d+=(i?"L":"M")+X(z).toFixed(1)+","+Y(z).toFixed(1); }
  return {X,Y,d};
}
const GFX={
  nv:{base:()=>{ const {X,Y,d}=nvCurve();
      const area=(a,b,cls)=>{ let p=`M${X(a)},196`; for(let z=a;z<=b+1e-9;z+=.05) p+=`L${X(z).toFixed(1)},${Y(z).toFixed(1)}`; return `<path class="${cls}" d="${p}L${X(b)},196Z"/>`; };
      let s=area(-1,1,"fillA")+area(-2,-1,"fillB")+area(1,2,"fillB")+`<path class="base" d="${d}"/>`+ln(18,196,382,196,"ax");
      for(const z of [-3,-2,-1,0,1,2,3]) s+=ln(X(z),Y(z),X(z),200,"ax dash thin");
      const pc=[["34,13 %",-.5,150,11],["34,13 %",.5,150,11],["13,59 %",-1.5,189,10],["13,59 %",1.5,189,10],["2,14 %",-2.75,170,10],["2,14 %",2.75,170,10]];
      for(const [t,z,y,f] of pc) s+=tx(X(z),y,t,"bt","middle",f);
      const rows=[["z",z=>String(z).replace("-","−")],["IQ",z=>100+15*z],["T",z=>50+10*z],["PR",z=>({"-3":"0,13","-2":"2,3","-1":"15,9","0":"50","1":"84,1","2":"97,7","3":"99,9"})[z]]];
      rows.forEach(([lab,f],i)=>{ const y=218+i*19; s+=tx(10,y,lab,"","start",11); for(const z of [-3,-2,-1,0,1,2,3]) s+=tx(X(z),y,f(z),i===1?"bt":"","middle",11); });
      return s; },
    sol:()=>""}
};
const figSVG=(id,sol=true)=>`<svg class="fig" viewBox="0 0 400 300" role="img" aria-label="Grafik">${GFX[id].base()}${sol?GFX[id].sol():""}</svg>`;
