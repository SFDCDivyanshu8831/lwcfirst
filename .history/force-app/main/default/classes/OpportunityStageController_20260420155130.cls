public with sharing class OpportunityStageController {
    
 @AuraEnabled(cacheable=True)
 public static List<Opportunity> getOpportunityRecords(String stageName , String sortBy , String sortDirection){

    String query = 'SELECT Id , Name , StageName , Amount , CloseDate FROM Opportunity';
    if(String.isNotBlank(stageName) && stageName !='All'){

        query +='WHERE StageName =: stageName';

    }

    if(String.isBlank(sortBy)){

        query +='ORDER BY Amount Desc ';

    }
    else{
        query +='ORDER BY '+String.escapeSingleQuotes(sortBy)+' '+String.escapeSingleQuotes(sortDirection)
    }

 }
}