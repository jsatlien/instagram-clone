import angular from 'angular';

import { HomeController } from './controllers/home';

angular 
	.module('app', ['ui.router'])
	.controller('HomeController', HomeController)