let btn=document.querySelector("button");
let h3=document.querySelector("h3");

btn.addEventListener("click" , function(){
    let randomColor=getRandomRGBcolor();
    h3.innerText=randomColor;
    let inpt=document.querySelector("input");
    inpt.style.backgroundColor=randomColor;
    console.log("button clicked",randomColor);
});

function getRandomRGBcolor(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}