var RFapp = angular.module('RFapp', ['ngRoute','ui.bootstrap'])
        .factory('makeRequest', ['$http', function($http, $scope){
            return{
                conversion : conversion,
                getData : getData,
                getLocation: getLocation,
                sortDates : sortDates
            }
            function sortDates(start,end){
                var days = (end-start)/(1000*60*60*24);
                var tomorrow = new Date(start);
                console.log(tomorrow);
                console.log(days);
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
                var path = 'http://cors-anywhere.herokuapp.com/api.sunrise-sunset.org/json?lat=' + lat + '&' + 'lng=' + lng;
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
