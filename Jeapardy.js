var points = 0;
var seconds = 15;
var seconds2 = 15;
var seconds3 = 15;
var seconds4 = 15;
var seconds5 = 15;
var seconds6 = 15;





onEvent("button4", "click", function( ) {
  setScreen("screen2");

});
onEvent("button1", "click", function( ) {
  setScreen("screen3");
  timedLoop(1000, function() {
  seconds = seconds - 1;
  setText("text_area8", "Time: " + seconds);
if (seconds == 0) {
   stopTimedLoop(0);
   points = points - 100;
  setText("text_area7", points);
  setScreen("screen2");
}
});
});
onEvent("button2", "click", function( ) {
  setScreen("screen4");
  timedLoop(1000, function() {
  seconds2 = seconds2 - 1;
  setText("text_area9", "Time: " + seconds2);
if (seconds2 == 0) {
   stopTimedLoop();
   points = points - 200;
  setText("text_area7", points);
  setScreen("screen2");
}
});
});
onEvent("button3", "click", function( ) {
  setScreen("screen5");
  timedLoop(1000, function() {
  seconds3 = seconds3 - 1;
  setText("text_area10", "Time: " + seconds3);
if (seconds3 == 0) {
   stopTimedLoop();
   points = points - 300;
  setText("text_area7", points);
  setScreen("screen2");
}
});
});
onEvent("button5", "click", function( ) {
  setScreen("screen6");
  timedLoop(1000, function() {
  seconds4 = seconds4 - 1;
  setText("text_area11", "Time: " + seconds4);
if (seconds4 == 0) {
   stopTimedLoop();
   points = points - 100;
  setText("text_area7", points);
  setScreen("screen2");
}
});
});
onEvent("button6", "click", function( ) {
  setScreen("screen7");
  timedLoop(1000, function() {
  seconds5 = seconds5 - 1;
  setText("text_area12", "Time: " + seconds5);
if (seconds5 == 0) {
   stopTimedLoop();
   points = points - 200;
  setText("text_area7", points);
  setScreen("screen2");
}
});
});
onEvent("button7", "click", function( ) {
  setScreen("screen8");
  timedLoop(1000, function(){
  seconds6 = seconds6 - 1;
  setText("text_area13", "Time: " + seconds6);
if (seconds6 == 0) {
   stopTimedLoop();
   points = points - 300;
  setText("text_area7", points);
  setScreen("screen2");
}
}); 
});


onEvent("button100(1)", "click", function( ) {
  setScreen("screen12");
  stopTimedLoop();
points = points + 100;
setText("text_area7", points);
});

onEvent("button8","click", function( ) {
  setScreen("screen10");
  stopTimedLoop();
points = points - 100;
setText("text_area7", points);
});

onEvent("button16","click", function( ) {
  setScreen("screen13");
  stopTimedLoop();
points = points - 100;
setText("text_area7", points);

});

onEvent("button14","click", function( ) {
  setScreen("screen11");
  stopTimedLoop();
points = points - 100;
setText("text_area7", points);

});
onEvent("button200(1)", "click", function( ) {
  setScreen("screen9");
  stopTimedLoop();
points = points + 200;
setText("text_area7", points);
});
onEvent("button19","click", function( ) {
  setScreen("screen11");
  stopTimedLoop();
points = points - 200;
setText("text_area7", points);

});
onEvent("button17","click", function( ) {
  setScreen("screen13");
  stopTimedLoop();
points = points - 200;
setText("text_area7", points);

});
onEvent("button9","click", function( ) {
  setScreen("screen10");
  stopTimedLoop();
points = points - 200;
setText("text_area7", points);

});
onEvent("button300(1)", "click", function( ) {
  setScreen("screen12");
  stopTimedLoop();
points = points + 300;
setText("text_area7", points);
});
onEvent("button10","click", function( ) {
  setScreen("screen13");
  stopTimedLoop();
points = points - 300;
setText("text_area7", points);

});
onEvent("button15","click", function( ) {
  setScreen("screen11");
  stopTimedLoop();
points = points - 300;
setText("text_area7", points);

});
onEvent("button18","click", function( ) {
  setScreen("screen10");
  stopTimedLoop();
points = points - 300;
setText("text_area7", points);

});

onEvent("button100(2)", "click", function( ) {
  setScreen("screen9");
  stopTimedLoop();
points = points + 100;
setText("text_area7", points);
});

onEvent("button11","click", function( ) {
  setScreen("screen10");
  stopTimedLoop();
points = points - 100;
setText("text_area7", points);
});

onEvent("button21","click", function( ) {
  setScreen("screen11");
  stopTimedLoop();
points = points - 100;
setText("text_area7", points);

});

onEvent("button23","click", function( ) {
  setScreen("screen13");
  stopTimedLoop();
points = points - 100;
setText("text_area7", points);

});

onEvent("button200(2)", "click", function( ) {
  setScreen("screen12");
  stopTimedLoop();
points = points + 200;
setText("text_area7", points);
});
onEvent("button24","click", function( ) {
  setScreen("screen11");
  stopTimedLoop();
points = points - 200;
setText("text_area7", points);

});
onEvent("button25","click", function( ) {
  setScreen("screen13");
  stopTimedLoop();
points = points - 200;
setText("text_area7", points);

});
onEvent("button26","click", function( ) {
  setScreen("screen10");
  stopTimedLoop();
points = points - 200;
setText("text_area7", points);

});

onEvent("button300(2)", "click", function( ) {
  setScreen("screen9");
  stopTimedLoop();
points = points + 300;
setText("text_area7", points);
});
onEvent("button13","click", function( ) {
  setScreen("screen13");
  stopTimedLoop();
points = points - 300;
setText("text_area7", points);

});
onEvent("button27","click", function( ) {
  setScreen("screen11");
  stopTimedLoop();
points = points - 300;
setText("text_area7", points);

});
onEvent("button28","click", function( ) {
  setScreen("screen10");
  stopTimedLoop();
points = points - 300;
setText("text_area7", points);

});







onEvent("screen9", "click", function( ) {
  setScreen("screen2");
});
onEvent("screen10", "click", function( ) {
  setScreen("screen2");
});
onEvent("screen11", "click", function( ) {
  setScreen("screen2");
});
onEvent("screen12", "click", function( ) {
  setScreen("screen2");
});
onEvent("screen13", "click", function( ) {
  setScreen("screen2");
});







project 2 below

function setup() {
  createCanvas(600,600);

  

}

function draw() {
  background(220,0,50)
  ellipse(150,150,150,150);
  fill(0);
  
  rect(30,20,55,55)
  fill(500)
  

















