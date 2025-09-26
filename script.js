document.addEventListener('DOMContentLoaded', () => {
    const taskInput = document.getElementById('task-input');
    const addTaskBtn = document.getElementById('add-task-btn');
    const taskList = document.getElementById('task-list');

    const createTaskItem = (taskText) => {
        // Create the list item element
        const listItem = document.createElement('li');
        listItem.innerHTML = `
            <span class="task-text">${taskText}</span>
            <div class="task-actions">
                <button class="delete-btn">✖</button>
            </div> 
   
        `;

        // Add event listener to the delete button
        const deleteBtn = listItem.querySelector('.delete-btn');
        deleteBtn.addEventListener('click', () => {
            listItem.remove();
        });

        // Add event listener to mark as completed (by clicking the text)
        const taskTextSpan = listItem.querySelector('.task-text');
        taskTextSpan.addEventListener('click', () => {
            listItem.classList.toggle('completed');
        });

        return listItem;
    };

    // Event listener for the "Add" button
    addTaskBtn.addEventListener('click', () => {
        const taskText = taskInput.value.trim();
        if (taskText !== '') {
            const newTaskItem = createTaskItem(taskText);
            taskList.appendChild(newTaskItem);
            taskInput.value = ''; // Clear the input field
        }
    });

    // Event listener for the Enter key on the input field
    taskInput.addEventListener('keydown', (event) => {
       if(event.key=='Enter') {
        addTaskBtn.click();
       }
    });
});