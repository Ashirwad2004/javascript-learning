// Select DOM elements
const inputBox = document.getElementById("todo-input");
const addBtn = document.getElementById("add-button");
const list = document.getElementById("todo-list");

// Load todos from Local Storage
const saved = localStorage.getItem("todos");
const todos = saved ? JSON.parse(saved) : [];

// Save todos to Local Storage
function saveTodo() {
    localStorage.setItem("todos", JSON.stringify(todos));
}

// Create a DOM node for a todo
function createTodoNode(todo, index) {
    const li = document.createElement("li");

    // Checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;

    // Todo text
    const text = document.createElement("span");
    text.textContent = todo.text;
    text.style.margin = "0 10px";

    // Strike-through if completed
    if (todo.completed) {
        text.style.textDecoration = "line-through";
    }

    // Toggle completion
    checkbox.addEventListener("change", () => {
        todo.completed = checkbox.checked;

        text.style.textDecoration = checkbox.checked
            ? "line-through"
            : "none";

        saveTodo();
    });

    // Double-click to edit
    text.addEventListener("dblclick", () => {
        const newText = prompt("Edit todo:", todo.text);

        if (newText !== null && newText.trim() !== "") {
            todo.text = newText.trim();
            text.textContent = todo.text;
            saveTodo();
        }
    });

    // Delete button
    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";

    deleteBtn.addEventListener("click", () => {
        todos.splice(index, 1);
        saveTodo();
        render();
    });

    // Append elements
    li.appendChild(checkbox);
    li.appendChild(text);
    li.appendChild(deleteBtn);

    return li;
}

// Render all todos
function render() {
    list.innerHTML = "";

    todos.forEach((todo, index) => {
        const node = createTodoNode(todo, index);
        list.appendChild(node);
    });
}

// Add a new todo
function addTodo() {
    const text = inputBox.value.trim();

    if (!text) {
        alert("Please enter a todo!");
        return;
    }

    todos.push({
        text: text,
        completed: false
    });

    inputBox.value = "";

    saveTodo();
    render();
}

// Button click
addBtn.addEventListener("click", addTodo);

// Allow Enter key to add todo
inputBox.addEventListener("keypress", (e) => {
    if (e.key === "Enter") {
        addTodo();
    }
});

// Initial render
render();