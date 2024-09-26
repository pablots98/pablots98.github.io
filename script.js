// 1. Descargar el CV al hacer clic en el botón
document.getElementById("cv-button").addEventListener("click", function() {
    window.open('cv.pdf', '_blank');  // Asegúrate de que el archivo cv.pdf esté en la raíz del proyecto
});

// 2. Validación del formulario de contacto
document.querySelector("form").addEventListener("submit", function(event) {
    const name = document.querySelector("input[type='text']").value;
    const email = document.querySelector("input[type='email']").value;
    const message = document.querySelector("textarea").value;

    if (!name || !email || !message) {
        alert("Please fill in all fields.");
        event.preventDefault();  // Evita que se envíe el formulario si no se completan los campos
    } else {
        alert("Message sent successfully!");
    }
});

// 3. Modo oscuro (Dark Mode Toggle)
document.getElementById("dark-mode-toggle").add

