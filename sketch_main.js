//main javascript file that manages all the instances

// let sketch_1 = new p5(sketch1, document.getElementById('mainCanvas'));
let currentSketch = 1; //could also be array that you cycle through

function switchSketches(){
    //reset the sketch canvases
    let canvases = document.getElementsByClassName('p5Canvas');
    for (let c of canvases){
        c.remove(); //deletes the canvases
    }
  
    //display the new sketch
    if(currentSketch == 1){
        currentSketch = 2; //update the variable that tells you what sketch you're on
        let sketch_2 = new p5(sketch2, document.getElementById('mainCanvas')); //make new sketch
    } else {
        currentSketch = 1;
        let sketch_1 = new p5(sketch1, document.getElementById('mainCanvas'));
    }
}

// let sketch1 = function(p) {
//     let x = 100;
//     let y = 100;
  
//     p.setup = function() {
//       p.createCanvas(600, 400);
//     };
  
//     p.draw = function() {
//       p.background(0);
//       p.fill(255);
//       p.rect(x, y, 50, 50);
//     };
//   };

// let sketch_1 = new p5(sketch1, document.getElementById('mainCanvas'));
  