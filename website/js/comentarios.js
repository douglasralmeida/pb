/*!
 * Sistema de Feedback do Portal da BHSul
 * Douglas Rodrigues de Almeida
 * douglasralmeida@live.com
 */

var app = angular.module('enviarComentarios', []);

app.controller('formController', function ($scope, $http) {
    $scope.formData = {};
		
    $scope.processarForm = function() {
		$http({
            method  : 'POST',
            url     : 'http://localhost:8080/',
            data    : $scope.formData
        }).then(function successCallback(response) {
			console.log('ok');
			console.log(response);
		}, function errorCallback(response) {
			console.log('erro');
			console.log(response);
		});
	}
});

angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById("ComentariosApp"), ['enviarComentarios']);
});