// Make sure the element IDs match exactly with the ones in your HTML
const taskInput = document.getElementById("taskInput"); // Note: camel case in HTML
const addTaskBtn = document.getElementById("addTaskBtn");
const taskList = document.getElementById("taskList");
const clearCompletedBtn = document.getElementById("clearCompletedBtn");

let tasks = []; // Initialize tasks array

function addTask() {
    // Get the trimmed value from the input
    const taskText = taskInput.value.trim();

    if (taskText !== "") {
        // Push a new task object to the tasks array
        tasks.push({ text: taskText, completed: false });

        // Clear the input after adding a task
        taskInput.value = ""; 
        
        // Update the displayed task list
        displayTasks();
    }
}

function displayTasks() {
    // Clear the current task list in the DOM
    taskList.innerHTML = "";

    // Loop through tasks and create a list item for each
    tasks.forEach((task, index) => {
        const li = document.createElement("li");
        
        // Create the checkbox and label, and check if the task is completed
        li.innerHTML = `
            <input type="checkbox" id="task-${index}" ${task.completed ? "checked" : ""}>
            <label for="task-${index}">${task.text}</label>
        `;
        
        // Add an event listener to toggle task completion
        li.querySelector("input").addEventListener("change", () => toggleTask(index));
        
        // Append the list item to the task list
        taskList.appendChild(li);
    });
}

function toggleTask(index) {
    // Toggle the 'completed' status of the task
    tasks[index].completed = !tasks[index].completed;
    
    // Re-display the updated task list
    displayTasks();
}

function clearCompletedTasks() {
    // Filter out completed tasks
    tasks = tasks.filter(task => !task.completed);
    
    // Re-display the remaining tasks
    displayTasks();
}

function clearAllTasks (){
    tasks = []; // clears the tasks array
    displayTasks(); //update the tasks list
}

// Add event listeners for adding tasks and clearing completed tasks
addTaskBtn.addEventListener("click", addTask);
clearCompletedBtn.addEventListener("click", clearCompletedTasks);
clearAllbtn.addEventListener("click", clearAllTasks);
displayTasks();