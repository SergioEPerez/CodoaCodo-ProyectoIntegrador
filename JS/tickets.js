function myFunction() {
    var precioFinal;
    const trianee = document.getElementById("trainee").value;
    const  cat= document.getElementById("categoria").value;




    switch(cat) {
      case document.getElementById("estudiante").value:
           precioFinal= this.cantidad.value * 200 * (1-0.80);
      break;
      case document.getElementById("junior").value:
           precioFinal= this.cantidad.value * 200 * (1-0.15);
      break;
      case document.getElementById("trainee").value:
           precioFinal= this.cantidad.value * 200 * (1-0.5);
      break;
  
    }
    document.getElementById("precio").innerHTML = parseInt (precioFinal);
  }
















