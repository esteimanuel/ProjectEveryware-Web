angular.module("Glassy", ["ui.router"])

.config(function($stateProvider, $urlRouterProvider, $stateProvider)
{
    $stateProvider
    .state('home',
    {
        url: '/home',
        templateUrl: 'view/home.html'
    })
    
    .state('login', 
    {
        url: '/login',
        templateUrl: 'view/login.hmtl',
        controller: 'controller/loginController.js'
    })

    /* list example
        .state('list', 
        {
            url: '/list',
            templateUrl: 'view/list.hmtl',
            controller: 'listcontroller'
        })

        .state('list.item',
        {
            url: '/:item',
            templateUrl: 'view/list.item.hmtl',
            controller: function($scope, $stateParams)
            {
                $scope.item = $statepParams.item;
            }
        })
    */
})