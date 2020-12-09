let sketch2 = function(p) {
    let x = 100;
    let y = 100;
  
    p.setup = function() {
      p.createCanvas(600, 400);
    };
  
    p.draw = function() {
      p.background(0, 255, 100);
      p.fill(255,0,200);
      p.rect(x, y, 100, 100);
    };
  };
  
//   let sketch_2 = new p5(sketch2);