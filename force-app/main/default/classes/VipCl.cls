public with sharing class VipCl {
    @AuraEnabled
    public static Deployment_frequency__c VipCl1(Deployment_frequency__c Dep) {
        try{
            insert Dep;
            return Dep;
           }catch(Exception e){
           throw new AuraHandledException(e.getMessage());
           }
    }
}