import { LightningElement,wire } from 'lwc';
import getAccountWithOpp from '@salesforce/apex/AccountWithOppController.getAccountWithOpp'
columns = [
    { label: 'Account Name', fieldName: 'nameUrl',type: 'url', typeAttributes :{
        label : {
            fieldName : 'accountName'
        },
        target :'_blank'
    } 
},
    { label: 'Type', fieldName: 'type', type: 'text' },
    { label: 'BillingCountry', fieldName: 'country', type: 'text' },
    { label: 'Total Oportunity', fieldName: 'numberOfOpp', type: 'number' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];
export default class DisplayAccWithOpp extends LightningElement {

    @wire(getAccountWithOpp)
    accounts;

     get isRecordAvailable(){
        return this.accounts.data ? true : false
     }
} 