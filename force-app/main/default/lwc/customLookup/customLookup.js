import { LightningElement,wire,api } from 'lwc';
import searchRecords from '@salesforce/apex/customLookupController.searchRecords';
export default class CustomLookup extends LightningElement {
   @api apiName = "Account";
    searchKey;
   @api objectLabel = "Account";
   @api iconName = "standard:account"
    DELAY = 300;
    enteredValue;
    searchValue;
    delayTimeout;
    selectedRecords = {
        selectedId : "",
        selectedName : ""
    }
    displayOptions = false;

    @wire(searchRecords,{
        objectApiName : "$apiName",
        searchKey : "$searchValue"
    }) outputs;

    get isRecordSelected(){
        return this.selectedRecords.selectedId === "" ? false : true;
    };
    

    changeHandler(event){
        window.clearTimeout(this.delayTimeout);
        this.enteredValue = event.target.value;
        this.delayTimeout=setTimeout(() => {
            this.searchValue = this.enteredValue;
            this.displayOptions = true;
        },this.DELAY)
    };
//this is cleared very well
    clickHandler(event){
        let selectedId = event.currentTarget.dataset.item;
        console.log("selectedId",selectedId);
        let outputRecord = this.outputs.data.find((currItem) => currItem.Id === selectedId);
        this.selectedRecords = {
            selectedId : outputRecord.Id,
            selectedName : outputRecord.Name
        };
        this.sendSelection()
        this.displayOptions = false;
    }

    removeSelectedHandler(event){
        this.selectedRecords = {
            selectedId : "",
            selectedName : ""
        };
        this.sendSelection()
        this.displayOptions = false;
    };

    sendSelection(){
        let mySelectionEvent = new CustomEvent("selectrecord",{
            detail : this.selectedRecords.selectedId
        });
        this.dispatchEvent(mySelectionEvent);
    }
}