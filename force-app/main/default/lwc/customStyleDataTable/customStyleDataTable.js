import { LightningElement,wire } from 'lwc';
import getContactListForDataTable from '@salesforce/apex/contactController.getContactListForDataTable';
 const columns = [
    { label: 'Name', type : "customName", typeAttributes : {
        contactName : {
            fieldName : 'Name'
        }
    } },
    { label: 'AccountName', fieldName: 'accountLink', type: 'url', typeAttributes : {
        label :{
            fieldName : 'accountName'
        },
        target : '_blank'
    }},
    { label: 'Title', fieldName: 'Title', cellAttributes: {
        class : {
            fieldName : 'titleColour'
        }
    }},
    { label: 'Rank', fieldName: 'Rank__c', type: 'customRank',typeAttributes : {
        rankIcon : {
            fieldName : 'rankIcon'
        }
    } },
    { label: 'Picture', type: 'customImage',typeAttributes : {
        pictureUrl : {
            fieldName : 'Picture__c'
        }
    }, cellAttributes : {
        alignment : "center"
    }
 },
    { label: 'Phone', fieldName: 'Phone', type: 'phone'},
    { label: 'Email', fieldName: 'Email', type: 'email' }
    
];
export default class CustomStyleDataTable extends LightningElement {
   
    contacts;
    columns = columns;

    @wire(getContactListForDataTable) wiredContacts ({data ,error}) {
        if(data){
            this.contacts = data.map(record =>{
                let accountLink = "/" + record.AccountId;
                let accountName = record.Account.Name;
                let titleColour = "slds-text-color_success"
                let rankIcon = record.Rank__c > 5 ? "utility:ribbon" : "";

                return{
                    ...record,
                    accountLink : accountLink,
                    accountName : accountName,
                    titleColour : titleColour,
                    rankIcon: rankIcon
                }
            })
            console.log(data);
            
        }else{
            console.log(error);
        }
    }
}