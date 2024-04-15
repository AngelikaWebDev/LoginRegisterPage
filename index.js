// Toggle dark mode when dark mode toggle button is clicked
// Alternar el modo oscuro cuando se hace clic en el botón de alternar modo oscuro
const darkModeToggle = document.getElementById('darkModeToggle');
const body = document.body;

darkModeToggle.addEventListener('click', () => {
    body.classList.toggle('dark-mode');
    if (body.classList.contains('dark-mode')) {
        darkModeToggle.innerHTML = '<i class="fa-solid fa-sun" style="color: #ffffff;"></i>';
    } else {
        darkModeToggle.innerHTML = '<i class="fa-solid fa-moon"></i>';
    }
});

// Form submission event listener / Escucha el evento de envío del formulario
document.getElementById('loginForm').addEventListener('submit', function (event) {
    event.preventDefault(); // Evita que el formulario se envíe por defecto / Prevent the form from being submitted by default

    // Reset errors / Resetear los errores
    document.getElementById('errorList').innerHTML = '';
    document.getElementById('errorAlert').classList.add('d-none');
    document.getElementById('successAlert').classList.add('d-none');

    // Get field values / Obteniendo valores de los campos
    var email = document.getElementById('email').value;
    var password = document.getElementById('password').value;

    var errors = [];

    // Email validations / Validaciones de email
    if (!validateEmail(email)) {
        errors.push('Invalid email address');
    }

    // Password validations / Validaciones de contraseña
    if (!validatePassword(password)) {
        errors.push('Password must contain at least one uppercase letter, one lowercase letter, one special character, and be at least 8 characters long');
    }

    // Show errors / Mostrar errores
    if (errors.length > 0) {
        var errorList = document.getElementById('errorList');
        errors.forEach(function (error) {
            var li = document.createElement('li');
            li.textContent = error;
            errorList.appendChild(li);
        });
        document.getElementById('errorAlert').classList.remove('d-none');
    } else {
        // Show success alert if no errors / Mostrar alerta de éxito si no hay errores
        document.getElementById('successAlert').classList.remove('d-none');
    }
}, 3000);

// Function to validate email / Función para validar email
function validateEmail(email) {
    var re = /\S+@\S+\.\S+/;
    return re.test(email);
}

// Function to validate password / Función para validar contraseña
function validatePassword(password) {
    var re = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+\-=[\]{};':"\\|,.<>/?]).{8,}$/;
    return re.test(password);
}