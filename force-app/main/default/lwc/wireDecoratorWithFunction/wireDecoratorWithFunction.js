import { LightningElement, wire } from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Phone', fieldName: 'Phone'},
    { label: 'Account Industry', fieldName: 'Industry'},
    { label: 'Account Rating', fieldName: 'Rating'},
];

export default class WireDecoratorWithFunction extends LightningElement {
    accounts;
    error;
    columns = columns;
    @wire(getAccountList) accountfunction({error, data}) {
        if(data) {
            let updatedAccounts = data.map((currentItem) =>{
                let updatedObject = {};
                if(!currentItem.hasOwnProperty("Rating")){
                    updatedObject = { ...currentItem , Rating : "Warm" };
                }else {
                    updatedObject = { ...currentItem };
                }
                return updatedObject;
            });
            this.accounts = [ ...updatedAccounts];
            this.error = null;
        }else if(error) {
            this.error = error;
            this.accounts = null;
        }
    }
}