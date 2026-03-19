import { LightningElement, api } from 'lwc';

export default class ErrorPanel extends LightningElement {
    @api errors;

    get stringifiedErrors() {
        // `errors` can be a complex object depending on the wire/adaptor response.
        // Showing a safe JSON representation keeps the component robust for CI.
        if (this.errors === undefined || this.errors === null) {
            return '';
        }
        try {
            return JSON.stringify(this.errors, null, 2);
        } catch (e) {
            return String(this.errors);
        }
    }
}

