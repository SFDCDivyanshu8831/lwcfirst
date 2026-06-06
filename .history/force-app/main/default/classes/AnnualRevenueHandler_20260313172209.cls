public with sharing class AnnualRevenueHandler {
    
    public static void updateAnnualRevenue(List<Account> accList){
        for(Account acc : accList){
            if(acc.AnnualRevenue == null || acc.AnnualRevenue < 1000000){
                acc.Rating == 'Cold';
            }else if(acc.AnnualRevenue)
        }
    }
}