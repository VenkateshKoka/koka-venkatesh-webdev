/**
 * Created by venkateshkoka on 5/28/17.
 */
(function () {
    angular
        .module('WAM')
        .controller('websiteNewController', websiteNewController);

    function websiteNewController($routeParams,
                                  $location,currentUser,
                                  websiteService) {
        var model = this;

        // model.userId = $routeParams['userId'];
        model.userId = currentUser._id;
        model.createWebsite = createWebsite;

        function init() {
            //model.websites = websiteService.findAllWebsitesForUser(model.userId);
            websiteService
                .findAllWebsitesForUser(model.userId)
                .then(renderWebsites);
            function renderWebsites(websites) {
                model.websites = websites;
            }

        }
        init();

        function createWebsite(website) {
            websiteService
                .createWebsite(website, model.userId)
                .then(function () {
                    $location.url('/website');
            });


            // function userError() {
            //     model.errorinfo = "Website cannot be created";
            // }
        }
    }
})();