class File{

    constructor(x,y,width,height){
    
    this.body=Bodies.rectangle(x,y,width,height,{isStatic:false});
    this.width=width;
    
    this.height=height;
    World.add(world, this.body);
    
    
    
    }
    
    display(){
      push ();
   // var pos=this.body.position;
   translate (240,428);
    rectMode(CENTER);
    fill (255,0,255);
    //rect(2,0,this.width,this.height);
    pop ();
    }
}