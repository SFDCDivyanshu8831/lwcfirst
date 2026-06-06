trigger OpportunityTrigger on Opportunity (before delete) {

    if(Trigger.isBefore){
        if(Trigger.isDelete){
            OpportunityHelper.BeforeDelete(Trigger.old)
        }
    }

}