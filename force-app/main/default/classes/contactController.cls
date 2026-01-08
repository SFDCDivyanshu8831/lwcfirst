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
    
}