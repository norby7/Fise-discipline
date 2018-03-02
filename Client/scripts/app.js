var app;
(function (app_1) {
    app_1.moduleName = 'app';
    var app = angular.module(app_1.moduleName, ['ngRoute']);
})(app || (app = {}));
var app;
(function (app_2) {
    var app = angular.module(app_2.moduleName);
    app.constant('routes', getRoutes());
    app.config(['$routeProvider', 'routes', routeConfigurator]);
    function routeConfigurator($routeProvider, routes) {
        routes.forEach(function (r) {
            $routeProvider.when(r.url, r.config);
        });
        $routeProvider.otherwise({ redirectTo: '/home' });
    }
    function getRoutes() {
        return [
            {
                url: '/home',
                config: {
                    controller: "Home", controllerAs: 'vm',
                    templateUrl: 'app/home/home.html',
                    //icon: "fa-home",
                    title: 'Pagina de start'
                }
            }
        ];
    }
})(app || (app = {}));
var app;
(function (app) {
    var Home = /** @class */ (function () {
        function Home() {
            this.message = 'Salut';
        }
        return Home;
    }());
    angular.module(app.moduleName).controller('Home', Home);
})(app || (app = {}));
//# sourceMappingURL=app.js.map