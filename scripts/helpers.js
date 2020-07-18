// Agrega animación de ingreso al formulario

let button = document.getElementById("newTask");
let buttonCancel = document.getElementById("cancelForm");
let form = document.getElementById("formElement");

button.addEventListener("click", () => {
    form.classList.add("active");
});

buttonCancel.addEventListener("click", () => {
    form.classList.remove("active");
});