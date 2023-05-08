// Obtén los elementos del modal, el enlace y el botón de cerrar de Quien Soy
const modalAbout = document.getElementById("about-modal");
const linkAbout = document.querySelector(".nav-menu a[href='#about-modal']");
const closeModalAbout = document.querySelector("#about-modal .close-modal");

// Cuando se haga clic en el enlace de Quien Soy, muestra el modal
linkAbout.addEventListener("click", (e) => {
  e.preventDefault();
  modalAbout.style.display = "block";
});

// Cuando se haga clic en el botón de cerrar de Quien Soy, oculta el modal
closeModalAbout.addEventListener("click", () => {
  modalAbout.style.display = "none";
});

// Cuando se haga clic fuera del contenido del modal de Quien Soy, oculta el modal
window.addEventListener("click", (e) => {
  if (e.target === modalAbout) {
    modalAbout.style.display = "none";
  }
});

// Obtén los elementos del modal, el enlace y el botón de cerrar de Datos de Contacto
const modalContacto = document.getElementById("contact-modal");
const linkContacto = document.querySelector(".nav-menu a[href='datos_de_contacto.html']");
const closeModalContacto = document.querySelector("#contact-modal .close-modal");

// Cuando se haga clic en el enlace de Datos de Contacto, muestra el modal
linkContacto.addEventListener("click", (e) => {
  e.preventDefault();
  modalContacto.style.display = "block";
});

// Cuando se haga clic en el botón de cerrar de Datos de Contacto, oculta el modal
closeModalContacto.addEventListener("click", () => {
  modalContacto.style.display = "none";
});

// Cuando se haga clic fuera del contenido del modal de Datos de Contacto, oculta el modal
window.addEventListener("click", (e) => {
  if (e.target === modalContacto) {
    modalContacto.style.display = "none";
  }
});

// Agrega la funcionalidad de descarga para todos los enlaces con el atributo 'download'
var downloadLinks = document.querySelectorAll("a[download]");
for (var i = 0; i < downloadLinks.length; i++) {
  downloadLinks[i].addEventListener("click", function(event) {
    event.preventDefault();
    var url = this.getAttribute("href");
    var filename = this.getAttribute("download");
    var xhr = new XMLHttpRequest();
    xhr.open("GET", url, true);
    xhr.responseType = "blob";
    xhr.onload = function() {
      var blob = xhr.response;
      var link = document.createElement("a");
      link.href = window.URL.createObjectURL(blob);
      link.download = filename;
      link.click();
    };
    xhr.send();
  });
}
