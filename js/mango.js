class mango{
	constructor(x,y,r)
	{
		var options={
			isStatic:true,
			restitution :0,
            friction :1,
			}
			this.body = Bodies.circle(x,y,20,options);
			this.r=20;
			this.image=loadImage("mango.png");
			World.add(world,this.body);
		
		
		World.add(world, this.body);
	}

	display()
	{
		var mangoPos=this.body.position;
		var angle=this.body.angle;
        
     

		push()
		translate(mangoPos.x, mangoPos.y);
		// rectMode(CENTER);
		fill(255,255,255)
		rotate(angle);
        imageMode(CENTER);
        image(this.image,0,0,60,60);
        pop();
	
	
		
		
 }
}