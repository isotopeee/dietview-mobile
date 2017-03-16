angular
    .module('app.services')
    .service('vitalTrackerService', vitalTrackerService);

    function vitalTrackerService(VitalTracker, httpService){
        var vm = this;
        vm.calculate = calculate;
        vm.getExerciseLevel = getExerciseLevel;

        function calculate(data){

            if(data.hasOwnProperty('age') && data.hasOwnProperty('weight') && data.hasOwnProperty('height') && 
                data.hasOwnProperty('gender') && data.hasOwnProperty('exerciseLevel')){
                    if(data.height.hasOwnProperty('feet') && data.height.hasOwnProperty('inches')){
                        data.exerciseLevel = Number.parseFloat(data.exerciseLevel);
                        data.height.feet = Number.parseInt(data.height.feet);
                        data.height.inches = Number.parseInt(data.height.inches);
                        
                         return VitalTracker.eer(data).$promise.then(function(data){
                                return data.eer;
                            });
                    }
                }else{
                    throw new Error('VitalTrackerService: Missing some properties', data);
                }
        }

        function getExerciseLevel(){
            return httpService.getRequest('exerciseLevels.json')
                .then(function(data){
                    return data.data.levels;
                });
        }

        function localCalculate(data){
            var age = data.age;
            var weight = data.weight / 2.2;
            var height = ((data.height.feet * 12) + data.height.inches) * 0.0254;
            var gender = data.gender;
            var exerciseLevel = data.exerciseLevel;
            var EER = 0;
            if (gender === 'male') {
                EER = 662 - (9.53 * age) + exerciseLevel * ((15.91 * weight) + (539.6 * height));
            } else if (gender === 'female') {
                EER = 354 - (6.91 * age) + exerciseLevel * ((9.36 * weight) + (726 * height));
            }
            return EER.toFixed(2);
        }
    }

    vitalTrackerService.$inject = ['VitalTracker', 'httpService'];