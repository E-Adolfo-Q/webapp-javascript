/*
*Principal modulo app angularjs
*/
var app = angular.module('WebApp',['ngRoute']);
/*
 *Configuración de la rutas
 * 
*/
app.config(function($routeProvider){
  $routeProvider
  .when("/",{templateUrl:'template/home.html',controller:"PageCtrl"})
  .when("/about",{templateUrl:"template/about.html",controller:"PageCtrl"})
  .when("/faq",{templateUrl:"template/faq.html",controller:"PageCtrl"})
  .when("/pricing",{templateUrl:"template/pricing.html",controller:"PageCtrl"})
  .when("/services",{templateUrl:"template/services.html",controller:"PageCtrl"})
  .when("/contact",{templateUrl:"template/contact.html",controller:"PageCtrl"})
  .when("/blog",{templateUrl:"template/blog.html",controller:"BlogCtrl"})
  .when("/blog/post",{templateUrl:"template/blog_item.html",controller:"BlogCtrl"})
  .otherwise({templateUrl:"template/404.html",controller:"PageCtrl"}); 
});
/*
 Controller de la page blog
*/
app.controller('BlogCtrl',function($scope,$location){
  $scope.messageBlog = 'Esta pagina es un Blog'
  console.log('Blog controller esta en ejecución'); 
});
/*
  Controller de toda la pages restante
*/
app.controller('PageCtrl',function($scope,$location/* $http */){
   
   $scope.message = "Este es la pagina Home";
   $scope.messagePrincing = "Nuestras opciones de precios";
   $scope.messageServ ="Mostrar la tabla de servcio";

   $scope.go = function(path){
     $location.path(path);
   }; 

   console.log('Page controller esta en ejecución');  
   $('.carousel').carousel({
    interval: 5000
  });

  $('.tooltip-social').tooltip({
    selector: "a[data-toggle=tooltip]"
  });

});