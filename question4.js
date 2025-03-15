
let tasks = [];


function addTask(id, name, description) {
  const newTask = { id, name, description };
  tasks.push(newTask);
  console.log("Task added:", newTask);
}

function viewTasks() {
  console.log("All tasks:");
  tasks.forEach(task => {
    console.log(`ID: ${task.id}, Name: ${task.name}, Description: ${task.description}`);
  });
}

function updateTask(id, updatedName, updatedDescription) {
  const task = tasks.find(task => task.id === id);
  if (task) {
    task.name = updatedName || task.name;
    task.description = updatedDescription || task.description;
    console.log("Task updated:", task);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}


function deleteTask(id) {
  const taskIndex = tasks.findIndex(task => task.id === id);
  if (taskIndex !== -1) {
    const deletedTask = tasks.splice(taskIndex, 1)[0];
    console.log("Task deleted:", deletedTask);
  } else {
    console.log(`Task with ID ${id} not found.`);
  }
}


addTask(1, "Buy groceries", "Milk, Bread, Eggs");
addTask(2, "Do homework", "Complete math assignment");
viewTasks();
updateTask(1, "Buy groceries and fruits", "Milk, Bread, Eggs, Apples");
viewTasks();
deleteTask(2);
viewTasks();
