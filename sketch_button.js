let sketchB = function(p) {
    let butt;
  
    p.setup = function() {
        // p.createCanvas(300, 100);
        butt = p.createButton('switch sketches')
            // .position(p.width/2, p.height/2)
            .mousePressed(switchSketches);
        // p.background(75, 50, 100);
    };
  
    // p.draw = function() {
    //   p.background(75, 50, 100);
    // };
  };
  
  let sketch_Button = new p5(sketchB);