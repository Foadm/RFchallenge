
RFapp
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'views/main/main.html',
            controller : 'MainCtrl'
        })
            .otherwise({
                redirectTo : '/error'
            })
    })