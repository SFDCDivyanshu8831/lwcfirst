public with sharing class AccountHelper {
 
    @AuraEnabled(cacheable=true)
    public static List<Account> getAccountList() {
        return [
            SELECT Id,
                   Name,
                   Phone,
                   Industry,
                   Rating
            FROM Account
            WITH USER_MODE
        ];
    }

    @AuraEnabled(cacheable=true)
    public static List<Account> getParentAccounts(){
        return [select Id,
                       Name,
                          Industry 
                                from Account
                                        where AnnualRevenue!=null 
                                                             WITH USER_MODE ];
    }
}
