// Router module

define(function(){

    var internals = {};
    var externals = {};

    internals.routes = {
        myFirstRoute: {
            hash: '#first',
            controller: 'my-controller'
        },

        mySecondRoute: {
            hash: '#second',
            controller: 'my-other-controller'
        }
    };

    internals.defaultRoute = 'myFirstRoute';
    internals.currentHash = '';

    externals.start = function(){
        
        window.location.hash = window.location.hash || internals.routes[internals.defaultRoute].hash;
        setInterval(hashCheck, 1000);
    }

    function hashCheck(){

        //nothing to do if rout has not changed
        if (window.location.hash === internals.currentHash){
            return;
        };    

        //find the current route name
        var routeName = Object.keys(internals.routes).find(function(name){
            return window.location.hash === internals.routes[name].hash;
        });

        // load default route if invalid
        if(!routeName) {
            loadDefaultRoute();
            return;
        };

        // load route if valid 
        loadController(internals.routes[routeName].controller);

    }

    function loadController(controllerName){
        
        internals.currentHash = window.location.hash;
        
        require(['controllers/' + controllerName], function(controller){

            try {
                
                controller.start();

            } catch (error) {
                console.log(error.stack);
                loadDefaultRoute();
            }
        });
    }

    function loadDefaultRoute(){

        window.location.hash = internals.routes[internals.defaultRoute].hash;
        loadController(internals.routes[internals.defaultRoute].controller);
    }

    return externals;
});