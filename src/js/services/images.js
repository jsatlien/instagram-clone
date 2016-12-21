
function ImagesService ($http) {

  const SERVER = 'https://instaclonez-backend.herokuapp.com';

  let vm = this;
  vm.getAllImages = getAllImages;
  vm.getImage = getImage;
  vm.getComments = getComments;

  function getAllImages() {
    return $http.get(`${SERVER}/images`)
  };

  function getImage(id) {
    return $http.get(`${SERVER}/images/${id}`)
  };

  function getComments(id) {
    return $http.get(`${SERVER}/images/${id}`)
  }
}

ImagesService.$inject = ['$http'];
export { ImagesService };
