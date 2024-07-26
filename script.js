const inputBox = document.getElementById("input-box");
const listcCntainer = document.getElementById("listcontainer");

function AddTask(){
    if(inputBox.value === ''){
        alert("Your must write Something");
    }
    else{
        let li = document.createElement("li");
        li.innerHTML = inputBox.value;
        listcCntainer.appendChild(li);
        let span = document.createElement("span");
        span.innerHTML = "\u00d7";
        li.appendChild(span);
    }
    inputBox.value = "";
    savedata();
}

listcCntainer.addEventListener("click",function(e){
    if(e.target.tagName === "LI"){
        e.target.classList.toggle("checked");
        savedata();
    }
    else if(e.target.tagName === "SPAN"){
        e.target.parentElement.remove();
        savedata();
    }
}, false);

function savedata(){
    localStorage.setItem("data", listcCntainer.innerHTML);
}

function showtask(){
    listcCntainer.innerHTML = localStorage.getItem("data");
}

showtask();