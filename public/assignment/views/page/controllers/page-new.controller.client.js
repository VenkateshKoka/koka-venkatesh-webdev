/**
 * Created by venkateshkoka on 5/28/17.
 */
(function () {
    angular
        .module('WAM')
        .controller('newPageController', newPageController);

    function newPageController($routeParams,
                                  $location,
                                  pageService)
    {
        var model = this;
        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams['websiteId'];
        model.pages = pageService.findPageByWebsiteId(model.websiteId);

        model.create = create;

        function create(name,description) {
            if(name===''||name===null||typeof name==='undefined')
            {
                model.message='Page name is required';
                return;
            }
            var p={
                name:name,
                description:description
            };
            pageService.createPage(model.websiteId,p);
            $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page');
        }
    }
})();