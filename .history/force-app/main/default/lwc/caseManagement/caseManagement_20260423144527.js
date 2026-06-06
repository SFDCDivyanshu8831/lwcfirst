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
            this.cases = processCaseResult(result.data);
            this.error = null;
        }else if(result.error){
            this.cases = null;
            this.error = this.error;
        }
    }


    processCaseResult(caseData){
        caseData.map(caseRecord =>({
            ...caseRecord,
            AccountName : caseRecord.Account.Name,
            ContactName : caseRecord.Contact
        }))
    }



    handleSearchAccount(event){

        this.selectedAccountId = event.detail.recordId;

    }

}