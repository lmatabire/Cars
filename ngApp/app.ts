namespace cars {

    angular.module('cars', ['ui.router', 'ngResource', 'ui.bootstrap']).config((
        $stateProvider: ng.ui.IStateProvider,
        $urlRouterProvider: ng.ui.IUrlRouterProvider,
        $locationProvider: ng.ILocationProvider
    ) => {
        // Define routes
        $stateProvider
            .state('home', {
                url: '/',
                templateUrl: '/ngApp/views/home.html',
                controller: cars.Controllers.HomeController,
                controllerAs: 'controller'
            })
            .state('about', {
                url: '/about/:id',
                templateUrl: '/ngApp/views/about.html',
                controller: cars.Controllers.AboutController,
                controllerAs: 'controller'
            })
            .state('addCar', {
              url: '/addCar',
              templateUrl: '/ngApp/views/addcar.html',
              controller: cars.Controllers.AddCarController,
              controllerAs: 'controller'
            })
            .state('editCar', {
              url: '/editCar/:id',
              templateUrl: '/ngApp/views/editcar.html',
              controller: cars.Controllers.EditCarController,
              controllerAs: 'controller'
            })
            .state('notFound', {
                url: '/notFound',
                templateUrl: '/ngApp/views/notFound.html'
            });

        // Handle request for non-existent route
        $urlRouterProvider.otherwise('/notFound');

        // Enable HTML5 navigation
        $locationProvider.html5Mode(true);
    });



}
