class Boy{
    constructor(x,y,width,height){
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.boyImg = loadGif("jumping.gif");
    }

    speedX(){
        this.x = this.x+5
    }

    display(){
        image(this.boyImg,this.x,this.y);
    }
}