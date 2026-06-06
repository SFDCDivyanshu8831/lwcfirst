import { LightningElement,wire } from 'lwc';
import getAccount from '@salesforce/apex/AccountRelatedDataController.getAccount'
import CurrentAmount from '@salesforce/schema/Asset.CurrentAmount';
import getRelatedRecords from '@salesforce/apex/AccountRelatedDataController.getRelatedRecords'
export default class AccountRelatedData extends LightningElement {

    accountOptions;
    error;
    cases = [];
    contacts = [];
    caseColumn = [
    { label: 'Case Number', fieldName: 'CaseNumber' },
    { label: 'Subject', fieldName: 'Subject'},
    { label: 'Status', fieldName: 'Status'}
];
    contactColumn = [
    { label: 'FirstName', fieldName: 'name' },
    { label: 'LastName', fieldName: 'website', type: 'url' },
    { label: 'Email', fieldName: 'phone', type: 'phone' },
    { label: 'Phone', fieldName: 'amount', type: 'currency' },
    { label: 'CloseAt', fieldName: 'closeAt', type: 'date' },
];

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
    
    async handleChange(event){
        let accountId = event.target.value;
       
        try{
             let result = await getRelatedRecords({accountId : accountId})
             this.contacts = result.contacts;
             this.cases = result.cases;
        }catch(error){
            console.log('ERROR',error);
            
        }
    }

}