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
points = points + 100;
setText("text_area7", points);




  
});














