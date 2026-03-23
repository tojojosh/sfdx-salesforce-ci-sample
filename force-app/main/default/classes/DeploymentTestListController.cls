public with sharing class DeploymentTestListController {
    @AuraEnabled(cacheable=true)
    public static List<DeploymentTest__c> getDeploymentTests() {
        return [
            SELECT Id, Name, Notes__c
            FROM DeploymentTest__c
            ORDER BY CreatedDate DESC
            LIMIT 50
        ];
    }
}
