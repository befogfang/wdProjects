$(".floatbutton").click(function () { 
    
    $(".popup").toggleClass("invisible");
    
});
let newarray = $(".main.para>p").text();

for (const i of newarray) {
    
    let arrafp = newarray.split(".");
    console.log(arrafp);
}
