'use strict'
//añadir el index al localSrorage para que al recargar s emantenga el ultimo index

var index = 1;
/*for(let i = 0; i<localStorage.length;i++){
    
    if(localStorage.key(i)=!null){    //Recorrer el LS para ver si ya hay index
        index = 0; 
        localStorage.setItem("index",index);
    }
    else{
        index = localStorage.getItem("index");
    }

}*/

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

        // if (task != "") {
        index++;
        //actualizar el valor del index en el LS
        localStorage.setItem("index", index);

        var keyName;

        keyName = /*"Task "  +*/ index + "";

        localStorage.setItem(keyName, task);

        let taskk = localStorage.getItem(keyName);
        addTask(taskk, index);
        //index--;     
        // }

    }),
        console.log("NEW INDEX: " + index);
    addFromLocalStorage()
    console.log(listOfParagraphs);
    console.log(listOfTasks);
    console.log(listOfChecks);

    //PROBAR A RECARGAR PAGE UNA SOLA VEZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZZ


    /* document.querySelector(".checkBox").addEventListener('onclick', function(){ //':checked'
         //removeTask(this);    //INSTEAD OF THIS I NEED TO INTRODUCE THE TASKKKK4       2. mirar sus id, comprobar el p con mismo y elimnarlo, both.
 
         let element_checkbox = document.querySelector("#index");
       
         console.log(id_checkbox);
 
         listOfChecks.forEach(element => {
 
             var id_checkbox = element.getAttribute("id");
             for(var j in listOfParagraphs){
                 if (j.getAttribute("id")=id_checkbox && element.checked==true) {
                     console.log("DONE");
                 }   
             }
         });
         console.log("joder");
     })
 */

})

function funPrueba() {   //para eliminar
    listOfChecks.forEach(elementCheck => {

        var id_checkbox = elementCheck.getAttribute("id");  ///console


        // var element2 = element;
        listOfParagraphs.forEach(element => {

            if (element.getAttribute("id") === id_checkbox && elementCheck.checked == true) {
                id_checkbox--;
                console.log(element.getAttribute("id"));
                var keyName2 =/* "Task "  + *//*element.getAttribute("id")*/id_checkbox;
                console.log(keyName2);
                localStorage.removeItem(keyName2);
                element.remove();
                elementCheck.remove();
                listOfParagraphs.pop(element);
                listOfChecks.pop(elementCheck);
                // index--;
                //  x``zx`x`localStorage.setItem("index", index);

            }
        })
    });

}

let listOfTasks = [];
let listOfParagraphs = [];
let listOfChecks = [];

function addTask(taskk, index) {

    index++;
    let paragraph = document.createElement("p");
    paragraph.setAttribute("id", index)
    paragraph.innerHTML = taskk;
    document.querySelector("#listOfTasks").append(paragraph);
    listOfTasks.push(taskk);
    listOfParagraphs.push(paragraph);

    let checkButton = document.createElement("input");
    checkButton.setAttribute("type", "checkbox");
    checkButton.setAttribute("class", "checkBox")
    checkButton.setAttribute("id", index);
    checkButton.setAttribute("onclick", "funPrueba()");
    document.getElementById(index).append(checkButton);
    listOfChecks.push(checkButton);

}
function removeTask(taskk) {
    //REMOVE FROM LOCALSOTAGE MAYBE SINCE IT REFRESES
    for (let i = 0; i < localStorage.length; i++) {
        let keyname = localStorage.key(i);
        if (keyname.value == taskk) {
            localStorage.removeItem(keyname);
        }
        //AÑADIR AQUI O EN ELdde LOAD EL ELIMINAR LOS PARRAFOS QUE EL INNETHTML SEA NADA
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

            //addTask(value,index);
            index++;
        }
    }

    //ordenar array
    listFromLocalS.sort(function (a, b) { return a - b });
    console.log(listFromLocalS);

    // for(var elemento in listFromLocalS){
    listFromLocalS.forEach(element => {
        let key_name = element.toString();
        var valuee = localStorage[key_name];
        console.log("VALOR: ");
        console.log(valuee);
        addTask(valuee, key_name);
    })
    /* let key_name = elemento.toString();
     var valuee = localStorage[key_name];
     console.log("VALOR: ");     
     console.log(valuee);
     addTask(valuee,key_name);*/
    //HACER ALGO CON EL UNDEFINEDDDDDDDDDDDDDDDDDDDD**************************
    //}
    // console.log(listFromLocalS);    
    /* var num_veces = 0;
 
     while(num_veces < localStorage.length){
         var key = localStorage.key(i);
     }*/
}

;

//AL HACER ADD FROM LOCAL STORAGE COGERLOS ORDENADOS PUESTO QUE SE ENCUENTRAS DESORDENADOS
//ES NECESARIO QUITAR "TASK" Y DEJAR SOLO NUMEROS PARA PODER COGERLOS ORDENADOS...


//1.coger todo el local storage y ordenarlos por keyname, una vez hecho eso, ir cogíendolos y añadirlos .