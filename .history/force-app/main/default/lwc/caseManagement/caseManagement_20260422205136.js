import { LightningElement } from 'lwc';

export default class CaseManagement extends LightningElement {
    selectedAccountId;
    handleSearchAccount(event){

        this.selectedAccountId = event.detail

    }

}