const header = document.getElementById('site-header');
const title = document.querySelector('.title-container');
const btnMode = document.querySelector('.btn-mode');
const linkNav = document.querySelectorAll('.link-nav');
const bodyPage = document.body;
const overlay = document.getElementById('overlay-contatti');
const preventivo = document.getElementById('apri-contatti');
const linkPreventivo = document.getElementById('link-apri-contatti');
const close = document.getElementById('chiudi-contatti');
const formContatti = document.getElementById('form-contatti');
const recensioni = document.querySelectorAll('.recensioni-container');


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

function aggiornaScroll() {
    const scrolled = window.scrollY > 100;
    header.classList.toggle('scrolled', scrolled);
    title.classList.toggle('scrolled', scrolled);
    btnMode.classList.toggle('scrolled', scrolled);
    linkNav.forEach(link => link.classList.toggle('scrolled', scrolled));
}

window.addEventListener('scroll', aggiornaScroll);

bodyPage.classList.add('no-transition');
aggiornaScroll();

window.addEventListener('load', () => {
    aggiornaScroll();
    setTimeout(() => {
        bodyPage.classList.remove('no-transition')
    }, 100);
});

function apriContatti() {
    overlay.removeAttribute('hidden');
    recensioni.forEach(card => card.style.animationPlayState = 'paused');
    document.documentElement.style.overflow = 'hidden';
}

preventivo.addEventListener('click', apriContatti);
linkPreventivo.addEventListener('click', apriContatti);

function chiudiContatti() {
    if (overlay.classList.contains('closing')) {
        return;
    } else {
        overlay.classList.add('closing');
        setTimeout(() => {
            overlay.setAttribute('hidden', '');
            overlay.classList.remove('closing');
            recensioni.forEach(card => card.style.animationPlayState = '');
            document.documentElement.style.overflow = '';
        }, 1400);
    }
}

close.addEventListener('click', chiudiContatti);

overlay.addEventListener('click', (event) => {
    if (event.target === overlay) {
        chiudiContatti();
    }
});

formContatti.addEventListener('submit', function (event) {
    event.preventDefault();
    alert('Richiesta inviata con successo!');
});