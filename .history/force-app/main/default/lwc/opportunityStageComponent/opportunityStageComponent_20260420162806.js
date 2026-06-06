import { LightningElement,wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import STAGE_NAME from '@salesforce/schema/Opportunity.StageName'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
export default class OpportunityStageComponent extends LightningElement {



    @wire(getObjectInfo,{
        objectApiName : OPPORTUNITY_OBJECT
    })
    oppObject;



    @wire(getPicklistValues , {
        recordTypeId : '$oppObject.data.defaultRecordTypeId',
        fieldApiName : STAGE_NAME
    })
    stagePicklistValues({data,error}){
        if(data){

        }else if(error){
            
        }
    }

}