class Food{
    constructor(){
        this.foodStock = null;
        this.lastFed = null;
    //function preload(){
        this.image = loadImage("../images/Milk.png");
       // }
    }
    getFoodStock(){
        var foodCountRef = database.ref('food');
        foodCountRef.on("value",(data)=>{
          food = data.val();
        });
    }

    updateFoodStock(count){
        database.ref('/').update({
            food: count
        });
    }

    

    display(){
        var x = 80, y = 100;

        imageMode(CENTER);
        image(this.image, x, y, 50, 50);
        
        if(this.foodStock != 0){
            for(var i = 0;i<this.foodStock;i++){
              if(i%10==0){
                x = 80;
                y = y + 50
                }
            }
            image(this.image, x, y, 50, 50);
            x = x + 50;
        }
    }
    
    
}

