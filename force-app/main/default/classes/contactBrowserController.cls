public with sharing class contactBrowserController {
    @AuraEnabled(cacheable=true)

    public static List<Contact> getContactListByFilter(string accountId,string Industry){
        string query = 'select Id,Name,Title,Phone,PhotoUrl,Email from Contact';
        List<string> filters = new List<string>();
        if(string.isNotBlank(accountId)){
            filters.add('accountId = :accountId');
        }
        if(string.isNotBlank(Industry)){
            filters.add('Contact.Account.Industry = :Industry');
    }
        if(!filters.isEmpty()){
            query+= ' where ' + string.join(filters, ' AND ');
        }
            query+= ' WITH USER_MODE ';
            query+= 'ORDER by Name';
            system.debug('query ' + query);
        List<Contact> contactList = Database.query(query);
        return contactList;
}
}