import { LightningElement } from 'lwc';
import 
export default class CaseManagement extends LightningElement {
    selectedAccountId;
    disableButton = true;
    totalopencasecount;
    totalselectedcases ;     

    handleSearchAccount(event){

        this.selectedAccountId = event.detail.recordId;

    }

}