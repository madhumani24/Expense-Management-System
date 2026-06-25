document.getElementById("threelines").style.display="none";
let menuopen1 = function(){
    document.querySelector("#threelines").style.display="block";
}
document.querySelector(".threedots").style.display="none";
let menuopen2 = function(){
    document.querySelector(".threedots").style.display="block";
    document.getElementById("threelines").style.display="none";
}
let closebtn = function(){
    document.querySelector("#threelines").style.display="none";
    document.querySelector(".threedots").style.display="none";
}