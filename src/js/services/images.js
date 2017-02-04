
function ImagesService ($http) {

  const SERVER = 'https://instaclonez-backend.herokuapp.com';

  let vm = this;
  vm.getAllImages = getAllImages;
  vm.getImage = getImage;
  vm.getComments = getComments;
  vm.secureImageLink = secureImageLink;

  function getAllImages() {
    return $http.get(`${SERVER}/images`)
  };

  function getImage(id) {
    return $http.get(`${SERVER}/images/${id}`)
  };

  function getComments(id) {
    return $http.get(`${SERVER}/images/${id}`)
  }

  function secureImageLink (url) {
    if (url.includes("https")) {
      return url;
    } else {
      let splitLink = url.split(":");
      console.log('splitlink', splitLink);
      let secureLink = splitLink[0] + "s:" + splitLink[1];
      console.log("images.js secureLink", secureLink)
      return secureLink;
      }
  }

}

ImagesService.$inject = ['$http'];
export { ImagesService };
