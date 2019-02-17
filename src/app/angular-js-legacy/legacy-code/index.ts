import * as angular from 'angular';

export const LegacyComponent = {
  controller: function() {
    this.version = angular.version.full;
  },
  template: '<div>This is AngularJS {{$ctrl.version}} component</div>',
};

export const AngularJsAppModule = angular
  .module('app', [])
  .component('legacyComponent', LegacyComponent).name;
