import { LightningElement,wire,api } from 'lwc';
import getParentAccounts from '@salesforce/apex/AccountHelper.getParentAccounts';
import ACCOUNT_OBJECT from '@salesforce/schema/Account';
import { getObjectInfo, getPicklistValues } from 'lightning/uiObjectInfoApi';
import ACCOUNT_PARENT from '@salesforce/schema/Account.ParentId';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name';
import ACCOUNT_SLA_EXP_DATE from '@salesforce/schema/Account.SLAExpirationDate__c';
import ACCOUNT_NUMBER_LOCATIONS from '@salesforce/schema/Account.NumberOfLocations__c';
import ACCOUNT_DESCRIPTION from '@salesforce/schema/Account.Description';
import ACCOUNT_SLA_TYPE from '@salesforce/schema/Account.SLA__c';
import ACCOUNT_ID from '@salesforce/schema/Account.Id';
import { createRecord, getFieldValue, getRecord } from 'lightning/uiRecordApi';
import { NavigationMixin } from 'lightning/navigation'; 
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

const fieldsToload = [ACCOUNT_PARENT,
                         ACCOUNT_NAME,
                            ACCOUNT_SLA_EXP_DATE,
                               ACCOUNT_NUMBER_LOCATIONS,
                                   ACCOUNT_DESCRIPTION,
                                        ACCOUNT_SLA_TYPE];

export default class AccountDetails extends NavigationMixin(LightningElement) {
    parentoptions = [];
    selectedparent = "";
    noOfloactions = "1";
    selectedAccname = "";
    selectedSlaDate = null;
    selectedSlaType = "";
    selectedDescription = "";
    @api recordId;
    
    @wire(getRecord ,{
        recordId : '$recordId',
        fields : fieldsToload
    })wiredgetRecord_Function({data,error}){
        if(data){
        this.selectedparent = getFieldValue(data,ACCOUNT_PARENT);
        this.selectedAccname = getFieldValue(data,ACCOUNT_NAME);
        this.selectedSlaDate = getFieldValue(data,ACCOUNT_SLA_EXP_DATE);
        this.noOfloactions = getFieldValue(data,ACCOUNT_NUMBER_LOCATIONS);
        this.selectedSlaType = getFieldValue(data,ACCOUNT_SLA_TYPE);
        this.selectedDescription = getFieldValue(data,ACCOUNT_DESCRIPTION);
        }else if(error){
            console.log('Error while getting record', error);
        }
        
    }
    
    @wire(getParentAccounts) wired_getParentAccount({data,error}){
        if(data){

            this.parentoptions = data.map((curritem) =>({
                label : curritem.Name,
                value : curritem.Id
            }))

        }else if(error){
            console.log('Error while getting parent records', error);
            
        }
    }

    @wire(getObjectInfo,{
        objectApiName : ACCOUNT_OBJECT
    })accountobjectinfo;

    @wire(getPicklistValues,{
        recordTypeId :'$accountobjectinfo.data.defaultRecordTypeId',
        fieldApiName : ACCOUNT_SLA_TYPE
    })slapicklist;

    handleChange(event){ 
        let {name , value} = event.target;
        if(name === 'ParentAcc'){
            this.selectedparent = value;
        }
        if(name === 'AccName'){
            this.selectedAccname = value;
        }
        if(name === 'slaexpdt'){
            this.selectedSlaDate = value;
        }
        if(name === 'slatype'){
            this.selectedSlaType = value;
        }
        if(name === 'nooflocations'){
            this.noOfloactions = value;
        }
        if(name === 'description'){
            this.selectedDescription = value;
        }
    }


    saveRecord(){
        if(this.ValidateInput()){
            let inputFields = {};
            inputFields[ACCOUNT_NAME.fieldApiName] = this.selectedAccname;
            inputFields[ACCOUNT_PARENT.fieldApiName] = this.selectedparent;
            inputFields[ACCOUNT_SLA_EXP_DATE.fieldApiName] = this.selectedSlaDate;
            inputFields[ACCOUNT_NUMBER_LOCATIONS.fieldApiName] = this.noOfloactions;
            inputFields[ACCOUNT_DESCRIPTION.fieldApiName] = this.selectedDescription;

            if (this.recordId){
                //update operation
                inputFields[ACCOUNT_ID.fieldApiName] = this.recordId;
                let recordInput = {
                    fields : inputFields
                }
                updateRecord(recordInput)
                .then((result) =>{
                    console.log("Records updated successfully",result);
                    this.showToast();
                }).catch((error) => {
                    console.log("Records updation failed", error);
                    
                })

            }else{
                //create operation
                let recordInput = {
                apiName : ACCOUNT_OBJECT.objectApiName,
                fields : inputFields
            }
            createRecord(recordInput).then((result) => {
                console.log("Account Created Successfully", result);
                let pageRef = {
                    type: 'standard__recordPage',
                    attributes: {
                    recordId: result.id,
                    objectApiName: ACCOUNT_OBJECT.objectApiName,
                    actionName: 'view'
                }
}
                this[NavigationMixin.Navigate](pageRef);
            })
            .catch((error) => {
                console.log("Error in creation" , error);
                
            })
            }
            
        } else{
            console.log('Validation failed')
        }
    }

    ValidateInput(){
        let fields = Array.from(this.template.querySelectorAll(".validateName"));
        let isValid = fields.every((curritem) => curritem.checkValidity());
        return isValid;
    }

    get formTitle(){
        if(this.recordId){
            return 'Edit Account'
        }else{
            return 'Create Account'
        }
    }

    showToast() {
        const event = new ShowToastEvent({
            title: 'Success',
            message:
                'Record updated successfully',
            variant : 'success'    
        });
        this.dispatchEvent(event);
    }
    
}