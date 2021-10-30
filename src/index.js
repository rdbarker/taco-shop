import './style.css';
import createHome from './components/create-home/create-home';
import createElement from './components/create-element/create-element.js';
import createMenu from './components/create-menu/create-menu';
import createContact from './components/create-contact/create-contact';


function changePage(){
    content.innerText = "";
    if (this.id==="home") createHome(content)
    if (this.id==="menu") createMenu(content)
    if (this.id==="contact") createContact(content)
}

const content = createElement({id:"content"})
const title = createElement({tag:"h1",inner:"Tacos del JS",parent:"#container",css:"page-title"})
const menuContainer = createElement({parent:"#container",css:"menu-container"})
const menuList = createElement({tag:"ul",parent:menuContainer})
const home = createElement({tag:"li",id:"home",parent:menuList,inner:"Home",click:changePage})
const menu = createElement({tag:"li",id:"menu", parent:menuList,inner:"Menu",click:changePage})
const contact = createElement({tag:"li",id:"contact",parent:menuList,inner:"Contact",click:changePage})
createHome(content);
