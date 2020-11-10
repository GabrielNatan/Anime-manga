import Animes from './animes.js'


class Card{

    constructor(){
        this.cardContainer = document.querySelector('.trending__cont')
        this.nameAnime = '';
    }

    template(){
        if(window.location.href == "http://127.0.0.1:5500/index.html" || window.location.href == "http://127.0.0.1:5500/"){
        
        var i = 0;
        Animes.map(anime => {
            
            if(i < 6){
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
                i++
            }
            
  
        })
            this.clickCard();


        }
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
        if(window.location.href == "http://127.0.0.1:5500/player.html"){

        let animePlayer = document.querySelector('#animePlayer');

        Animes.map(anime =>{          
            if(anime.name == localStorage.getItem('anime')){

                return animePlayer.innerHTML =  `
                <div class="animePlayer__title">
                    <h1>${anime.name}</h1>
                    <h2>Episodio 1</h2>
                </div>
        
                <div class="animePlayer__video">
                    <video poster="src/img/${anime.image}" controls="true"  src="src/video/abertura-naruto.mp4"></video>
                </div>
        
                <div class="animePlayer__episodios">
                    <div>
                        <h3>Lista de temporadas</h3>
                        <ul>
                        
                            <li class="active">1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                        </ul>
                    </div>
                    <div>
                        <h3>Lista de episodios</h3>
                        <ul>
                        
                            <li class="active">1</li>
                            <li>2</li>
                            <li>3</li>
                            <li>4</li>
                            <li>5</li>
                            <li>6</li>
                            <li>7</li>
                            <li>8</li>
                        </ul>
                    
                    </div>
                    
                </div>
            `
            }
        })
        }
    }


    search(item){
        
        item.map(cada =>{
            console.log(cada.name)
            let cardModel = `
                <div class="trending__card" style=" background: url('./src/img/${cada.image}') no-repeat center/cover">
                    <div class="card_top">
                        <span class="tag">${cada.categoria}</span>
                        <span>${cada.temporadas} Temp. | ${cada.episodios} Episodios </span>
                    </div>
                    <div class="trending__text">
                        <h3>${cada.name}</h3>
                        <a href="/player.html" data-name="${cada.name}" class="btn">Watch Now</a>
                    </div>
                </div>
        `

        this.cardContainer.innerHTML += cardModel;

        })

        

    }

}

export default new Card();