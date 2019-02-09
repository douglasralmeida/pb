/*!
 * Portal da BH Sul
 * Douglas Rodrigues de Almeida
 * douglasralmeida@live.com
 */

var app = angular.module('PortalBHSul', []);
var ver = "Versão prerelease";

//Controlador da página inicial
app.controller('paginicialCtrl',  function($scope, $http) {
	$scope.listaatalhos = [];
	$scope.listalateral = [];
	$scope.exibirPagina = false;
	$scope.erro = false;
	$scope.versao = ver;

	$scope.navbarCarregada = function() {
		$scope.exibirPagina = true;
	};

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

//Controlador da página de formulários
app.controller('docsCtrl',  function($scope, $http) {
	$scope.dados = [];
	$scope.exibirPagina = false;
	$scope.tipodoc = ["ODT", "PDF"];
	$scope.fileimg = ["img/odt.png", "img/pdf.png"];
	$scope.pagina = 0;

	$scope.navbarCarregada = function() {
		$scope.exibirPagina = true;
	};

	$http.get("/data/docs.json").then(function(response) {
		$scope.dados = response.data.docs;
	}, function(error) {
		alert(error.message);
	});
});

//Controlador do banco de conhecimentos
app.controller('conhecimentoCtrl',  function($scope, $http) {
	$scope.pagina = 3;

	$http.get("/bc/categorias.json").then(function(response) {
		$scope.dados = response.data;
	}, function(error) {
		alert(error.message);
	});
});