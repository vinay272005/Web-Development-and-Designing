const pendingList = document.getElementById('pendingList');
const completedList = document.getElementById('completedList');

function getTimeStamp() {
  const now = new Date();
  return now.toLocaleString();
}

function addTask() {
  const input = document.getElementById('taskInput');
  const taskText = input.value.trim();
  if (!taskText) return;

  const li = createTaskElement(taskText, getTimeStamp(), false);
  pendingList.appendChild(li);
  input.value = '';
}

function createTaskElement(text, time, isCompleted) {
  const li = document.createElement('li');
  const span = document.createElement('span');
  span.innerHTML = `<strong>${text}</strong><div class="timestamp">Added: ${time}</div>`;
  
  const actions = document.createElement('div');
  actions.className = 'task-actions';

  if (!isCompleted) {
    const completeBtn = document.createElement('button');
    completeBtn.textContent = 'Done';
    completeBtn.className = 'complete';
    completeBtn.onclick = () => markAsComplete(li, text);
    actions.appendChild(completeBtn);
  }

  const editBtn = document.createElement('button');
  editBtn.textContent = 'Edit';
  editBtn.className = 'edit';
  editBtn.onclick = () => editTask(li, text, isCompleted);
  actions.appendChild(editBtn);

  const deleteBtn = document.createElement('button');
  deleteBtn.textContent = 'Delete';
  deleteBtn.className = 'delete';
  deleteBtn.onclick = () => li.remove();
  actions.appendChild(deleteBtn);

  li.appendChild(span);
  li.appendChild(actions);
  return li;
}

function markAsComplete(li, text) {
  li.remove();
  const completedTask = createTaskElement(text, getTimeStamp(), true);
  completedList.appendChild(completedTask);
}

function editTask(li, oldText, isCompleted) {
  const newText = prompt("Edit your task:", oldText);
  if (newText && newText.trim() !== '') {
    const updatedLi = createTaskElement(newText.trim(), getTimeStamp(), isCompleted);
    li.replaceWith(updatedLi);
  }
}