RFapp
    .controller('DetailCtrl', function($scope,$routeParams,$rootScope,makeRequest){
        var date = [$routeParams.detail];
        makeRequest.getData(date,$rootScope.lat,$rootScope.lng)
            .then(function (responses) {
                $scope.results = responses[0].results;
                var solarNoon = moment($scope.results.solar_noon, "h:mm:ss a");
                var nautical = moment($scope.results.nautical_twilight_end, "h:mm:ss a");
                $scope.rfNauticalAfternoon = (solarNoon - nautical) / (1000*60*60);
            });

    })