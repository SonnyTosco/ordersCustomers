var myApp = angular.module('myApp', ['ngRoute']);

// These are client-side routes
myApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateUrl: 'partials/customers.html'
  })
  .when('/orders', {
    templateUrl: 'partials/orders.html'
  })
  .otherwise({
    redirectTo: '/'
  });
})

//Factories
myApp.factory('CustomersFactory', function($http){
  var factory = {};
  return factory;
})

//Client Controllers
myApp.controller('CustomersController', function($scope, CustomersFactory){
  $scope.addCustomer = function(){
    customer_repack = {
      name: $scope.new_customer.name,
      created_at: new Date()
    }
    console.log(customer_repack);
  }
})
