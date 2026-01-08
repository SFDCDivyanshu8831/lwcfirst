import { LightningElement } from 'lwc';

export default class ChildCompCustomEvent extends LightningElement {
    clickHandler(){
        //1.Create custom event

        let mycustomevent = new CustomEvent('displaymessage')

        //2.Dispatch Event
        this.dispatchEvent(mycustomevent);
    }
}