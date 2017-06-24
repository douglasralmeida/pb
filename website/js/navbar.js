/*!
 * Barra de Navegacao do Portal da BHSul
 * Douglas Rodrigues de Almeida
 * douglasralmeida@live.com
 * 
 * Requer jQuery
 */

jQuery(document).ready(function($){
    "use strict";

    $("<div/>").load("widgets/navbar.html").insertBefore($(".conteudo-pagina"));
});