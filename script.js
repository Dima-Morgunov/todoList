console.clear();
const getTitle = document.getElementById("title")
const getMessage = document.getElementById("message")
const button = document.getElementById('createList')
const todolist = document.getElementById('todolist')
class Task{
    constructor(title, message, randomId){
        this.title = title
        this.message = message
        this.todoId = randomId
    }
}

let TasksArr = []


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
    const task = new Task(title, message, randomId(1, 999999))
    TasksArr.push(task)

    todolist.innerHTML = ' '

    drawTasks()

    console.log(TasksArr)
}

function deleteTask(id) {


    //noinspection JSAnnotator
    TasksArr = TasksArr.filter(function(e) {
        return e.todoId != id
    })



    todolist.innerHTML = ' '

    drawTasks()
    console.log(TasksArr)


    console.log(id)
}

function drawTasks() {
    TasksArr.forEach(e => {
        let span = document.createElement('div')
        let drawTodoTitle = document.createElement("h3")
        let deleteTodo = document.createElement("button")

        span.innerText = e.message
        drawTodoTitle.innerText = e.title
        deleteTodo.addEventListener('click', ()=> deleteTask(e.todoId))

        todolist.appendChild(drawTodoTitle)
        todolist.appendChild(span)
        todolist.appendChild(deleteTodo)
    })
}


button.addEventListener('click', () => createTask(getTitle.value, getMessage.value))




