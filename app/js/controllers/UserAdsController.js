'use strict';

app.controller('UserAdsController',
    function ($scope, $rootScope, $location, authService, userService, notifyService, pageSize) {
        $scope.adsParams = {
            'startPage': 1,
            'pageSize': pageSize
        };

        $scope.loadUserAds = function () {
            userService.getUserAds(
                $scope.adsParams,
                function success(data) {
                    $scope.ads = data;
                },
                function error(err) {
                    notifyService.showError("Cannot load ads", err);
                }
            );
        };
        $scope.loadUserAds();

        //deactivate ad

        $scope.deactivateAdId = function (deactivatedAdId) {
            $rootScope.$broadcast("deactivateAdClicked", deactivatedAdId);
        };

        $scope.$on("deactivateAdClicked", function (event, deactivatedAdId) {
            userService.deactivateAd(deactivatedAdId,
                function success() {
                    notifyService.showInfo("Advertisement deactivated successfully!");
                },
                function error(err) {
                    notifyService.showInfo(err.error_description);
                });
        });
        $scope.loadUserAds();

    });

