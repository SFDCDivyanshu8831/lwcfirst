import { LightningElement } from 'lwc';

export default class FirstComp extends LightningElement {
    value = ['option1'];   // ✅ array is correct

    get options() {
        return [
            { label: 'dv', value: 'option1' },
            { label: 'dv1', value: 'option2' }
        ];
    }

    get selectedValue() {   // ✅ camelCase corrected
        return this.value.join(',');
    }

    handleChange(event) {   // ✅ camelCase corrected
        this.value = event.detail.value;
    }
}