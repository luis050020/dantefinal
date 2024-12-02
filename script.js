document.addEventListener('DOMContentLoaded', function() {
    // Elementos del DOM
    const introSection = document.getElementById('intro-section');
    const moduleSelection = document.getElementById('module-selection');
    const submodule1Content = document.getElementById('submodule-1-content');
    const submodule2Content = document.getElementById('submodule-2-content');
    const startCourseBtn = document.getElementById('start-course');
    const submodule1Btn = document.getElementById('submodule-1');
    const submodule2Btn = document.getElementById('submodule-2');
    const returnToMenuBtn = document.getElementById('return-to-menu');

    // Función para cambiar secciones con animación
    function changeSection(hideSection, showSection) {
        hideSection.classList.add('slide-out');
        setTimeout(() => {
            hideSection.classList.remove('active', 'slide-out');
            hideSection.classList.add('hidden');
            showSection.classList.remove('hidden');
            showSection.classList.add('active', 'slide-in');
        }, 500);
    }

    // Funcionalidad del botón "Comenzar el curso"
    startCourseBtn.addEventListener('click', () => {
        changeSection(introSection, moduleSelection);
    });

    // Funcionalidad de los botones de submódulos
    submodule1Btn.addEventListener('click', () => {
        changeSection(moduleSelection, submodule1Content);
    });

    submodule2Btn.addEventListener('click', () => {
        changeSection(moduleSelection, submodule2Content);
    });

    // Funcionalidad del botón "Volver al Menú Principal"
    returnToMenuBtn.addEventListener('click', () => {
        const activeSection = document.querySelector('section.active');
        changeSection(activeSection, introSection);
    });

    // Funcionalidad de las pestañas
    const tabButtons = document.querySelectorAll('.tab-button');
    const tabContents = document.querySelectorAll('.tab-content');

    tabButtons.forEach(button => {
        button.addEventListener('click', () => {
            const tabName = button.getAttribute('data-tab');
            
            tabButtons.forEach(btn => btn.classList.remove('active'));
            tabContents.forEach(content => {
                content.classList.remove('active');
                content.style.display = 'none';
            });

            button.classList.add('active');
            const activeContent = document.getElementById(`${tabName}-content`);
            activeContent.style.display = 'block';
            setTimeout(() => {
                activeContent.classList.add('active');
            }, 50);
        });
    });

    // Funcionalidad de copiar código
    const copyButtons = document.querySelectorAll('.copy-button');

    copyButtons.forEach(button => {
        button.addEventListener('click', () => {
            const codeBlock = button.closest('.code-block').querySelector('code');
            const textArea = document.createElement('textarea');
            textArea.value = codeBlock.textContent.trim();
            document.body.appendChild(textArea);
            textArea.select();
            document.execCommand('copy');
            document.body.removeChild(textArea);
            
            button.textContent = '¡Copiado!';
            setTimeout(() => {
                button.textContent = 'Copiar';
            }, 2000);
        });
    });

    // Funcionalidad de la demostración interactiva
    let count = 0;
    const counterElement = document.getElementById('counter');
    const messageElement = document.getElementById('message');

    document.getElementById('increment-btn').addEventListener('click', () => {
        count++;
        counterElement.textContent = count;
    });

    document.getElementById('message-btn').addEventListener('click', () => {
        messageElement.textContent = '¡Hola, Mundo!';
    });

    // Animación de imágenes al hacer hover
    const animatedImages = document.querySelectorAll('.animated-image');
    animatedImages.forEach(img => {
        img.addEventListener('mouseover', () => {
            img.style.transform = 'scale(1.05)';
        });
        img.addEventListener('mouseout', () => {
            img.style.transform = 'scale(1)';
        });
    });
});

