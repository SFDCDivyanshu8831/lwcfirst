public with sharing class customLookupController {
    @AuraEnabled(cacheable=true)
    public static List<sObject> searchRecords (string objectApiName, string searchKey){
        List<sObject> sObjectlist = new List<sObject>();
        
        if(string.isNotBlank(searchKey)){
            string key = '%' + searchKey + '%';
            string queryString = 'Select Id, Name from ' + objectApiName + ' where Name Like : key' ;
            sObjectlist = Database.query(queryString);
         }
         return sObjectlist;
        }
}