// adding number to array

let nrow = [];
let noOfinn = Math.round((Math.random()*20));

for(let i = 0 ; i<=noOfinn ; i++){
    let rAN = Math.round((Math.random()*100));
    nrow.push(rAN);
}
console.log(nrow);