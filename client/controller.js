angular.module('SimpleController',[])

.config('$routerProvider',function($routerProvider){
    $routerProvider
    .when('/view1',{
        templateUrl: 'views/welcome.html',
        controller: 'MySimpleController'
    })
    .when('/view2',{
        templateUrl: 'views/welcome2.html',
        controller: 'MySimpleController'
    })
    .otherwise({ redirectTo:'/view1' });
})
.controller('MySimpleController'['$scope', function($scope){
    $scope.customers = [
        {name: 'Subash Karki', City: 'Birmingham'},
        {name: 'Sunil karki', City:'Madison'},
        {name: 'Bhakta karki', City: 'Nepal'}
    ];
    $scope.addCustomer = function(){
        $scope.customers.push({ 
            name: $scope.newCustomer.name,
            City: $scope.newCustomer.City
        });
    };
}]);