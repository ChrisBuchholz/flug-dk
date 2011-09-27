;(function() {
    // modified from source: http://api.jquery.com/jQuery.browser/#comment-57066838
    var browser = (function() {
        var userAgent = navigator.userAgent.toLowerCase();
        $.browser.chrome = /chrome/.test(userAgent);
        $.browser.rekonq = /rekonq/.test(userAgent);
        $.browser.midori = /midori/.test(userAgent);
        $.browser.epiphany = /epiphany/.test(userAgent);
        var version = 0;
        var browser = '';

        // is this a version of chrome?
        if($.browser.chrome) {
            userAgent = userAgent.substring(userAgent.indexOf('chrome/') + 7);
            userAgent = userAgent.substring(0, userAgent.indexOf('.'));
            version = userAgent;
            browser = 'google chrome';
            // if it is chrome then jQuery thinks it's safari so we have to tell it it isn't
            $.browser.safari = false;
        }

        // is this a version of rekonq?
        if($.browser.rekonq) {
            userAgent = userAgent.substring(userAgent.indexOf('safari/') + 7);
            userAgent = userAgent.substring(0, userAgent.indexOf('.'));
            version = userAgent;
            browser = 'rekonq';
            // if it is rekonq then jQuery thinks it's safari so we have to tell it it isn't
            $.browser.safari = false;
        }

        // is this a version of midori?
        if($.browser.midori) {
            userAgent = userAgent.substring(userAgent.indexOf('midori/') + 7);
            userAgent = userAgent.substring(0, userAgent.indexOf('.'));
            version = userAgent;
            browser = 'midori';
            // if it is epiphany then jQuery thinks it's mozilla and safari so we have to tell it it isn't
            $.browser.safari = false;
            $.browser.mozilla = false;
        }

        // is this a version of epiphany?
        if($.browser.epiphany) {
            userAgent = userAgent.substring(userAgent.indexOf('epiphany/') + 9);
            userAgent = userAgent.substring(0, userAgent.indexOf('.'));
            version = userAgent;
            browser = 'epiphany';
            // if it is epiphany then jQuery thinks it's mozilla and safari so we have to tell it it isn't
            $.browser.safari = false;
            $.browser.mozilla = false;
        }

        // is this a version of iE?
        if($.browser.msie) {
            userAgent = $.browser.version;
            userAgent = userAgent.substring(0, userAgent.indexOf('.'));	
            version = userAgent;
            browser = 'internet explorer';
        }

        // is this a version of safari?
        if($.browser.safari) {
            userAgent = userAgent.substring(userAgent.indexOf('safari/') + 7);
            userAgent = userAgent.substring(0, userAgent.indexOf('.'));
            version = userAgent;
            browser = 'safari';
        }

        // is this a version of mozilla?
        if($.browser.mozilla) {
            // is it firefox?
            if(navigator.userAgent.toLowerCase().indexOf('firefox') != -1){
                userAgent = userAgent.substring(userAgent.indexOf('firefox/') + 8);
                userAgent = userAgent.substring(0, userAgent.indexOf('.'));
                version = userAgent;
                browser = 'firefox';
            }
            // if not then it must be another mozilla
            else {
            }
        }

        // is this a version of opera?
        if($.browser.opera) {
            userAgent = userAgent.substring(userAgent.indexOf('version/') + 8);
            userAgent = userAgent.substring(0, userAgent.indexOf('.'));
            version = userAgent;
            browser = 'opera';
        }

        return {
            'name': browser,
            'version': version
        };
    })();

    // object that defines what the lowest version of a
    // certain browser is suppoted
    supported_browsers = [
        ['firefox', 4],
        ['google chrome', 12],
        ['internet explorer', 9],
        ['rekonq', 0],
        ['midori', 0],
        ['safari', 5],
        ['epiphany', 3]
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
