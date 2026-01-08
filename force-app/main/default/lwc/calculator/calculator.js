import { LightningElement } from 'lwc';

export default class Calculator extends LightningElement {
    numberone;
    numbertwo;
    result = 0;
    displayoutput = false;

    handleChange(event) {
        this.displayoutput = true;
        let name = event.target.name;
        let value = event.target.value;

        if (name === 'number1') {
            this.numberone = value;
        } else if (name === 'number2') {
            this.numbertwo = value;
        }
    }

    addHandler() {
        this.result = parseInt(this.numberone) + parseInt(this.numbertwo);
    }

    subHandler() {
        this.result = parseInt(this.numberone) - parseInt(this.numbertwo);
    }

    mulHandler() {
        this.result = parseInt(this.numberone) * parseInt(this.numbertwo);
    }

    divHandler() {
        this.result = parseInt(this.numberone) / parseInt(this.numbertwo);
    }
}
