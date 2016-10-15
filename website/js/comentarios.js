/*!
 * Sistema de Feedback do Portal da BHSul
 * Douglas Rodrigues de Almeida
 * douglasralmeida@live.com
 */

var app = angular.module('enviarComentarios', []);

app.controller('formController', function ($scope, $http) {
    $scope.formData = {};
		
    $scope.processarForm = function() {
		console.log('enviando:');
		console.log($scope.formData);
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

/*app.controller('FormCtrl', function ($scope, $http) {

	console.log("teste");
	
     var ComentarioData = {
        tipo: "default",
        origem: "padrao",
        detalhes: "default"
    };

    $scope.save = function() {
        ComentarioData = $scope.form;
    };

    $scope.AoEnviar = function() {
        console.log("enviando dados....");
        ComentarioData = $scope.form;
        console.log(ComentarioData);
        $http.post('http://192.168.137.213:8080/', JSON.stringify(data)).success(function(){alert("OK");});
    };

 });
*/