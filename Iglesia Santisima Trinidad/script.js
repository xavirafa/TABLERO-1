document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-btn');
    const closeBtn = document.querySelector('.close-btn');
    const menu = document.querySelector('.menu');

    menuBtn.addEventListener('click', function () {
        menu.classList.toggle('show');
    });

    closeBtn.addEventListener('click', function () {
        menu.classList.remove('show');
    });

    document.addEventListener('click', function (event) {
        if (!menu.contains(event.target) && !menuBtn.contains(event.target)) {
            menu.classList.remove('show');
        }
    });
});
