$(document).ready(function(){
  $("#prev").on("mouseenter", function() {
      $("#prev-curled").removeClass("invisible");
  }).on("mouseleave", function() {
      $("#prev-curled").addClass("invisible");
  });

  $("#next").on("mouseenter", function() {
      $("#next-curled").removeClass("invisible");
  }).on("mouseleave", function() {
      $("#next-curled").addClass("invisible");
  });
});

