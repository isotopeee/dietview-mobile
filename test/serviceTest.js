describe('BlankFactory factory', function(){

    var BlankFactory;

    beforeEach(angular.mock.module('app.services'));

    beforeEach(inject(function(_BlankFactory_){
        BlankFactory = _BlankFactory_;
    }));

    it('should exist', function(){
        expect(BlankFactory).toBeDefined();
    });

    describe('.sample()', function(){

        it('should exist', function(){
            expect(BlankFactory.sample).toBeDefined();
        });

        it('should result to 4', function(){
            expect(BlankFactory.sample(2,2)).toEqual(4);
        });
    });
});