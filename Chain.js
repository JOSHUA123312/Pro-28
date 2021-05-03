class Chain {
    constructor(bodyA,pointB){

        var option ={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.004,
            length:1
        }
       
        this.chain= Constraint.create(option)
        this.pointB=pointB
        this.bodyA=bodyA
        World.add(world,this.chain)
    }
    attach(body){
        this.chain.bodyA=body
    }
    fly(){
    this.chain.bodyA=null
    }

    display(){
    if (this.chain.bodyA){
        var pointA=this.chain.bodyA.position
        var pointB=pointB
        strokeWeight(3)
        //line(pointA.x,pointA.y,pointB.x,pointB.y)
    }
    }
}

