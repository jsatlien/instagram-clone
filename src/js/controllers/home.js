function HomeController ($scope, $http) {
	$scope.images = [];

	function init () {
		$http.get(SERVER).then(function (response){
			$scope.images = response.data;
		});
	}
	init();
};



HomeController.$inject = ['$scope', '$http'];
export { HomeController };