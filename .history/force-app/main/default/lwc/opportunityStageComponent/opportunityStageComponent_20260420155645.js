import { LightningElement,wire } from 'lwc';
import { getPicklistValues } from 'lightning/uiObjectInfoApi';
export default class OpportunityStageComponent extends LightningElement {

    @wire(getPicklistValues , {
        recordType
    })

}