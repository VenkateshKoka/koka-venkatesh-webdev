(function () {
    angular
        .module('WAM')
        .service('websiteService', websiteService);

    function websiteService($http) {
        this.findAllWebsitesForUser = findAllWebsitesForUser;
        this.findWebsiteById = findWebsiteById;
        this.deleteWebsite = deleteWebsite;
        this.createWebsite = createWebsite;
        this.updateWebsite = updateWebsite;

        // var websites = [
        //     { "_id": "123", "name": "Facebook",    "developerId": "456", "description": "Lorem" },
        //     { "_id": "234", "name": "Tweeter",     "developerId": "456", "description": "Lorem" },
        //     { "_id": "456", "name": "Gizmodo",     "developerId": "456", "description": "Lorem" },
        //     { "_id": "890", "name": "Go",          "developerId": "123", "description": "Lorem" },
        //     { "_id": "567", "name": "Tic Tac Toe", "developerId": "123", "description": "Lorem" },
        //     { "_id": "678", "name": "Checkers",    "developerId": "123", "description": "Lorem" },
        //     { "_id": "789", "name": "Chess",       "developerId": "234", "description": "Lorem" }
        // ];

        function createWebsite(website,userId) {

            var url = '/api/assignment/user/'+userId+'/website';
            // console.log(url);
            return $http.post(url,website).then(function (response) {
                //console.log('KJXD'+response.data);
                return response.data;
            })

            // website._id = (new Date()).getTime() + "";
            // websites.push(website);
        }

        function deleteWebsite(websiteId,userId) {
            console.log("into client service");
            var url = "/api/assignment/user/"+userId+"/website/"+websiteId;
            return $http
                .delete(url,websiteId)
                .then(function (response) {
                    return response.data;
            })

            // var website = findWebsiteById(websiteId);
            // var index = websites.indexOf(website);
            // websites.splice(index, 1);
        }

        function findWebsiteById(userId,websiteId) {
            var url = "/api/assignment/user/"+userId+"/website/"+websiteId;
            return $http.get(url).then(function (response) {
                return response.data;
            })

            // return websites.find(function (website) {
            //     return website._id === websiteId;
            // });
        }

        function updateWebsite(websiteId, website) {

            var url = "/api/assignment/user/"+website.developerId+"/website/"+websiteId;
            return $http.put(url,website).then(function (response) {
                return response.data;

            });
        }

        function findAllWebsitesForUser(userId) {

            var url = "/api/assignment/user/"+userId+"/website";
            return $http.get(url).then(function (response) {
                return response.data;
            })

            // var results = [];
            //
            // for(var v in websites) {
            //     if(websites[v].developerId === userId) {
            //         websites[v].created = new Date();
            //         websites[v].accessed = new Date();
            //         results.push(websites[v]);
            //     }
            // }
            //
            // return results;
        }
    }
})();
