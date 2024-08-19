const addTaskBtn = document.getElementById('addTaskBtn');
const taskInput = document.getElementById('taskInput');
const statusSelect = document.getElementById('statusSelect');
const taskList = document.getElementById('taskList');

function addToList() {
    const text = taskInput.value.trim();
    const status = statusSelect.value;

    if (text) {
        const li = document.createElement("li");
        li.innerHTML = `
            <span class="task-text">${text}</span>
            <span class="status">${status}</span>
            <button class="delete-btn">Delete</button>
        `;
        li.querySelector('.delete-btn').onclick = () => li.remove();
        taskList.appendChild(li);
        taskInput.value = '';
    }
}


addTaskBtn.addEventListener('click', addToList);
taskInput.addEventListener('keypress', (e) => {
    if (e.key === 'Enter') addToList();
});
