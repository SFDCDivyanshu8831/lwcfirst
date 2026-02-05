import { LightningElement,api } from 'lwc';
import ACCOUNT_NAME from "@salesforce/schema/Account.Name"
import ACCOUNT_INDUSTRY from "@salesforce/schema/Account.Industry"
import { CloseActionScreenEvent } from "lightning/actions";

export default class ScreenQuickActionDemo extends LightningElement {

    @api recordId;
    @api objectApiName;

    fields = {
        accountname : ACCOUNT_NAME,
        accountindustry : ACCOUNT_INDUSTRY
    };

    closeModal(){
        this.dispatchEvent(new CloseActionScreenEvent());
    }

    successHandler(){
        const event = new ShowToastEvent({
            title: 'Success',
            message: "Record Saved Successfully",
            variant :"success"
        });
        this.dispatchEvent(event);
        this.dispatchEvent(new CloseActionScreenEvent());
    }
}