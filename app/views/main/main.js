RFapp
    .controller('MainCtrl', function($scope,$filter,$rootScope, makeRequest){
        $scope.street = null;
        $scope.city = null;
        $scope.state = null;

        $scope.submit =  function(){
            var sortedDates = makeRequest.sortDates($scope.startdt, $scope.enddt);
            makeRequest.getLocation($scope.street, $scope.city , $scope.state)
                .then(function(result){
                    $rootScope.lat = result.lat;
                    $rootScope.lng = result.lng;
                        makeRequest.getData(sortedDates,$rootScope.lat,$rootScope.lng)
                            .then(function(result) {
                                $scope.results = result;
                                $scope.dates = sortedDates;

                            });
                });
            console.log($scope.dates);
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