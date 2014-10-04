(function() {
	'use strict';

	var app = angular.module('product-directives', []);

	app.directive('productTabs', function(){

		var tabCtrl = function() {
			this.tab = 1;

			this.isSet = function(checkTab) {
				return this.tab === checkTab;
			};

			this.setTab = function(setTab) {
				this.tab = setTab;
			};
		};

		return {
			restrict: 'A',
			templateUrl: 'partials/product-tabs.html',
			controller: tabCtrl,
			controllerAs: 'tab'
		};
	});

	app.directive('productReviews', function(){
		return {
			restrict: 'A',
			templateUrl: 'partials/product-reviews.html'
		};
	});

	app.directive('productCreateReview', function(){
		return {
			restrict: 'E',
			templateUrl: 'partials/product-reviews-create.html',
			controller: function() {
				this.review = {};

				this.addReview = function(product) {
					product.reviews.push(this.review);
					this.review = {};
				};
			},
			controllerAs: 'reviewCtrl'
		};
	});

	app.directive('productGallery', function(){

		var ReviewCtrl = function() {
			this.current = 0;

			this.setCurrent = function(imageNumber) {
				this.current = imageNumber || 0;
			};
		};

		return {
			restrict: 'A',
			templateUrl: 'partials/product-gallery.html',
			controller: ReviewCtrl,
			controllerAs: 'gallery'
		};

	});

})();