RFapp
    .controller('DetailCtrl', function($scope,$routeParams,$rootScope,makeRequest){
        $scope.date = $routeParams.detail;
        debugger

        makeRequest.getData($scope.date,$rootScope.lat,$rootScope.lng)
            .then(function (result) {
                $scope.results = result;
                //debugger
            });
    })