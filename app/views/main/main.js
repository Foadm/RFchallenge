RFapp
    .controller('MainCtrl', function($scope,$filter,makeRequest){
        $scope.street = null;
        $scope.city = null;
        $scope.state = null;

        $scope.submit =  function(){
            var sortedDates = makeRequest.sortDates($scope.startdt, $scope.enddt);
            makeRequest.getLocation($scope.street, $scope.city , $scope.state)
                .then(function(result){
                    $scope.lat = result.lat;
                    $scope.lng = result.lng;
                        makeRequest.getData(sortedDates,$scope.lat,$scope.lng  )
                            .then(function (result) {
                                $scope.results = result;
                            });
                });
        }
        //console.log($scope.sortDates);






        $scope.today = function() {
            $scope.startdt = new Date();
        };
        $scope.today();

        $scope.clear = function () {
            $scope.startdt = null;
        };
        $scope.startDay = $filter('date')($scope.startdt, 'shortDate');

        $scope.toggleMin = function() {
            $scope.minDate = $scope.minDate ? null : new Date();
        };
        $scope.toggleMin();

        $scope.openStart = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.startOpened = true;
        };
        $scope.openEnd = function($event) {
            $event.preventDefault();
            $event.stopPropagation();
            $scope.endOpened = true;
        };
        $scope.dateOptions = {
            formatYear: 'yy',
            startingDay: 1
        };
    });