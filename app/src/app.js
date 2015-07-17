angular
	.module('GameFly', ['ngMaterial'])
	.config(function ($mdThemingProvider, $mdIconProvider) {

		$mdIconProvider
			.defaultIconSet("./assets/svg/avatars.svg", 128)
			.icon("menu", "./assets/svg/menu.svg", 24)
			.icon("share", "./assets/svg/share.svg", 24)
			.icon("google_plus", "./assets/svg/google_plus.svg", 512)
			.icon("hangouts", "./assets/svg/hangouts.svg", 512)
			.icon("twitter", "./assets/svg/twitter.svg", 512)
			.icon("phone", "./assets/svg/phone.svg", 512);

		$mdThemingProvider.theme('default')
			.primaryPalette('deep-orange')
			.accentPalette('green');

	})
	.controller('AppController', function () {
		this.products = [{
			image: 'http://placehold.it/400x300',
			title: 'Batman: Arkham Knight',
			video: 'https://cdn1.gameflycdn.com/merch/Video/480p/product-5007751-4.mp4',
			poster: 'https://cms.gameflycdn.com/merchandising/live/Design/Product/5006814/rendered.clean-video.960w.jpg'
		}, {
				image: 'http://placehold.it/400x300',
				title: 'Witcher: Wild Hunt',
				video: 'https://cdn1.gameflycdn.com/merch/Video/480p/product-5006815-2.mp4',
				poster: 'https://cms.gameflycdn.com/merchandising/live/Design/Product/5006815/rendered.clean-video.960w.jpg'
			}, {
				image: 'http://placehold.it/400x300',
				title: 'Batman: Arkham Knight',
				video: 'https://cdn1.gameflycdn.com/merch/Video/480p/product-5007751-4.mp4',
				poster: 'https://cms.gameflycdn.com/merchandising/live/Design/Product/5006814/rendered.clean-video.960w.jpg'
			}, {
				image: 'http://placehold.it/400x300',
				title: 'Batman: Arkham Knight',
				video: 'https://cdn1.gameflycdn.com/merch/Video/480p/product-5007751-4.mp4',
				poster: 'https://cms.gameflycdn.com/merchandising/live/Design/Product/5006814/rendered.clean-video.960w.jpg'
			}, {
				image: 'http://placehold.it/400x300',
				title: 'Batman: Arkham Knight',
				video: 'https://cdn1.gameflycdn.com/merch/Video/480p/product-5007751-4.mp4',
				poster: 'https://cms.gameflycdn.com/merchandising/live/Design/Product/5006814/rendered.clean-video.960w.jpg'
			}, {
				image: 'http://placehold.it/400x300',
				title: 'Batman: Arkham Knight',
				video: 'https://cdn1.gameflycdn.com/merch/Video/480p/product-5007751-4.mp4',
				poster: 'https://cms.gameflycdn.com/merchandising/live/Design/Product/5006814/rendered.clean-video.960w.jpg'
			}];
	});