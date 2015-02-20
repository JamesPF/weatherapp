// Directives
weatherApp.directive('weatherList', function() {

  return {
    restrict: 'E',
    templateUrl: 'weather-list.html',
    replace: true,
    scope: {
      weatherDay: '=',
      convertToStandardHigh: '&',
      convertToStandardLow: '&',
      convertToDate: '&',
      dateFormat: '@',
      capitalize: '&',
      convertToMph: '&',
      convertToDirection: '&'
    }
  }

});