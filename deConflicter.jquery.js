var works = "unknown";

$( document ).ready(function() {
    var $ = jQuery.noConflict(true);
    
    if (typeof jQuery != 'undefined') {
 
      var works = true;
 
    }else{
      
      var works = false;
      console.log("Error! Jquery No Found!")
 
    }
});
