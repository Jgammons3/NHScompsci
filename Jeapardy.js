var points = 0;
var seconds = 15;





onEvent("button4", "click", function( ) {
  setScreen("screen2");

});
onEvent("button1", "click", function( ) {
  setScreen("screen3");
  timedLoop(1000, function() {
  seconds = seconds - 1;
  setText("text_area8", "Time: " + seconds);
  playSound()
if (seconds == 0) {
   stopTimedLoop();
   points = points - 100;
  setText("text_area7", points);
  setScreen("screen2");
}
});
});
onEvent("button2", "click", function( ) {
  setScreen("screen4");
  timedLoop(1000, function() {
  seconds = seconds - 1;
  setText("text_area9", "Time: " + seconds);
if (seconds == 0) {
   stopTimedLoop();
   points = points - 100;
  setText("text_area7", points);
  setScreen("screen2");
}
});
});
onEvent("button3", "click", function( ) {
  setScreen("screen5");
  timedLoop(1000, function() {
  seconds = seconds - 1;
  setText("text_area10", "Time: " + seconds);
if (seconds == 0) {
   stopTimedLoop();
   points = points - 100;
  setText("text_area7", points);
  setScreen("screen2");
}
});
});
onEvent("button5", "click", function( ) {
  setScreen("screen6");
  timedLoop(1000, function() {
  seconds = seconds - 1;
  setText("text_area11", "Time: " + seconds);
if (seconds == 0) {
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
  seconds = seconds - 1;
  setText("text_area12", "Time: " + seconds);
if (seconds == 0) {
   stopTimedLoop();
   points = points - 100;
  setText("text_area7", points);
  setScreen("screen2");
}
});
});
onEvent("button7", "click", function( ) {
  setScreen("screen8");
  timedLoop(1000, function() {
  seconds = seconds - 1;
  setText("text_area13", "Time: " + seconds);
if (seconds == 0) {
   stopTimedLoop();
   points = points - 100;
  setText("text_area7", points);
  setScreen("screen2");
}
}); 
});


onEvent("button100(1)", "click", function( ) {
  setScreen("screen2");
points = points + 100;
setText("text_area7", points);
});

onEvent("button8","click", function( ) {
  setScreen("screen2");
points = points - 100;
setText("text_area7", points);
});

onEvent("button16","click", function( ) {
  setScreen("screen2");
points = points - 100;
setText("text_area7", points);

});

onEvent("button14","click", function( ) {
  setScreen("screen2");
points = points - 100;
setText("text_area7", points);

});
onEvent("button200(1)", "click", function( ) {
  setScreen("screen2");
points = points + 200;
setText("text_area7", points);
});
onEvent("button19","click", function( ) {
  setScreen("screen2");
points = points - 200;
setText("text_area7", points);

});
onEvent("button17","click", function( ) {
  setScreen("screen2");
points = points - 200;
setText("text_area7", points);

});
onEvent("button9","click", function( ) {
  setScreen("screen2");
points = points - 200;
setText("text_area7", points);

});
onEvent("button300(1)", "click", function( ) {
  setScreen("screen2");
points = points + 300;
setText("text_area7", points);
});
onEvent("button10","click", function( ) {
  setScreen("screen2");
points = points - 300;
setText("text_area7", points);

});
onEvent("button15","click", function( ) {
  setScreen("screen2");
points = points - 300;
setText("text_area7", points);

});
onEvent("button18","click", function( ) {
  setScreen("screen2");
points = points - 300;
setText("text_area7", points);

});















