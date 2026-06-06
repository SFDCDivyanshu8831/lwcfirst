public with sharing class AccountRelatedDataController {
    

    @AuraEnabled(cacheable=true)
    public static List<Account> getAccount(){

        return [SELECT Id , Name , FROM Account];

    }

    @AuraEnabled(cacheable=true)

    public static relatedWrapper getRelatedRecords(){

        Account acc = [SELECT Id, (SELECT Id , caseNumber , Subject , Status FROM cases WHERE status != Closed),
                       (SELECT Id , FirstName, LastName , Email, Phone FROM contacts)
                       FROM Account]
        
                    relatedWrapper Wrapper = New relatedWrapper();
                    Wrapper.cases = acc.cases;
                    Wrapper.contacts = acc.contacts;
                    return Wrapper;                     

    }

    public class relatedWrapper{

        @AuraEnabled public List<Case> cases;
        @AuraEnabled public List<Contact> contacts;

    }

}