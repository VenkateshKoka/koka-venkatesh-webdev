(function () {
    angular
        .module('WAM')
        .controller('loginController', loginController);

    function loginController($location, userService) {

        var model = this;

        model.login = login;

        function login(username, password) {
            // var found = userService.findUserByCredentials(username, password);
            userService
                .findUserByCredentials(username, password)
                .then(loginuser,loginError);

            function loginuser(user) {
                if(user === null) {
                    model.message = "sorry,  not found. please try again!";

                } else {
                    $location.url('/user/' + user._id);

                    // $location.url('/login');

                }
            }
            function loginError(user) {
                model.message = "Error!!"

            }


        }
    }
})();