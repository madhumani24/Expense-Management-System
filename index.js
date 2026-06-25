//to hide threelines menu
document.getElementById("threelines").style.display="none";
//appear threelines menu
let menuopen1 = function(){
    document.querySelector("#threelines").style.display="block";
}
//hide threedots menu
document.querySelector(".threedots").style.display="none";
//appear threedots menu
let menuopen2 = function(){
    document.querySelector(".threedots").style.display="block";
    document.getElementById("threelines").style.display="none";
}
//close button
let closebtn = function(){
    document.querySelector("#threelines").style.display="none";
    document.querySelector(".threedots").style.display="none";
}