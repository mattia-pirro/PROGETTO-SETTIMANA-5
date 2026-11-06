const header = document.getElementById('site-header');
const title = document.querySelector('.title-container');
const btnMode = document.querySelector('.btn-mode');
const linkNav = document.querySelectorAll('.link-nav');
const bodyPage = document.body;
const overlay = document.getElementById('overlay-contatti');
const preventivo = document.getElementById('apri-contatti');
const linkPreventivo = document.getElementById('link-apri-contatti');
const close = document.getElementById('chiudi-contatti');
const formContatti = document.querySelector('.modal form');

btnMode.addEventListener('click', () => {
    const icon = btnMode.querySelector('i');
    bodyPage.classList.toggle('dark');

    if (bodyPage.classList.contains('dark')) {
        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    } else {
        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    }
});

window.addEventListener('scroll', function () {
    if (bodyPage.classList.contains('dark') && window.scrollY > 100) {
        return;
    }

    if (window.scrollY > 100) {
        header.classList.add('scrolled');
        title.classList.add('scrolled');
        btnMode.classList.add('scrolled');
        linkNav.forEach(link => link.classList.add('scrolled'));
    } else {
        header.classList.remove('scrolled');
        title.classList.remove('scrolled');
        btnMode.classList.remove('scrolled');
        linkNav.forEach(link => link.classList.remove('scrolled'));
    }
});

preventivo.addEventListener('click', function () {
    overlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
});

linkPreventivo.addEventListener('click', function () {
    overlay.removeAttribute('hidden');
    document.body.style.overflow = 'hidden';
});

close.addEventListener('click', function () {
    overlay.classList.add('closing');
    setTimeout(() => {
        overlay.setAttribute('hidden', '');
        document.body.style.overflow = '';
        overlay.classList.remove('closing');
    }, 1400);
});

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        overlay.setAttribute('hidden', '');
        document.body.style.overflow = '';
    }
});


formContatti.addEventListener('submit', function(event) {
    event.preventDefault(); 
    alert('Richiesta inviata con successo!');
});