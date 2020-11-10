import Menu from './menu.js'
import animes from './animes.js'
import  openBanner from  './banner.js';
import card from './card.js'
import top from './topButton.js'
import Search from './search.js'


const menu = document.querySelector('#menu');
const ulMenu = document.querySelector('nav')
const leftButton = document.querySelector('#left')
const rightButton = document.querySelector('#right')
const search = document.querySelector('#search')
const searchButton = document.querySelector('.serachOpen button')
const openSearch = document.querySelector('.serachOpen')
const close = document.querySelector('.close')
const toTop = document.querySelector('.to-top')

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

toTop.addEventListener('click',()=>{
    top.toTop();
    
})

searchButton.addEventListener('click', ()=>{
    Search.search()

    
})


    if(window.location.href.endsWith('search.html') ){
            console.log('oi')
            //card.search(JSON.parse(localStorage.getItem('search_anime')))
        
    }


setInterval(()=>{
    openBanner.updateBanner()
},5000)

