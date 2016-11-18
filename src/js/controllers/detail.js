import { SERVER } from "../server";

function DetailController ($scope, $http, $stateParams, $state) {
  $scope.image = {};

  function init () {
    let url = (SERVER + '/images/') + $stateParams.id;
    $http.get(url).then((resp) => {
      $scope.image = resp.data;
      console.log(resp.data)
    });
  };

  init();

  $scope.removeModal = function () {
    $state.go('home')

  }
}

DetailController.$inject = ['$scope', '$http', '$stateParams', '$state'];
export { DetailController };
