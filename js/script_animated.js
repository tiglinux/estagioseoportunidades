//using setInterval() to make an image slider

//function newDate(){
//console.log(new Date());};
//setInterval(newDate, 3000);  

//the above code would console.log the date every 3seconds 

//$(selector).animate(obj,time,callback);
//callback-do something after the animation is complete

$(document).ready(function() {
  //seInterval animate margin-left and the last slide go to the first position (0px) 

  var width = 720;
  var animationSpeed = 1000;
  var pause = 3000;
  var currentSlide = 1;
  // try and configure all the variables so that you can change it at any point( things of the same type at the same place)

  var $slider = $("#slider");
  var $slideContainer = $slider.find('.slides');
  var $slides = $slideContainer.find('.slide');

  //the jQuery selector is used only once and the code is very efficient as you are CACHING THE DOM
  var interval;
  //have to define the variable outside startSlider() to have it in the scope of a function call

  function startSlider() {
  interval =  setInterval(function() {
      $($slideContainer).animate({
        "margin-left": "-=" + width
      }, animationSpeed, firstSlide);
    }, pause);

    function firstSlide() {
      currentSlide++;
      if (currentSlide === $slides.length) {
        currentSlide = 1;
        $slideContainer.css("margin-left", 0);
      }
    }
  }
  
  function stopSlider(){
    clearInterval(interval);
  }
  $slider.on("mouseenter", stopSlider).on("mouseleave", startSlider);

  startSlider();
});