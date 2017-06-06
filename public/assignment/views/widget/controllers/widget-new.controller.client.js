/**
 * Created by venkateshkoka on 5/28/17.
 */
(function () {
    angular
        .module('WAM')
        .controller('newWidgetController',newWidgetController);

    function newWidgetController($routeParams, $location, widgetService) {
        var model=this;
        model.websiteId=$routeParams['userId'];
        model.userId=$routeParams['userId'];
        model.pageId=$routeParams['pageId'];

        model.createHeading=createHeading;
        model.createhtml=createhtml;
        model.createImage=createImage;
        model.createYouTube=createYouTube;

        function createHeading() {
            var heading={
                widgetType:"HEADING",
                size:0,
                text:""
            };
            widgetService.createWidget(model.pageId,heading).then(function (wd) {
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget/'+wd._id);
            })

        }

        function createhtml() {
            var html={
                widgetType:"HTML",
                text:""
            };
            widgetService.createWidget(model.pageId,html).then(function (wd) {
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget/'+wd._id);

            })
        }

        function createImage() {
            var image={
                widgetType:"IMAGE",
                width:"100%",
                url:""
            };
            widgetService.createWidget(model.pageId,image).then(function (wd) {
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget/'+wd._id);

            })
        }

        function createYouTube() {
            var youtube={
                widgetType:"YOUTUBE",
                width:"100%",
                url:""
            };
            widgetService.createWidget(model.pageId,youtube).then(function (wd) {
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget/'+wd._id);

            })
        }
    }
})();