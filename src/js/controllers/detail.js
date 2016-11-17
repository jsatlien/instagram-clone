import { SERVER } from "../server";

function DetailController ($scope, $http, $stateParams) {
  $scope.image = {};

  function init () {
    let url = SERVER + $stateParams.id;
    $http.get(url).then((resp) => {
      $scope.image = resp.data;
    });
  };

  init();
}

DetailController.$inject = ['$scope', '$http', '$stateParams'];
export { DetailController };
