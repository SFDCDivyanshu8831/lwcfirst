import { LightningElement,wire } from 'lwc';
import { getPicklistValues , getObjectInfo  } from 'lightning/uiObjectInfoApi';
import STAGE_NAME from '@salesforce/schema/Opportunity.StageName'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
export default class OpportunityStageComponent extends LightningElement {

    stageOptions = [];

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
        let stageValues = data.values.map(currItem =>({
            label : currItem.label,
            values : currItem.value
        }))      

        this.stageOptions = [{
            label : 
        }]

        }else if(error){
            console.log('ERROR', error)
        }
    }

}