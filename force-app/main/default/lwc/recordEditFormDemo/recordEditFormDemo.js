import { LightningElement,api } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import ACCOUNT_DATE_FIELD from '@salesforce/schema/Account.SLAExpirationDate__c';
import { NavigationMixin } from 'lightning/navigation';
export default class RecordEditFormDemo extends NavigationMixin(LightningElement) {

    @api objectApiName;
    @api recordId;

    fields = {
        name : ACCOUNT_NAME,
        industry : ACCOUNT_INDUSTRY,
        sladate : ACCOUNT_DATE_FIELD
    }

    successHandler(event){

        let pageRef = {
        type: 'standard__recordPage',
        attributes: {
            recordId: event.detail.id,
            objectApiName: this.objectApiName,
            actionName: 'view'
        }
}
    this[NavigationMixin.Navigate](pageRef);
    }

    handleSubmit(event){
        event.preventDefault();
        const fields = event.detail.fields;
        if(!fields.Industry){
            fields.Industry = 'Energy';
        }
        this.template.querySelector('lightning-record-edit-form').submit(fields);
    }

    handleReset(event){
        let inputFields = this.template.querySelectorAll('lightning-input-field')
        inputFields.forEach((curritem) => curritem.reset());
    }
}