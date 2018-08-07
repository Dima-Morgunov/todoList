console.clear();
const getTitle = document.getElementById("title")
const getMessage = document.getElementById("message")
const button = document.querySelector('#createList')
const todolist = document.querySelector('#todolist')
class Task{
    constructor(title, message){
        this.title = title
        this.message = message
    }

}

const TasksArr = []


const randomId = (min, max) =>{
    return Math.floor(Math.random() * (max - min)) + min;
}


/*document.getElementById("createList").addEventListener("click", () => {
    const createNewTask = document.createElement("div");
    const createTaskTittle = document.createElement("h3");
    const createTaskText = document.createElement("span");
    const elementId = createNewTask.id = randomId(1,9999999);
    todolist.appendChild(createNewTask);


    console.log(elementId)

    elementId.appendChild(createTaskTittle);

})*/

const createTask = (title, message) => {
    const task = new Task(title, message)
    TasksArr.push(task)

    todolist.innerHTML = ' '

    drawTasks()


    console.log(TasksArr)
}

function drawTasks() {
    TasksArr.forEach(e => {
        let span = document.createElement('div')
        span.innerText = e.message
        todolist.appendChild(span)
    })
v
}


button.addEventListener('click', () => createTask(getTitle.value, getMessage.value))




