var spa = (function() {
    var initModule = function ( $container ) {
        $container.html(
            '<h1>It\'s work!'
        );
    };

    return {
        initModule:initModule 
    };
}());