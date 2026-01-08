import { LightningElement, wire} from 'lwc';
import getAccountList from '@salesforce/apex/AccountHelper.getAccountList';
    const columns = [
    { label: 'Account Name', fieldName: 'Name' },
    { label: 'Account Phone', fieldName: 'Phone'},
    { label: 'Account Industry', fieldName: 'Industry'},
    { label: 'Account Rating', fieldName: 'Rating'},
];
export default class WireDecoratorProperty extends LightningElement {
    columns = columns;
    @wire(getAccountList) accounts;
}