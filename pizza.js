// Write your Pizza Builder JavaScript in this file.
$(document).ready(function(){

// Default
  var total = 13;
  $(".sauce").toggleClass("sauce-white");
  $(".btn-sauce").removeClass("active");

  $(".crust").toggleClass("crust-gluten-free");
  $(".btn-crust").removeClass("active");

  $(".price li:nth-child(4)").toggle();
  $(".price li:nth-child(5)").toggle();
  $(".price strong").html("$"+total);



// Ends Default


// Los cambios de desaparecer y estilo boton

  $(".btn-pepperonni").on("click",function(i){
    $(".pep").toggle();
    $(".btn-pepperonni").toggleClass("active");
    $(".price li:nth-child(1)").toggle();
    if($(".btn-crust").hasClass("active")) {
      total++;
    }
  });

  $(".btn-green-peppers").on("click",function(i){
    $(".green-pepper").toggle();
    $(".btn-green-peppers").toggleClass("active");
    $(".price li:nth-child(3)").toggle();
    if($(".btn-crust").hasClass("active")) {
      total++;
    }
  });

  $(".btn-mushrooms").on("click",function(i){
    $(".mushroom").toggle();
    $(".btn-mushrooms").toggleClass("active");
    $(".price li:nth-child(2)").toggle();
    if($(".btn-crust").hasClass("active")) {
      total++;
    }
  });

  $(".btn-sauce").on("click",function(i){
    $(".sauce").toggleClass("sauce-white");
    $(".btn-sauce").toggleClass("active");
    $(".price li:nth-child(4)").toggle();
    if($(".btn-crust").hasClass("active")) {
      total+= 3;
    }
  });

  $(".btn-crust").on("click",function(i){
    $(".crust").toggleClass("crust-gluten-free");
    $(".btn-crust").toggleClass("active");
    $(".price li:nth-child(5)").toggle();
    if($(".btn-crust").hasClass("active")) {
      total+= 5;
    }

  });

console.log(total());









});
