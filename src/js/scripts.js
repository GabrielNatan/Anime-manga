import Menu from './menu.js'
import animes from './animes.js'
import  openBanner from  './banner.js';
import card from './card.js'



const menu = document.querySelector('#menu');
const ulMenu = document.querySelector('nav')
const leftButton = document.querySelector('#left')
const rightButton = document.querySelector('#right')
const search = document.querySelector('#search')
const openSearch = document.querySelector('.serachOpen')
const close = document.querySelector('.close')

Menu.openMenu(menu, ulMenu)
Menu.search(search,openSearch)
Menu.closeSearch(close,openSearch)


card.template()


leftButton.addEventListener('click',()=>{
    openBanner.leftClick(this)
})

rightButton.addEventListener('click',()=>{
    openBanner.rightClick(this)
    
})

setInterval(()=>{
    openBanner.updateBanner()
},5000)

