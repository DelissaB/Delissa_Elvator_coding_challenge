// //Elements 

const canvas = document.querySelector('canvas');


// //Length of the canvas/ full page
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const c = canvas.getContext('2d');

c.fillStyle = 'rgba(255, 0, 0 , 0.5)';
c.fillRect(600, 0 , 200, 300);
console.log(c);

// c.beginPath();
// c.moveTo(30, 40);
// c.stroke()



function Elevator(x, y) {
  this.x = x;
  this.y = y;
  
  this.draw = function() {
    c.beginPath(); 
    c.fillStyle = 'purple';
    c.fillRect(600, 0 , 200, 300);
    c.stroke();;
  }
}

var elevator = new Elevator(200, 200)
elevator.draw();

// var circle = new Circle(200, 200);
// // circle.draw();

//added code in here to attempt to do a loop 

var x = Math.random() * innerWidth;
var y = Math.random() * innerHeight;;
var dx = (Math.random() - 0.5) * 20;
var dy = (Math.random() - 0.5) * 20;

console.log(x, y)
console.log(dx, dy);

function animate() {
    requestAnimationFrame(animate);
    c.fillStyle = "red";
    c.fillRect(0, 0, 300, 150);
    c.clearRect(0, 0, innerWidth, innerHeight);
  
    elevator.draw();


    c.beginPath(); 
    c.fillStyle = 'purple';
    c.fillRect(600, 0 , 200, 300);
    c.stroke();

    if (x  > innerWidth || x  < 0) {
          dx = - dx;
        }
    if ( y  > innerHeight || y < 0)  {
          dy = -dy;
        }
        x += dx;
        y += dy;


}

animate();


console.log(x, y)
console.log(dx, dy);


// // Math.random (random value between 0 -1)
// var x = Math.random() * innerWidth;
// var y = Math.random() * innerHeight;;
// //velocity for x and y = dx or dy
// var dx = (Math.random() - 0.5) * 8;
// // to make sure we get a positive number by using math.random
// var dy = (Math.random() - 0.5) * 8;
// var radius = 30
// function animate() {
//   requestAnimationFrame(animate);
//   c.clearRect(0, 0, innerWidth, innerHeight);

//   circle.draw();

// //Arc/Circle
//   c.beginPath(); //prevents connecting paths
//   c.arc(x, y, 30, 0, Math.PI * 2, false);
//   c.strokeStyle = 'blue';
//   c.stroke();
// // will make bounce off all sides of the webpage
  
//   if (x + radius > innerWidth || x - radius < 0) {
//     dx = - dx;
//   }
//   if ( y + radius  > innerHeight || y - radius < 0)  {
//     dy = -dy;
//   }
//   x += dx;
//   y += dy;
// }

// animate();











