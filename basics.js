let greet=function(){
    console.log("Hello");
}
function ngreets(func,n){
    for(let i=1;i<=n;i++){
        func();
    }
}
ngreets(function(){
    console.log("Hi");
},5);