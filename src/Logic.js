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
function initialProject(){ 
    document.addEventListener('DOMContentLoaded',(event)=> { 
        const proj1 = new Project('Clean The Porsche 911');
        proj1.toDoItem('Detail the exterior','2023-09-10', 'Use claybar on the exterior','Medium');
        proj1.toDoItem('Clean the interior','2023-09-15', 'Stick a tree freshener in there and call it a day','Low');
    });
};

function updateLocalStorage() {

    let myLibrary_serialized = JSON.stringify(Project.myLibrary);
    localStorage.setItem("library",myLibrary_serialized);
    //let myLibrary_deserialized = JSON.parse(localStorage.getItem("library"));
};


//Check local storage at Page start
function checkLS() {   
    //grab local storage data from refresh before DOM content loads
    let myLibrary_deserialized = JSON.parse(localStorage.getItem("library"));

    if (myLibrary_deserialized == null) {
        initialProject();
        updateLocalStorage();}
    else {
        let myLibrary_redone = JSON.stringify(myLibrary_deserialized);
        localStorage.setItem("library",myLibrary_redone);
        let myLibrary_New = JSON.parse(localStorage.getItem("library")); 

        document.addEventListener('DOMContentLoaded',(event)=> { 
            //Set local storage item to what the user updated in previous session
            checkProjects(myLibrary_New);
            checkProperties(myLibrary_New);

            //Create new Project instance if something in the properties changed

            generatetodos();
        })
    }

}
checkLS();

//Function to check what projects need to be added
function checkProjects(myLibrary_New) {

    for (let i=0;i<myLibrary_New.length;i++) {
        if (myLibrary_New[i] !==undefined && Project.myLibrary[i] ==undefined) {
                const pTitle = myLibrary_New[i].projectTitle;
                new Project(pTitle);
            }  
    }
}

//Function to check if properties in local storage have changed
function checkProperties(myLibrary_New) {

    //Loop through each project instance
     for (let y=0;y<myLibrary_New.length;y++) {
        //Check properties WITHIN a project
        let librarytodolist = myLibrary_New[y].toDoList;
        let initialtodo= Project.myLibrary[y].toDoList;

        for (let i=0;i<librarytodolist.length;i++) {
            //Check which to do items were added 
            console.log(librarytodolist[i]);
            if (librarytodolist[i] !== undefined && initialtodo[i] == undefined) {
                let currentProject = Project.myLibrary[y];
                const newvalues = Object.values(librarytodolist[i]).toString().split(',');
                let title = newvalues[0];
                let duedate = newvalues[1];
                let description = newvalues[2];
                let priority = newvalues[3];

                //Create new to do item instance
                currentProject.toDoItem(title,duedate,description,priority);

            }
        }
    }


}



export {Project,removeToDo,changePriority};