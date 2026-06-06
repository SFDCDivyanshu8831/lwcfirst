public with sharing class AccountWithOppController {
    

    public static void getAccountWithOpp(){
        for(Account acc : [SELECT Id , Name , Type , BillingCountry , (Select Id FROM Opportunities) FROM Account WHERE ownerId =:UserInfo.getUserId()]){

        }
    
    }


    public class outputWrapper{

        @AuraEnabled
        public string nameUrl;

        @AuraEnabled
        public string

    }

}