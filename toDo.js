let addtoDoButton = document.getElementById("liveToastBtn");
let list = document.getElementById("list")
addtoDoButton.addEventListener("click", function(){
    let li = document.createElement("li");
    list.appendChild(li);
    li.innerHTML= task.value;
})