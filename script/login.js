const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const boton = document.getElementById("boton-login");

boton.addEventListener("click", function() {
    const email = emailInput.value;
    const password = passwordInput.value;

    if (validarEmail(email) && validarPassword(password)) {
        window.location.href = "productos-administrador.html";
    } else {
      alert("¡Por favor ingrese datos válidos!");
    }
  });

function validarEmail(email) {
    if (email === "admin@admin.com") {
        return true;
      }
  // Patrón de expresión regular para validar un email
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}

function validarPassword(password) {
  // Verificar que la contraseña tenga al menos 8 caracteres
  return password === "admin123"
}

