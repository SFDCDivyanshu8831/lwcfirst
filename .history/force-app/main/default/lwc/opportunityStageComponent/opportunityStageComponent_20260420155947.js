import { LightningElement,wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import STAGE_NAME from '@salesforce/schema/Opportunity.StageName'
import OPPORTUNITY_OBJECT
export default class OpportunityStageComponent extends LightningElement {



    @wire(getObjectInfo,{
        objectApiName 
    })



    @wire(getPicklistValues , {
        recordTypeId :
        fieldApiName : STAGE_NAME
    })

}