const toggleNav = () => {
    document.querySelector('.mobile-header').classList.toggle('nav-active');
};



document.querySelector('.button-animation').addEventListener('click',toggleNav);