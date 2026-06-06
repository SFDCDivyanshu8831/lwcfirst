import { LightningElement,wire } from 'lwc';
import getAccountWithOpp from '@salesforce/apex/AccountWithOppController.getAccountWithOpp'
columns = [
    { label: 'Account Name', fieldName: 'nameUrl',type: 'url', typeAttributes :{
        label : {
            fieldName : 'accountName'
        },
        target :'_blank'
    } 
},
    { label: 'Type', fieldName: 'type', type: 'text' },
    { label: 'BillingCountry', fieldName: 'country', type: 'text' },
    { label: 'Total Oportunity', fieldName: 'numberOfOpp', type: 'number' },
    {
        type : 'button',
        typeAttributes : {
            label : 'Create Contact',
            name : 'Create Contact',
            variant : 'Brand',
            iconPosition : 'left'
        }
    },
     {
        type : 'button',
        typeAttributes : {
            label : 'Delete Account',
            name : 'Delete Account',
            variant : 'destructive',
            iconPosition : 'left'
        }
    }
];
export default class DisplayAccWithOpp extends LightningElement {

    @wire(getAccountWithOpp)
    accounts;

     get isRecordAvailable(){
        return this.accounts.data ? true : false
      }

      handleRowAction(event){
             const action = event.detail.action;
            const row = event.detail.row;
            switch (action.name) {
                case 'Create Contact':
                    alert('Showing Details: ' + JSON.stringify(row));
                    break;
                case 'delete':
                    const rows = this.data;
                    const rowIndex = rows.indexOf(row);
                    rows.splice(rowIndex, 1);
                    this.data = rows;
                    break;
     }
      }
} 