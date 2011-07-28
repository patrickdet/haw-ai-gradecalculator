$(document).ready(function() {

  $("li > a").click(function() {
    if ($(this).hasClass("selected")) {
      $(this).toggleClass("selected");
    } else {
      $(this).parent().parent().children().each(function() {
        $(this).children().removeClass("selected");
      });
      $(this).addClass("selected");
    }
    calculate();
    return false;
  });

  function calculate() {
    var totalGradeWeight = 0.0;
    var points = 0.0;
    var selected = $(".selected");
    selected.each(function() {
      var parent = $(this).parent().parent().parent();
      points += parseFloat($(this).html()) * parent.data("credit-points");
      totalGradeWeight += parent.data("credit-points");
    });
    if (totalGradeWeight == 0) {
      $("#grade").text(0);
    } else {
      $("#grade").text(Math.round((points/totalGradeWeight)*10)/10);
    }
    $("#calculated-points").text("(" + points + " Punkte)");
  }

  $("#calculated-points").click(function() {
    $("#infobox").toggle();
    return false;
  });
});

