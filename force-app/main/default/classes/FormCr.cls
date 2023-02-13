public with sharing class FormCr {
    @AuraEnabled
    public static contact crick__c FormCr1(AccountId accId crick__c cri) {
   try{
    insert cri;
    return cri;
   }catch(Exception e){
   throw new AuraHandledException(e.getMessage());
   }
    }
     contact con = [select id,name from contact where Id=:AccId];
return con;

}