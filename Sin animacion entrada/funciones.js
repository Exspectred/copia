document.addEventListener("DOMContentLoaded", () => {
    const buttonNext = document.getElementById("main__btn--next");
    const buttonBack = document.getElementById("main__btn--back");
    const containerMain = document.querySelector(".hero__main");
    const sections = containerMain.querySelectorAll("section");
    const btnLondon = document.getElementById("btnLondon");
    const btnPink = document.getElementById("btnPink");
    const btnBlanc = document.getElementById("btnBlanc");

    let currentSectionIndex = 0;

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

    const enviarContactoBtn = document.getElementById("enviarContacto");

    enviarContactoBtn.addEventListener("click", () => {
        // Mensaje a mostrar al enviar
        const mensaje = "¡Gracias por contactarte con nosotros! En breve nos estaremos comunicando.";

        alert(mensaje);
    });

    //Funcion para abrir y cerrar nosotros
    const nosotrosForm = document.getElementById("nosotros");
    const nosotrosCloseBtn = document.getElementById("nosotrosClose");
    const nosotrosLink = document.querySelector(".nav__link[href='#nosotros']");

    nosotrosLink.addEventListener("click", () => {
        nosotrosForm.style.display = "block";
    });

    nosotrosCloseBtn.addEventListener("click", () => {
        nosotrosForm.style.display = "none";
    });

    //Funcion para abrir y cerrar cotizaciones
    const cotizacionForm = document.getElementById("cotizacion");
    const cotizacionCloseBtn = document.getElementById("cotizacionClose");
    const cotizacionLink = document.querySelector(".nav__link[href='#cotizacion']");

    cotizacionLink.addEventListener("click", () => {
        cotizacionForm.style.display = "block";
    });

    cotizacionCloseBtn.addEventListener("click", () => {
        cotizacionForm.style.display = "none";
    });

    // Funcion para pasar de seccion en cotizaciones
    const prevBtns = document.querySelectorAll('.botonAnterior');
    const nextBtns = document.querySelectorAll('.botonSiguiente');
    const formSteps = document.querySelectorAll('.formEtapa');

    let formEtapaNum = 0;

    // CLICK BOTON SIGUIENTE = formEtapaNum + 1, actualiza updateFormSteps y updateProgressbar
    nextBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            formEtapaNum++;
            updateFormSteps(formEtapaNum);
            updateProgressbar(formEtapaNum);
        });
    });

    // CLICK BOTON ANTERIOR = formEtapanUM - 1, actualiza updateFormSteps y updateProgressbar
    prevBtns.forEach((btn) => {
        btn.addEventListener('click', () => {
            formEtapaNum--;
            updateFormSteps(formEtapaNum);
            updateProgressbar(formEtapaNum);
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

    const progressSteps = document.querySelectorAll('.progress-step');

    function updateProgressbar() {
        progressSteps.forEach((progressStep, index) => {
            if (index < formEtapaNum + 1) {
                progressStep.classList.add("active");
            } else {
                progressStep.classList.remove("active");
            }
        });
    }

    // funcion para mostrar el mensaje después de enviar el formulario en cotizaciones
    const enviarBtn = document.getElementById("enviarBtn");
    const nombreInput = document.getElementById("nombre");
    
    enviarBtn.addEventListener("click", () => {
        alert("¡Muchas gracias por contactarte con nosotros! En breve estaremos respondiendo a tu consulta.");

        // Reiniciar el formulario
        cotizacionForm.reset();

        // Reiniciar el contador de pasos y la barra de progreso
        formEtapaNum = 0;
        updateFormSteps(formEtapaNum);
        updateProgressbar(formEtapaNum);
    });
});
