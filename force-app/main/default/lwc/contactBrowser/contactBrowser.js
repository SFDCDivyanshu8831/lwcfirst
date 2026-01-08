import { LightningElement,wire } from 'lwc';
import getContactListByFilter from '@salesforce/apex/contactBrowserController.getContactListByFilter';
export default class ContactBrowser extends LightningElement {
    selectedAccountId = "";
    selectedIndustry = "";

    @wire(getContactListByFilter,{
        accountId : '$selectedAccountId',
        Industry : '$selectedIndustry'
    })contactFunction({data,error}){
        if(data){
            console.log("Selected Account", data);
        }else if(error){
            console.log("Error", error);
        }
        }
    

    handleFilterChange(event) {
        this.selectedAccountId = event.detail.accountId;
        this.selectedIndustry = event.detail.Industry;
    }
}
