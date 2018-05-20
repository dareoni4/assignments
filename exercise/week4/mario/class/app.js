class Player {
 constructor (name, totalCoins, star ){
     this.name = name;
     this.totalCoins = totalCoins;
     this.status = 'Big';
     this.star = star;
     this.gameActive = true;
 }
     setName(namePicked){
         this.name = namePicked   
     }


     gotHit(stat){
         if(this.status === 'Powered Up'){
             this.status = 'Big'
         }else if(this.status === 'Big'){
             this.status = 'Small'
             console.log('Small')
         }else if(this.status === 'Small'){
             this.status = 'dead'
             console.log('dead')
         }else if(this.status === 'dead'){
             this.gameActive = false;
             console.log(false)
         }else{
             console.log('game over')
         }
     };

   
     addCoin(coin){
        this.totalCoins += coin
     }

    
     print(){
         console.log(`${this.name} has ${this.totalCoins} coins and ${this.status} with ${this.star}`)
         console.log(this.totalCoins)
     }


     gotPowerup(powerUp){
        this.status +=  powerUp;

     }
    
 random(){
     var any = Math.floor((Math.random()*3)); 
     console.log(any)
     if(any === 0){
         this.gotHit('Small')
     }else if( any === 1){
          this.addCoin()
     }else if(any === 2){
         this.gotPowerup()
     }else{
         console.log('nothing')
     }
 }
 
    }
    

var mario = new Player('Mario', 22, true )
var luigi = new Player('Luigi', 87, false)
mario.print()
luigi.print()
luigi.random()





