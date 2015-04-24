/jqueryDeConflicter v1.0.0

var works = "unknown";

$( document ).ready(function() {
    
    var olderd = $;
    var $ = jQuery.noConflict(true);
    
    if (typeof jQuery != 'undefined') {
 
      var works = true;
 
    }else{
      
      var $ = olderd
      var works = false;
      console.log("Reset Done!")
 
    }
});
