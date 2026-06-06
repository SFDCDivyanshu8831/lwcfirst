public with sharing class AccountWithOppController {
    

    public static void getAccountWithOpp(){

        List<outputWrapper> outputWrapperList = new List<outputWrapper>();

        for(Account acc : [SELECT Id , Name , Type , BillingCountry , (Select Id FROM Opportunities) FROM Account WHERE ownerId =:UserInfo.getUserId()]){

            outputWrapper output = new outputWrapper();
            output,nameUrl = '/' + acc.Id;
            output.type = acc.Type;
            output.country = ac.BillingCountry;
            output.numberOfOpp = acc.Opportunities.size();
            output.accountId = acc.Id;
            output.accountName = acc.Name;
            outputWrapperList.add(output);

        }
    
    }


    public class outputWrapper{

        @AuraEnabled
        public string nameUrl;

        @AuraEnabled
        public string type;

        @AuraEnabled
        public string country;

        @AuraEnabled
        public integer numberOfOpp;

        @AuraEnabled
        public string accountId;

        @AuraEnabled
        public string accountName;


    }

}