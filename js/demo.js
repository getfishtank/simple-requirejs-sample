require(['jquery', 'lib/slider'], function($, Slider){

   // wait until document is ready
   $(function(){

       // we'll use this div as our container
       var $container = $('#results');

       // creating a slider
       var slider = new Slider($container);


       // lets bind some clicks
       $('#next').on('click', function(){

           // making a click invoke the slider's next() function
           slider.next();
       });

       $('#previous').on('click', function(){

           // making a click invoke the slider's next() function
           slider.previous();
       });

   });

});
