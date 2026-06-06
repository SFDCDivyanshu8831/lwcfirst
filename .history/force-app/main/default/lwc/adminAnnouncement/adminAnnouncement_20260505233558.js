import { LightningElement,api } from 'lwc';

export default class AdminAnnouncement extends LightningElement {
    @api title;
    @api message;
    @api severity;
    @api ctalabel;
    @api ctadestination;

    get computedHeaderClass{
        switch (this.severity){
            case 'info':

                return 'slds-notify slds-notify_alert';
            

           case 'warning':

                 return 'slds-notify slds-notify_alert slds-alert_warning';

            default:
                break;
        
            
           

        }
    }

}