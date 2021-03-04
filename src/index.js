import menuFogmSh from './templates/menu.hbs';
import menuCards from './menu.json';
import './styles.css';

const changeStyleBtn = document.querySelector('.theme-switch__toggle');
const listMenu = document.querySelector('.js-menu');
const cardMenu = createMenuCard(menuCards);
const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};
startStyle();

listMenu.insertAdjacentHTML('beforeend', cardMenu);
changeStyleBtn.addEventListener('change', changeStyle);

function createMenuCard(menuCards) {
  return menuCards.map(menuCard => menuFogmSh(menuCard)).join('');
}

function startStyle() {
  if (localStorage.getItem('theme') === Theme.DARK) {
    document.body.classList.add(Theme.DARK);
    changeStyleBtn.setAttribute('checked', 'checked');
  } else {
    document.body.classList.add(Theme.LIGHT);
  }
}

function changeStyle(e) {
  document.body.classList.toggle(Theme.LIGHT);
  document.body.classList.toggle(Theme.DARK);
  localStorage.setItem('theme', document.body.className);
}
