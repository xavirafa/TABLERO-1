function updateTime() {
    const date = new Date();
  
    // Actualiza la hora
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const formattedTime = `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
    document.getElementById("clock").innerHTML = formattedTime;
  
    // Actualiza el día
    const days = ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'];
    const dayName = days[date.getDay()];
    document.getElementById("day").innerHTML = dayName;
  
    // Actualiza la fecha
    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const formattedDate = `${day}/${month}/${year}`;
    document.getElementById("date").innerHTML = formattedDate;
  }
  
  updateTime();
  setInterval(updateTime, 1000); // Actualiza la hora cada segundo
  