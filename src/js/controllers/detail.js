import { SERVER } from "../server";

function DetailController ($scope, $http, $stateParams, $state) {
  $scope.image = {};
  $scope.comments = [];

  function init () {
    let url = (SERVER + '/images/') + $stateParams.id;
    let commentsUrl = (SERVER + '/images/' + $stateParams.id + '/comments')
    $http.get(url).then((resp) => {
      $scope.image = resp.data;
    $http.get(commentsUrl).then((response) => {
      $scope.comments = response.data;
    });
      console.log($stateParams.id)
    });
  };

  function initComments() {
    let commentsUrl = (SERVER + '/images/' + $stateParams.id + '/comments');
    $http.get(commentsUrl).then((response) => {
      $scope.comments = response.data;
    });
  };

  function initImages() {
		$http.get(SERVER + '/images').then(function (response){
			$scope.images = response.data;
		});
	};

  init();

  $scope.removeModal = function () {
    $state.go('home')

  };

  $scope.addLike = function (image) {
    console.log(image)
    if (image.like_count === null) {
      image.like_count = 0;
    }
    image.like_count++;
    let updateImage = $http.patch(SERVER + '/images/' + image.id, image);
    console.log(updateImage)
  };

  $scope.delete = function (image) {
  $http.delete(SERVER + '/images/' + image.id).then(function (resp) {
      console.log(resp);

    $scope.images = $scope.images.filter(function (x) {
       return (image.id !== x.id)
    console.log($scope.images)
    });
  });
  $state.go('home');
  initImages();
  };

  $scope.addComment = (commentContent) => {
    let newComment = { content: commentContent };
    $http.post(SERVER + '/images/' + $stateParams.id + '/comments', newComment).then( function(resp) {
      $scope.comments.push(newComment);
      initComments()
      console.log(newComment);

    });
    $scope.message = '';
  };

  $scope.removeComment = (comment) => {
    $http.delete(SERVER + '/images/' + $stateParams.id + '/comments/' + comment.id).then( function (resp) {
      $scope.comments = $scope.comments.filter( function (index) {
        return (comment.id !== index.id);
      });
    });
  };
};

DetailController.$inject = ['$scope', '$http', '$stateParams', '$state'];
export { DetailController };
