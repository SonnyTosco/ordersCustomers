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
