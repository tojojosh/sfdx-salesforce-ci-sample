public with sharing class InvoiceVFController {
    public List<Invoice__c> getInvoices() {
        return [
            SELECT Id, Name, Amount__c, Status__c
            FROM Invoice__c
            ORDER BY CreatedDate DESC
            LIMIT 50
        ];
    }
}

