import Animes from './animes.js'
import Card from './card.js'
class Search{

    constructor(){
        this.inputSearch =  document.querySelector('.serachOpen input')
    }

    search(){
        let nameSearch = this.inputSearch.value;
        let listAnime = []
        Animes.map(anime =>{
            if(anime.name.startsWith(nameSearch) ){
                listAnime.push(anime)
            }
        })
        console.log(listAnime)
        localStorage.setItem('search_anime', JSON.stringify(listAnime))
        window.location.href = "http://127.0.0.1:5500/search.html"

        
    }





}

export default new Search();