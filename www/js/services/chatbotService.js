angular
    .module('app.services')
    .service('chatbotService', chatbotService);

    function chatbotService(httpService){
        var vm = this;
        vm.messages = [];
        vm.sendMessage = sendMessage;
        vm.chatbotName = 'Mia';

        function sendMessage(type, message){
            var URL = [window.localStorage.getItem('UrlBase'), 'bot'].join('/');
            var message_object = {
                timestamp: new Date(),
                type: type,
                message: message
            };
            vm.messages.push(message_object);
            URL = [URL,'q=' + message].join('?');
            return httpService.getRequest(URL, {}).then(function(resp){
                return resp.data;
            });

        }
    }

    chatbotService.$inject = ['httpService'];