@IsTest
private class DeploymentTestListControllerTest {
    @IsTest
    static void testGetDeploymentTests() {
        DeploymentTest__c rec = new DeploymentTest__c(Notes__c = 'hello');
        insert rec;

        Test.startTest();
        List<DeploymentTest__c> results = DeploymentTestListController.getDeploymentTests();
        Test.stopTest();

        System.assertNotEquals(null, results, 'Results should not be null');
        System.assertEquals(1, results.size(), 'Should return the inserted record');
        System.assertEquals('hello', results[0].Notes__c, 'Notes__c should match');
    }
}
