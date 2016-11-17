function HomeController ($scope, $http) {
	$scope.images = [];

	function init () {
		$http.get(SERVER).then(function (respond){
			$scope.images = respond.data;
		});
	}
	init();
};



HomeController.$inject = ['$scope', '$http'];
export { HomeController };