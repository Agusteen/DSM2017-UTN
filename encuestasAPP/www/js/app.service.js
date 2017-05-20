angular.module('encuestasApp')
.service('encuestasSvc', function($q) {
  var mockData = [
    // datos de prueba
  ];
  this.getEncuestas = function() {
    return $q.resolve(_.cloneDeep(mockData));
  };
});
