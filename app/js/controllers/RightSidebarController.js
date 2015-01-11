'use strict';

app.controller('RightSidebarController',
    function ($scope, $rootScope, $location, categoriesService, townsService) {
        $scope.categories = categoriesService.getCategories();
        $scope.towns = townsService.getTowns();

        $scope.categoryClicked = function (clickedCategoryId) {
            $scope.selectedCategoryId = clickedCategoryId;
            $rootScope.$broadcast("categorySelectionChanged", clickedCategoryId);
        };

        $scope.townClicked = function (clickedTownId) {
            $scope.selectedTownId = clickedTownId;
            $rootScope.$broadcast("townSelectionChanged", clickedTownId);
        };

        $scope.showRightSidebar = function () {
            return ($location.path()=="/" || $location.path()=="/user/home");
        };
    }
);
