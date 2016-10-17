/*!
 * Gestão de Feedback do Portal da BHSul
 * Douglas Rodrigues de Almeida
 * douglasralmeida@live.com
 */		
var app = angular.module('GestaoFeedbackApp', []);
 
app.controller('feedbacksCtrl', function($scope, $http) {
    $http.get('http://' + location.host + ':8080')
    .then(function (response) {$scope.feedbacks = response.data.feedbacks;});
});

/*angular.element(document).ready(function() {
    angular.bootstrap(document.getElementById("FeedbackGestaoApp"), ['exibirFeedback']);
});*/