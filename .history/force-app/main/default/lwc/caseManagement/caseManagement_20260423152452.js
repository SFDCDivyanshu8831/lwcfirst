import { LightningElement,wire } from 'lwc';
import getOpenCases from '@salesforce/apex/CaseManagementController.getOpenCases'
export default class CaseManagement extends LightningElement {
    selectedAccountId;
    totalopencasecount;
    totalselectedcases ;   
    wiredCaseResult = []; 
    cases = [];
    error = null;
    selectedRows;
    columns = [
    { label: 'CaseNumber', fieldName: 'CaseNumber' },
    { label: 'Subject', fieldName: 'Subject'},
    { label: 'Account Name', fieldName: 'AccountName'},
    { label: 'Contact Name', fieldName: 'ContactName', type: 'currency' },
    { label: 'Status', fieldName: 'Status'}
];
    
    
    @wire(getOpenCases,{accountId : '$selectedAccountId'})
    wiredCases({result}){
        this.wiredCaseResult = result.data;
        if(result.data){
            this.cases = this.processCaseResult(result.data);
            this.error = null;
        }else if(result.error){
            this.cases = null;
            this.error = this.error;
        }
    }


    processCaseResult(caseData){
        let processedResponse = caseData.map(caseRecord =>({
            ...caseRecord,
            'AccountName' : caseRecord.Account?.Name || 'N/A',
            'ContactName' : caseRecord.Contact?.Name || 'N/A'
        }))

        return processedResponse;
    }



    handleSearchAccount(event){

        this.selectedAccountId = event.detail.recordId;

    }

    handleRowSelection(event){
        this.selectedRows = event.detail.selectedRows;
    }

    get isDataAvailable(){
        return this.cases.length > 0;
    }

    get disableButton(){
        return this.selectedRows.length == 0;
    }

}