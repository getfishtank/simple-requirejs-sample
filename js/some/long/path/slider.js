define(['jquery', 'lib/detect'], function($, detect){

    "use strict";

    var Slider = function($container) {

// ####################################################################

        // We loaded the 'detect' library by referencing 'lib/detect'.
        // Now we're using functions on it!

        if(detect.is.iOS()){
            alert("So you like iPhones?");
        } else {
            alert("So you're not use an iPhone?");
        }

// #####################################################################

        this.$container = $container;
    };

    Slider.prototype = {

        'next' : function(){
            this.$container.append("<strong>Next</strong>&nbsp;");
        },
        'previous' : function() {
            this.$container.append("<em>Previous</em>&nbsp;");
        }
    };

    return Slider;
});
