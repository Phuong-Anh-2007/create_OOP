class Image {
    constructor(img,top,left,width,height, speed) {
        this.img = img;
        this.top = top;
        this.left = left;
        this.width= width;
        this.height= height;
        this.speed= speed;
    }

    showImage() {
        return '<img width="' + this.width + '"'
                    +' height="' + this.height + '"'
                    +' src="' + this.img + '"'
                    +' style = "top: ' + this.top + 'px; left: '+this.left+'px; position:absolute;">';
    }

    moveRight() {
        this.left += this.speed;
        console.log(this.img+': '+this.left);
    }
}
let img_1 = new Image('img/abf34f8db6e240bc19f3.jpg',100,0,300,250,75);
let img_2 = new Image('img/turtle.png',380,0,300,250,20);

document.getElementById('show_1').innerHTML=img_1.showImage();
document.getElementById('show_2').innerHTML=img_2.showImage();



function start() {

    document.getElementById('flag').innerHTML='';
    //Rabbit
    if (img_1.left < window.innerWidth - img_1.width) {
        img_1.moveRight();
    }

    document.getElementById('show_1').innerHTML=img_1.showImage();
    setTimeout(start,500);

    //Turtle
    if (img_2.left < window.innerWidth - img_2.width) {
        img_2.moveRight();
    }

    document.getElementById('show_2').innerHTML=img_2.showImage();
    setTimeout(start,500);
}








