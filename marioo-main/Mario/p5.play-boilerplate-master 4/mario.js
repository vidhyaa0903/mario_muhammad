class Mario{
    constructor(x,y,width,height){
        var options = {
            x:x,
            y:y,
            width:width,
            height:height,
            isStatic:false,
            restitution:0.8,
            friction:1.0,
            density:1.0
        }
            this.body = Bodies.rectangle(x, y, width, height, options);
            this.width = width;
            this.height = height;
            World.add(world, this.body);
        }
        display(){
            var pos = this.body.position;
            push();
            translate(pos.x, pos.y);
            
            rectMode(CENTER);
            rect( 0, 0, this.width, this.height);
            pop();

            console.log(this.body.y);
        }

        jump(){
            if(this.body.position.y>650 ){
               this.body.position.y= this.body.position.y -10;

                
            }
            this.body.position.y = trex.velocityY + 0.6
        }
    }
