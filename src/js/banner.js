

class bannerHeader{
     constructor(){
        this.i = 0;
        this.arrayBanner = document.querySelectorAll('.card');
     }

    leftClick(left){
        if(this.i > 0){
            this.i = this.i - 1;
            for(let i = 0; i<=2; i++){
                this.arrayBanner[i].classList.remove('active')
            }
        }
        this.arrayBanner[this.i].classList.add('active')
        
    }

    rightClick(rigth){
        
        if(this.i < 2){
            this.i = this.i + 1;
            for(let i = 0; i<=2; i++){
                this.arrayBanner[i].classList.remove('active')
            }
            
            this.arrayBanner[this.i].classList.add('active')
        }
    }

    updateBanner(){
        if(this.i >= 2){
            this.i = 0;
        }else{
            this.i++
        }

        for(let a = 0; a<3; a++){
            this.arrayBanner[a].classList.remove('active')
        }
        this.arrayBanner[this.i].classList.add('active')

    }
}
export default new bannerHeader();
