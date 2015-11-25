// Code goes here
var App = angular.module('MyApp',[]);

App.controller('FirstController', function($scope, $http)
{
  var onUserComplete = function(response)
  {
    $scope.user = response.data;
  }
  
  var onError = function(response)
  {
    $scope.error = "This is an error. Could not find this user."
  }
  
  $scope.search = function(username)
  {
    $http.get("https://api.github.com/users/" + username)
          .then(onUserComplete, onError);
  };
  
  $scope.sitename = "Welcome to GitHub users viewer!";
  $scope.username = "angular";
});