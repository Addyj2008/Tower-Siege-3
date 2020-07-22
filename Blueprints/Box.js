let allBoxes = [];
class Box {
    constructor (x, y, width, height, r, g, b) {
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height);
        this.colour = {'r' : r, 'g' : g, 'b' : b};
        World.add(world, this.body);
        this.display = function () {
            push();
            translate(this.body.position.x, this.body.position.y);
            rotate(this.body.angle);
            fill(this.colour.r, this.colour.g, this.colour.b);
            rectMode(CENTER);
            rect(0, 0, this.width, this.height);
            pop();
        };
        allBoxes.push(this);
    }
}
function displayAllBoxes () {
    for (loop1 = 0; loop1 < allBoxes.length; loop1 += 1) {
        allBoxes[loop1].display();
    }
}
