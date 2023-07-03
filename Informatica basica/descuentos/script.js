function applyDiscount() {
  var price = parseFloat(document.getElementById('price').value);

  if (isNaN(price)) {
    document.getElementById('result').innerHTML = 'Por favor, ingrese un valor numérico válido.';
    return;
  }

  var discount;
  var finalPrice;

  if (price > 80000) {
    discount = price * 0.2;
    finalPrice = price - discount;
    document.getElementById('result').innerHTML = 'Se aplico un descuento del 20%. El precio final es: ' + finalPrice.toFixed(2);
  } else {
    discount = price * 0.05;
    finalPrice = price - discount;
    document.getElementById('result').innerHTML = 'Se aplico un descuento del 5%. El precio final es: ' + finalPrice.toFixed(2);
  }
}
