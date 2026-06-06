import { LightningElement } from 'lwc';

export default class CaseManagement extends LightningElement {
    selectedAccountId;
    disableButtom


    handleSearchAccount(event){

        this.selectedAccountId = event.detail.recordId;

    }

}