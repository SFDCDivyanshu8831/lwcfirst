import { LightningElement,wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountRelatedDataController.getAccount'
import CurrentAmount from '@salesforce/schema/Asset.CurrentAmount';
export default class AccountRelatedData extends LightningElement {

    accountOptions;

    @wire(getAccount) wiredAccount({data,error}){
        if(data){
            data.map(CurrItem =>({
                label :
            }))
        }else if(error){

        }
    }
    

}