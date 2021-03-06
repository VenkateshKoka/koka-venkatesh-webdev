/**
 * Created by venkateshkoka on 5/28/17.
 */
(function () {
    angular
        .module('WAM')
        .controller('pageEditController', pageEditController);

    function pageEditController($routeParams,currentUser,
                                   $location,
                                   pageService) {
        var model = this;

        // model.userId = $routeParams['userId'];
        model.userId = currentUser._id;

        model.pageId = $routeParams['pageId'];
        model.websiteId = $routeParams.websiteId;

        //event handlers
        model.deletePage = deletePage;
        model.edit = edit;

        function init() {

            pageService
                .findAllPagesForWebsite(model.websiteId)
                .then(function (pages) {
                        model.pages = pages;
            });
            pageService
                .findPageById(model.pageId)
                .then(function (page) {
                        model.page = page;
            });
        }
        init();




        function deletePage(websiteId,pageId) {
            pageService.deletePage(websiteId,pageId).then(function () {
                $location.url('/website/'+websiteId+'/page');
            })

        }

        function edit(pageId,newPage) {
            // var newPage={
            //     _id:model.page._id,
            //     name:model.page.name,
            //     description:model.page.description,
            //     websiteId:model.page.websiteId
            // };
            pageService.updatePage(pageId,newPage).then(function () {
                $location.url('/website/'+model.websiteId+'/page');
            })

        }
    }
})();
