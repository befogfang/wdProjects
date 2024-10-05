let alphaAray =[];
function CaAlpha(nu){

        const alpabet = String.fromCharCode(nu);
        alphaAray.push(alpabet);
        console.log(alphaAray);
}
// CaAlpha(66);

function rN2A(val){
    for(let i =1 ; i<=val ; i++){
        let ran_num = Math.round((Math.random()*26)+65);
        // return ran_num;
        CaAlpha(ran_num);
    }
    
}

rN2A(26);



  