RFapp
    .controller('MainCtrl', function($scope,$filter,makeRequest){
        $scope.street = null;
        $scope.city = null;
        $scope.state = null;

        $scope.submit =  function(){
            var sortedDates = makeRequest.sortDates($scope.startdt, $scope.enddt);
            makeRequest.getLocation($scope.street, $scope.city , $scope.state)
                .then(function(result){
                    $scope.locationDays = {
                        lat : result.lat,
                        lng : result.lng,
                        sortedDates : sortedDates
                    }
                        makeRequest.getData($scope.locationDays)
                            .then(function (result) {
                                $scope.sunRise = result.results.sunrise;
                                $scope.sunSet = result.results.sunset;
                                $scope.dayLength = result.results.day_length;
                            });
                });
        }






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