angular
    .module('app.services')
    .service('bmiService', bmiService);
        
function bmiService(){
    var vm = this;
    vm.computeBMI = computeBMI;
    vm.bmiStatus = bmiStatus;

    function computeBMI(heightFt, heightInc, weight){
        heightFt = Number.parseInt(heightFt);
        heightInc = Number.parseInt(heightInc);
        weight = Number.parseInt(weight);
        var height = (heightFt * 12) + heightInc,
            weight = weight,
            bmi = 0;

        return bmi = (weight / (height * height) * 703).toFixed(2);
    }

    function bmiStatus(bmi){
        if(bmi < 18.5)
            return 'Underweight';
        if(bmi >= 18.5 && bmi <= 24.9)
            return 'Normal weight';
        if(bmi >= 25 && bmi <= 29.0)
            return 'Overweight';
        if(bmi >= 30)
            return 'Obesity';
        return 'Invalid BMI';
    }
}

bmiService.$inject = [];