/**
 * Created by venkateshkoka on 5/28/17.
 */
(function () {
    angular
        .module('WAM')
        .controller('pageEditController', pageEditController);

    function pageEditController($routeParams,
                                   $location,
                                   pageService) {
        var model = this;

        model.userId = $routeParams['userId'];
        model.pageId = $routeParams['pageId'];
        model.websiteId = $routeParams.websiteId;

        //event handlers
        model.deletePage = deletePage;
        model.edit = edit;

        function init() {

            pageService.findAllPagesForWebsite(model.websiteId).then(function (pages) {
                model.pages = pages;
            });
            pageService.findPageById(model.pageId).then(function (page) {
                model.page = page;
            });
        }
        init();




        function deletePage() {
            pageService.deletePage(model.pageId).then(function () {
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
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
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
            })

        }
    }
})();
