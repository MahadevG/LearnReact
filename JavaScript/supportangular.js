import * as angular from 'angular';
/**
 * @ngInject
 * */
export function valAddColumnDuplicateName() {
  return {
    require: 'ngModel',
    restrict: 'A',
    link: function valAddColumnDuplicateNameLink(scope, elem, attrs, ctrl) {
      ctrl.$validators.valAddColumnDuplicateName = function (modelValue, viewValue) {
        var input = scope.$eval(attrs.valAddColumnDuplicateName);
        var existing_names = [];
        angular.forEach(input['list'], function (addColDef) {
          addColDef.COLUMN && existing_names.push(addColDef.COLUMN);
        });
        var ignore_index = input['ignoreIndex'];
        if (existing_names && viewValue) {
          existing_names.splice(ignore_index, 1);
          var curr_index = existing_names.indexOf(viewValue);
          return curr_index === -1;
        }
        return true;
      };
    }
  };
}
