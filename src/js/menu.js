

function openMenu(menu, ul){
    menu.addEventListener('click', ()=>{
        if(ul.classList[1] == 'active'){
            ul.classList.remove('active')

        }else{
            ul.classList.add('active')
        }
    })
}

class Menu{
    constructor(){

    }

    openMenu(menu, ul){
        menu.addEventListener('click', ()=>{
            if(ul.classList[1] == 'active'){
                ul.classList.remove('active')
    
            }else{
                ul.classList.add('active')
            }
        })
    }

    closeSearch(close, element){
        close.addEventListener('click', ()=>{
            element.classList.remove('active')
        })
    }

    search(close, element){
        close.addEventListener('click', ()=>{
            element.classList.add('active')
        })
    }
}


export default new Menu();