let b=document.querySelector("button");
b.addEventListener("click",function(){
    let h=document.querySelector("h3");
    h.innerText=randonColor();
    console.log("color updated")
    let d=document.querySelector("div");
    d.style.backgroundColor=h.innerText;
});
function randonColor(){
    let r=Math.floor(Math.random()*255);
    let g=Math.floor(Math.random()*255);
    let b=Math.floor(Math.random()*255);
    let random=`rgb(${r},${g},${b})`;
    return random;
}