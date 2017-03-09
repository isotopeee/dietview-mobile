describe('bmiService service', () => {

    var bmiService;

    beforeEach(angular.mock.module('app.services'));

    beforeEach(inject((_bmiService_) => {
        bmiService = _bmiService_;
    }));

    it('should exist', () => {
        expect(bmiService).toBeDefined();
    });

    describe('.computeBMI()', () => {
        
        it('.computeBMI() should be defined', () => {
            expect(bmiService.computeBMI).toBeDefined();
        })
        
        it('should be equal to 26', () => {
            expect(bmiService.computeBMI(5, 10, 184)).toEqual(26);
        });
    });

    describe('.bmiStatus()', () => {

        it('.bmiStatus() should be defined', () => {
            expect(bmiService.bmiStatus).toBeDefined();
        })

        it('should be equal to Underweight', () => {
            expect(bmiService.bmiStatus(17)).toEqual('Underweight')
        })

        it('should be equal to Normal Weight', () => {
            expect(bmiService.bmiStatus(23)).toEqual('Normal weight')
        })

        it('should be equal to Overweight', () => {
            expect(bmiService.bmiStatus(26)).toEqual('Overweight')
        })

        it('should be equal to Obesity', () => {
            expect(bmiService.bmiStatus(33)).toEqual('Obesity')
        })
    })
});