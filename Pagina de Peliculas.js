// Obtén todos los elementos de enlace de la barra de navegación
const navLinks = document.querySelectorAll('.nav-item a');

// Agrega un controlador de eventos clic a cada enlace
navLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    // Elimina la clase 'active' de todos los enlaces
    navLinks.forEach(link => link.classList.remove('active'));

    // Agrega la clase 'active' al enlace seleccionado
    this.classList.add('active');

    // Evita el comportamiento predeterminado del enlace solo si no es el enlace de la miniatura del video
    if (!this.closest('.thumbnail-container')) {
      event.preventDefault();
    }
  });
});
