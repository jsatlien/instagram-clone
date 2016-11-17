function routerSettings ($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home',{
			url: '/',
			controller: 'HomeController'
		})

	$urlRouterProvider.otherwise('/');
};

routerSettings.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };