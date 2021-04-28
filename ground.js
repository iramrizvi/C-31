class ground {
    constructor(x,y,h,w){
var options = {
    isStatic : true
};

    this.body = Bodies.rectangle(x,y,h,w,options);
    this.h= h;
    this.w=w;
    World.add(world,this.body);
    }
    
    display(){
    var pos = this.body.position;
    rectMode(CENTER);
    fill("brown");
    rect(pos.x,pos.y,this.h,this.w);
    
    }
    }
    