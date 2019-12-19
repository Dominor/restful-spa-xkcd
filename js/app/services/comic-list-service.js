define(function() {
    var internals = {};
    var externals = {};

    externals.fetchCurrentComic = function(cb) {

        $.ajax({
            url: 'http://dynamic.xkcd.com/api-0/jsonp/comic?callback=?',
            type: 'GET',
            dataType: 'jsonp',
            jsonpCallback: 'xkcddata',
            success: function(results) {
                console.log('Request completed with success.');
                cb(null, {title: results.title, comicUrl: results.img, caption: results.alt});
            },
            error: function(request, statusText, httpError) {
                console.log('Request failed.');
                cb(httpError || statusText);
            }
        });
    };

    return externals;
});