public with sharing class contactController {
   @AuraEnabled(cacheable=true)
    
   public static List<contact> getContactList(){
     List<contact> conList =    [select id,Name,FirstName,LastName,Title,Phone,Email,photoUrl 
                                    FROM Contact 
                                    WHERE photoUrl!=null 
                                    WITH USER_MODE 
                                    LIMIT 10];
         return conList;                           
   }

   @AuraEnabled(cacheable=true)
    
   public static List<contact> getContactListForDataTable(){
     List<contact> conList =    [select id,Name,FirstName,LastName,Title,Phone,Email,photoUrl,Picture__c,Rank__c,AccountId,Account.Name 
                                    FROM Contact 
                                    WITH USER_MODE 
                                    LIMIT 10];
         return conList;                           
   }
    
   @AuraEnabled(cacheable=true)
   public static List<contact> getContactBasedOnAccount(string accountId){
    List<contact> conList = [
      SELECT Id,Name,FirstName,LastName,Title,Phone,Email,Picture__c,Rank__c,AccountId,Account.Name,LeadSource 
      FROM Contact 
      WHERE AccountId =:accountId 
      WITH USER_MODE
      LIMIT 10
    ];
       return conList;  
   }

}