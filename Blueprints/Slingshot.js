class Slingshot {
    constructor(Object, Point) {
        this.chain = Constraint.create({
            'bodyA' : Object,
            'pointB' : Point,
            'stiffness' : 0.004,
            'length' : 50
        });
        World.add(world, this.chain);
        this.flown = false;
    }
    display() {
        push();
        if (!this.flown) {
            stroke(48, 22, 8);
            strokeWeight(10);
            line(this.chain.bodyA.position.x, this.chain.bodyA.position.y, this.chain.pointB.x, this.chain.pointB.y);
        }
        pop();
    }
    fly() {
        this.flown = true;
        this.chain.bodyA = null;
    }
}