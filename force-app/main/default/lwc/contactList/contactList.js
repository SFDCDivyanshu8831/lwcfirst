import { LightningElement,wire } from 'lwc';
import getContactList from '@salesforce/apex/contactController.getContactList';
import { publish, MessageContext } from 'lightning/messageService';
import recordSelected from '@salesforce/messageChannel/sendContact__c';
export default class ContactList extends LightningElement {
    selectedcontacts;

    @wire(getContactList) contacts;
    

     @wire(MessageContext)
    messageContext;

    selectionHandler(event){
        let selectedcontactId = event.detail;
        this.selectedcontacts = this.contacts.data.find((curritem) =>curritem.Id ===selectedcontactId);
        const payload = {lmsData: this.selectedcontacts};

        publish(this.messageContext, recordSelected, payload);
    }
    };

    
