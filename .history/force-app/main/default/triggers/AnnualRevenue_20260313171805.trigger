trigger AnnualRevenue on Account (before insert) {
    if(trigger.isBefore}){
        if(trigger.isInsert){
            AnnualRevenueHandler.updateAnnualRevenue(trigger.new);
        }
    }
}