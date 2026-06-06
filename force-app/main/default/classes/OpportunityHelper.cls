public with sharing class OpportunityHelper {
    
    public static void BeforeDelete(List<Opportunity> oldOpps){

        Set<Id> AccIds = new Set<Id>();

        for(Opportunity opp : oldOpps){

            if(opp.AccountId != null){

                AccIds.add(opp.AccountId);

            }

        }

        Map<Id , Account> AccMap = new Map<Id , Account> (SELECT OwnerId FROM Account WHERE Id in : AccIds);

        for(Opportunity opp : oldOpps){

            if(opp.AccIds !=null){

                Task t = new Task();
                t.OwnerId = AccMap.get(opp.AccountId).OwnerId;
                t.WhatId = opp.Id;
                t.Description = 'Please Investigate'

            }

        }

    }

}