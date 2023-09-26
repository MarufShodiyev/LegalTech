const toogle = document.getElementById("toogle");
const toogleClose = document.getElementById("toogleClose");
const toogleWrapper = document.getElementById("toogle--wrapper")

toogle.addEventListener("click",function(){
    toogleWrapper.classList.add("open")
    toogleWrapper.classList.remove("hidden")
})

toogleClose.addEventListener("click",()=>{
    toogleWrapper.classList.add("hidden")
    toogleWrapper.classList.remove("open")
})