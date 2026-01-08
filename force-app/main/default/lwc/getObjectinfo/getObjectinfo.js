import { LightningElement,wire } from 'lwc';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getObjectInfo } from 'lightning/uiObjectInfoApi';
export default class GetObjectinfo extends LightningElement {
    accountData;
    accountErrors;

    @wire(getObjectInfo, {objectApiName:ACCOUNT_OBJECT}) outputInfo({data,error}){
        if(data){
            this.accountData = data;
            this.accountErrors = null;
            console.log("data",data)

        }else if(error){
            this.accountErrors = error;
            this.accountData = null;
            console.log("error",error);
            
        }
    };
}