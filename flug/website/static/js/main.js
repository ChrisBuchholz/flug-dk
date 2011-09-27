;(function() {
    // modified from source: http://api.jquery.com/jQuery.browser/#comment-57066838
    var browser = (function() {
        var userAgent = navigator.userAgent.toLowerCase();
        $.browser.chrome = /chrome/.test(navigator.userAgent.toLowerCase());
        var version = 0;
        var browser = '';

        // is this a version of IE?
        if($.browser.msie){
            userAgent = $.browser.version;
            userAgent = userAgent.substring(0,userAgent.indexOf('.'));	
            version = userAgent;
            browser = 'Internet Explorer';
        }

        // is this a version of Chrome?
        if($.browser.chrome){
            userAgent = userAgent.substring(userAgent.indexOf('chrome/') +7);
            userAgent = userAgent.substring(0,userAgent.indexOf('.'));	
            version = userAgent;
            browser = 'Google Chrome';
            // if it is chrome then jQuery thinks it's safari so we have to tell it it isn't
            $.browser.safari = false;
        }

        // is this a version of Safari?
        if($.browser.safari){
            userAgent = userAgent.substring(userAgent.indexOf('safari/') +7);	
            userAgent = userAgent.substring(0,userAgent.indexOf('.'));
            version = userAgent;
            browser = 'Safari';
        }

        // is this a version of Mozilla?
        if($.browser.mozilla){
            //Is it Firefox?
            if(navigator.userAgent.toLowerCase().indexOf('firefox') != -1){
                userAgent = userAgent.substring(userAgent.indexOf('firefox/') +8);
                userAgent = userAgent.substring(0,userAgent.indexOf('.'));
                version = userAgent;
                browser = 'Firefox';
            }
            // if not then it must be another Mozilla
            else {
            }
        }

        // is this a version of Opera?
        if($.browser.opera){
            userAgent = userAgent.substring(userAgent.indexOf('version/') +8);
            userAgent = userAgent.substring(0,userAgent.indexOf('.'));
            version = userAgent;
            browser = 'Opera';
        }

        return {
            'name': browser.toLowerCase(),
            'version': version
        };
    })();


    // object that defines what the lowest version of a
    // certain browser is suppoted
    supported_browsers = [
        ['firefox', 4],
        ['google chrome', 12],
        ['internet explorer', 9]
    ];

    var is_supported = false;
    for(var i = 0; i < supported_browsers.length; i += 1) {
        var sb = supported_browsers[i];
        if(browser.name == sb[0] && browser.version >= sb[1]) {
            is_supported = true;
        }
    }

    if(!is_supported) {
        var not_supported = $('#not-supported');
        not_supported.css('display', 'block');
        $('#your-browser').text(browser.name + ' ' + browser.version);
        $('#dismis-button').click(function() {
            not_supported.css('display', 'none');
        });
    }
})();
