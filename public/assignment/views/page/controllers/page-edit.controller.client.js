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
        model.pages = pageService.findPageByWebsiteId(model.websiteId);
        model.page = pageService.findPageById(model.pageId);



        function deletePage() {
            pageService.deletePage(model.pageId);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
        }

        function edit() {
            var newPage={
                _id:model.page._id,
                name:model.page.name,
                description:model.page.description,
                websiteId:model.page.websiteId
            };
            pageService.updatePage(model.pageId,newPage);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
        }
    }
})();
