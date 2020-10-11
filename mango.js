class Mango {
    constructor(x,y){
        var options = {
            isStatic:true,
            restitution:0,
            friction:1    
        }
        this.body = Bodies.rectangle(x, y,40,40, options);
      this.width = 40;
      this.height = 40;


    }    
display(){

    var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      rectMode(CENTER);
      fill("pink");
      strokeWeight(2);
      stroke("orange");
      rect(0, 0, this.width, this.height);
      pop();
}


}