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
        model.createtext = createtext;

        function createtext() {
            console.log("create text");
            var textW={
                type:"TEXT",
                rows:0,
                formatted:false,
                placeholder:"",
                text:""
            };
            widgetService.createWidget(model.pageId,textW).then(function (textWid) {
                console.log(textWid._id);
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget/'+textWid._id);
            })
        }
        function createHeading() {
            console.log("sdscdsc");
            var heading={
                type:"HEADING",
                size:0,
                text:""
            };
            widgetService.createWidget(model.pageId,heading).then(function (wd) {
                console.log(wd._id);
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget/'+wd._id);
            })

        }

        function createhtml() {
            var html={
                type:"HTML",
                text:""
            };
            widgetService.createWidget(model.pageId,html).then(function (wd) {
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget/'+wd._id);

            })
        }

        function createImage() {
            var image={
                type:"IMAGE",
                width:"100%",
                url:""
            };
            widgetService.createWidget(model.pageId,image).then(function (wd) {
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget/'+wd._id);

            })
        }

        function createYouTube() {
            var youtube={
                type:"YOUTUBE",
                width:"100%",
                url:""
            };
            widgetService.createWidget(model.pageId,youtube).then(function (wd) {
                $location.url('/user/'+model.userId+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget/'+wd._id);

            })
        }
    }
})();