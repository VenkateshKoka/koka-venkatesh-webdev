(function () {
    angular.module('pocApp',[]).controller('pocController',pocController)
    
    function pocController($http) {
        var model= this;
        var key = "8515bd4cd542f2ee041606f0bdaaa7b9";
        model.search= search;
        model.name = "test";
        
        function search(title) {
            var url = "http://api.brewerydb.com/v2/beers/?key=8515bd4cd542f2ee041606f0bdaaa7b9&styleId=15";
            $http.get(url).then(function (response) {
                console.log(response);
            }).then(function (data) {
                console.log(data);
            });
        }
    }
})();