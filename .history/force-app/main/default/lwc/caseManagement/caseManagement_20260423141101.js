import { LightningElement } from 'lwc';

export default class CaseManagement extends LightningElement {
    selectedAccountId;
    disableButton = true;
    totalopencasecount


    handleSearchAccount(event){

        this.selectedAccountId = event.detail.recordId;

    }

}