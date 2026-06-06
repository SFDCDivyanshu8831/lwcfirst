public with sharing class AccountRelatedDataController {
    

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){

        return [SELECT Id , Name , FROM Account];

    }

    @AuraEnabled(cacheable=true)

    public static void getRelatedRecords(){

        Account acc = []

    }

}