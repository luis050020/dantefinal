document.addEventListener('DOMContentLoaded', function() {
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    function showTab(tabName) {
        tabContents.forEach(content => {
            if (content.id === tabName + '-content') {
                content.classList.add('active');
            } else {
                content.classList.remove('active');
            }
        });

        tabButtons.forEach(button => {
            if (button.getAttribute('data-tab') === tabName) {
                button.classList.add('active');
            } else {
                button.classList.remove('active');
            }
        });
    }

    tabButtons.forEach(button => {
        button.addEventListener('click', function() {
            const tabName = this.getAttribute('data-tab');
            showTab(tabName);
        });
    });

    // Inicializar la primera pestaña como activa
    showTab('html');
});

// Funcionalidad para el botón de incrementar contador
let contador = 0;
const incrementBtn = document.getElementById('increment-btn');
const counterSpan = document.getElementById('counter');

if (incrementBtn && counterSpan) {
    incrementBtn.addEventListener('click', function() {
        contador++;
        counterSpan.textContent = contador;
    });
}

// Funcionalidad para el botón de mostrar mensaje
const messageBtn = document.getElementById('message-btn');
const messageSpan = document.getElementById('message');

if (messageBtn && messageSpan) {
    messageBtn.addEventListener('click', function() {
        messageSpan.textContent = '¡Hola! Este es un mensaje dinámico.';
    });
}