var myApp = angular.module('myApp', ['ngRoute']);

// These are client-side routes
myApp.config(function($routeProvider){
  $routeProvider
  .when('/', {
    templateURL: 'partials/customers.html'
  })
  .when('/orders', {
    templateURL: 'partials/orders.html'
  })
  .otherwise({
    redirectTo: '/'
  });
})
