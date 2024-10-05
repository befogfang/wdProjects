// let alpha =[]

// for(let i=65; i<=90 ; i++){
//     let Calpha = String.fromCharCode(i);
//     alpha.push(Calpha);
// }
// console.log(alpha);

// for(let j=97; j<=122 ; j++){
//     let Calpha = String.fromCharCode(j);
//     alpha.push(Calpha);
// }
// console.log(alpha);

let leCc =['A', 'B', 'C', 'D', 'E', 'F', 'G', 'H','I', 'J', 'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 'W', 'X',    'Y', 'Z', 'a', 'b', 'c', 'd', 'e', 'f',    'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n',    'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
let ranleNu = Math.round((Math.random()*52));

for(let i=0 ; i < leCc.length ; i++){
    var shuarr = [];
    shuarr.push(leCc[ranleNu]);
  
}
console.log(shuarr);