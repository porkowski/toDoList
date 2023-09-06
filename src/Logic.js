import {addProjectToDom} from "./index.js";
import {addItemToDom} from "./index.js";


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
        console.log(Project.myLibrary);
}

function addItem(item) {
        this.toDoList.push(item);
        let addToDom = addItemToDom.bind(this);
        addToDom(item);
}



//Create first instance of Project for demo, along with to do items
(function initialProject(){ 
    document.addEventListener('DOMContentLoaded',(event)=> { 
        const proj1 = new Project('Clean The Porsche 911');
        proj1.toDoItem('Detail the exterior','2023-09-10', 'Use claybar on the exterior','Medium');
        proj1.toDoItem('Clean the interior','2023-09-15', 'Stick a tree freshener in there and call it a day','Low');
    });
})();

function removeToDo(projectId,i) {
    //splice the specific to do out of the library. 
    Project.myLibrary[projectId].toDoList.splice(i,1);

}

function changePriority(projectId,i) {
    let currentPriority = Project.myLibrary[projectId].toDoList[i].priority;
    //Toggle priority switch
        if (currentPriority == 'Low') {currentPriority = 'Medium';
        Project.myLibrary[projectId].toDoList[i].priority = currentPriority;} 
        else if (currentPriority == 'Medium') {currentPriority = 'High';
        Project.myLibrary[projectId].toDoList[i].priority = currentPriority;}
        else if (currentPriority == 'High') {currentPriority = 'Low';
        Project.myLibrary[projectId].toDoList[i].priority = currentPriority;}
        

}


export {Project,removeToDo,changePriority};