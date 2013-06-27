requirejs.config({

    // establish the baseUrl of your JS files, optional
    "baseUrl": "js",

    // Paths are like aliases.  You can alias both paths and file names.
    "paths": {

        // Shortening a long path.
        // Referencing 'lib/detect' will load 'js/some/long/path/detect.js'
        "lib": "some/long/path",

        // remove http
        // Referencing 'jquery' will load the jquery library.
        // jQuery supports AMD define() method so this is all we have to do!
        "jquery": "http://ajax.googleapis.com/ajax/libs/jquery/1.10.1/jquery.min"
    }
});
