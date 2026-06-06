import { LightningElement } from 'lwc';
import getAccount from '@salesforce/apex/AccountRelatedDataController.getAccount'
export default class AccountRelatedData extends LightningElement {

    @wire(getAccount) wiredAccount{(data,error)}{

    }

}