(function(){
	"use strict";

	angular
		.module("Main",
			["Main.products","Main.product", "Main.cart", "ngRoute"]
		)
		.run(function($rootScope){
			$rootScope.cartProducts = {};
		})

		.config(function($routeProvider){
        	$routeProvider
        		.when("/product/:id", {
        			templateUrl: './products/product.html',
        			controller: 'productController'
        		})
                        .when("/checkout", {
                                templateUrl: "./checkout/checkout.html",
                                controller: "cartController"
                        })
        		.when("/", {
        			templateUrl: './products/products.html',
        			controller: 'productsController'
        		})
        		.otherwise({ redirectTo: '/' });
        })
}());