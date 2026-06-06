public with sharing class OpportunityStageController {
    
 @AuraEnabled(cacheable=True)
 public static List<Opportunity> getOpportunityRecords(String stagename , String sortby , String sortdirection)
}