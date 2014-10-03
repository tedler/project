$(function(){

$("#box1").hover(function (e) {
     //This funciton defines what happens on mouse-in or hover.

     $("#box1").hide();
     $("#box2").show();


}, function (e) {
    //This function defines what happens on mouse-out or when the hover is over.
    $("#box1").show();
     $("#box2").hide();

});

})