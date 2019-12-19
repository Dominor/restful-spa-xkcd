define(['services/comic-list-service', 'views/comic-list-view'], function(currentComicService, currentComicView) {

    var internals = {};
    var externals = {};

    externals.start = function() {

        currentComicService.fetchCurrentComic(function(error, data) {
            if (error) {
                throw Error(error);
            }
            currentComicView.render(data);
        });
    }

    return externals;
});