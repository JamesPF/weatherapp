// Controllers
weatherApp.controller('homeController', ['$scope', 'cityService', function($scope, cityService) {
  
  $scope.city = cityService.city;
  $scope.$watch('city', function() {
    cityService.city = $scope.city;
  });

}]);

weatherApp.controller('forecastController', ['$scope', '$resource', '$routeParams', 'cityService', function($scope, $resource, $routeParams, cityService) {

  $scope.city = cityService.city;

  $scope.days = $routeParams.days || '2';

  $scope.weatherAPI = $resource('http://api.openweathermap.org/data/2.5/forecast/daily', {
    callback: 'JSON_CALLBACK'}, { get: { method: 'JSONP' }});

  $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, cnt: $scope.days });

  // Converts temperatures from Kelvins to Fahrenheit
  $scope.convertToFahrenheit = function(degK) {

    return Math.round((1.8 * (degK - 273)) + 32);

  }

  // Converts day/time into a readable format
  $scope.convertToDate = function(dt) {

    return new Date(dt * 1000);

  }

  // Capitalizes the first word of each weather description
  $scope.capitalize = function(string) {

    return string.substring(0,1).toUpperCase()+string.substring(1);

  }

  // Converts wind speed from meters per second to miles per hour
  $scope.convertToMph = function(metric) {

    return Math.round(metric * 2.23694);

  }

  // Converts wind direction degrees to direction names
  $scope.convertToDirection = function(degrees) {

    if (degrees > 348.76 || degrees < 11.25) {
      degrees = 'N';
      return degrees;
    } else if ( 11.26 <= degrees && degrees <= 33.75 ) {
      degrees = 'NNE';
      return degrees;
    } else if ( 33.76 <= degrees && degrees <= 56.25 ) {
      degrees = 'NE';
      return degrees;
    } else if ( 56.26 <= degrees && degrees <= 78.75 ) {
      degrees = 'ENE';
      return degrees;
    } else if ( 78.75 <= degrees && degrees <= 101.25 ) {
      degrees = 'E';
      return degrees;
    } else if ( 101.26 <= degrees && degrees <= 123.75 ) {
      degrees = 'ESE';
      return degrees;
    } else if ( 123.76 <= degrees && degrees <= 146.25 ) {
      degrees = 'SE';
      return degrees;
    } else if ( 146.26 <= degrees && degrees <= 168.75 ) {
      degrees = 'SSE';
      return degrees;
    } else if ( 168.76 <= degrees && degrees <= 191.25 ) {
      degrees = 'S';
      return degrees;
    } else if ( 191.26 <= degrees && degrees <= 213.75 ) {
      degrees = 'SSW';
      return degrees;
    } else if ( 213.76 <= degrees && degrees <= 236.25 ) {
      degrees = 'SW';
      return degrees;
    } else if ( 236.26 <= degrees && degrees <= 258.75 ) {
      degrees = 'WSW';
      return degrees;
    } else if ( 258.76 <= degrees && degrees <= 281.25 ) {
      degrees = 'W';
      return degrees;
    } else if ( 281.26 <= degrees && degrees <= 303.75 ) {
      degrees = 'WNW';
      return degrees;
    } else if ( 303.76 <= degrees && degrees <= 326.25 ) {
      degrees = 'NW';
      return degrees;
    } else if ( 326.26 <= degrees && degrees <= 348.75 ) {
      degrees = 'NNW';
      return degrees;
    } else {
      degrees = 'N/A';
      return degrees;
    }

  }

}]);









