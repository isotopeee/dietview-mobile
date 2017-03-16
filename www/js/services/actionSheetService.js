angular
    .module('app.services')
    .service('actionSheetService', actionSheetService);

    function actionSheetService($ionicActionSheet){
        var vm = this;
        vm.showActionSheet = showActionSheet;

        function showActionSheet(buttons, titleText, destructiveText, cancelText, cancelCB, buttonClickedCB){
                return $ionicActionSheet.show({
                buttons: buttons || [],
                destructiveText: destructiveText || '',
                titleText: titleText || '',
                cancelText: cancelText || '',
                cancel: function() {
                    // add cancel code..
                    cancelCB();
                },
                buttonClicked: function(index) {
                    buttonClickedCB(index);
                    return true;
                }
            });
        }
    }

    actionSheetService.$inject = ['$ionicActionSheet'];