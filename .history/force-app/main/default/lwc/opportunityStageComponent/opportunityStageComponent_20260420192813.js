import { LightningElement,wire } from 'lwc';
import { getPicklistValues , getObjectInfo  } from 'lightning/uiObjectInfoApi';
import STAGE_NAME from '@salesforce/schema/Opportunity.StageName'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
import getOpportunityRecords from '@salesforce/apex/OpportunityStageController.getOpportunityRecords';
export default class OpportunityStageComponent extends LightningElement {

    stageOptions = [];
    selectedStage = '';
    showCloseDate = false;
    sortBy = 'Amount';
    sortDirection = 'Desc';

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
            value : currItem.value
        }))      

        this.stageOptions = [{
            label : 'All Stages',
            value : 'All'
        },...stageValues]

        }else if(error){
            console.log('ERROR', error)
        }
    }

    @wire(getOpportunityRecords,{
        stageName : selectedStage,
        sortBy :
        sortDirection:
    })

    handleStageChange(event){
        this.selectedStage = event.target.value;
    }

    handleShowCloseDate(event){
        this.showCloseDate = event.target.checked;
    }

}