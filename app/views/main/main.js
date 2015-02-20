RFapp
    .controller('MainCtrl', function($scope,makeRequest){
        $scope.street = null;
        $scope.city = null;
        $scope.state = null;
        $scope.submit =  function(){
            makeRequest.conversion($scope.street, $scope.city , $scope.state);
        }
    });