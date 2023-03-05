const changeMyKey = document.getElementById("changeMyKey");

const input = document.getElementById("input");

document.addEventListener("keydown",(event)=>{
    changeMyKey.innerHTML = event.key;
})