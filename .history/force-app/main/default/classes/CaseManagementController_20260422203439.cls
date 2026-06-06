public with sharing class CaseManagementController {
    
    @AuraEnabled(cacheable=true)
    public static List<Case> getOpenCases (Id accountId){

        String query = 'SELECT Id , CaseNumber, AccountId, Account.Name,' +
                        'Subject, ContactId, Contact.Name, Status, Priority, IsClosed, CreatedDate FROM' +
                        'Case WHERE IsClosed = false'

        if(AccountId !=null){
            query += '  AND AccountId =: ' + accountId;
        }              
        
           query = query + 'ORDER BY'

    }


}