﻿module app {
    export const moduleName = 'app';
    const app = angular.module(moduleName, ['ngRoute']);

    app.run((auth: AuthService) => { });

}