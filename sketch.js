var bullet, wall, thickness;
var speed, weight;

function setup() {
  createCanvas(1600, 400);
  thickness = random(22, 83);
  speed = random(223, 321);
  weight = random(30, 52);
  bullet = createSprite(50, 200, 50, 20);
  wall = createSprite(1500, 200, thickness, height/2);
  wall.shapeColor = color(80, 80, 80);
  bullet.velocityX = speed;
}

function draw() {
  background(00, 00, 00);
  bullet.display();
  wall.display();



  if (wall.x - bullet.x < (bullet.width + wall.width)/2){
    bullet.velocityX = 0;
    
    var damage = 0.5 * weight * speed * speed/(thickness * thickness * thickness);

    if (damage > 10){
      wall.shapeColor = color(225, 0, 0);
    }
        
    if (damage < 10){
      wall.shapeColor = color(0, 255, 0);
    }
  }
}