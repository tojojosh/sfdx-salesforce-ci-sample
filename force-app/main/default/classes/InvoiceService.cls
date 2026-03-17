public with sharing class InvoiceService {
    public static void setDefaultStatus(List<Invoice__c> invoices) {
        for (Invoice__c inv : invoices) {
            if (inv.Status__c == null) {
                inv.Status__c = 'Draft';
            }
        }
    }
}

