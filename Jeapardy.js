var points = 0;






onEvent("button4", "click", function( ) {
  setScreen("screen2");
  
});
onEvent("button1", "click", function( ) {
  setScreen("screen3");
});
onEvent("button2", "click", function( ) {
  setScreen("screen4");
});
onEvent("button3", "click", function( ) {
  setScreen("screen5");
});
onEvent("button5", "click", function( ) {
  setScreen("screen6");
});
onEvent("button6", "click", function( ) {
  setScreen("screen7");
});
onEvent("button7", "click", function( ) {
  setScreen("screen8");
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
onEvent("button19","click", function( ) {
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















