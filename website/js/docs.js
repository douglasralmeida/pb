/*!
 * Gerador da Tabela de Modelos de Documentos
 * Douglas Rodrigues de Almeida
 * douglasralmeida@live.com
 */

$(function(){
	var xhr;
	$('#edit-autocomplete').autoComplete({
		minChar: 5,
		source: function(term, suggest){
			term = term.toLowerCase();
			try {xhr.abort(); } catch(e){}
			xhr = jQuery.getJSON("data/docs.json", function(data){
				var suggestions = [];
				var docs = [];
				$.each(data.docs, function(i, grupo) {
					$.each(grupo.itens, function(j, item) {
						docs.push([item.nome, item.link]);
					});
				});
				for (i = 0; i < docs.length; i++)
					if (~docs[i][0].toLowerCase().indexOf(term))
						suggestions.push(docs[i]);
				suggest(suggestions);
			});
		},
		renderItem: function (item, search){
			search = search.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
			var re = new RegExp("(" + search.split(' ').join('|') + ")", "gi");
			return '<div class="autocomplete-suggestion" data-arquivo="'+item[1]+'" data-val="'+item[0]+'">'+item[0].replace(re, "<b>$1</b>")+'</div>';
		},
		onSelect: function(e, term, item){
			window.location.assign(item.data('arquivo'));
		}
	});
});

$(document).ready(function($){
    "use strict";

	jQuery.getJSON("data/docs.json", function(data){
		var code = "";
		$.each(data.docs, function(i, grupo) {
			code += "<a href=\"#categoria" + i + "\">" + grupo.categoria + "</a>";
		});
		$(code).appendTo(".cabecalho");
		
		var code = "";
		$.each(data.docs, function(i, grupo) {
			code += "<h3 id=categoria" + i + ">" + grupo.categoria + "</h3>";		
			code += "<div class=\"tabela-documentos\">";
			$.each(grupo.itens, function(j, item) {
				code += "<a href=\"" + item.link + "\">";
				code += "<img src=\"";
				switch (item.tipo) {
					case 1:
						code += "img/odt.png\" alt=\"ODT\"";
						break;
					case 2:
						code += "img/pdf.png\" alt=\"PDF\"";
						break;
					default:
						code += "\"";
				}
				code += " /><p>" + item.nome + "</p></a>";
			});
			code += "</div>";
		});
		$(code).appendTo(".listagem");
	});
});