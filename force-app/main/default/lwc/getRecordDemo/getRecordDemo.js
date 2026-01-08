import { LightningElement, api, wire } from 'lwc';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import ACCOUNT_REVENUE from '@salesforce/schema/Account.AnnualRevenue'
import { getRecord } from 'lightning/uiRecordApi';
export default class GetRecordDemo extends LightningElement {

    @api recordId;
    accName;
    accRevenue;

    @wire(getRecord, {
            recordId: "$recordId",
            fields: [ACCOUNT_NAME, ACCOUNT_REVENUE]
    }) outputFunction({data, error}){
        if (data){
            console.log("data", data);
            this.accName = data.fields.Name.value;
            this.accRevenue = data.fields.AnnualRevenue.value;
        }
        else if(error){
            console.log("error",error);
            
        }
    }
}