import Animes from './animes.js'


class Card{

    constructor(){
        this.cardContainer = document.querySelector('.trending__cont')
        this.nameAnime = '';
    }

    template(){

        

        Animes.map(anime => {
            let cardModel = `
                <div class="trending__card" style=" background: url('./src/img/${anime.image}') no-repeat center/cover">
                    <div class="card_top">
                        <span class="tag">${anime.categoria}</span>
                        <span>${anime.temporadas} Temp. | ${anime.episodios} Episodios </span>
                    </div>
                    <div class="trending__text">
                        <h3>${anime.name}</h3>
                        <a href="/player.html" data-name="${anime.name}" class="btn">Watch Now</a>
                    </div>
                </div>
        `

        this.cardContainer.innerHTML += cardModel;
  
        })
            this.clickCard();


       
    }

    clickCard(){
        let cada = document.querySelectorAll('.trending__text a')
        cada.forEach(um=>{
            
            um.addEventListener('click', (e)=>{

                let name = um.dataset.name;
                localStorage.setItem('anime', name); 
                
                
            })
        })
        
        
    }

    playerAnime(){
        let animePlayer = document.querySelector('#animePlayer');
        console.log(animePlayer)
        animePlayer.innerHTML = `
            <h3>${localStorage.getItem('anime')}</h3>
        `
    }

}

export default new Card();