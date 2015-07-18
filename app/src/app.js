angular
	.module('GameFly', ['ngMaterial'])
	.config(function ($mdThemingProvider, $mdIconProvider, $sceProvider) {

		$sceProvider.enabled(false);

		$mdIconProvider
			.icon("menu", "./assets/svg/menu.svg", 24)
			.icon("play", "./assets/svg/ic_play.svg", 36)
			.icon("pause", "./assets/svg/ic_pause.svg", 36);

		$mdThemingProvider.theme('default')
			.primaryPalette('deep-orange')
			.accentPalette('indigo');

	})
	.controller('AppController', function ($scope) {

		$scope.products1 = [{
			image: '/assets/image/s1.png',
			title: 'Sleeping Dogs: Definitive Edition',
			video: 'https://cdn1.gameflycdn.com/merch/Video/1080p/product-5008749.mp4'
		}, {
				image: '/assets/image/s2.png',
				title: 'WRC 4: FIA World Rally Championship',
				video: 'https://cdn1.gameflycdn.com/merch/Video/1080p/product-5008929.mp4'
			}, {
				image: '/assets/image/s3.png',
				title: 'Batman: Arkham Knight',
				video: 'https://cdn1.gameflycdn.com/merch/Video/480p/product-5007751-4.mp4'
			}, {
				image: '/assets/image/s1.png',
				title: 'Witcher: Wild Hunt',
				video: 'https://cdn1.gameflycdn.com/merch/Video/480p/product-5006815-2.mp4'
			}, {
				image: '/assets/image/s3.png',
				title: 'Batman: Arkham Knight',
				video: 'https://cdn1.gameflycdn.com/merch/Video/480p/product-5007751-4.mp4'
			}];

		$scope.products2 = [{
			image: '/assets/image/s2.png',
			title: 'Batman: Arkham Knight'
		}, {
				image: '/assets/image/s3.png',
				title: 'Batman: Arkham Knight'
			}, {
				image: '/assets/image/s1.png',
				title: 'Batman: Arkham Knight'
			}, {
				image: '/assets/image/s2.png',
				title: 'Batman: Arkham Knight'
			}, {
				image: '/assets/image/s3.png',
				title: 'Batman: Arkham Knight'
			}, {
				image: '/assets/image/s1.png',
				title: 'Batman: Arkham Knight'
			}, {
				image: '/assets/image/s2.png',
				title: 'Batman: Arkham Knight'
			}];

		$scope.play = function (index) {
			$scope.activeIndex = index;
		};
	}).directive('gfSplashVideo', ['$timeout', function ($timeout) {

		return {
			restrict: 'E',
			template: '<h1 class="game-title font-shadow">{{activeVideo.title}}</h1>' +
			'<video class="game-video" muted ng-src="{{activeVideo.video}}"></video>',
			scope: {
				items: '=',
				activeIndex: '='
			},
			link: function (scope, el) {

				scope.$watch('activeIndex', function (newIndex) {
					if (!angular.isUndefined(newIndex)) {
						// set active video item style
						var $items = angular.element('.my-game');
						var $activeItem = angular.element($items[newIndex]);
						$items.css('border-color', 'transparent');
						$activeItem.css('border-color', '#DD743B');
						// play video
						scope.activeVideo = scope.items[newIndex];
						$timeout(function () {
							el.find('video')[0].play();
						});
					}
				});

				if (angular.isUndefined(scope.activeIndex) && scope.items.length) {
					scope.activeIndex = 0;
				}

				el.find('video').on('ended', function () {
					scope.$apply(function () {
						if (scope.activeIndex === scope.items.length - 1) {
							scope.activeIndex = 0;
						} else {
							scope.activeIndex++;
						}
					});
				});
			}
		};
	}]);