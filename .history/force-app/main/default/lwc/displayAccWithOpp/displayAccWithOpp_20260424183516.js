import { LightningElement,wire } from 'lwc';
import getAccountWithOpp from '@salesforce/apex/AccountWithOppController.getAccountWithOpp'
export default class DisplayAccWithOpp extends LightningElement {

    @wire(getAccountWithOpp)
    accounts;

     get isRecordAvailable(){
        return this.accounts.data ? true : false
     }
}