@IsTest
private class InvoiceServiceTest {
    @IsTest
    static void testDefaultStatusIsSet() {
        Invoice__c inv = new Invoice__c(Amount__c = 100);
        insert inv;

        Invoice__c insertedInv = [SELECT Id, Status__c FROM Invoice__c WHERE Id = :inv.Id LIMIT 1];
        System.assertEquals('Draft', insertedInv.Status__c, 'Default status should be Draft');
    }
}

