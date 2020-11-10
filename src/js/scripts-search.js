import Menu from './menu.js'
import card from './card.js'
import top from './topButton.js'
import Search from './search.js'


const menu = document.querySelector('#menu');
const ulMenu = document.querySelector('nav')
const search = document.querySelector('#search')
const searchButton = document.querySelector('.serachOpen button')
const openSearch = document.querySelector('.serachOpen')
const close = document.querySelector('.close')
const toTop = document.querySelector('.to-top')

Menu.openMenu(menu, ulMenu)
Menu.search(search,openSearch)
Menu.closeSearch(close,openSearch)


card.template()

toTop.addEventListener('click',()=>{
    top.toTop();
    
})

searchButton.addEventListener('click', ()=>{
    Search.search()
})


if(window.location.href.endsWith('search.html') ){
        console.log('oi')
        card.search(JSON.parse(localStorage.getItem('search_anime')))
        
}




