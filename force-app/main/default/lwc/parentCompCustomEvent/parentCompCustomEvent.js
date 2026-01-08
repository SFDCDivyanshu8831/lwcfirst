import { LightningElement } from 'lwc';

export default class ParentCompCustomEvent extends LightningElement {
    displayMessage = false;
    
    displayMessageHandler(event){
        this.displayMessage = true;
    }
}