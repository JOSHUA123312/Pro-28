class Tree {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(x,y,width,height,options);
      this.x=x
      this.y=y
      this.width = width;
      this.height = height;
      this.image=loadImage("Plucking mangoes/tree.png")
     
    }
    display(){
      var pos =this.body.position;
      push()
      imageMode(CENTER);
      fill("yellow");
      translate(pos.x,pos.y)
      image(this.image,0,0, this.width, this.height);
      pop()
    }
  }