document.addEventListener('DOMContentLoaded', function() {
    fetch('https://api.github.com/users/pablots98/repos')
        .then(response => response.json())
        .then(data => {
            const reposContainer = document.getElementById('repos');
            reposContainer.innerHTML = ''; // Limpiar el contenedor
            data.forEach(repo => {
                const repoElement = document.createElement('div');
                repoElement.innerHTML = `<a href="${repo.html_url}" target="_blank">${repo.name}</a>`;
                reposContainer.appendChild(repoElement);
            });
        })
        .catch(error => console.error('Error:', error));
});
