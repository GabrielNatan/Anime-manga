import Menu from './menu.js'
import animes from './animes.js'
import  openBanner from  './banner.js';
import card from './card.js'
import top from './topButton.js'


const menu = document.querySelector('#menu');
const ulMenu = document.querySelector('nav')
const leftButton = document.querySelector('#left')
const rightButton = document.querySelector('#right')
const search = document.querySelector('#search')
const openSearch = document.querySelector('.serachOpen')
const close = document.querySelector('.close')
const toTop = document.querySelector('.to-top')

Menu.openMenu(menu, ulMenu)
Menu.search(search,openSearch)
Menu.closeSearch(close,openSearch)


card.playerAnime()

toTop.addEventListener('click',()=>{
    top.toTop();
    
})