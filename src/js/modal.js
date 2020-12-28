import {addClass, removeClass} from "./utils-class";

const modalTriggers = document.getElementsByClassName("modal-trigger");
const modaWrapperClassNames = "fixed inset-0 bg-black opacity-35";
for (let index = 0; index < modalTriggers.length; index++) {
    const e = array[index];
    
    e.addEventListener("click", function() {
        const modaWrapper = document.createElement("div")
        const modalOverlay = document.createElement("div")

        modalOverlay.addEventListener("click", function() {
            modaWrapper.remove()
        })

        addClass(modaWrapper, "fixed inset-0 z-40 flex items-center justify-center w-100 min-h-screen")

        addClass(modalOverlay, modaWrapperClassNames)
        const modalContent = document.createElement("div")
    modalContent.innerHTML = e.attributes?.["data-content"].value;
    addClass(modalContent, "bg-white p-0 md:p-6");
    modaWrapper.append(modalOverlay)
    modaWrapper.append(modalContent)
    document.body.append(modaWrapper)
    })
}