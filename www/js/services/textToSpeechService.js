angular
    .module('app.services')
    .service('textToSpeechService', textToSpeechService);

    function textToSpeechService(platformService){
        var vm = this;
        vm.speakText = speakText;

        function speakText(text, callback){
            if(!platformService.isBrowser()){
                TTS.speak({
                    text: text,
                    locale: 'en-US',
                    rate: 0.80
                }, function () {
                    // Do Something after success
                    callback();
                }, function (err) {
                    // Handle the error case
                    console.log(err);
                });
            }
            
        }
    }

    textToSpeechService.$inject = ['platformService'];