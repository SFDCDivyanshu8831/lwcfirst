import { LightningElement,wire } from 'lwc';
import { getPicklistValues , getObjectInfo  } from 'lightning/uiObjectInfoApi';
import STAGE_NAME from '@salesforce/schema/Opportunity.StageName'
import OPPORTUNITY_OBJECT from '@salesforce/schema/Opportunity'
import getOpportunityRecords from '@salesforce/apex/OpportunityStageController.getOpportunityRecords';
const columns = [
    { label: 'Name', fieldName: 'Name',sortable : true },
    { label: 'Amount', fieldName: 'Amount', type: 'currency',sortable : true,sortDirection : 'desc' },
    { label: 'StageName', fieldName: 'StageName',sortable : true},
    { label: 'CloseDate', fieldName: 'CloseDate', type: 'Date',sortable : true,typeAttributes : {
        year : "numberic",
        month : "short",
        day : "2-digit"
    }}
    
];

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
        stageName : '$selectedStage',
        sortBy : '$sortBy',
        sortDirection: '$sortDirection'
    })
    opportunities;

    handleStageChange(event){
        this.selectedStage = event.target.value;
    }

    handleShowCloseDate(event){
        this.showCloseDate = event.target.checked;
    }

    handleSort(event){
        this.sortBy = event.detail.fieldname;
        this.sortDirection = event.detail.sort
    }

}