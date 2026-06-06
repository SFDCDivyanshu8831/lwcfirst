import { LightningElement } from 'lwc';
import getOpenCases from '@salesforce/apex/CaseManagementController.'
export default class CaseManagement extends LightningElement {
    selectedAccountId;
    disableButton = true;
    totalopencasecount;
    totalselectedcases ;     

    handleSearchAccount(event){

        this.selectedAccountId = event.detail.recordId;

    }

}