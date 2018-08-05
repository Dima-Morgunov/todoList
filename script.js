console.clear();
const getTitle = document.getElementById("title")
const getMessage = document.getElementById("message")
class Task{
    constructor(){
        this.title = "text"
        this.message = "message"
    }

}


document.getElementById("createList").addEventListener("click", () => {
    const createNewTask = document.createElement("div");
    const createTaskTittle = document.createElement("h3");
    const createTaskText = document.createElement("span");
    const elementId = createNewTask.id = randomId(1,9999999);
    todolist.appendChild(createNewTask);


    elementId.appendChild(createTaskTittle);
    console.log(elementId)
})


const randomId = (min, max) =>{
        return Math.floor(Math.random() * (max - min)) + min;
}
