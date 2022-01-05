export {ModalEditStructure}
import iconImg from "../../assets/notepad.png"

class ModalEditStructure{

    constructor(div){
        this.div = div
    }

    init(){
        this.creator()
        this.elementNamer()
        this.innerHtmlSetter()
        this.itemAppender()
    }

    creator(){
        this.createFormCont = document.createElement("div");
        this.createCloseBut = document.createElement("div");
        this.createIconImg = document.createElement("img");
        this.createForm = document.createElement("form");
        this.createNameInput = document.createElement("input");
        this.createDescriptionInput = document.createElement("input");
        this.createDateInput = document.createElement("input");
        this.createDataList = document.createElement("datalist");
        this.createDlInput = document.createElement("input");
        this.createFirstOption = document.createElement("option");
        this.createSecondOption = document.createElement("option");
        this.createThirdOption = document.createElement("option");
        this.createSaveBut = document.createElement("button");
        this.createCodeValue = document.createElement("div");
    }

    elementNamer(){
        this.createFormCont.className = "form-cont"
        this.createCloseBut.className  = "close-but"
        this.createIconImg.className  = "icon-img"
        this.createNameInput.className  = "name-input"
        this.createDescriptionInput.className  = "description-input"
        this.createDateInput.className  = "date-input"
        this.createDataList.id = "data-list"
        this.createForm.className  = "form"
        this.createDlInput.id  = "dl-input"
        this.createDlInput.setAttribute("list", "data-list")
        this.createSaveBut.className  = "submit-but" 
        this.createCodeValue.className  = "code-value"
    }

    innerHtmlSetter(){
        this.createCloseBut.innerHTML = "+"
        this.createIconImg.src = iconImg
        this.createDlInput.placeholder = "Priority level"
        this.createNameInput.placeholder = "Task name"
        this.createDescriptionInput.placeholder = "Task description"
        this.createDateInput.placeholder = "Date of task yyyy/mm/dd"
        this.createFirstOption.value = "Low"
        this.createSecondOption.value = "Medium"
        this.createThirdOption.value = "High"
        this.createSaveBut.innerHTML = "Save"
    }

    itemAppender(){
        this.createDataList.appendChild(this.createFirstOption)
        this.createDataList.appendChild(this.createSecondOption)
        this.createDataList.appendChild(this.createThirdOption)
        this.createDlInput.appendChild(this.createDataList)
        this.createForm.appendChild(this.createNameInput)
        this.createForm.appendChild(this.createDescriptionInput)
        this.createForm.appendChild(this.createDateInput)
        this.createFormCont.appendChild(this.createCloseBut)
        this.createFormCont.appendChild(this.createIconImg)
        this.createFormCont.appendChild(this.createForm)
        this.createFormCont.appendChild(this.createDlInput)
        this.createFormCont.appendChild(this.createSaveBut)
        this.createFormCont.appendChild(this.createCodeValue)
        this.div.appendChild(this.createFormCont)
    }

}