import { LightningElement,wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
import STAGE_NAME from '@salesforce'
export default class OpportunityStageComponent extends LightningElement {

    @wire(getPicklistValues , {
        recordTypeId :
        fieldApiName :
    })

}