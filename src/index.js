import '../public/css/global.scss'
import './scss/media.scss'
import './scss/specific-classes.scss'

// Components
import './components/cards/_cards.scss';
import './components/contact/_contact.scss';
import './components/footer/_footer.scss';
import './components/gallery-main/_gallery-main.scss';
import './components/header/_header.scss';
import './components/hero-main/_hero-main.scss';
import './components/member/_member.scss';
import './components/mobile-header/_mobile-header.scss';


const toggleNav = () => {
    document.querySelector('.mobile-header').classList.toggle('nav-active');
};

document.querySelector('.button-animation').addEventListener('click', toggleNav);