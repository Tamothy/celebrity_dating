$(document).ready(function() {
  $("form#celebrity").submit(function(event) {
    var age = parseInt($("input#age").val());
    var gender = $("select#gender").val();

    if (gender === "male" && age < 18) {
      $("#girlCeleb").show();
    } else if (gender === "male" && age >= 18 $$ age <= 30) {
      ("#girlCeleb2").show();
    } else if (gender === "male" && age > 30) {
      $("#girlCeleb3").show();
    } else if (gender === "female" && age < 18) {
      $("#boyCeleb").show();
    } else if (gender === "female" && age >= 18 && age <= 30) {
      ("#boyCeleb2").show();
    } else if (gender === "female" && age > 30)
      ("#boyCeleb3").show();
    } else {
      alert("Please enter information correctly. Refresh and try again!");
    }
    event.preventDefault();
  });
});
