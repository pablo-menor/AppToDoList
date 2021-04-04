'use strict'

var index = 1;


if (localStorage.length < 1) {
    index = 0;
    localStorage.setItem("index", index);
}
else {
    index = localStorage.getItem("index");
    localStorage.setItem("index", index);
}

window.addEventListener('load', function () {

    document.querySelector("#tasks").addEventListener('submit', function () {

        let task = document.querySelector("#task_name").value;

        if (task != "") {
        index++;
        //actualizar el valor del index en el LS
        localStorage.setItem("index", index);

        var keyName;

        keyName = index + "";

        localStorage.setItem(keyName, task);

        let taskk = localStorage.getItem(keyName);
        addTask(taskk, index);
          
         }
        

    }),
        console.log("NEW INDEX: " + index);
    addFromLocalStorage()
    console.log(listOfParagraphs);
    console.log(listOfTasks);
    console.log(listOfChecks);

  
})

function deleteTask() {   
    listOfChecks.forEach(elementCheck => {

        var id_checkbox = elementCheck.getAttribute("id");  

        listOfParagraphs.forEach(element => {

            if (element.getAttribute("id") === id_checkbox && elementCheck.checked == true) {
                id_checkbox--;
                console.log(element.getAttribute("id"));
                var keyName2 = id_checkbox;
                console.log(keyName2);
                localStorage.removeItem(keyName2);
                element.remove();
                elementCheck.remove();
                listOfParagraphs.pop(element);
                listOfChecks.pop(elementCheck);

            }
        })
    });
    location.reload();

}

let listOfTasks = [];
let listOfParagraphs = [];
let listOfChecks = [];

function addTask(taskk, index) {

    index++;
    let paragraph = document.createElement("p");
    paragraph.setAttribute("id", index)
    paragraph.innerHTML =   taskk;
    document.querySelector("#listOfTasks").append(paragraph);
    listOfTasks.push(taskk);
    listOfParagraphs.push(paragraph);

    let checkButton = document.createElement("input");
    checkButton.setAttribute("type", "checkbox");
    checkButton.setAttribute("class", "checkBox")
    checkButton.setAttribute("id", index);
    checkButton.setAttribute("onclick", "deleteTask()");
    document.getElementById(index).append(checkButton);
    listOfChecks.push(checkButton);
    let br = document.createElement("br");
    document.querySelector("#listOfTasks").append(br);

}
function removeTask(taskk) {
    
    for (let i = 0; i < localStorage.length; i++) {
        let keyname = localStorage.key(i);
        if (keyname.value == taskk) {
            localStorage.removeItem(keyname);
        }
       
    }

}

var listFromLocalS = [];
function addFromLocalStorage() {
    index = 0;
    for (let i = 0; i < localStorage.length; i++) {

        var key = localStorage.key(i);
        console.log("Nombre del task")
        console.log(key);

        if (key != "index") {
            var value = localStorage[key];
            listFromLocalS.push(parseInt(key));  //arrayc con los keys
            index++;
        }
    }

    //ordenar array
    listFromLocalS.sort(function (a, b) { return a - b });
    console.log(listFromLocalS);

    listFromLocalS.forEach(element => {
        let key_name = element.toString();
        var valuee = localStorage[key_name];
        console.log("VALOR: ");
        console.log(valuee);
        addTask(valuee, key_name);
    })

}
