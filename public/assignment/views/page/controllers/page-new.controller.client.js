/**
 * Created by venkateshkoka on 5/28/17.
 */
(function () {
    angular
        .module('WAM')
        .controller('newPageController', newPageController);

    function newPageController($routeParams,
                                  $location,currentUser,
                                  pageService)
    {
        var model = this;
        // model.userId = $routeParams['userId'];
        model.userId = currentUser._id;

        model.websiteId = $routeParams['websiteId'];
        model.create = create;
        // model.pages = pageService.findPageByWebsiteId(model.websiteId);
        function init() {
            pageService
                .findAllPagesForWebsite(model.websiteId)
                .then(function (pages) {
                    model.pages = pages;
                });
        }
        init();



        function create(page) {
            pageService
                .createPage(model.websiteId,page)
                .then(function () {
                    $location.url('/website/'+model.websiteId+'/page');
            })

        }
    }
})();