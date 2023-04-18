// Defino las variables.
const form = document.querySelector('#register-form');
const nameInput = document.querySelector('#username');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const confirmInput = document.querySelector('#confirm-password');

form.addEventListener('submit', (e) => {
  e.preventDefault(); // Evita que se envíe el formulario

  // Valido el nombre
  if (nameInput.value.trim() === '') {
    showError('username', 'Campo Obligatorio');
  } else if (nameInput.value.trim().length < 3) {
    showError('username', 'El usuario debe tener al menos 3 caracteres');
  } else {
    clearError('username');
  }

  // Valido el email
  if (emailInput.value === '') {
    showError('email', 'Campo Obligatorio');
  } else if (!isValidEmail(emailInput.value.trim())) {
    showError('email', 'El email ingresado no es válido');
  } else {
    clearError('email');
  }

  // Valido la contraseña
  if (passwordInput.value === '') {
    showError('password', 'Campo Obligatorio');
  } else if (passwordInput.value.trim().length < 8) {
    showError('password', 'La contraseña debe tener al menos 8 caracteres');
  } else {
    clearError('password');
  }

  // Valido la confirmación de contraseña
  if (confirmInput.value === '') {
    showError('confirm-password', 'Campo Obligatorio');
  } else if (confirmInput.value !== passwordInput.value.trim()) {
    showError('confirm-password', 'Las contraseñas no coinciden');
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
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

