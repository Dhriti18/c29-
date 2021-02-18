class Sling{
    constructor(bodyA,pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 90
        }
        this.pointB=pointB;

        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    attach(bodyA){
        this.launcher.bodyA = bodyA;
    }
    fly(){
        this.launcher.bodyA = null;
    }

    display(){
        if(this.chain.bodyA!=null){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);}
    }

fly (){
    this.chain.bodyA =null;
}}