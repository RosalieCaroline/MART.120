function setup() {
    createCanvas(500, 600);
  }
  
  function draw() {
    background(210);
    strokeWeight(1);
    stroke('black')
    fill(50);
    rect(150,0,200,350)
    fill(255,255,255);
    ellipse(250,100,150,230);
    fill(50);
    rect(175,0,150,60)
    fill(255,255,255);
    rect(230,215,40,70)
    fill(173,216,230)
    circle(280,75,25)
    fill(173,216,230)
    circle(220,75,25)
    fill(255,182,253)
    triangle(250,100,235,120,265,120)
    line(270,155,230,155)
    line(270,155,280,145)
    line(230,155,220,145)
    strokeWeight(5)
    point(220,75)
    point(280,75)
    stroke('grey')
    point(242,75)
    point(257,75)
    point(250,145)
    point(235,162)
    point(265,162)
    stroke('black')
    textAlign(CENTER);
    fill('chartreuse')
    textFont('MS Gothic')
    textSize(65);
    text("Self-Portrait", 250, 425);
    textAlign(CENTER);
    fill('white');
    textFont('Times New Roman')
    textSize(30);
    text("by Rosalie Carter", 250, 460)
    
    
  }