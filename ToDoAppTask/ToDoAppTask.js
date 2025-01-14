let inp=document.querySelector("input");
let ol=document.querySelector("ol");

//Add button
let btn=document.querySelector("button");
btn.addEventListener("click",addTask);
function addTask(){
    let item=document.createElement("li");
    item.innerText=inp.value;
    let delBtn=document.createElement("button");
    delBtn.innerText="Delete";
    item.appendChild(delBtn);
    ol.appendChild(item);
    inp.value="";

};
ol.addEventListener("click",delTask);
function delTask(event){
    if(event.target.nodeName=="BUTTON"){
        event.target.parentElement.remove();
    }
   
};
