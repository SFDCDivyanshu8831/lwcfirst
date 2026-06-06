import { LightningElement,wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountRelatedDataController.getAccount'
import CurrentAmount from '@salesforce/schema/Asset.CurrentAmount';
import getRelatedRecords from '@salesforce/apex/AccountRelatedDataController.getRelatedRecords'
export default class AccountRelatedData extends LightningElement {

    accountOptions;
    error;

    @wire(getAccount) wiredAccount({data,error}){
        if(data){
            this.accountOptions = data.map(CurrItem =>({
                label : currItem.Name,
                value : currItem.Id
            }))
        }else if(error){
            this.error = error;
            console.log('ERROR!',error);
            
        }
    }
    
    handleChange(event){
        let accountId = event.target.value;
    }

}