(function () {
    angular
        .module('WAM')
        .controller('pageListController', pageListController);

    function pageListController($routeParams,
                                   pageService) {
        var model = this;
        model.userId = $routeParams['userId'];
        console.log(model.userId);
        model.websiteId = $routeParams['websiteId'];
        model.pages = pageService.findPageByWebsiteId(model.websiteId);
    }
})();