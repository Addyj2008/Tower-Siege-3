let allBoxes = [];
class Box {
    constructor (x, y, width, height) {
        this.visibility = 250;
        this.image = loadImage('box.png');
        this.width = width;
        this.height = height;
        this.body = Bodies.rectangle(x, y, this.width, this.height, {'density' : 1.2});
        World.add(world, this.body);
        this.display = function () {
            push();
            if (this.visibility > 0) {
                if (this.body.speed > 3) {
                    score += 2;
                    this.visibility -= 5;
                    World.remove(world, this.body);
                }
                tint(255, this.visibility);
                translate(this.body.position.x, this.body.position.y);
                rotate(this.body.angle);
                imageMode(CENTER);
                image(this.image, 0, 0, this.width, this.height);
            }
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
