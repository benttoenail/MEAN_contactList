//this is the newest angular setup!
var myApp = angular.module('myApp', []);

myApp.controller('appCtrl', ['$scope', '$http', function($scope, $http) {
	console.log('Hello world from the app ctrl!');
}]);