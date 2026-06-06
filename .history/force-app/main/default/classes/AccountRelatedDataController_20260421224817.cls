public with sharing class AccountRelatedDataController {
    

    @AuraEnabled(cacheable=True)
    public static List<Account> getAccount(){

        return [SELECT Id , Name , FROM Account];

    }

}