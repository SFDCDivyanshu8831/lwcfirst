import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    displayMessage = false;

    handleChange(event) {
        this.displayMessage = !this.displayMessage;
    }
}