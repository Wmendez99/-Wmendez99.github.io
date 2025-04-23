window.onload = function() {
    alert("¡Bienvenido a TELECOM NETWORK PERU!");
  };
  
  document.getElementById("formulario-contacto").addEventListener("submit", function(event) {
    event.preventDefault();
    let nombre = document.getElementById("nombre").value;
    let email = document.getElementById("email").value;
    let mensaje = document.getElementById("mensaje").value;
  
    if (nombre && email && mensaje) {
      document.getElementById("mensaje-exito").innerText = "¡Formulario enviado con éxito!";
    } else {
      document.getElementById("mensaje-exito").innerText = "Por favor, completa todos los campos.";
    }
  });
  
  document.getElementById("servicios").addEventListener("mouseover", function() {
    document.querySelector(".servicios").style.backgroundColor = "#f0f0f0";
  });
  
  document.getElementById("servicios").addEventListener("mouseout", function() {
    document.querySelector(".servicios").style.backgroundColor = "rgba(255, 255, 255, 0.9)";
  });
  