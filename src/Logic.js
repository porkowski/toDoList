import {addProjectToDom} from "./index.js";
import {addItemToDom} from "./index.js";
import { generatetodos } from "./index.js";


class Project {
    static myLibrary = [];
    
    //Add addProj to this class as a method

    constructor(projectTitle) {

        this.projectTitle = projectTitle;
    
        this.toDoList = [];

        this.toDoItem = function(title,dueDate,description,priority) {
            const item = {
                title,
                dueDate,
                description,
                priority
            }
            console.log(item);
            let add2dom = addItem.bind(this);
            add2dom(item);
        
        }


        //Push project to project library upon creation
        let addProj = addProject.bind(this);
        addProj();


    };
}


function addProject() {
        Project.myLibrary.push(this);
        //Get index of project in the library
        const index = Project.myLibrary.length -1;
        let addToDom = addProjectToDom.bind(this);
        addToDom(index);

        //Update local storage after adding project
        updateLocalStorage();


}

function addItem(item) {
        this.toDoList.push(item);
        let addToDom = addItemToDom.bind(this);
        addToDom(item);

        // Add object to local storage once Items are added
        updateLocalStorage();

}



function removeToDo(projectId,i) {
    //splice the specific to do out of the library. 
    Project.myLibrary[projectId].toDoList.splice(i,1);
    updateLocalStorage();

}

function changePriority(projectId,i) {
    let currentPriority = Project.myLibrary[projectId].toDoList[i].priority;
    //Toggle priority switch
        if (currentPriority == 'Low') {currentPriority = 'Medium';
        Project.myLibrary[projectId].toDoList[i].priority = currentPriority;
        updateLocalStorage();} 
        else if (currentPriority == 'Medium') {currentPriority = 'High';
        Project.myLibrary[projectId].toDoList[i].priority = currentPriority;
        updateLocalStorage();}
        else if (currentPriority == 'High') {currentPriority = 'Low';
        Project.myLibrary[projectId].toDoList[i].priority = currentPriority;
        updateLocalStorage();}
        
}




//Create first instance of Project for demo, along with to do items
(function initialProject(){ 
    document.addEventListener('DOMContentLoaded',(event)=> { 
        const proj1 = new Project('Clean The Porsche 911');
        proj1.toDoItem('Detail the exterior','2023-09-10', 'Use claybar on the exterior','Medium');
        proj1.toDoItem('Clean the interior','2023-09-15', 'Stick a tree freshener in there and call it a day','Low');
    });
})();

function updateLocalStorage() {

    let myLibrary_serialized = JSON.stringify(Project.myLibrary);
    localStorage.setItem("library",myLibrary_serialized);
    //let myLibrary_deserialized = JSON.parse(localStorage.getItem("library"));
};


//Check local storage at Page start
function checkLS() {   
    let myLibrary_deserialized = JSON.parse(localStorage.getItem("library"));


    document.addEventListener("DOMContentLoaded", ()=> {
        if (myLibrary_deserialized !== null) {
            //Declare initial project library for comparison
            var todolist = myLibrary_deserialized[0].toDoList;
            var initialToDo = Project.myLibrary[0].toDoList;
            var projlength = myLibrary_deserialized.length;
            var initialProjLength = Project.myLibrary.length;
        };

        //Check that local storage MATCHES initialization (i.e nothing changed on users end)
            if (myLibrary_deserialized == null || projlength == initialProjLength && todolist.length == initialToDo.length && initialToDo[0].priority == todolist[0].priority && initialToDo[1].priority == todolist[1].priority) {console.log(true)} 
            else {
                //Set local storage item to what the user updated in previous session
                let myLibrary_redone = JSON.stringify(myLibrary_deserialized);
                localStorage.setItem("library",myLibrary_redone);

                //NEED TO PUSH local storage stuff to mylibrary
                let myLibrary_New = JSON.parse(localStorage.getItem("library"));
                console.log(myLibrary_New);

                //Check if new objects & properties are the same or have changed. Loop thru properties, if there is a change, update it in Project
                

                generatetodos();
            }
        
    })

}
checkLS();




export {Project,removeToDo,changePriority};