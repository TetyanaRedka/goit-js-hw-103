import menuFogmSh from './templates/menu.hbs';
import menuCards from './menu.json';
import './styles.css';

const changeStyleBtn = document.querySelector('.theme-switch__toggle');
const bodyEl = document.querySelector('body');
const listMenu = document.querySelector('.js-menu');
const cardMenu = createMenuCard(menuCards);
startStyle();

listMenu.insertAdjacentHTML('beforeend', cardMenu);
changeStyleBtn.addEventListener('change', changeStyle);

function createMenuCard(menuCards) {
  return menuCards.map(menuCard => menuFogmSh(menuCard)).join('');
}

function startStyle() {
  if (localStorage.getItem('theme') === 'dark-theme') {
    bodyEl.classList.add('dark-theme');
    changeStyleBtn.setAttribute('checked', 'checked');
  }
}

function changeStyle(e) {
  if (!bodyEl.className) {
    bodyEl.classList.add('dark-theme');
  } else {
    localStorage.removeItem('theme');
    bodyEl.classList.toggle('light-theme');
    bodyEl.classList.toggle('dark-theme');
  }
  localStorage.setItem('theme', bodyEl.className);
}
