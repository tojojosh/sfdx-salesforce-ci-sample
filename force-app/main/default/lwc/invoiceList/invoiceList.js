import { LightningElement, wire } from 'lwc';
import getInvoices from '@salesforce/apex/InvoiceListController.getInvoices';

const COLUMNS = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Amount', fieldName: 'Amount__c', type: 'currency' },
    { label: 'Status', fieldName: 'Status__c' }
];

export default class InvoiceList extends LightningElement {
    invoices;
    error;
    columns = COLUMNS;

    @wire(getInvoices)
    wiredInvoices({ error, data }) {
        if (data) {
            this.invoices = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.invoices = undefined;
        }
    }
}

