/**
 * Created by venkateshkoka on 5/28/17.
 */
(function () {
    angular
        .module('WAM')
        .controller('profileController', profileController);

    function profileController($location, $routeParams, userService) {

        var model = this;

        model.userId = $routeParams['userId'];

        model.updateUser = updateUser;
        model.deleteUser = deleteUser;
        


         // model.user = userService.findUserById(model.userId);
        userService
            .findUserById(model.userId)
            .then(renderUser, userError);
        
        function updateUser(user) {
            userService.updateUser(user._id, user).then(function () {
                model.message = "User update successful";
            });
        }

        function deleteUser(user) {
            userService
                .deleteUser(user._id)
                .then(function () {
                    $location.url('/');
                }, function () {
                    model.error = "Unable to unregister you";
                });
        }

        function renderUser(user) {
           // console.log(response);
            model.user = user;
        }
        function userError(){

            model.errorinfo = "User not found";
        }

    }
})();