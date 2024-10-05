let box= document.querySelector(".box")

let clickCount = 0;



box.addEventListener("click",()=>{
    clickCount++;
    document.querySelector(".score").textContent =clickCount ;
    if(clickCount>=10){
        clickCount=20;
    }
})