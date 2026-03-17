trigger InvoiceTrigger on Invoice__c (before insert, before update) {
    if (Trigger.isBefore) {
        if (Trigger.isInsert || Trigger.isUpdate) {
            InvoiceService.setDefaultStatus(Trigger.new);
        }
    }
}

