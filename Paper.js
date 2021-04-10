class Paper {
    constructor(x, y, radius) {
      var options = {
        isStatic: false,
        'restitution':0.3,
        'friction':0.5,
        'density':1.2
      }
      this.body = Bodies.circle(x, y, radius, options);
      this.radius = radius;
      World.add(world, this.body);
      this.image=loadImage("sprites/paper.png");
     
      }
      display() {
        var pos = this.body.position;
        push();
        imageMode(CENTER);
        fill("white");
        stroke(0);
        strokeWeight(4);
        image(this.image,100,90,50,50);
        pop();
    }
    };