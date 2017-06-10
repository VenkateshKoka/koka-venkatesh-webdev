/**
 * Created by venkateshkoka on 5/28/17.
 */
(function () {
    angular
        .module('WAM')
        .controller('widgetListController',widgetListController);

    function widgetListController($routeParams, $sce, widgetService) {
        var model = this;
        model.userId=$routeParams['userId'];
        model.websiteId=$routeParams['websiteId'];
        model.pageId=$routeParams['pageId'];
        model.widgetId=$routeParams['widgetId'];

        // model.widgets = widgetService.findWidgetsByPageId(model.pageId);

        widgetService.findWidgetsByPageId(model.pageId).then(function (widgets) {
            model.widgets = widgets;
        });

        model.trust = trust;
        model.getYouTubeEmbedUrl = getYouTubeEmbedUrl;
        model.widgetUrl = widgetUrl;

        function widgetUrl(widget) {
            var url = 'views/widget/templates/widget-'+widget.widgetType.toLowerCase()+'.view.client.html';
            return url;
        }

        function getYouTubeEmbedUrl(linkUrl) {
            var embedUrl = "https://www.youtube.com/embed/";
            var linkUrlParts = linkUrl.split('/');
            embedUrl += linkUrlParts[linkUrlParts.length - 1];
            return $sce.trustAsResourceUrl(embedUrl);
        }

        function trust(html) {
            // scrubbing the html
            return $sce.trustAsHtml(html);
        }
    }
})();