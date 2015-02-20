var RFapp = angular.module('RFapp', ['ngRoute'])
        .constant('GOOGLE_KEY', '&key=AIzaSyDZe_KTCzy6shq9lwsOz1yGQVkwDuK6YDI')
        .constant('GEO_LOCATION', 'https://maps.googleapis.com/maps/api/geocode/json?address=')
        .factory('convertAddress', function(getLocation){
            return {
                conversion : function(street,city,state){
                    var fullAddress = street + " " + city + " " + state;
                    getLocation.get(fullAddress);
                }
            }
        })
        .factory('getLocation', ['$http', '$route', function($http){
            return{
                get : function(fullAddress){
                    var path = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + fullAddress + '&key=AIzaSyDZe_KTCzy6shq9lwsOz1yGQVkwDuK6YDI';
                    var request = $http.get(path, { cache: true });
                    return (request.then(handleSuccess));
                }
            }
            function handleSuccess(response){
                debugger;
                return(response.data.results[0].geometry.location);
            }
        }])
    ;
