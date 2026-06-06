import { LightningElement,wire } from 'lwc';
import getOpenCases from '@salesforce/apex/CaseManagementController.getOpenCases'
export default class CaseManagement extends LightningElement {
    selectedAccountId;
    disableButton = true;
    totalopencasecount;
    totalselectedcases ;   
    wiredCaseResult = []; 
    cases = [];
    error = null;
    
    
    @wire(getOpenCases,{accountId : '$selectedAccountId'})
    wiredCases({result}){
        this.wiredCaseResult = result.data;
        if(result.data){
            this.cases = 
            this.error = null;
        }else
    }



    handleSearchAccount(event){

        this.selectedAccountId = event.detail.recordId;

    }

}