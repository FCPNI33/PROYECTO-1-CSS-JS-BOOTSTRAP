function validateForm() {
    var nombre = document.getElementById("nombre").value;
    var email = document.getElementById("email").value;
    var edad = document.getElementById("edad").value;
    var password = document.getElementById("password").value;
    var password_repeat = document.getElementById("password_repeat").value;
    var isValid = true;
  
    if (!/^[A-Z\s]+$/.test(nombre)) {
      document.getElementById("errorNombre").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("errorNombre").style.display = "none";
    }
  
    if (!/^[\w.-]+@[a-zA-Z\d.-]+\.[a-zA-Z]{2,}$/.test(email)) {
      document.getElementById("errorEmail").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("errorEmail").style.display = "none";
    }
  
    if (isNaN(edad) || edad < 18 || edad > 100) {
      document.getElementById("errorEdad").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("errorEdad").style.display = "none";
    }
  
    if (password.length < 6) {
      document.getElementById("errorPassword").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("errorPassword").style.display = "none";
    }
  
    if (password !== password_repeat) {
      document.getElementById("errorPasswordRepeat").style.display = "block";
      isValid = false;
    } else {
      document.getElementById("errorPasswordRepeat").style.display = "none";
    }
  
    if (nombre.trim() === '' || email.trim() === '' || edad.trim() === '' || password.trim() === '' || password_repeat.trim() === '') {
      alert("Por favor complete todos los campos.");
      isValid = false;
    }
  
    if (!isValid) {
      return false;
    }
  
    return true;
  }
  