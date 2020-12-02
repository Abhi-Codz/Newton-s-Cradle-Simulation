class Stand 
{
    constructor(x, y, width, height) 
    {
      var options = {
          isStatic: true
      }

      this.body = Bodies.rectangle(x, y, width, height, options);
      this.width = width;
      this.height = height;

      this.body = Bodies.rectangle(x, y, width, height, options);
      World.add(world, this.body);
    }

    display()
    {
      var standPos = this.body.position;

      push();
      translate(standPos.x, standPos.y);
      rectMode(CENTER);
      
      strokeWeight('4');
      stroke('#3D1400');
      fill('brown');
      
      rect(0, 0, this.width, this.height);
      pop();
    }
}