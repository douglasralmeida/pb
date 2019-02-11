/*!
 * Portal da BH Sul
 * Douglas Rodrigues de Almeida
 * douglasralmeida@live.com
 */

var app = angular.module('PortalBHSul', []);
var appSanitize = angular.module('AppSanitize', ['ngSanitize']);
var ver = "Versão prerelease";

//Controlador genérico
app.controller('padraoCtrl',  function($scope) {
	$scope.exibirPagina = false;

	$scope.navbarCarregada = function() {
		$scope.exibirPagina = true;
	};
});

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

//Controlador da página de atalhos
app.controller('atalhosCtrl',  function($scope, $http) {
	$scope.exibirPagina = false;
	$scope.pagina = 2;

	$scope.navbarCarregada = function() {
		$scope.exibirPagina = true;
	};
	
	$http.get("data/links.json").then(function(response) {
		$scope.dados = response.data.links;
	});
});

//Controlador do banco de conhecimentos
app.controller('conhecimentoCtrl',  function($scope, $http) {
	$scope.exibirPagina = false;
	$scope.pagina = 3;

	$scope.navbarCarregada = function() {
		$scope.exibirPagina = true;
	};

	$http.get("/bc/categorias.json").then(function(response) {
		$scope.dados = response.data;
	}, function(error) {
		alert(error.message);
	});
});	

//Controlador do labs
app.controller('labsCtrl',  function($scope) {
	$scope.exibirPagina = false;
	$scope.pagina = 4;

	$scope.navbarCarregada = function() {
		$scope.exibirPagina = true;
	};
});

//Controlador da central de downloads
app.controller('downloadsCtrl',  function($scope, $http) {
	$scope.categorias = [];
	$scope.exibirPagina = false;
	$scope.pagina = 1;

	$scope.navbarCarregada = function() {
		$scope.exibirPagina = true;
	};
	
	$http.get("download/categorias.json").then(function(response) {
		$scope.categorias = response.data.categorias;
	});
});

var cat = getUrlParameter('cat');

appSanitize.controller('listaDonwloadsCtrl', function($scope, $http) {
	$scope.exibirPagina = false;

	$scope.navbarCarregada = function() {
		$scope.exibirPagina = true;
	};

	$http.get("download/categorias.json").then(function(response) {
		$scope.id = cat;
		$scope.titulo = response.data.categorias[cat].nome;
		$scope.itens = response.data.categorias[cat].itens;
	});
});

var id = getUrlParameter('id');	

appSanitize.controller('detalheDonwloadCtrl', function($scope, $http) {
	$scope.exibirPagina = false;
	$scope.isx86x64 = false;

	$scope.navbarCarregada = function() {
		$scope.exibirPagina = true;
	};

	$http.get("download/itens/" + id + "/info.json").then(function(response) {
		$scope.data = response.data;
		$scope.nomeBaixar = function(platform, count) {
			if (count < 2)
				return "Baixar";
			else {
				$scope.isx86x64 = true;
				if (platform == "x86")
					return "Baixar versão de 32 bits";
				else if (platform == "x64")
					return "Baixar versão de 64 bits";
				else if (platform == "all")
					return "Baixar";
			}
		};
		$scope.nomeId = function(codigo) {
			if (codigo == "detalhes")
				return "Detalhes";
			else if (codigo == "reqsis")
				return "Requisitos de Sistema";
			else if (codigo == "instalinstruc")
				return "Instruções de Instalação";
			else if (codigo == "resrelac")
				return "Recursos Relacionados";
			return "Sem descrição";
		};
	});
});

//BC
var tipo = getUrlParameter('tipo');

appSanitize.controller('indiceBCCtrl', function($scope, $http) {
	$scope.exibirPagina = false;

	$scope.navbarCarregada = function() {
		$scope.exibirPagina = true;
	};

	$http.get("bc/data/" + tipo + ".json").then(function(response) {
		$scope.titulo = "Banco de Conhecimento - " + response.data.titulo;
		$scope.dados = response.data.categorias;
	});
});

appSanitize.controller('artigoBCCtrl', function($scope, $http, $location) {
	$scope.exibirPagina = false;

	$scope.navbarCarregada = function() {
		$scope.exibirPagina = true;
	};
	$http.get("/bc/servicos.json").then(function(response) {
		$scope.servicos = response.data;
	});
	$http.get("/bc/categorias.json").then(function(response) {
		$scope.categorias = response.data;
	});
	$http.get("/bc/artigos/" + id + ".html").then(function(response) {
		$scope.artigoexiste = true;
		$scope.bcid = id;
		$scope.arquivohtml = response.data;
		$scope.secoes = [];
		manipularHtml($scope.arquivohtml);
	}, function(response) {
		$scope.artigoexiste = false;
	});

	getServicoNome = function(servicoid) {
		var serviconome = "";

		$scope.servicos.forEach(function(item, index) {
			if (item.sigla == servicoid) 
				serviconome = item.nome;
		});
		return serviconome;
	}

	pesquisarCat = function(categoria) {			
		$scope.categorias.forEach(function(item, index) {
			if (item.id == categoria[0]) {
				$scope.categoria = item.sigla;
				$scope.categorianome = item.nome;					
			}
		});
	}

	pesquisarServicos = function(servicos) {
		var arrayServicos = servicos.split(",");
		var nomes = "";

		arrayServicos.forEach(function(item, index) {
			nomes = nomes + getServicoNome(item);				
			if (index < arrayServicos.length-1)
				nomes = nomes + ", ";
		});
		$scope.aplicase = nomes;
	}

	manipularHtml = function (htmldata) {			
			var parser = new DOMParser();
			var data = parser.parseFromString(htmldata, "text/html");
			var h3elems = [];

			$scope.titulo = data.querySelector('meta[name="DC.Title"]').getAttribute("content");
			$scope.id = data.querySelector('meta[name="DC.Identifier"]').getAttribute("content");
			$scope.ultimarev = new Date(data.querySelector('meta[name="DC.Modified"]').getAttribute("content"));
			$scope.rev = data.querySelector('meta[name="BC.NumRevisao"]').getAttribute("content");
			$scope.tags = data.querySelector('meta[name="DC.Subject"]').getAttribute("content");
			$scope.paginaurl = $location.absUrl();
			$scope.estaDescontinuado = (data.querySelector('meta[name="BC.estaDescontinuado"]').getAttribute("content") == 'true');
			$scope.subcategoria = data.querySelector('meta[name="DC.IsPartOf"]').getAttribute("content");
			if (data.querySelector('meta[name="DC.Relation"]').getAttribute("content").startsWith("aplicase"))
				$scope.relacaplicase = data.querySelector('meta[name="DC.Relation"]').getAttribute("content");
			pesquisarCat($scope.subcategoria);
			pesquisarServicos($scope.relacaplicase.substring(9, $scope.relacaplicase.length));
			manipularTags($scope.tags);
			h3elems = data.querySelectorAll('h3');
			for (var i = 0; i < h3elems.length; i++) {
				$scope.secoes.push(h3elems[i].innerHTML);
			}
		};

	manipularTags = function(tags) {
		$scope.tags = $scope.tags.split(",");
	};
});