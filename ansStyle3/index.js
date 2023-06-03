$(document).ready(function() {
    $('#autoWidth1').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth1').removeClass('cS-hidden1');
        } 
    });
    $('#autoWidth2').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth2').removeClass('cS-hidden2');
        } 
    });
    $('#autoWidth3').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth3').removeClass('cS-hidden3');
        } 
    });
    $('#autoWidth4').lightSlider({
        autoWidth:true,
        loop:true,
        onSliderLoad: function() {
            $('#autoWidth4').removeClass('cS-hidden4');
        } 
    });
      
  });
  