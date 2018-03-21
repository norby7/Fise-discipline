﻿/// <reference path="../config/config.ts" />

module app {
    class Home {
        constructor(private $http: ng.IHttpService, private $location: ng.ILocationService) {
            this.getData();
        }

        getData() {
            this.$http.get('/home')
                .then(data => {
                    console.log(data);
                    this.data = data.data;
                }, err => {
                    console.log(err);
                });
        }

        data;// = 'Salut';

    }

    angular.module(moduleName).controller('Home', <any>Home);
}