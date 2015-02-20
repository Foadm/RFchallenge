
RFapp
    .config(function($routeProvider){
        $routeProvider.when('/', {
            templateUrl : 'views/main/main.html',
            controller : 'MainCtrl'
        })
            .when('/countries', {
                templateUrl : 'views/list/list.html',
                controller : 'ListCtrl'
            })
            .when('/countries/:country', {
                templateUrl : 'views/detail/detail.html',
                controller : 'DetailCtrl',
                resolve:{

                }
            })
            .otherwise({
                redirectTo : '/error'
            })
    })