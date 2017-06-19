(function () {
    angular
        .module('WAM')
        .controller('pageListController', pageListController);

    function pageListController($routeParams,currentUser,
                                   pageService) {

        var model = this;
        // model.userId = $routeParams['userId'];
        model.userId = currentUser._id;

        model.websiteId = $routeParams['websiteId'];


        function init() {
            //model.websites = websiteService.findAllWebsitesForUser(model.userId);
            pageService
                .findAllPagesForWebsite(model.websiteId)
                .then(renderpages);
            function renderpages(pages) {
                model.pages = pages;
            }

        }
        init();



        //model.pages = pageService.findPageByWebsiteId(model.websiteId);
    }
})();