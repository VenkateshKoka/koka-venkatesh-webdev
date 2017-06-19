(function () {
    angular
        .module('WAM')
        .controller('websiteListController', websiteListController);

    function websiteListController($routeParams,currentUser,
                                   websiteService) {
        var model = this;

        // model.userId = $routeParams['userId'];
        model.userId = currentUser._id;

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

    }
})();