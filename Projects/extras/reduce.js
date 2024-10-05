let arr = [3,55,6,-2,5,6];

let outputsum = arr.reduce(function(acc, curr){
    acc= acc+ curr;
    return acc ;
},0)

// console.log(outputsum);

let outputmax = arr.reduceRight(function(max,owhich){
    if(max<owhich){
        max=owhich;
    }
    return max;
},outputsum)

console.log(outputmax);

const result = user.map(x=> x.fin + x.lan)