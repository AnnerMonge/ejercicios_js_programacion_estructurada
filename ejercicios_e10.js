const partidos = [
  { 
   juego: 1,
   losToros: 0,
  SanFernando: 4
  },
  {
   juego: 2,
   losToros: 6,
    SanFernando: 8 
  },
  {
   juego: 3,
   losToros: 5,
    SanFernando: 3 
  },
  {
    juego: 4,
    losToros: 7,
    SanFernando: 4
  },
  {
    juego: 5,
    losToros: 5,
    SanFernando: 3 
  },
  {
    juego: 6,
    losToros: 6,
    SanFernando: 3 
  },
  {
    juego: 7,
    losToros: 7,
    SanFernando: 3 
  }

];

const numPartidos = partidos.length;

for (let i = 0; i < numPartidos; i++) {
  let p = partidos.shift();
  console.log(`Resultado del partido ${p.juego}: Los Toros ${p.losToros} - San Fernando ${p.SanFernando}`
  );
}
 

 const p1 = partidos.shift();
console.log(`Resultado del partido  ${p1.losToros} - San Fernando ${p1.SanFernando}`);

const p2 = partidos.shift();
console.log(`Resultado del partido  ${p2.losToros} - San Fernando ${p2.SanFernando}`);

const p3 = partidos.shift();
console.log(`Resultado del partido   ${p3.losToros} - San Fernando ${p3.SanFernando}`);

const p4 = partidos.shift();
console.log(`Resultado del partido   ${p4.losToros} - San Fernando ${p4.SanFernando}`);

const p5 = partidos.shift();
console.log(`Resultado del partido   ${p5.losToros} - San Fernando ${p5.SanFernando}`);

const p6 = partidos.shift();
console.log(`Resultado del partido  ${p6.losToros} - San Fernando ${p6.SanFernando}`);

const p7 = partidos.shift();
console.log(`Resultado del partido   ${p7.losToros} - San Fernando ${p7.SanFernando}`);




//Visulizar cola
console.log(partidos);