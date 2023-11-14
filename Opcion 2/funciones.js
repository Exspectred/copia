document.addEventListener("DOMContentLoaded", () => {
    var buttonNext = document.getElementById("main__btn--next");
    var buttonBack = document.getElementById("main__btn--back");
    var containerMain = document.querySelector(".hero__main");
    var sections = containerMain.querySelectorAll("section");
    var btnLondon = document.getElementById("btnLondon");
    var btnPink = document.getElementById("btnPink");
    var btnBlanc = document.getElementById("btnBlanc");
    

    
  

    var currentSectionIndex = 0;

    // Función para mostrar la sección actual
    function showCurrentSection() {
        sections.forEach((section, index) => {
            if (index === currentSectionIndex) {
                section.classList.add("active");
                section.classList.remove("hidden");
            } else {
                section.classList.remove("active");
                section.classList.add("hidden");
            }
        });

        // Funcion para los botones de navegación
        btnLondon.classList.remove("selected");
        btnPink.classList.remove("selected");
        btnBlanc.classList.remove("selected");

        if (currentSectionIndex === 0) {
            btnLondon.classList.add("selected");    
        } else if (currentSectionIndex === 2) {
            btnBlanc.classList.add("selected");
            btnLondon.classList.remove("selected");
        } else if (currentSectionIndex === 1) {
            btnPink.classList.add("selected");
        }

       
    }

    // Funcion para avanzar 
    buttonNext.addEventListener("click", () => {
        currentSectionIndex = (currentSectionIndex + 1) % sections.length;
        showCurrentSection();
    });

    // Funcion para retroceder 
    buttonBack.addEventListener("click", () => {
        currentSectionIndex = (currentSectionIndex - 1 + sections.length) % sections.length;
        showCurrentSection();
    });

    // Funcion para abrir y cerrar contacto

    const contactForm = document.getElementById("contact");
    const contactCloseBtn = document.getElementById("contactClose");
    const contactLink = document.querySelector(".nav__link[href='#contact']");

    contactLink.addEventListener("click", () => {
        contactForm.style.display = "block";
    });

    contactCloseBtn.addEventListener("click", () => {
        contactForm.style.display = "none";
    });
    
    //Funcion para abrir y cerrar nosotros

    var nosotrosForm = document.getElementById("nosotros");
    var nosotrosCloseBtn = document.getElementById("nosotrosClose");
    var nosotrosLink = document.querySelector(".nav__link[href='#nosotros']");

    nosotrosLink.addEventListener("click", () => {
        nosotrosForm.style.display = "block";
    });

    nosotrosCloseBtn.addEventListener("click", () => {
        nosotrosForm.style.display = "none";

    });

    //Funcion para abrir y cerrar cotizaciones

    var cotizacionForm = document.getElementById("cotizacion");
    var cotizacionCloseBtn = document.getElementById("cotizacionClose");
    var cotizacionLink = document.querySelector(".nav__link[href='#cotizacion']");

    cotizacionLink.addEventListener("click", () => {
        cotizacionForm.style.display = "block";
    });

    cotizacionCloseBtn.addEventListener("click", () => {
        cotizacionForm.style.display = "none";
    });
    

    // Funcion para pasar de seccion en cotizaciones
    const prevBtns = document.querySelectorAll('.botonAnterior'); // VARIABLE PARA SELECCIONAR LOS BOTONES DE ANTERIOR
    const nextBtns = document.querySelectorAll('.botonSiguiente'); // VARIABLE PARA SELECCIONAR LOS BOTONES DE SIGUIENTE
    const formSteps = document.querySelectorAll('.formEtapa'); // VARIABLE PARA SELECCIONAR MIS 4 FORMS

    let formEtapaNum = 0;

    // CLICK BOTON SIGUIENTE = formEtapaNum + 1, actualiza updateFormSteps y updateProgressbar
    nextBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        formEtapaNum++;
        updateFormSteps(formEtapaNum);
        // Aquí deberías llamar a la función updateProgressbar() si tienes una función con ese nombre definida

    });
    });

    // CLICK BOTON ANTERIOR = formEtapanUM - 1, actualiza updateFormSteps y updateProgressbar
    prevBtns.forEach((btn) => {
    btn.addEventListener('click', () => {
        formEtapaNum--;
        updateFormSteps(formEtapaNum);
        // Aquí deberías llamar a la función updateProgressbar() si tienes una función con ese nombre definida
    });
    });

    // funcion para ocultar todos los forms y luego muestra el form actual
    function updateFormSteps(currentStep) {
    formSteps.forEach((formStep, index) => {
        if (index === currentStep) {
            formStep.style.display = 'block';
        } else {
            formStep.style.display = 'none';
        }
    });
    }

});


