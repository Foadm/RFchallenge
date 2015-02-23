var RFapp = angular.module('RFapp', ['ngRoute','ui.bootstrap'])
        .factory('makeRequest', ['$http', function($http,$q){
            return{
                getLocation : getLocation,
                getData : getData,
                getLocation: getLocation,
                sortDates : sortDates
            }

            function sortDates(start,end){
                var numberOfDays = Math.ceil((end-start)/(1000*60*60*24));
                var currentDate = moment(start);
                var sortedDates = [];
                for (i=0 ; i <= numberOfDays; i++ ){
                    currentDate = moment(start).add(i, 'days').format('YYYY-MM-DD');
                    sortedDates.push(currentDate)
                }
                return sortedDates;
            }

            function getLocation(street,city,state){
                var fullAddress = street + " " + city + " " + state;
                var path = 'https://maps.googleapis.com/maps/api/geocode/json?address=' + fullAddress + '&key=AIzaSyDZe_KTCzy6shq9lwsOz1yGQVkwDuK6YDI';
                var request = $http.get(path, { cache: true });
                return(request.then(handleSuccess))
            }

            function handleSuccess(response){
                return(response.data.results[0].geometry.location)
            }
            function getData(locationDays){
                var promises = [];
                angular.forEach(locationDay, function(locationDay)){

                };
                    var path = 'http://cors-anywhere.herokuapp.com/api.sunrise-sunset.org/json?lat=' + lat + '&' + 'lng=' + lng + "=" + sortedDates[i];
                    var request = $http.get(path, { cache: true });
                    promises.push(request);

                debugger;
                return $q.all(promises);
            }
        UploadService.uploadQuestion = function(questions){

            var promises = [];

            angular.forEach(questions , function(question) {

                var promise = $http({
                    url   : 'upload/question',
                    method: 'POST',
                    data  : question
                });

                promises.push(promise);

            });

            return $q.all(promises);
        }


        }]);
