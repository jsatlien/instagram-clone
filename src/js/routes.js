function routerConfig ($stateProvider, $urlRouterProvider){
	$stateProvider
		.state('home', {
			url: '/',
			templateUrl: 'templates/home.tpl.html',
			controller: 'HomeController as home',

		})

		.state('add',{
			url: '/add',
			templateUrl: 'templates/add.tpl.html',
			controller: 'AddController as add',

		})

		.state('about',{
			url: '/about',
			templateUrl: 'templates/about.tpl.html'
		})

		.state('detail', {
			url: '/detail/:id',
			templateUrl: 'templates/detail.tpl.html',
			controller: 'DetailController as detail'
		});



	$urlRouterProvider.otherwise('/');
};

routerConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
export { routerConfig };
