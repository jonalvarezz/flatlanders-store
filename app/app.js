(function() {
	'use strict';

	var app = angular.module('gemStore', []);

	app.controller('StoreController', [ '$http', function($http){
		var store = this;
		store.products = [];

		$http.get('/store-products.json').success(function(data){
			store.products = data;
		});
	}]);

	app.directive('productTabs', function(){
		return {
			restrict: 'A',
			templateUrl: 'partials/product-tabs.html',
			controller: function() {
				this.tab = 1;

				this.isSet = function(checkTab) {
					return this.tab === checkTab;
				};

				this.setTab = function(setTab) {
					this.tab = setTab;
				};
			},
			controllerAs: 'tab'
		};
	});

	app.directive('productGallery', function(){
		return {
			restrict: 'A',
			templateUrl: 'partials/product-gallery.html',
			controller: function() {
				this.current = 0;

				this.setCurrent = function(imageNumber){
					this.current = imageNumber || 0;
				};
			},
			controllerAs: 'gallery'
		};

	});

	app.controller('ReviewController', function(){

		this.review = {};

		this.addReview = function(product){
			product.reviews.push(this.review);
			this.review = {};
		};

	});

})();
