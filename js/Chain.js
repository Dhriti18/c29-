class Chain {

        constructor(BodyA,pointB)
    {
        var options={
    lenght:0.9,
    stiffness:0.2,
    bodyA:BodyA,
    pointB:pointB
    
        }
        this.pointB=pointB;
    this.chain=Constraint.create(options);
    World.add(world,this.chain);
    
    }
    display(){
       push ()
    var posA=this.chain.bodyA.position;
    var posB=this.pointB;
 
		
    strokeWeight(5);
     line (posA.x,posA.y,posB.x,posB.y);
     pop ()
    
    }
    fly(){
        this.chain.bodyA =null;
        }
    
    }
