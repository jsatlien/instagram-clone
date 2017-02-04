import { SERVER } from '../server';

function HomeController ($scope, $http, ImagesService) {

	let vm = this;
	vm.images = [];

	function init () {
		ImagesService.getAllImages().then(function (response) {
			let resp = response.data;
			resp.forEach(function (image) {
				image.url = ImagesService.secureImageLink(image.url);
			})
			vm.images = resp;
			console.log(vm.images)
		});
	}


	init();

};



HomeController.$inject = ['$scope', '$http', 'ImagesService'];
export { HomeController };
