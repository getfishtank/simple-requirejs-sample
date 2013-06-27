define([], function(){

    var ua = navigator.userAgent.toLowerCase();

    return {
        'is' : {
            'iOS': function () { return !!ua.match(/(iphone|ipod|ipad)/); },
            'iPad': function () { return !!ua.match(/(ipad)/); },
            'iPhone': function () { return !!ua.match(/(iphone|ipod)/); },
            'blackBerry': function () { return !!ua.match(/blackberry/); },
            'android': function () { return !!ua.match(/android/); },
            'webos': function () { return !!ua.match(/webos/); },
            'windowsPhone': function () { return !!ua.match(/webos/); }
        }
    }
});
