const API_URL = "https://my-json-server.typicode.com/joeypy/Table-Scrum/task";

axios.get(API_URL)
    .then( resp => fillTasks(resp.data))
    .catch( err => console.log(err));

function fillTasks(data) {
    data.map( d => {
        let newTask = document.createElement('article');
        let taskTitle = document.createElement('h3');
        taskTitle.innerText = d.title;

        let taskPerson = document.createElement('p');
        taskPerson.innerHTML = `<span>Responsable:</span> ${d.person}`;

        let taskDeadLine = document.createElement('p');
        taskDeadLine.innerHTML = `<span>Plazo:</span> ${d.deadLine}`;

        newTask.appendChild(taskTitle);
        newTask.appendChild(taskPerson);
        newTask.appendChild(taskDeadLine);

        let column = document.getElementById("doneTasks");
        column.appendChild(newTask);
    });
}