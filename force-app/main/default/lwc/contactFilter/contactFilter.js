import { LightningElement,wire } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry'
import {encodeDefaultFieldValues} from 'lightning/pageReferenceUtils';

export default class ContactFilter extends NavigationMixin(LightningElement) {
    selectedAccountId;
    isButtonDisabled = true;
    selectedIndustry;


    @wire(getObjectInfo,{
        objectApiName : ACCOUNT_OBJECT
    })accountinfo;

    @wire(getPicklistValues,{
        recordTypeId : "$accountinfo.data.defaultRecordTypeId",
        fieldApiName : ACCOUNT_INDUSTRY 
    })industryPicklist;

    selectedRecordHandler(event){
        this.selectedAccountId = event.detail;
        console.log("this.selectedAccountId", this.selectedAccountId);
        if(this.selectedAccountId){
            this.isButtonDisabled = false;
        }else{
            this.isButtonDisabled = true;
        }
        this.notifyfilterChange();
    }

    handleChange(event){
        this.selectedIndustry = event.target.value;
        this.notifyfilterChange();
    }

    addNewContact(){
        let defaultValue = encodeDefaultFieldValues({
            AccountId : this.selectedAccountId
        })
let pageRef = {
    type: 'standard__objectPage',
    attributes: {
        objectApiName: 'contact',
        actionName: 'new'
    },
    state: {
        defaultFieldValues : defaultValue
    }
};
    this[NavigationMixin.Navigate](pageRef);
    }

    notifyfilterChange(){

        let myCustomEvent = new CustomEvent("filterchange",{
            detail : {
                accountId : this.selectedAccountId,
                Industry : this.selectedIndustry
            }
        });

        this.dispatchEvent(myCustomEvent);
    }
}