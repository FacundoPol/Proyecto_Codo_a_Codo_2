let nombre = document.getElementById("nombre");
let apellido = document.getElementById("apellido");
let correo = document.getElementById("correo");
let cantidad = document.getElementById("cantidad");
const precioEntrada = parseFloat(200);
let total = parseFloat(0);

function mostrarResultado() {
    let categoria = document.getElementById("categoria").value;
    let cantidadValue = parseFloat(cantidad.value);
     switch(categoria){
         case "1" : total = precioEntrada * cantidadValue;
         break;
         case "2": total = precioEntrada * cantidadValue * 0.80;
         break;
         case "3": total = precioEntrada * cantidadValue * 0.50;
         break;
         case "4": total = precioEntrada * cantidadValue * 0.15;
         break
     }
     console.log(total.toFixed(2));
     resultado.innerHTML = total.toFixed(2)
}

