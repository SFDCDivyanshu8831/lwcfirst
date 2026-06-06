public with sharing class OpportunityStageController {
    
 @AuraEnabled(cacheable=True)
 public static List<Opportunity> getOpportunityRecords(String stageName , String sortBy , String sortDirection)
}