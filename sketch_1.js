/*
 * @name Instantiation
 * @description Create a p5 instance, which keeps all variables
 * out of the global scope of your page.
 */
let sketch1 = function(p) {
    let x = 100;
    let y = 100;
  
    p.setup = function() {
      p.createCanvas(600, 400);
    };
  
    p.draw = function() {
      p.background(0);
      p.fill(255);
      p.rect(x, y, 50, 50);
    };
  };
  
//   let sketch_1 = new p5(sketch1);
  
  // Compare to "global mode"
  // let x = 100;
  // let y = 100;
  
  // function setup() {
  //   createCanvas(200,200);
  // }
  
  // function draw() {
  //   background(0);
  //   fill(255);
  //   ellipse(x,y,50,50);
  // }
  