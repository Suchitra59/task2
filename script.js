// FORM VALIDATION
const form = document.getElementById('contactForm');
const errorMessage = document.getElementById('error-message');

form.addEventListener('submit', function (e) {
    e.preventDefault();
    const name = document.getElementById('name').value.trim();
    const email = document.getElementById('email').value.trim();

    // Simple validations
    if (!name) {
        errorMessage.textContent = 'Name is required';
        return;
    }
    if (!email) {
        errorMessage.textContent = 'Email is required';
        return;
    }
    if (!/\S+@\S+\.\S+/.test(email)) {
        errorMessage.textContent = 'Please enter a valid email';
        return;
    }

    errorMessage.textContent = '';
    alert('Form submitted successfully!');
    form.reset();
});

// TO-DO LIST FUNCTIONALITY
const addBtn = document.getElementById('addBtn');
const taskInput = document.getElementById('taskInput');
const taskList = document.getElementById('taskList');

addBtn.addEventListener('click', function() {
    const task = taskInput.value.trim();
    if (task) {
        const li = document.createElement('li');
        li.textContent = task;

        const deleteBtn = document.createElement('button');
        deleteBtn.textContent = 'Delete';
        deleteBtn.addEventListener('click', function() {
            li.remove();
        });
        li.appendChild(deleteBtn);

        taskList.appendChild(li);
        taskInput.value = '';
    }
});
