// Defino las variables.
const form = document.querySelector('#contact-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const messageInput = document.querySelector('#message');


form.addEventListener('submit', (e) => {
  e.preventDefault();// Evita que se envíe el formulario

  // Valido el nombre
  if (nameInput.value.trim() === '') {
    showError('name', 'Campo Obligatorio');
  } else if (nameInput.value.trim().length < 3) {
    showError('name', 'El usuario debe tener al menos 3 caracteres');
  } else {
    clearError('name');
  }
  
  // Valido el email
  if (emailInput.value === '') {
    showError('email', 'Campo Obligatorio');
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError('email', 'El email ingresado no es válido');
  } else {
    clearError('email');
  }
  
  // Valido el mensaje
  
  if (messageInput.value === '') {
    showError('message', 'Campo Obligatorio');
  } else if (messageInput.value.trim().length < 5) {
    showError('message', 'El mensaje debe tener al menos 5 caracteres');
  } else { 
    (form.querySelectorAll('.error').length === 0)  // Si no hay errores, se puede enviar el formulario
      form.submit();
  }
      
});

// Funciones para mostrar y ocultar los mensajes de error
function showError(inputId, message) {
  const errorDiv = document.querySelector(`#error-${inputId}`);
  errorDiv.textContent = message;
  errorDiv.style.display = 'block';
}

function clearError(inputId) {
  const errorDiv = document.querySelector(`#error-${inputId}`);
  errorDiv.textContent = '';
  errorDiv.style.display = 'none';
}



// Función para validar un email con una expresión regular
function isValidEmail(email) {
  const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;
  return emailRegex.test(email);

}
