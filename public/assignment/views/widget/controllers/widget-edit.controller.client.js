/**
 * Created by venkateshkoka on 5/28/17.
 */
(function () {
    angular
        .module('WAM')
        .controller('widgetEditController',widgetEditController);

    function widgetEditController($routeParams, $location,currentUser, widgetService) {
        var model=this;
        //model.userId=$routeParams['userId'];
        model.userId = currentUser._id;
        model.websiteId=$routeParams['websiteId'];
        model.pageId=$routeParams['pageId'];
        model.widgetId=$routeParams['widgetId'];

        // model.widget=widgetService.findWidgetById(model.widgetId);

            widgetService
                .findWidgetById(model.widgetId)
                .then(renderWidget);

            function renderWidget(widget) {
                model.widget = widget;
                model.name=model.widget.type;
                model.size=model.widget.size;
                model.url=model.widget.url;
                model.width=model.widget.width;
                model.text=model.widget.text;
                model.rows=model.widget.rows;
                model.formatted=model.widget.formatted;
                model.placeholder=model.widget.placeholder;
            }



        model.editHeading=editHeading;
        model.deleteWidget=deleteWidget;
        model.editImage=editImage;
        model.editYouTube=editYouTube;
        model.editText= editText;

        function editText() {
            var editT={
                _id:model.widget._id,
                type:model.name,
                text:model.text,
                rows:model.rows,
                formatted:model.formatted,
                placeholder:model.placeholder
            }
            widgetService.updateWidget(model.widgetId,editT).then(function () {
                $location.url('/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
            })
        }

        function editHeading() {
            var wd={
                _id:model.widget._id,
                type:model.name,
                text:model.text,
                size:model.size,
                pageId:model.widget.pageId
            };
            widgetService.updateWidget(model.widgetId,wd).then(function () {
                $location.url('/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
            })

        }

        function deleteWidget() {
            widgetService.deleteWidget(model.pageId,model.widgetId).then(function () {
                $location.url(+'/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
            })

        }

        function editImage() {
            var wd={
              _id:model.widget._id,
                type:model.name,
                url:model.url,
                width:model.width,
                pageId:model.widget.pageId
            };
            widgetService.updateWidget(model.widgetId,wd).then(function () {
                $location.url('/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
            })

        }

        function editYouTube() {
            var wd={
                _id:model.widget._id,
                type:model.name,
                url:model.url,
                width:model.width,
                pageId:model.widget.pageId
            };
            widgetService.updateWidget(model.widgetId,wd).then(function () {
                $location.url('/website/'+model.websiteId+'/page/'+model.pageId+'/widget');
            })

        }
    }
})();