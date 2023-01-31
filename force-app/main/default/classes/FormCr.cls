public with sharing class FormCr {
    @AuraEnabled
    public static crick__c FormCr1(crick__c cri) {
   try{
    insert cri;
    return cri;
   }catch(Exception e){
   throw new AuraHandledException(e.getMessage());
   }
    }
}