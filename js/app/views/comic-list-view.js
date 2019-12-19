define(function() {

    var internals = {};
    var externals = {};

    internals.elements = {};
    externals.elements = {};

    externals.render = function(data) {

        renderHeader(data.title);
        renderComic(data.comicUrl, data.caption);
    }

    function renderHeader(title) {

        internals.elements.app = $('#app');
        internals.elements.ctitle = $('#ctitle');
        internals.elements.header = title;
        internals.elements.ctitle.html(internals.elements.header);
        
    }

    function renderComic(comicUrl, caption) {

        internals.elements.comic = $('#comic');
        internals.elements.comic.attr({src: comicUrl, title: caption});
    }

    return externals;
});