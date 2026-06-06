import { LightningElement,wire } from 'lwc';
import getAccountWithOpp from '@salesforce/apex/AccountWithOppController.getAccountWithOpp'
columns = [
    { label: 'Account Name', fieldName: 'nameUrl',type: 'url', typeAttributes :{
        label : {}
    } },
    { label: 'Website', fieldName: 'website', type: 'url' },
    { label: 'Phone', fieldName: 'phone', type: 'phone' },
    { label: 'Balance', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];
export default class DisplayAccWithOpp extends LightningElement {

    @wire(getAccountWithOpp)
    accounts;

     get isRecordAvailable(){
        return this.accounts.data ? true : false
     }
} 