/**
 * Created by venkateshkoka on 5/28/17.
 */
(function(){
    angular
        .module('WAM')
        .factory('userService', userService);

    function userService($http) {
        // var users = [
        //     {_id: "123", username: "alice",    password: "alice",    firstName: "Alice",  lastName: "Wonder"  },
        //     {_id: "234", username: "bob",      password: "bob",      firstName: "Bob",    lastName: "Marley"  },
        //     {_id: "345", username: "charly",   password: "charly",   firstName: "Charly", lastName: "Garcia"  },
        //     {_id: "456", username: "jannunzi", password: "jannunzi", firstName: "Jose",   lastName: "Annunzi" }
        // ];

        var api = {
            createUser: createUser,
            register : register,
            findUserById: findUserById,
            findUserByUsername: findUserByUsername,
            findUserByCredentials: findUserByCredentials,
            findAllUsers : findAllUsers,
            login : login,
            checkAdmin : checkAdmin,
            logout : logout,
            loggedin : loggedin,
            updateUser: updateUser,
            deleteUser:deleteUser,
            unregister : unregister
        };
        return api;

        function logout() {
            var url = "/api/assignment/logout";
            return $http.post(url)
                    .then(function (status) {
                        return status;
                });
        }

        function login(username,password) {
            var url = "/api/assignment/login";
            var credentials = {
                username :username,
                password : password
            }
            return $http.post(url,credentials)
                .then(function (response) {
                    return response.data;
                });
        }

        function loggedin() {
            var url = "/api/assignment/loggedin";
            return $http.get(url)
                        .then(function (response) {
                             return response.data;
                        })
        }

        function checkAdmin() {
            var url = "/api/assignment/checkAdmin";
            return $http.get(url)
                .then(function (response) {
                    return response.data;
                })
        }

        function register(userObj) {
            var url = "/api/assignment/register";
            return $http
                .post(url,userObj)
                .then(function (response) {
                        return response.data;
            })
        }
        function unregister(userObj) {
            var url = "/api/assignment/unregister";
            return $http
                .post(url,userObj)
                .then(function (response) {
                        return response.data;
            })
        }


        function deleteUser(userId) {
            var url = "/api/assignment/user/"+userId;
            return $http.delete(url)
                .then(function (response) {
                    return response.data;
                });
        }

        function updateUser(userId, user) {
            var url = "/api/assignment/user/"+userId;
            return $http
                .put(url,user)
                .then(function (response) {
                return response.data;
            });
        }

        function createUser(user) {

            var url = "/api/assignment/user";
            return $http.post(url,user)
                .then(function (response) {
                   return response.data;
            });
            // user._id = (new Date()).getTime() + "";
            // user.created = new Date();
            // users.push(user);
            // return user;
        }

        function findUserByUsername(username) {

            var url = "/api/assignment/user?username="+username;
            return $http.get(url)
                .then(function (response) {
                    return response.data;
            });
            // var user = users.find(function (user) {
            //     return user.username === username;
            // });
            // if(typeof user === 'undefined') {
            //     return null;
            // }
            // return user;

        }

        function findUserById(userId) {

            var url = "/api/assignment/user/"+userId;
            return  $http.get(url)
                .then(function (response) {
                    var user = response.data;
                    return user;
            })
            // for(var u in users) {
            //     if(users[u]._id === userId)
            //         return users[u];
            // }
            // return null;
        }

        function findUserByCredentials(username, password) {
            var url = "/api/assignment/user?username="+username+"&password="+password;
            return $http.get(url)
                .then(function (response) {
                    console.log(response.data);
                return response.data;
            });
            // for(var u in users) {
            //     var user = users[u];
            //     if( user.username === username &&
            //         user.password === password) {
            //         return user;
            //     }
            // }
            // return null;
        }

        function findAllUsers() {
            var url = "/api/assignment/user";
            return $http
                .get(url)
                .then(function (response) {
                    return response.data;
            })
        }

    }
})();