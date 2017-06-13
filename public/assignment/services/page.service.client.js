(function () {
    angular
        .module('WAM')
        .service('pageService', pageService);

    function pageService($http) {
        this.createPage = createPage;
        this.findAllPagesForWebsite = findAllPagesForWebsite;
        this.findPageById = findPageById;
        this.updatePage = updatePage;
        this.deletePage = deletePage;


        // var pages = [
        //     { "_id": "321", "name": "Post 1", "websiteId": "456", "description": "Lorem" },
        //     { "_id": "432", "name": "Post 2", "websiteId": "456", "description": "Lorem" },
        //     { "_id": "543", "name": "Post 3", "websiteId": "456", "description": "Lorem" }
        // ];


        function createPage(websiteId, page) {

            var url = "/api/assignment/website/"+websiteId+"/page";
            return $http.post(url,page)
                .then(function (response) {
                return response.data;
            })

            // page._id = (new Date()).getTime() + "";
            // page.websiteId = websiteId;
            // pages.push(page);
        }

        function deletePage(websiteId,pageId) {

            var url = "/api/assignment/website/"+websiteId+"/page/"+pageId;
            return $http.delete(url,pageId).then(function (response) {
                return response.data;
            })
            // var page = findPageById(pageId);
            // var index = pages.indexOf(page);
            // pages.splice(index, 1);
        }

        function findPageById(pageId) {

            var url = "/api/assignment/page/"+pageId;
            return $http.get(url).then(function (response) {
                return response.data;
            })

            // return pages.find(function (page) {
            //     return page._id === pageId;
            // });
        }

        function findAllPagesForWebsite(websiteId) {

            var url = "/api/assignment/website/"+websiteId+"/page";
            return $http.get(url).then(function (response) {
                return response.data;
            })

            // var results = [];
            // for(var p in pages) {
            //     if(pages[p].websiteId === websiteId) {
            //         pages[p].created = new Date();
            //         pages[p].accessed = new Date();
            //         results.push(pages[p]);
            //     }
            // }
            // return results;
        }
        
        function updatePage(pageId, page) {
            var url = "/api/assignment/page/"+pageId;
            return $http.put(url,page).then(function (response) {
                return response.data;

            });
            // var oldPage = findPageById(pageId);
            // var index = pages.indexOf(oldPage);
            // pages[index]=page;
        }
    }
})();
