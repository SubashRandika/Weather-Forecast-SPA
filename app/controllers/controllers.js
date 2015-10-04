// CONTROLLERS

weatherApp.controller('homeController', ['$scope', '$location', 'cityService', function($scope, $location, cityService){
    
    $scope.city = cityService.city;
    
    $scope.$watch('city', function(){
        
        cityService.city = $scope.city;
        
    });
    
    $scope.submit = function(){
        
        $location.path('/forecast');
        
    };
    
}]);

weatherApp.controller('forecastController', ['$scope', '$routeParams', 'cityService', 'weatherService', function($scope, $routeParams, cityService, weatherService){
    
    $scope.city = cityService.city;
    $scope.days = $routeParams.days || '2';
    
    $scope.weatherResults = weatherService.getWeather($scope.city, $scope.days);
    
    $scope.convertToFahrenheit = function(kelvinTemp){
        
        return Math.round((kelvinTemp * 1.8) - 459.67);
        
    };
    
    $scope.convertToCelcius = function(kelvinTemp){
        
        return Math.round(kelvinTemp - 273.15);
        
    };
    
    $scope.convertDate = function(epochDate){
        
        return new Date(epochDate * 1000);
        
    };
    
}]);