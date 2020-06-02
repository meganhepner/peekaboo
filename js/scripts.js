$(document).ready(function() {
  $(".clickable").click(function() {
    $("#walrus-showing").toggle();
    $("#walrus-hidden").toggle();
  });

  $(".loremfade").click(function(){
    $(".lorem-showing").fadeToggle();
  });
});


