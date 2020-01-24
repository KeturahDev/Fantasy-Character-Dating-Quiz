$(document).ready(function () {
  $("form#quiz").submit(function (event) {
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q2").val());
    var q3 = parseInt($("#q3").val());
    var q4 = parseInt($("#q4").val());
    var q5 = parseInt($("#q5").val());
    var q6 = parseInt($("#q6").val());

    var score = q1 + q2 + q3 + q4 + q5 + q6

    if (score > 25) {
      $(".mecha-hitler").show();
      $(".ash").hide();
      $(".han-solo").hide();
      $(".yoda").hide();
      $(".baby-yoda").hide();
      $(".king-hotwheels").hide();
    } else if (score <= 25 && score > 20) {
      $(".king-hotwheels").show();
      $(".ash").hide();
      $(".han-solo").hide();
      $(".yoda").hide();
      $(".baby-yoda").hide();
      $(".mecha-hitler").hide();
    } else if (score <= 20 && score > 15) {
      $(".ash").show();
      $(".king-hotwheels").hide();
      $(".han-solo").hide();
      $(".yoda").hide();
      $(".baby-yoda").hide();
      $(".mecha-hitler").hide();
    } else if (score <= 15 && score > 10) {
      $(".han-solo").show();
      $(".mecha-hitler").hide();
      $(".ash").hide();
      $(".yoda").hide();
      $(".baby-yoda").hide();
      $(".king-hotwheels").hide();
    } else if (score <= 10 && score > 5) {
      $(".yoda").show();
      $(".mecha-hitler").hide();
      $(".king-hotwheels").hide();
      $(".han-solo").hide();
      $(".ash").hide();
      $(".baby-yoda").hide();
    } else if (score = 5) {
      $(".baby-yoda").show();
      $(".mecha-hitler").hide();
      $(".king-hotwheels").hide();
      $(".ash").hide();
      $(".han-solo").hide();
      $(".yoda").hide();
    } else {
      console.log(error);
      $(".han-solo").hide();
      $(".mecha-hitler").hide();
      $(".ash").hide();
      $(".yoda").hide();
      $(".baby-yoda").hide();
      $(".king-hotwheels").hide();
    }
    console.log(score);
    event.preventDefault();
  });
});