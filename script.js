
        // JavaScript para controlar o menu hambúrguer
        const menuToggle = document.getElementById('menu-toggle');
        const menu = document.getElementById('menu');
        const overlay = document.getElementById('overlay');

        menuToggle.addEventListener('click', () => {
            menu.classList.toggle('hidden');
            overlay.classList.toggle('hidden');
        });

        overlay.addEventListener('click', () => {
            menu.classList.add('hidden');
            overlay.classList.add('hidden');
        });
    