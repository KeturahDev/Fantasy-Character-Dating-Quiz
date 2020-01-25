$(document).ready(function () {
  $("form#quiz").submit(function (event) {
    var q1 = parseInt($("#q1").val());
    var q2 = parseInt($("#q2").val());
    var q3 = parseInt($("#q3").val());
    var q4 = parseInt($("#q4").val());
    var q5 = parseInt($("#q5").val());
    var q6 = parseInt($("#q6").val());

    var score = q1 + q2 + q3 + q4 + q5 + q6
    var placeholder = 9000000
    score += placeholder;

    var scoreString = String(score);
    babyYoda = scoreString[1]
    yoda = scoreString[2]
    hanSolo = scoreString[3]
    ash = scoreString[4]
    bran = scoreString[5]
    hitler = scoreString[6]

    if (babyYoda > yoda && babyYoda > hanSolo && babyYoda > ash && babyYoda > bran && babyYoda > hitler) {
      $(".mecha-hitler").hide();
      $(".ash").hide();
      $(".han-solo").hide();
      $(".yoda").hide();
      $(".baby-yoda").show();
      $(".king-hotwheels").hide();
    } else if (yoda > babyYoda && yoda > hanSolo && yoda > ash && yoda > bran && yoda > hitler) {
      $(".king-hotwheels").hide();
      $(".ash").hide();
      $(".han-solo").hide();
      $(".yoda").show();
      $(".baby-yoda").hide();
      $(".mecha-hitler").hide();
    } else if (hanSolo > babyYoda && hanSolo > yoda && hanSolo > ash && hanSolo > bran && hanSolo > hitler) {
      $(".ash").hide();
      $(".king-hotwheels").hide();
      $(".han-solo").show();
      $(".yoda").hide();
      $(".baby-yoda").hide();
      $(".mecha-hitler").hide();
    } else if (ash > babyYoda && ash > hanSolo && ash > yoda && ash > bran && ash > hitler) {
      $(".han-solo").hide();
      $(".mecha-hitler").hide();
      $(".ash").show();
      $(".yoda").hide();
      $(".baby-yoda").hide();
      $(".king-hotwheels").hide();
    } else if (bran > babyYoda && bran > hanSolo && bran > ash && bran > yoda && bran > hitler) {
      $(".yoda").hide();
      $(".mecha-hitler").hide();
      $(".king-hotwheels").bran();
      $(".han-solo").hide();
      $(".ash").hide();
      $(".baby-yoda").hide();
    } else if (hitler > babyYoda && hitler > hanSolo && hitler > ash && hitler > bran && hitler > yoda) {
      $(".baby-yoda").hide();
      $(".mecha-hitler").show();
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