// Defino las variables.
const form = document.querySelector('#register-form');
const nameInput = document.querySelector('#username');
const passwordInput = document.querySelector('#password');


form.addEventListener('submit', (e) => {
  e.preventDefault();// Evita que se envíe el formulario

  // Valido el nombre
  if (nameInput.value.trim() === '') {
    showError('username', 'Campo Obligatorio');
  } else if (nameInput.value.trim().length < 3) {
    showError('username', 'El usuario debe tener al menos 3 caracteres');
  } else {
    clearError('username');
  }
    
  
  // Valido la contraseña
  if (passwordInput.value.trim() === '') {
    showError('password', 'Campo Obligatorio');
  } else if (passwordInput.value.trim().length < 8) {
    showError('password', 'La contraseña debe tener al menos 8 caracteres');
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


