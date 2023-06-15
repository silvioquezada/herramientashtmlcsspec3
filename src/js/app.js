import Glide from '@glidejs/glide';
import { Menu } from './menu.js';
const menu = new Menu();

document.getElementById("enlace_menu").onclick = muestraMensaje;

  const config = {
    type: 'carousel',
    perView: 1
  };
  new Glide('.glide', config).mount();


function muestraMensaje() {
  menu.clickMenu();
}