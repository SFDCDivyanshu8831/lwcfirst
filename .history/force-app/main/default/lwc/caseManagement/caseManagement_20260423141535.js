import { LightningElement,wire } from 'lwc';
import getOpenCases from '@salesforce/apex/CaseManagementController.getOpenCases'
export default class CaseManagement extends LightningElement {
    selectedAccountId;
    disableButton = true;
    totalopencasecount;
    totalselectedcases ;    
    
    
    @wire(getOpenCases,{accountId : ''})



    handleSearchAccount(event){

        this.selectedAccountId = event.detail.recordId;

    }

}