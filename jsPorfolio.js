document.addEventListener("DOMContentLoaded", function() {
    const techList = document.querySelector('.tech-list');
    techList.classList.add('visible'); // Agrega la clase para activar la animación
});


// formulario para enviar email 

// Inicializa EmailJS
document.addEventListener('DOMContentLoaded', function() {
    emailjs.init("elDamAfRJoJ4ZhfJD"); // pasamos el id del jsemail
});

// manejo del formulario
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Previene el comportamiento por defecto del formulario

    // Obtiene los valores del formulario
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;

    // Configura el servicio y la plantilla de EmailJS
    const serviceID = 'service_netpimr'; // Reemplaza con tu Service ID
    const templateID = 'template_1w6wyxl'; // Reemplaza con tu Template ID

    const templateParams = {
        name: name,
        email: email,
        message: message
    };

    // envia el correo utilizando jsemail
    emailjs.send(serviceID, templateID, templateParams)
    .then(() => {
        document.getElementById('formResponse').innerHTML = `<p>Gracias, ${name}! Tu mensaje ha sido enviado.</p>`;
        document.getElementById('contactForm').reset(); // Limpia el formulario
    }, (err) => {
        document.getElementById('formResponse').innerHTML = `<p>Oops! Hubo un error al enviar tu mensaje: ${err.text}</p>`;
    });
});




