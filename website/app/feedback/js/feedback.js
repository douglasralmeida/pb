/*!
 * Gestão de Feedback do Portal da BHSul
 * Douglas Rodrigues de Almeida
 * douglasralmeida@live.com
 */

var app = angular.module('GestaoFeedbackApp', []);
 
app.controller('feedbacksCtrl', function($scope, $http) {
    $http.get('http://' + location.host + ':8080')
    .then(function (response) {$scope.feedbacks = response.data;});
	
	//$scope.feedbacks = [{"id":1,"tipo":1,"descricao":"Um teste"},{"id":2,"tipo":2,"descricao":"Outro teste"}];
});

$("lv1").listview({
    onListClick: function(_list){
        alert(_list.attr('id'));
}
});

/*angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById("FeedbackGestaoApp"), ['exibirFeedback']);
});*/