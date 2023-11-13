const prevBtns = document.querySelectorAll('.btn-pre') // VARIABLE PARA SELECCIONAR LOS BOTONES DE ANTERIOR
const nextBtns = document.querySelectorAll(('.btn-next')) // VARIABLE PARA SELECCIONAR LOS BOTONES DE SIGUIENTE
const formSteps = document.querySelectorAll('.form-step') // VARIABLE PARA SELECCIONAR MIS 4 FORMS
const progressSteps = document.querySelectorAll('.progress-step') // VARIABLE PARA SELECCIONAR MIS 4 CIRCULOS DEL FORM

let formStepsNum = 0;

// CLICK BOTON SIGUIENTE = formStepsNum + 1, actualiza updateFormSteps y updateProgressbar
nextBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        formStepsNum++;
        updateFormSteps();
        updateProgressbar();
    })
})

// CLICK BOTON ANTERIOR = formSteps - 1, actualiza updateFormSteps y updateProgressbar
prevBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        formStepsNum--;
        updateFormSteps();
        updateProgressbar();
    })
})

// Remueve la class ACTIVE del form que queremos dejar y se lo aplica al actual
function updateFormSteps(){
    formSteps.forEach(formStep =>{
        formStep.classList.contains('active')&&
            formStep.classList.remove('active')
    })
    formSteps[formStepsNum].classList.add('active')
}

// Agrega o quita el color negro de cada círculo en mi formulario
function updateProgressbar(){
    progressSteps.forEach((progressStep, idx) => {
        if (idx  < formStepsNum + 1) {
            progressStep.classList.add('active')
        } else {
            progressStep.classList.remove('active')
        }
    })
}