import { LightningElement,wire } from 'lwc';
import { getRecords } from 'lightning/uiRecordApi';
import ACCOUNT_NAME from '@salesforce/schema/Account.Name'
import CONTACT_NAME from '@salesforce/schema/Contact.Name'
export default class GetRecordssDemo extends LightningElement {

    outputs;
    errors;
    @wire(getRecords,{
        records : [

            {
                recordIds : ['001gL000005RVMdQAO'],

                fields : [ACCOUNT_NAME]
            },

            {
                recordIds : ['003gL000003DZ4jQAG'],

                fields : [CONTACT_NAME]
            }
        ]
    })outputRecords ({data,error}) {
        if (data){
            this.outputs = data;
            this.errors = null;
            console.log("data",data);

        } else if(error){
            this.outputs = null;
            this.errors = error;
            console.log("error",error);
            
        }
    }
}