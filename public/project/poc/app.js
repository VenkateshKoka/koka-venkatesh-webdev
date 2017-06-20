(function () {
    angular.module('pocApp',['ngRoute', "textAngular"])
        .config(configuration);

    function configuration($routeProvider) {
        //console.log('hekjflj');
        $routeProvider
            .when('/', {
                templateUrl: './mainpage.html',
                controller: 'pocController',
                controllerAs: 'model'
                // resolve :{
                //     currentUser : checkCurrentUser
                // }
            })
            .when('/recipe/:recipeId', {
                templateUrl: './recipeDescription.view.client.html',
                controller: 'recipeController',
                controllerAs: 'model'
                // resolve :{
                //     currentUser : checkCurrentUser
                // }
            })
    }
    
    // function pocController($http) {
    //     var model= this;
    //     var key = "8515bd4cd542f2ee041606f0bdaaa7b9";
    //     model.search= search;
    //     model.name = "test";
    //
    //     function search(title) {
    //         var url = "http://api.brewerydb.com/v2/beers/?key=8515bd4cd542f2ee041606f0bdaaa7b9&styleId=15";
    //         $http.get(url).then(function (response) {
    //             console.log(response);
    //         }).then(function (data) {
    //             console.log(data);
    //         });
    //     }
    // }
})();