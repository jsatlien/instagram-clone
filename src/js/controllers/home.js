import { SERVER } from '../server';

function HomeController ($scope, $http, ImagesService) {

	let vm = this;
	vm.images = [];

	function init () {
		ImagesService.getAllImages().then(function (response){
			vm.images = response.data;
			console.log(vm.images)
		});
	}
	init();
};



HomeController.$inject = ['$scope', '$http', 'ImagesService'];
export { HomeController };
