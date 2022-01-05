import { HtmlStructure } from './html_creation/main_html';
import { ModalStructure } from './html_creation/modal_html';
import { TaskManager, Task } from './task_class/task_class';
import { ModalEditStructure } from './html_creation/edit-modal';
import '../style/style.css';

(function () {
  class MainPage {
    init() {
      this.cacheDom();
      this.htmlStructureCreation();
      this.bindEvents();
      this.taskManager.objectsToTasks();
      this.taskManager.todayTasksToHtml(this.htmlStructure.createContentBodyCont);
      this.editButBinder();
      this.updateTodayTaskNumber();
      this.updateNextTaskNumber();
      this.updateOldTaskNumber();
      console.log(window.localStorage);
    }

    cacheDom() {
      this.mainContentDiv = document.querySelector('#content');
      this.modalContentDiv = document.querySelector('#modal');
      this.modalEditDiv = document.querySelector('#edit-modal');
      this.menuButtons = document.querySelectorAll('.menu-but');
    }

    htmlStructureCreation() {
      this.htmlStructure = new HtmlStructure(this.mainContentDiv);
      this.modalStructure = new ModalStructure(this.modalContentDiv);
      this.editModalStructure = new ModalEditStructure(this.modalEditDiv);
      this.taskManager = new TaskManager();
      this.modalStructure.init();
      this.htmlStructure.init();
      this.editModalStructure.init();
    }

    bindEvents() {
      this.htmlStructure.createAddButtonCont.onclick = () => {
        this.modalContentDiv.style.display = 'flex';
      };

      this.modalStructure.createCloseBut.onclick = () => {
        this.modalContentDiv.style.display = 'none';
      };
      this.editModalStructure.createCloseBut.onclick = () => {
        this.modalContentDiv.style.display = 'none';
      };
      this.modalStructure.createSubmitBut.onclick = () => {
        this.addTask();
        this.updateNextTaskNumber();
        this.updateTodayTaskNumber();
        this.updateOldTaskNumber();
        this.inputsInnerHtlmSetter('', '', '', '');
        this.modalContentDiv.style.display = 'none';
        this.taskManager.storageUpdate();
      };
      this.editModalStructure.createSaveBut.onclick = () => {
        const thisTask = this.taskManager.tasks.find((element) => element.code === this.editModalStructure.createCodeValue.value);
        thisTask.name = this.editModalStructure.createNameInput.value;
        thisTask.description = this.editModalStructure.createDescriptionInput.value;
        thisTask.date = new Date(this.editModalStructure.createDateInput.value);
        thisTask.priority = this.editModalStructure.createDlInput.value;
        thisTask.formatedDate = `${thisTask.date.getFullYear()}-${thisTask.date.getMonth() + 1}-${thisTask.date.getDate()}`;
        thisTask.editFormatedDate = `${thisTask.date.getFullYear()}/${thisTask.date.getMonth() + 1}/${thisTask.date.getDate()}`;
        thisTask.priorityNum = this.taskManager.createTaskPriorityNum(thisTask.priority);
        this.taskManager.todayTasksToHtml(this.htmlStructure.createContentBodyCont);
        this.editInputsInnerHtlmSetter('', '', '', '', '');
        this.modalEditDiv.style.display = 'none';
        this.updateNextTaskNumber();
        this.updateTodayTaskNumber();
        this.updateOldTaskNumber();
        this.clickedOptionErrase();
        this.taskManager.storageUpdate();
      };
      this.clickedOption();
    }

    addTask() {
      this.htmlStructure.createTextToday.classList.add('menu-but-clicked');
      this.taskManager.addTask(
        new Task(
          this.modalStructure.createNameInput.value,
          this.modalStructure.createDateInput.value,
          this.modalStructure.createDescriptionInput.value,
          this.modalStructure.createDlInput.value,
          this.taskManager.createTaskPriorityNum(this.modalStructure.createDlInput.value),
          this.taskManager.tasks.length,
        ),
        this.taskManager.tasks,
      );
      this.taskManager.todayTasksToHtml(this.htmlStructure.createContentBodyCont);
    }

    updateTodayTaskNumber() {
      this.htmlStructure.createNumberToday.innerHTML = this.taskManager.todayTasks(this.htmlStructure.createFormatedTime);
    }

    updateNextTaskNumber() {
      this.htmlStructure.createNumberNextDays.innerHTML = this.taskManager.upNextTasks(this.htmlStructure.createFormatedTime);
    }

    updateOldTaskNumber() {
      this.htmlStructure.createNumberOldDays.innerHTML = this.taskManager.oldTasks(this.htmlStructure.createFormatedTime);
    }

    clickedStyleErrase() {
      const menuButtons = document.querySelectorAll('.menu-but');
      menuButtons.forEach((button) => {
        button.classList.remove('menu-but-clicked');
      });
    }

    clickedOptionErrase() {
      this.clickedStyleErrase;
      this.htmlStructure.createContentBodyCont.innerHTML = '';
    }

    inputsInnerHtlmSetter(name, description, date, priority) {
      this.modalStructure.createNameInput.value = name;
      this.modalStructure.createDescriptionInput.value = description;
      this.modalStructure.createDateInput.value = date;
      this.modalStructure.createDlInput.value = priority;
    }

    editInputsInnerHtlmSetter(name, description, date, priority, code) {
      this.editModalStructure.createNameInput.value = name;
      this.editModalStructure.createDescriptionInput.value = description;
      this.editModalStructure.createDateInput.value = date;
      this.editModalStructure.createDlInput.value = priority;
      this.editModalStructure.createCodeValue.innerHTML = code;
    }

    editButBinder() {
      const editIcons = document.querySelectorAll('.task-edit');
      editIcons.forEach((icon) => {
        icon.addEventListener('click', () => {
          this.modalEditDiv.style.display = 'flex';
          const thisTask = this.taskManager.tasks.find((element) => element.name === icon.parentElement.parentElement.id);
          this.editInputsInnerHtlmSetter(thisTask.name, thisTask.description, thisTask.editFormatedDate, thisTask.priority, thisTask.number);
        });
      });
    }

    clickedOption() {
      const menuButtons = document.querySelectorAll('.menu-but');
      menuButtons.forEach((button) => {
        button.addEventListener('click', () => {
          this.clickedStyleErrase();
          this.htmlStructure.createContentBodyCont.innerHTML = '';
          button.classList.add('menu-but-clicked');
          if (button.id === 'today-but') {
            this.taskManager.todayTasksToHtml(this.htmlStructure.createContentBodyCont);
            this.editButBinder();
          } else if (button.id === 'next-but') {
            this.taskManager.nextDaysTasksToHtml(this.htmlStructure.createContentBodyCont);
            this.editButBinder();
          } else if (button.id === 'old-but') {
            this.taskManager.oldTasksToHtml(this.htmlStructure.createContentBodyCont);
            this.editButBinder();
          }
        });
      });
    }
  }

  const restaurantPage = new MainPage();
  restaurantPage.init();
}());
