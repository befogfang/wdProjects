let input = document.getElementById('inputBox');
let buttons = document.querySelectorAll('button');

let string="";
let arr = Array.from(buttons);

arr.forEach(butt => {
    butt.addEventlistner('click',(e)=> {
        if(e.target.innerHTML == '='){
            string = eval(string);
        input.value = string; }

        string += e.target.innerHTML;
        input.value = string;
    }) }
);