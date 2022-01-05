export {HtmlStructure}
import emptyCal from "../../assets/empty_cal.png"
import fullCal from "../../assets/full_cal.png"
import expiredIcon from "../../assets/expired.png"


    class HtmlStructure{
        
        constructor(div){
            this.div = div
        }

        init(){
            this.creator()
            this.elementNamer()
            this.innerHtmlSet()
            this.imgUrlSet()
            this.itemAppender()
        }

        creator(){
            this.createTime = new Date()
            this.createFormatedTime = `${this.createTime.getFullYear()}-${this.createTime.getMonth()+1}-${this.createTime.getDate()}`
            this.createTextTime = document.createElement("div");
            this.createAppCont = document.createElement("div");
            this.createEmptyHeaderCont = document.createElement("div");
            this.createContentHeaderCont = document.createElement("div");
            this.createMenuBodyCont = document.createElement("div");
            this.createContentBodyCont = document.createElement("div");
            this.createBodyCont = document.createElement("div");
            this.createMenuPrimerRenglonCont = document.createElement("div")
            this.createMenuSegundoRenglonCont = document.createElement("div")
            this.createMenuTercerRenglonCont = document.createElement("div")
            this.createAddButtonCont = document.createElement("div")
            this.createTextPlus = document.createElement("div")
            this.createTextAdd = document.createElement("div")
            this.createTextToday = document.createElement("div");
            this.createTextNextDays = document.createElement("div");
            this.createTextOldDays = document.createElement("div");
            this.createNumberToday = document.createElement("div");
            this.createNumberNextDays = document.createElement("div");
            this.createNumberOldDays = document.createElement("div");
            this.createEmptyCalImage = document.createElement("img")
            this.createFullCalImage = document.createElement("img") 
            this.createExpiredImage = document.createElement("img") 
        }

        elementNamer(){
            this.createTextTime.className = "text-time"
            this.createAppCont.className = "app-cont";
            this.createEmptyHeaderCont.className = "empty-header-cont";
            this.createContentHeaderCont.className = "content-header-cont";
            this.createBodyCont.className = "body-cont";
            this.createContentBodyCont.className = "content-body-cont"
            this.createMenuBodyCont.className = "menu-body-cont"
            this.createMenuPrimerRenglonCont.className = "menu-line"
            this.createMenuSegundoRenglonCont.className = "menu-line"
            this.createMenuTercerRenglonCont.className = "menu-line"
            this.menuButtons = document.querySelectorAll(".menu-but");
            this.createTextToday.className = "menu-but"
            this.createTextNextDays.className = "menu-but"
            this.createTextOldDays.className = "menu-but"
            this.createTextToday.id = "today-but"
            this.createTextNextDays.id = "next-but"
            this.createTextOldDays.id= "old-but"
            this.createNumberToday.className = "notif-num"
            this.createNumberNextDays.className = "notif-num"
            this.createNumberOldDays.className = "notif-num"
            this.createEmptyCalImage.className = "menu-image"
            this.createFullCalImage.className = "menu-image"
            this.createExpiredImage.className = "menu-image"
            this.createTextPlus.className = "plus-but"
            this.createTextAdd.className = "add-but"
            this.createAddButtonCont.className = "add-button-cont"
        }

        innerHtmlSet(){
            this.createTextToday.classList.add("menu-but-clicked")
            this.createTextTime.innerHTML = `${this.createFormatedTime}`
            this.createTextPlus.innerHTML = "+"
            this.createTextAdd.innerHTML = "New task"
            this.createTextToday.innerHTML = "Today"
            this.createTextNextDays.innerHTML = "Up next"
            this.createTextOldDays.innerHTML = "Expired"
            this.createNumberToday.innerHTML = "0"
            this.createNumberNextDays.innerHTML = "0"
            this.createNumberOldDays.innerHTML = "0"
        }

        imgUrlSet(){
            this.createEmptyCalImage.src = emptyCal
            this.createFullCalImage.src = fullCal
            this.createExpiredImage.src = expiredIcon
        }

        itemAppender(){

            this.createEmptyHeaderCont.appendChild(this.createTextTime)
            this.createAddButtonCont.appendChild(this.createTextAdd)
            this.createAddButtonCont.appendChild(this.createTextPlus)
            this.createContentHeaderCont.appendChild(this.createAddButtonCont)
            this.createMenuPrimerRenglonCont.appendChild(this.createEmptyCalImage)
            this.createMenuPrimerRenglonCont.appendChild(this.createTextToday)
            this.createMenuPrimerRenglonCont.appendChild(this.createNumberToday)
            this.createMenuSegundoRenglonCont.appendChild(this.createFullCalImage)
            this.createMenuSegundoRenglonCont.appendChild(this.createTextNextDays)
            this.createMenuSegundoRenglonCont.appendChild(this.createNumberNextDays)
            this.createMenuTercerRenglonCont.appendChild(this.createExpiredImage)
            this.createMenuTercerRenglonCont.appendChild(this.createTextOldDays)
            this.createMenuTercerRenglonCont.appendChild(this.createNumberOldDays)
            this.createMenuBodyCont.appendChild(this.createMenuPrimerRenglonCont)
            this.createMenuBodyCont.appendChild(this.createMenuSegundoRenglonCont)
            this.createMenuBodyCont.appendChild(this.createMenuTercerRenglonCont)
            this.createAppCont.appendChild(this.createEmptyHeaderCont)
            this.createAppCont.appendChild(this.createContentHeaderCont)
            this.createBodyCont.appendChild(this.createMenuBodyCont)
            this.createBodyCont.appendChild(this.createContentBodyCont)
            this.createAppCont.appendChild(this.createBodyCont)
            this.div.appendChild(this.createAppCont)
        }

}