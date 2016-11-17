import { SERVER } from '../server';

function AddController ($scope, $http, $state){

	$scope.addImage = function (image){
		$http.post(SERVER, image).then(function (response){
			$state.go('home');
		});
	};
};

AddController.$inject = ['$scope', '$http', '$state'];
export { AddController };