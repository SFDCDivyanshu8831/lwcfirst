public with sharing class AccountRelatedDataController {
    
    public static List<Account> getAccount(){

        return [SELECT Id , Name , FROM Account];

    }

}