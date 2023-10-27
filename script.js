function addTask() {
    var taskInput = document.getElementById("task");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        taskItem.appendChild(checkbox);
        taskItem.appendChild(document.createTextNode(taskText));
        taskList.appendChild(taskItem);
        taskInput.value = "";
    }
}

function addTask() {
    var taskInput = document.getElementById("task");
    var taskList = document.getElementById("taskList");
    var taskText = taskInput.value.trim();

    if (taskText !== "") {
        var taskItem = document.createElement("li");
        var checkbox = document.createElement("input");
        checkbox.type = "checkbox";
        taskItem.appendChild(checkbox);
        taskItem.appendChild(document.createTextNode(taskText));
        taskList.appendChild(taskItem);
        taskInput.value = "";

        checkbox.addEventListener("change", updateTaskCount);
    }
}

function updateTaskCount() {
    var checkboxes = document.querySelectorAll("input[type=checkbox]");
    var completedCount = 0;

    for (var i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            completedCount++;
        }
    }

    var totalCount = checkboxes.length;

    var taskCount = document.getElementById("taskCount");
    taskCount.textContent = `${completedCount}/${totalCount} fullført`;
}