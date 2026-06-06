public with sharing class CaseManagementController {
    
    @AuraEnabled(cacheable=true)
    public static List<Case> getOpenCases (Id accountId){

        String query = 'SELECT Id , CaseNumber, AccountId, Account.Name,' +
                        'Subject, ContactId, Contact.Name, Status, Priority, IsClosed, CreatedDate FROM' +
                        'Case WHERE IsClosed = false'

        if(AccountId !=null){
            query += '  AND AccountId =: accountId ';
        }              
        
           query = query + 'ORDER BY CreatedDate Desc LIMIT 50';

        List<Case> ListCases = Database.query(query);
        return ListCases


    }

    @AuraEnabled
    public static void closeSelectedCases(List<Id> selectedCases){

        List<Case> caseList = new List<Case>();
        for(Id caseId : selectedCases){
            Case CaseRecord = new Case();
            CaseRecord.Id = caseId;
            CaseRecord.Status = 'Closed';
            caseList.add(CaseRecord);
        }
        try{
            update caseList;
        }catch(Exception ex){
            throw new Aura
        }

    }


}