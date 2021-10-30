import createElement from '../create-element/create-element.js';
import './create-title.css';

const title = createElement({tag:"h1",inner:"Tacos del JS",parent:"#container",css:"page-title"})
const menuContainer = createElement({parent:"#container",css:"menu-container"})
const menuList = createElement({tag:"ul",parent:menuContainer})
const home = createElement({tag:"li", parent:menuList,inner:"Home"})
const menu = createElement({tag:"li", parent:menuList,inner:"Menu"})
const contact = createElement({tag:"li",parent:menuList,inner:"Contact"})