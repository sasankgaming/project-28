class Tree {
    constructor(x,y){
        this.image =loadImage("tree.png");
        this.body = Bodies.rectangle(x,y,40,100);
        this.width = 40;
        this.height = 100;

        World.add(world, this.body);

    }

    display(){
        var pos =this.body.position;
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);

    }
}