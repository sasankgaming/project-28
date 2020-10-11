class Stone {
    constructor(x, y) {
      var options = {
          'isSatatic': false,
          'restitution':0,
          'friction':1,
          'density':1.2
      }
      this.image=loadImage("stone.png");
      this.body = Bodies.rectangle(x, y,40,40, options);
      this.width = 50;
      this.height= 50;
      
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
     

      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("black");
      strokeWeight(2);
      stroke("black");
      
      pop();  
    }
  };
