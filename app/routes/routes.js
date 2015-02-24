
RFapp
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'views/main/main.html',
            controller : 'MainCtrl'
        })
            .when('/:detail', {
                templateUrl : 'views/detail/detail.html',
                controller : 'DetailCtrl'
            })
            .otherwise({
                redirectTo : '/error'
            })
    })