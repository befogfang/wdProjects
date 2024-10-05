let ranNum1 = Math.round((Math.random()*5)+1);
// console.log(ranNum1);
let newsrc1= "./images/dice"+ranNum1+".png";
document.querySelector(".img1").setAttribute("src",newsrc1);


let ranNum2 = Math.round((Math.random()*5)+1);
// console.log(ranNum2);
let newsrc2= "./images/dice"+ranNum2+".png";
document.querySelector(".img2").setAttribute("src",newsrc2);

let ra =  document.querySelector(".result p");

if(ranNum1>ranNum2){
    ra.innerHTML=(name1 +" Won") ;
} else if(ranNum2>ranNum1) {
    ra.innerHTML=(name2 +" Won");
} else {
    ra.innerHTML="Tie";
}

//Enterin name

let name1 = prompt("Enter Players 1 Name:");

document.querySelectorAll("p")[0].innerHTML= name1;

let name2 = prompt("Enter Players 2 Name:");

document.querySelectorAll("p")[1].innerHTML= name2;