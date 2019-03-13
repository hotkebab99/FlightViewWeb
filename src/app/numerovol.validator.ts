import { FormControl } from "@angular/forms";

export class NumeroVolValidator {
    static validate() {
        return (control: FormControl): { [key: string]: any } => {
            const regexp = new RegExp('^[A-Z]{2}\\d{1,4}$');
            const val = control.value;

            if(regexp.test(val)) {
                return null;
            } else {
               return { "numeroVol": { "format": 'XX0000', "actualValue": val } };
            }
        }
    }
}
