function addTask() {
    const taskInput = document.getElementById("taskInput");
  
    const taskText = taskInput.value.trim();
  
    if (taskText !== "") {
      const task = document.createElement("div");
  
      task.classList.add(
        "task",
        "border-2",
        "border-blue-500",
        "p-4",
        "rounded-md",
        "flex",
        "justify-between",
        "items-start",
        "cursor-pointer"
      );
  
      task.setAttribute("id", "task-" + new Date().getTime()); //Task ko unique id assign kar rhe hai
      task.setAttribute("draggable", "true"); // task ko draggable bana k liye
      task.setAttribute("ondragstart", "drag(event)"); // task ko drag
  
      const taskContent = document.createElement("span");
      taskContent.classList.add("task-content", "text-white", "max-w-[80%]");
      taskContent.textContent = taskText; // input se aaya text ko display karane ke liye
      task.appendChild(taskContent); // task k andar content ko add kar rhe hai
  
      // Delete button
      const deleteButton = document.createElement("button");
      deleteButton.textContent = "X";
      deleteButton.classList.add(
        "delete-button",
        "text-white",
        "bg-red-500",
        "px-2",
        "py-1",
        "rounded-md",
        "ml-2"
      );
  
      // delete button click hone pe element remove karne ke liye
      deleteButton.addEventListener("click", function () {
        task.remove();
      });
      task.appendChild(deleteButton);
  
      document.getElementById("todo-list").appendChild(task);
  
      // Clear the input field
      taskInput.value = "";
    }
  }
  
  function drag(event) {
    // Make sure we're getting the correct task id
    event.dataTransfer.setData("text", event.target.closest(".task").id);
  }
  
  function allowDrop(event) {
    event.preventDefault();
    event.stopPropagation();
  }
  
  function drop(event) {
    event.preventDefault();
    event.stopPropagation();
    console.log("event.target.id:", event.target.id);
  
    const targetColumn = event.target;
  
    // Ensure it's a valid drop area
    if (targetColumn.id === "todo" || targetColumn.id === "inprogress" || targetColumn.id === "done" || targetColumn.id === "backlog") {
      const taskId = event.dataTransfer.getData("text");
      const draggedTask = document.getElementById(taskId);
  
      if (draggedTask) {
        // Update the task's border color based on where it's dropped
        if (targetColumn.id === "todo") {
          draggedTask.classList.remove("border-red-500", "border-yellow-500", "border-green-500");
          draggedTask.classList.add("border-blue-500");
        } else if (targetColumn.id === "inprogress") {
          draggedTask.classList.remove("border-blue-500", "border-green-500", "border-red-500");
          draggedTask.classList.add("border-yellow-500");
        } else if (targetColumn.id === "done") {
          draggedTask.classList.remove("border-yellow-500", "border-blue-500", "border-red-500");
          draggedTask.classList.add("border-green-500");
        } else if (targetColumn.id === "backlog") {
          draggedTask.classList.remove("border-green-500", "border-blue-500", "border-yellow-500");
          draggedTask.classList.add("border-red-500");
        }
  
        targetColumn.appendChild(draggedTask);
      }
    }
  }
  
  // Add event listeners for dragover and drop
  document.getElementById("todo").addEventListener("dragover", allowDrop);
  document.getElementById("inprogress").addEventListener("dragover", allowDrop);
  document.getElementById("done").addEventListener("dragover", allowDrop);
  document.getElementById("backlog").addEventListener("dragover", allowDrop);
  
  document.getElementById("todo").addEventListener("drop", drop);
  document.getElementById("inprogress").addEventListener("drop", drop);
  document.getElementById("done").addEventListener("drop", drop);
  document.getElementById("backlog").addEventListener("drop", drop);
  