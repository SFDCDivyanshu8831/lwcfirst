public with sharing class CaseManagementController {
    
    @AuraEnabled(cacheable=true)
    public static List<Case> getOpenCases (Id accountId){

        String query = 'SELECT Id , CaseNumber, '

    }


}