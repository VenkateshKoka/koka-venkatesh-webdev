(function () {
    angular
        .module('WAM')
        .controller('mainController', mainController);

    function mainController(currentUser) {
        var model = this;
        model.message="KOKA"
        model.currentUser = currentUser;
    }
})();