import { LightningElement,wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
import {getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
export default class ImperativeApex extends LightningElement {
    data = [];
    options = [];
    selectedIndustry;
    columns = [
    { label: 'Account Name', fieldName: 'Name'},
    { label: 'Account Industry', fieldName: 'Industry'},
    { label: 'Account Rating', fieldName: 'Rating'}
    
];
    @wire(getObjectInfo,{
        objectApiName : ACCOUNT_OBJECT
    }
    )accountInfo;
 

    @wire(getPicklistValues,{
        recordTypeId : "$accountInfo.data.defaultRecordTypeId",
        fieldApiName : ACCOUNT_INDUSTRY
    }
   )industryPicklist;

   handleChange(event){
    this.selectedIndustry = event.target.value;
   }
 

    clickHandler(){
        getAccountList({inputindustry : this.selectedIndustry}).then((result) => {
            console.log("Account record fetched successfully",result);
            this.data = result;
        }).catch((error) => {
            console.log("Account Error",error);
            
        })
    }
}