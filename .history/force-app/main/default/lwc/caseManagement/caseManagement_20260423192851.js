import { LightningElement,wire } from 'lwc';
import getOpenCases from '@salesforce/apex/CaseManagementController.getOpenCases'
import closeSelectedCases from '@salesforce/apex/CaseManagementController.closeSelectedCases'
export default class CaseManagement extends LightningElement {
    selectedAccountId;  
    wiredCaseResult = []; 
    cases = [];
    error = null;
    selectedRows = [];
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



    async closeSelectedCases(){
        const caseId = this.selectedRows.map(row => row.Id);
        await closeSelectedCases({selectedCases : caseId});
        this.selectedRows = [];
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

    get totalopencasecount(){
        return this.cases.length;
    }

    get totalselectedcases(){
        return this.selectedRows.length;
    }

}