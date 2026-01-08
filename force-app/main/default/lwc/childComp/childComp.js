import { LightningElement, api } from 'lwc';

export default class ChildComp extends LightningElement {
    @api display;
    @api displayUser;
    displayusr;

    set user(value) {
        let cloneuser = { ...value };
        this.displayusr = cloneuser.fname.toUpperCase();
    }
    @api
    get user(){
        return this.displayusr;
    }

}
