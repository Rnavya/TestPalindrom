mainModule.config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider) {
    $routeProvider.when('/index.html',
        {
            templateUrl: '/Search/partials/searchdescription.html',
            controller: 'SearchController as search',
        }).when('/search',
        {
            templateUrl: '/Search/partials/search.html',
            controller: 'SearchController as search'
        }).otherwise({ redirectTo: '/index.html' });
    $locationProvider.html5Mode({
        enabled: true,
        requireBase: false
    });
}]);
