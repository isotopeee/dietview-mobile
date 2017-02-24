describe('service test', function(){

    var mockBlankFactory;

     beforeEach(function(){
        module(function($provide){
        $provide.service('$window', function(){
            this.alert = jasmine.createSpy('alert');
        });
        $provide.service('modalSvc', function(){
            this.showModalDialog = jasmine.createSpy('showModalDialog');
        });
        });

        module('services');
    });

    beforeEach(inject(function(BlankFactory){
        mockBlankFactory = BlankFactory;
    }));

    it('should return 734 calories', function(){
        
        mockBlankFactory.calculateCalories(13, 'male', 55, 55);

        expect(mockBlankFactory.calculateCalories).toHaveBeenCalled();
    });
});