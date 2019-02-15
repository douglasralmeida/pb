/*!
 * Portal da BH Sul
 * Douglas Rodrigues de Almeida
 * douglasralmeida@live.com
 */

var app = angular.module('FeedbackApp', []);
var ver = "Versão 1.0";


//Formulário de envio
app.controller('formCtrl',  function($scope) {
	$scope.estaProcessando = false;

	$scope.processamentoFinalizado = function() {
		$scope.estaProcessando = false;
	};
});