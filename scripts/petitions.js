const API_URL = "https://my-json-server.typicode.com/joeypy/Table-Scrum/tasks";
// const API_URL = "https://my-json-server.typicode.com/edteamlat/simplescrum/tasks";

axios.get(API_URL)
    .then( resp => {
        fillTasks(resp.data);
        randomColors();
    })
    .catch( err => console.log(err));

function fillTasks(data) {
    data.map( d => {
        let newTask = document.createElement('article');
        newTask.classList.add("task");
        let taskTitle = document.createElement('h3');
        taskTitle.innerText = d.title;

        let taskPerson = document.createElement('p');
        taskPerson.innerHTML = `<span>Responsable:</span> ${d.person}`;

        let taskDeadLine = document.createElement('p');
        taskDeadLine.innerHTML = `<span>Entrega:</span> ${unixToDate(d.deadline)}`;

        newTask.appendChild(taskTitle);
        newTask.appendChild(taskPerson);
        newTask.appendChild(taskDeadLine);

        let columnTodo = document.getElementById("todoTasks");
        let columnInProgress = document.getElementById("progressTasks");
        let columnDone = document.getElementById("doneTasks");

        if(d.state === "to-do"){
            columnTodo.appendChild(newTask);
        }
        if(d.state === "in-progress"){
            columnInProgress.appendChild(newTask);
        }
        if(d.state === "done"){
            columnDone.appendChild(newTask);
        }

    });
}

