angular.module('app.services', [])
    .factory('fooBuService', fooBuService);

function fooBuService(){
    var vm = this;
    // vm.calculateBMI = calculateBMI;
    // vm.calculateCalories = calculateCalories;

    // function calculateBMI(height, weight){

    //     var weightInPounds = kilogramsToPounds(weight),
    //         heightInInches = centimetersToInches(height);

    //     return (weightInPounds / (heightInInches * heightInInches)) * 703;
    // }

    // function calculateCalories(age, gender, height, weight){
        
    //     return gender === 'male' ? getCaloriesForMen() : getCaloriesForWomen();

    //     function getCaloriesForMen(){
    //         return (5 * weight) + (6.25 * height) - (5 * age) + 5;
    //     }

    //     function getCaloriesForWomen(){
    //         return (5 * weight) + (6.25 * height) - (5 * age) - 161;
    //     }
    // }

    // function kilogramsToPounds(num){
    //     return (1 / 2.2) * num;
    // }

    // function centimetersToInches(num){
    //     return num / 2.54;
    // }
}

fooBuService.$inject = [];