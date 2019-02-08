/*!
 * Portal da BH Sul
 * Douglas Rodrigues de Almeida
 * douglasralmeida@live.com
 */

var app = angular.module('PortalBHSul', []);

app.controller('paginicialCtrl',  function($scope, $http) {
	$scope.listaatalhos = [];
	$scope.listalateral = [];
	$scope.erro = false;
	$scope.versao = "Versão prerelease";

	$scope.listalateral = [{
			"nome": "Atendimento",
			"atalho": "http://10.32.97.205:8080/atendimento",
			"imagem": "capa_atende.svg"
		}, {
			"nome": "Tarefas",
			"atalho": "http://www-get/",
			"imagem": "capa_tarefas.svg"
		}, {
			"nome": "Ponto Eletrônico",
			"atalho": "http://www-sisref/",
			"imagem": "capa_ponto.svg"
		}, {
			"nome": "Novidades",
			"atalho": "novidades.html",
			"imagem": "capa_noticia.svg"
		}];

	$http.get("/data/atalhosprincipais.json").then(function(response) {
		$scope.listaatalhos = response.data.atalhos;
	}, function(error) {
		$scope.erro = true;
	});
});

app.controller('conhecimentoCtrl',  function($scope, $http) {
	$http.get("/bc/categorias.json").then(function(response) {
		$scope.dados = response.data;
	}, function(error) {
		alert(error.message);
	});
});