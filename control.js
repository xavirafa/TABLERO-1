// control.js
document.getElementById("control-form").addEventListener("submit", function (event) {
  event.preventDefault();

  const staticTime = document.getElementById("static-time").value;
  const imageTime = document.getElementById("image-time").value;

  localStorage.setItem("staticTime", staticTime * 60 * 1000); // Convertir a milisegundos
  localStorage.setItem("imageTime", imageTime * 60 * 1000); // Convertir a milisegundos

  alert("Tiempos actualizados");
});

function refreshMainPage() {
  // Agrega esta línea para actualizar la clave 'refreshMainPage' en el localStorage
  localStorage.setItem("refreshMainPage", new Date().getTime());
}
