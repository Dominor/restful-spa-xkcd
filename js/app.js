requirejs.config({
    
    //path to fetch all our modules from
    baseUrl: 'js/app'
});

requirejs(['main'], function() {

    console.log('All modules finished loading');
});