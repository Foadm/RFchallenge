var RFapp = angular.module('RFapp', ['ngRoute'])
    .config(['$httpProvider', function($httpProvider) {
        $httpProvider.defaults.useXDomain = true;
        delete $httpProvider.defaults.headers.common['X-Requested-With'];
    }
    ])
        .factory('makeRequest', ['$http', function($http){
            return{
                conversion : conversion,
                getData : getData,
                getLocation: getLocation

            }
            function conversion(street,city,state){
                var fullAddress = street + " " + city + " " + state;
                getLocation(fullAddress);
            }

            function getLocation(fullAddress){
                var path = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + fullAddress + '&key=AIzaSyDZe_KTCzy6shq9lwsOz1yGQVkwDuK6YDI';
                var request = $http.get(path, { cache: true });
                request.then(handleSuccess)
                        //.then(getData.get(lat,lng))
            }

            function handleSuccess(response){
                var lat = response.data.results[0].geometry.location.lat;
                var lng = response.data.results[0].geometry.location.lng;
                getData(lat,lng);
            }
            function getData(lat,lng){
                var path = 'http://api.sunrise-sunset.org/json?lat' + lat + '&' + 'lng=' + lng;
                console.log(path);
                var request = $http({
                    url: path,
                    dataType: 'jsonp',
                    method: 'GET'
                });
                return (request.then(dataSuccess));
            }
            function dataSuccess(response){
                console.log(response.data)
            }

        }]);
