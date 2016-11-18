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

  $scope.addLike = function (image) {
    console.log(image)
    if (image.like_count === null) {
      image.like_count = 0;
    }
    image.like_count++;
    let updateImage = $http.patch(SERVER + '/images/' + image.id, image);
    console.log(updateImage)
  }

  $scope.delete = function (image) {
  $http.delete(SERVER + '/images/' + image.id).then(function (resp) {
      console.log(resp);

    $scope.images = $scope.images.filter(function (x) {
       return x.id !== image.id
    });
  });
  $state.go('home');
  };
}

DetailController.$inject = ['$scope', '$http', '$stateParams', '$state'];
export { DetailController };
