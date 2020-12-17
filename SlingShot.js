class SlingShot{

    constructor(body1,point2){
        var options ={
            bodyA: body1,
            pointB: point2,
            stiffness:0.04,
            length:10
        }
    
        this.chain=Constraint.create(options);
          
        World.add(world,this.chain);
        
    }
    eject(){
        this.chain.bodyA=null
    }
display(){
    if (this.chain.bodyA){
    strokeWeight(5);
   var pointA=this.chain.bodyA.position
   var pointB=this.chain.pointB;
    line(pointA.x,pointA.y,pointB.x,pointB.y)}
}

}