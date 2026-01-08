import { LightningElement,api } from 'lwc';
import NAME_FIELD from '@salesforce/schema/Account.Name';
import INDUSTRY_FIELD from '@salesforce/schema/Account.Industry';
import RATING_FIELD from '@salesforce/schema/Account.Rating';
import REVENUE_FIELD from '@salesforce/schema/Account.AnnualRevenue';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class RecordFormDemo extends LightningElement {

    @api objectApiName;
    @api recordId;

    fieldList = [NAME_FIELD,INDUSTRY_FIELD,RATING_FIELD,REVENUE_FIELD]

    showToast() {
        const event = new ShowToastEvent({
            title: 'Success',
            message:
                'The record has been updated successfully.',
            variant: 'success',
        });
        this.dispatchEvent(event);
    }
}