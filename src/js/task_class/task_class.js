import binImg from '../../assets/bin.png';
import editImg from '../../assets/editar.png';
import downImg from '../../assets/down.png';

export { TaskManager, Task };

class TaskManager {
  constructor() {
    this.todayDate = new Date();
  }

  tasks = [];

  addTask(task, array) {
    array.push(task);
    array.sort((a, b) => a.date - b.date);
  }

  editTask(task) {

  }

  removeTask(task, array) {
    array.splice(this.tasks.indexOf(task), 1);
  }

  todayTasksToHtml(htmlDiv) {
    this.tasks.sort((a, b) => a.formatedDate.localeCompare(b.formatedDate) || a.priorityNum - b.priorityNum);
    this.tasks.forEach((task) => {
      if (!document.getElementById(`${task.name}`) && this.formatTaskDate(task.date) === this.formatTaskDate(this.todayDate)) {
        this.htmlCreator(htmlDiv, task);
      }
    });
  }

  nextDaysTasksToHtml(htmlDiv) {
    this.tasks.sort((a, b) => a.formatedDate.localeCompare(b.formatedDate) || a.priorityNum - b.priorityNum);
    this.tasks.forEach((task) => {
      if (!document.getElementById(`${task.name}`) && this.formatTaskDate(task.date) > this.formatTaskDate(this.todayDate)) {
        this.htmlCreator(htmlDiv, task);
      }
    });
  }

  oldTasksToHtml(htmlDiv) {
    this.tasks.sort((a, b) => a.formatedDate.localeCompare(b.formatedDate) || a.priorityNum - b.priorityNum);
    this.tasks.forEach((task) => {
      if (!document.getElementById(`${task.name}`) && this.formatTaskDate(task.date) < this.formatTaskDate(this.todayDate)) {
        this.htmlCreator(htmlDiv, task);
      }
    });
  }

  todayTasks(today) {
    return this.tasks.filter((task) => task.formatedDate === today).length;
  }

  upNextTasks(today) {
    return this.tasks.filter((task) => task.formatedDate > today).length;
  }

  oldTasks(today) {
    return this.tasks.filter((task) => task.formatedDate < today).length;
  }

  createTaskPriorityNum(priority) {
    if (priority === 'Low') {
      return 3;
    }
    if (priority === 'Medium') {
      return 2;
    }
    if (priority === 'High') {
      return 1;
    }
  }

  storageUpdate() {
    localStorage.clear();
    localStorage.setItem('tasks', JSON.stringify(this.tasks));
  }

  objectsToTasks() {
    const db = JSON.parse(localStorage.getItem('tasks') || '[]');
    db.forEach((element) => {
      this.addTask(new Task(element.name, element.date, element.description, element.priority, element.completed, this.tasks.length, this.createTaskPriorityNum(element.priority)), this.tasks);
    });
  }

  formatTaskDate(date) {
    return `${date.getFullYear()}-${date.getMonth() + 1}-${date.getDate()}`;
  }

  htmlCreator(htmlDiv, task) {
    const taskDiv = document.createElement('div');
    const primaryTaskDiv = document.createElement('div');
    const taskExpandDiv = document.createElement('div');
    const taskOptionsDiv = document.createElement('div');
    const primaryTaskTextDiv = document.createElement('div');

    taskDiv.className = 'task';
    primaryTaskDiv.className = 'task-primary';
    primaryTaskTextDiv.className = 'task-primary-text';
    taskOptionsDiv.className = 'task-options';
    taskExpandDiv.className = 'task-expand';
    primaryTaskDiv.id = `${task.name}`;

    primaryTaskTextDiv.innerHTML = `
            <div class="task-name">${task.name}</div>
            <div class="task-date">${this.formatTaskDate(task.date)}</div>
        `;
    taskOptionsDiv.innerHTML = `
            <img src=${binImg} class="task-remove">
            <img src=${editImg} class="task-edit">
            <img src=${downImg} class="task-expand-icon">
        `;
    taskExpandDiv.innerHTML = `
            <div class="task-description">About the task: ${task.description}</div>
            <div class="task-priority">Task priority: ${task.priority}</div>
        `;
    if (task.priority === 'Low') {
      taskDiv.style.backgroundColor = 'rgb(205, 255, 126)';
    } else if (task.priority === 'Medium') {
      taskDiv.style.backgroundColor = 'rgb(255, 253, 138)';
    } else if (task.priority === 'High') {
      taskDiv.style.backgroundColor = 'rgb(255, 136, 136)';
    }
    primaryTaskDiv.appendChild(primaryTaskTextDiv);
    primaryTaskDiv.appendChild(taskOptionsDiv);
    taskDiv.appendChild(primaryTaskDiv);
    taskDiv.appendChild(taskExpandDiv);
    htmlDiv.appendChild(taskDiv);
    this.eventBinder(taskDiv);
  }

  eventBinder(taskDiv) {
    taskDiv.querySelector('.task-remove').addEventListener('click', () => {
      taskDiv.remove();
      this.removeTask(taskDiv.id, this.tasks);
    });
    taskDiv.querySelector('.task-expand-icon').addEventListener('click', () => {
      taskDiv.querySelector('.task-expand').classList.toggle('task-expand-show');
    });
  }
}

class Task {
  constructor(name, date, description, priority, priorityNum, number) {
    this.name = name;
    this.date = new Date(date);
    this.formatedDate = `${this.date.getFullYear()}-${this.date.getMonth() + 1}-${this.date.getDate()}`;
    this.editFormatedDate = `${this.date.getFullYear()}/${this.date.getMonth() + 1}/${this.date.getDate()}`;
    this.description = description;
    this.priority = priority;
    this.priorityNum = priorityNum;
    this.done = false;
    this.number = number;
  }
}
