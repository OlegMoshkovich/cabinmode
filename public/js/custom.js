$( document ).ready(function() {
    console.log( "ready!" );
    
   $( "#setup-expand" ).click(function() {
   $( ".setup-desc" ).slideToggle( "slow");
   if((this).text == "Expand"){
        $( "#setup-expand" ).text( "Collapse" );
   }else{
      $( "#setup-expand" ).text( "Expand" ) ;
   }
});
   
   $( "#footing-expand" ).click(function() {
   $( ".footing-desc" ).slideToggle( "slow");
   if((this).text == "Expand"){
        $( this ).text( "Collapse" );
   }else{
      $( this).text( "Expand" ) ;
   }
   
   
});
   
    
});