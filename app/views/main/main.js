RFapp
    .controller('MainCtrl', function($scope,convertAddress){
        $scope.street = null;
        $scope.city = null;
        $scope.state = null;
        $scope.submit =  function(){
            convertAddress.conversion($scope.street, $scope.city , $scope.state);
        }
    });