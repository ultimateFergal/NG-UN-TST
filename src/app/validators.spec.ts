import { MyValidators } from './validators';
import { FormControl } from '@angular/forms';

describe("Test for validators", () => {
    describe("Test for skuValidate", () => {
        it('Should return null for "1234"', () => {
            let formControl = new FormControl();
            formControl.setValue("1234");
            let rta = MyValidators.skuValidate(formControl);
            expect(rta).toBeNull();
        })

        it('Should return ane error for "543212"', () => {
            let formControl = new FormControl();
            formControl.setValue("543121");
            let rta = MyValidators.skuValidate(formControl);
            // expect(rta).toBeNull();
            // expect(rta.invalidSku).toBeDefined();
            expect(rta.invalidSku).toBeTruthy();

        })
    })
})