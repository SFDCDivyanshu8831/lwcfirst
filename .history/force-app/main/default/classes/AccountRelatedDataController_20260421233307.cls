public with sharing class AccountRelatedDataController {
    

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){

        return [SELECT Id , Name , FROM Account];

    }

    @AuraEnabled(cacheable=true)

    public static void getRelatedRecords(){

        Account acc = [SELECT Id, (SELECT Id , caseNumber , Subject , Status FROM cases WHERE status != Closed),
                       (SELECT Id , FirstName, LastName , Email, Phone FROM contacs)
                       FROM Account]

    }

    public class relatedWrapper{

        @AuraEnabled public List<Cse

    }

}