function calculate() {
    var height = parseFloat(document.getElementById('height').value);
    var radius = parseFloat(document.getElementById('radius').value);
  
    if (isNaN(height) || isNaN(radius)) {
      document.getElementById('result').innerHTML = 'Por favor, ingrese valores numéricos válidos.';
      return;
    }
  
    var area = 2 * Math.PI * radius * (radius + height);
    var volume = Math.PI * radius * radius * height;
  
    document.getElementById('result').innerHTML = 'El area del cilindro es: ' + area.toFixed(2) + '<br>El volumen del cilindro es: ' + volume.toFixed(2);
  }
  