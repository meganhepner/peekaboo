$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").fadeToggle();
    $("#walrus-hidden").fadeToggle();
  });

  $(".loremfade").click(function(){
    $(".lorem-hidden").fadeToggle();
  });
});


