
import './style.css';
import {Project} from './Logic.js';
import {removeToDo} from './Logic.js';
import {changePriority} from './Logic.js';

function grid() {
    const element = document.createElement('div');
    element.setAttribute('id','MainGrid');

    const banner = document.createElement('div');
    banner.setAttribute('class','banner');
    banner.textContent = 'To Do List';
    element.appendChild(banner);

    const leftRow = document.createElement('div');
    leftRow.setAttribute('class','griditem1');
    element.appendChild(leftRow);

    const main = document.createElement('div');
    main.setAttribute('class','griditem2');
    element.appendChild(main);

    return element
}

function projectList() {
    const element = document.createElement('ul');
    element.setAttribute('class','projects');

    return element
}

function addNewProjBtn() {
    const element = document.createElement('button');
    element.textContent= 'Add Project';
    element.setAttribute('id','addbtn');

    return element
}

function addNewToDoBtn() {
    const element = document.createElement('button');
    element.textContent= 'Add New To Do';
    element.setAttribute('id','todobtn');

    return element
}

function toDoList() {
    const element = document.createElement('ul');
    element.setAttribute('class','todos');

    return element
}

const body = document.body;
body.appendChild(grid());
const banner = document.querySelector('.griditem1');
banner.appendChild(projectList());
const ul = document.querySelector('.projects');
const rightSide = document.querySelector('.griditem2');
rightSide.appendChild(toDoList());
const leftSide = document.querySelector('.griditem1');
const submitBtn = document.querySelector('#submitButton');
const pform = document.querySelector('#projectForm');
const tform = document.querySelector('#toDoForm');
const radios = document.getElementsByName("priority");



//Remove project form from body, append to left column
body.removeChild(pform);
leftSide.appendChild(pform);

//Remove todo form from body, append to right column
body.removeChild(tform);
rightSide.appendChild(tform);

rightSide.appendChild(addNewToDoBtn());


leftSide.appendChild(addNewProjBtn());
const ul2 = document.querySelector('.todos');

//Initialize project id variable. used to determine which project the to do items are based off.
let projectId = '0';




function addProjectToDom(index) {
        const project = document.createElement('li');
        project.setAttribute('id',`${index}`);
        project.setAttribute('class',`project`);
        project.textContent = this.projectTitle;
        ul.appendChild(project);
    }


function addItemToDom(item) {
    const todoitem = document.createElement('li');
    todoitem.setAttribute('class',`todoitem`)
    if (`${item.dueDate}` == 'undefined') {
        todoitem.textContent = `${item.title}`;   
    } else {
        todoitem.textContent = `${item.title} due by ${item.dueDate}`;
    };
    ul2.appendChild(todoitem);
}


function clearToDos() {
    const list = document.querySelectorAll('.todoitem');
    list.forEach((listitem)=> {
        listitem.remove();
    })
}

(function expandProject() {
    document.addEventListener("click", (event) => {
        const target = event.target;
        if (target.getAttribute("class") == 'project') {
            projectId = target.id;
            generatetodos();
        }
    })
})();

function generatetodos() {
    const projList = Project.myLibrary[projectId].toDoList;

    //Clear rightside of current to do items in preparation for this projects.
    clearToDos();
    
    //Add current projects todos to right side of screen
    projList.forEach((object)=> {
        addItemToDom(object);
    })
}

(function toDoListener() {
    document.addEventListener("click", (event) => {
        const target =event.target;
        const li = document.querySelectorAll('.todoitem');

        if (target.getAttribute("class") == 'todoitem') {
            const project = Project.myLibrary[projectId].toDoList[findIndex(li,target)];
            if (target.getAttribute('id') !== 'expanded') {
                expandToDo(target,project);
            } else if (target.getAttribute('id') == 'expanded') {
                minimizeToDo(target,project);
                target.setAttribute('id','')

            }
        }
    })
})();

function findIndex(li,target) {
    for (let i=0; i<li.length;i++) {
        if (li[i] == target) {
            return i
        }
    }
}

function expandToDo(target,project) {

    for (const key in project) {
        const projectKey = document.createElement("li");
        projectKey.textContent = `${key.charAt(0).toUpperCase() + key.slice(1)}: ${project[key]}`;
        target.appendChild(projectKey);
        target.setAttribute('id','expanded');
    }

        //Create 'completed'/remove button and priority changer
        const remove = document.createElement('button');
        remove.setAttribute('class','removebtn');
        target.appendChild(remove);
        const prioritys = document.createElement('button');
        prioritys.setAttribute('class','prioritychanger');
        target.appendChild(prioritys);
    
}

function minimizeToDo(target,project) {
    //Get length of object to determine how many children to remove from DOM
    const objectlength = Object.keys(project).length;
    //Remove child nodes for many ever properties the object has. Continue iterating until objectlength+2 to compensate for the added buttons
    for (let i=1;i<=objectlength+2;i++) {
       target.childNodes[1].remove()
    }
}

(function addButtonListener() {
    document.addEventListener(("click"), (event)=> {
        if (event.target.id == 'addbtn') {
            pform.setAttribute('class','formDisplay');
    
    }}
    )
})();

(function addToDoListener() {
    document.addEventListener(("click"), (event)=> {
        if (event.target.id == 'todobtn') {
            tform.setAttribute('class','formDisplay');    
        }})
})();

//Function to add new project upon submit
function handleForm(event) {
    //prevent default to stop page from refreshing upon submit
    event.preventDefault();
    new Project(project_title.value);
    pform.setAttribute('class','formHidden');
    project_title.value='';

};

function handleTForm(event) {
    let radioChoice ='';

    event.preventDefault();
    //Grab key values from DOM search box.
         const ttitle = title.value;
         const tdueDate = dueDate.value;
         const tdescription = description.value;
         radios.forEach(radio => {
            if (radio.checked) {radioChoice = radio.value};
        })
    

    const currentProject = Project.myLibrary[projectId];
    //From ES6 module on Logic.js, add to do item to array and DOM
    currentProject.toDoItem(ttitle,tdueDate,tdescription,radioChoice);

    //hide todoform upon submission and clear values
    tform.setAttribute('class','formHidden');
    title.value= '';
    dueDate.value= '';
    description.value= '';
    radios.forEach(radio => {
        if (radio.value == 'Medium') {radio.checked=true};
    })
}


pform.addEventListener("submit",handleForm);
tform.addEventListener("submit",handleTForm);

(function BtnListener() {
    document.addEventListener('mouseup',(event) => {
        if (event.target.getAttribute('class') == 'removebtn') {
            const li = document.querySelectorAll('.todoitem');
            const target = event.target.parentElement;
            const i = findIndex(li,target);
            removeToDo(projectId,i);

            //Refresh right side of page with current todo's.
            generatetodos();

        } else if (event.target.getAttribute('class') == 'prioritychanger') {
            const li = document.querySelectorAll('.todoitem');
            const target = event.target.parentElement;
            const i = findIndex(li,target);
            changePriority(projectId,i);

            //Refresh right side of page with current todo's.
            generatetodos();

        }
    })
})();

export {addProjectToDom, addItemToDom}

