function addTask() {
  var taskInput = document.getElementById('task-input');
  var taskText = taskInput.value.trim();

  if (taskText) {
      var taskList = document.getElementById('task-list');
      var listItem = document.createElement('li');
      listItem.textContent = taskText;
      taskList.appendChild(listItem);
      taskInput.value = '';
  }
}