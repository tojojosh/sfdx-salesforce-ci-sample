import { LightningElement, wire } from 'lwc';
import getDeploymentTests from '@salesforce/apex/DeploymentTestListController.getDeploymentTests';

const COLUMNS = [
    { label: 'Name', fieldName: 'Name' },
    { label: 'Notes', fieldName: 'Notes__c', type: 'text' }
];

export default class DeploymentTestList extends LightningElement {
    deploymentTests;
    error;
    columns = COLUMNS;

    @wire(getDeploymentTests)
    wiredDeploymentTests({ error, data }) {
        if (data) {
            this.deploymentTests = data;
            this.error = undefined;
        } else if (error) {
            this.error = error;
            this.deploymentTests = undefined;
        }
    }
}

