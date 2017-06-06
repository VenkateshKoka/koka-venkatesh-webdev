/**
 * Created by venkateshkoka on 5/28/17.
 */
(function () {
    angular
        .module('WAM')
        .controller('websiteEditController', websiteEditController);

    function websiteEditController($routeParams,
                                   $location,
                                   websiteService) {
        var model = this;

        model.userId = $routeParams['userId'];
        model.websiteId = $routeParams.websiteId;
        model.deleteWebsite = deleteWebsite;
        model.updateWebsite = updateWebsite;

        function init() {
            // model.websites = websiteService.findAllWebsitesForUser(model.userId);
            // model.website = websiteService.findWebsiteById(model.websiteId);
            websiteService
                .findAllWebsitesForUser(model.userId)
                .then(renderWebsites);
            function renderWebsites(websites) {
                model.websites = websites;
            }
            websiteService
                .findWebsiteById(model.userId,model.websiteId)
                .then(editWebsite);
            function editWebsite(website) {
                model.website = website;
            }
        }
        init();

        function deleteWebsite(websiteId) {
            console.log("delete Website");
            var userId = model.userId;
            websiteService
                .deleteWebsite(websiteId,userId)
                .then(function () {

                $location.url('/user/'+model.userId+'/website');
            })

        }
        function updateWebsite(websiteId,website) {
            console.log("came to controller");
            console.log(websiteId+website);
            websiteService
                .updateWebsite(websiteId,website)
                .then(function () {
                $location.url('/user/'+model.userId+'/website');
            })

        }

    }
})();
