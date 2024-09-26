<script src="js/script.js"></script>
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
document.getElementById("dark-mode-toggle").addEventListener("click", function() {
    document.body.classList.toggle("dark-mode");
});

// 4. Desplazamiento suave entre secciones
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// 5. Carga dinámica de proyectos desde GitHub
fetch('https://api.github.com/users/pablo-tejero/repos')
  .then(response => response.json())
  .then(data => {
    let projectsContainer = document.querySelector('.projects');
    data.forEach(repo => {
      let project = document.createElement('div');
      project.classList.add('project');
      project.innerHTML = `
        <img src="project.jpg" alt="${repo.name}">
        <h3>${repo.name}</h3>
        <a href="${repo.html_url}" target="_blank">View on GitHub</a>
      `;
      projectsContainer.appendChild(project);
    });
  })
  .catch(error => console.error('Error fetching GitHub repos:', error));
</script>
