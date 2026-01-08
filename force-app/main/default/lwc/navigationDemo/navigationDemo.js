import { LightningElement } from 'lwc';
import { NavigationMixin } from 'lightning/navigation';
import { encodeDefaultFieldValues } from "lightning/pageReferenceUtils";

export default class NavigationDemo extends NavigationMixin(LightningElement) {
    navHomeClickHandler() {
        const pageRef = {
            type: 'standard__namedPage',
            attributes: {
                pageName: 'home'
            }
        };
        this[NavigationMixin.Navigate](pageRef);
    }

    navAccListClickHandler(){
        let pageRef = {
    type: 'standard__objectPage',
    attributes: {
        objectApiName: 'Account',
        actionName: 'list'
    },
    state: {
        filterName: 'PlatinumandGoldSLACustomers'
  }
};
    this[NavigationMixin.Navigate](pageRef);
    }

    navCreateAccClickHandler(){
        let pageRef = 
{
    type: 'standard__objectPage',
    attributes: {
        objectApiName: 'Account',
        actionName: 'new'
    }
   
}
    this[NavigationMixin.Navigate](pageRef);
    }

    navCreateAccWithDefaultValuesClickHandler(){
       const defaultValues = encodeDefaultFieldValues({
        Industry : "Energy",
        Rating : "Hot"
       });
       let pageRef = {
    type: 'standard__objectPage',
    attributes: {
        objectApiName: 'Account',
        actionName: 'new'
    },
    state: {
        defaultFieldValues : defaultValues
        
    }
};
    this[NavigationMixin.Navigate](pageRef);
    }

    navEditAccClickHandler(){
        let pageRef = {
        type: 'standard__recordPage',
        attributes: {
            recordId: '001gL000005RVMcQAO',
            objectApiName: 'PersonAccount',
            actionName: 'edit'
        }
}
    this[NavigationMixin.Navigate](pageRef);
    }
}
