const header = document.getElementById('site-header');
const title = document.querySelector('.title-container');
const btnMode = document.querySelector('.btn-mode');
const linkNav = document.querySelectorAll('.link-nav');
const bodyPage = document.body;

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
    if (bodyPage.classList.contains('dark')) {
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