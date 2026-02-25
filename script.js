function addTask() {
    const taskInput = document.getElementById("taskInput");
    const taskDate = document.getElementById("taskDate");
    const taskTime = document.getElementById("taskTime");
    const taskList = document.getElementById("taskList");

    if (taskInput.value === "") {
        alert("Please enter a task!");
        return;
    }

    const li = document.createElement("li");

    const taskInfo = document.createElement("div");
    taskInfo.classList.add("task-info");
    taskInfo.innerHTML = `
        <strong>${taskInput.value}</strong><br>
        <small>${taskDate.value} ${taskTime.value}</small>
    `;

    const buttonDiv = document.createElement("div");
    buttonDiv.classList.add("task-buttons");

    const completeBtn = document.createElement("button");
    completeBtn.innerText = "✔";
    completeBtn.onclick = function () {
        taskInfo.classList.toggle("completed");
    };

    const editBtn = document.createElement("button");
    editBtn.innerText = "✏";
    editBtn.onclick = function () {
        const newTask = prompt("Edit task:", taskInput.value);
        if (newTask !== null) {
            taskInfo.innerHTML = `
                <strong>${newTask}</strong><br>
                <small>${taskDate.value} ${taskTime.value}</small>
            `;
        }
    };

    const deleteBtn = document.createElement("button");
    deleteBtn.innerText = "🗑";
    deleteBtn.classList.add("delete");
    deleteBtn.onclick = function () {
        li.remove();
    };

    buttonDiv.appendChild(completeBtn);
    buttonDiv.appendChild(editBtn);
    buttonDiv.appendChild(deleteBtn);

    li.appendChild(taskInfo);
    li.appendChild(buttonDiv);

    taskList.appendChild(li);

    taskInput.value = "";
    taskDate.value = "";
    taskTime.value = "";
}