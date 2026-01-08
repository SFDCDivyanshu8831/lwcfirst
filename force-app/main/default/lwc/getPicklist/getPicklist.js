import { LightningElement,wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account'
import ACCOUNT_INDUSTRY from '@salesforce/schema/Account.Industry'
import { getObjectInfo,getPicklistValues, getPicklistValuesByRecordType } from 'lightning/uiObjectInfoApi';
export default class GetPicklist extends LightningElement {
    value;
    @wire(getObjectInfo,{

        objectApiName:ACCOUNT_OBJECT

    })accobjInfo;

    @wire(getPicklistValues,{

        recordTypeId:"$accobjInfo.data.defaultRecordTypeId",

        fieldApiName:ACCOUNT_INDUSTRY

    })industryPicklist;

    @wire(getPicklistValuesByRecordType,{

        objectApiName:ACCOUNT_OBJECT,

        recordTypeId:"$accobjInfo.data.defaultRecordTypeId"

    })accObjPicklist;

    handleChange(event){
        this.value = event.target.value;
    }
}   