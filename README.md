## Sample Salesforce CI/CD App

This is a minimal Salesforce app meant for testing end-to-end deployments and CI/CD with GitHub and Azure DevOps.

### Contents
- **Custom Object**: `Invoice__c` with fields `Amount__c` and `Status__c`.
- **Apex**: `InvoiceService`, `InvoiceTrigger`, `InvoiceListController`, `InvoiceVFController` and accompanying test.
- **LWC**: `invoiceList` showing invoices in a datatable.
- **Aura**: `InvoiceAuraList` listing invoices.
- **Visualforce**: `InvoiceVF` page listing invoices.
- **Pipelines**:
  - `.github/workflows/salesforce-ci.yml` (GitHub Actions)
  - `azure-pipelines.yml` (Azure DevOps)

### Prerequisites
- Salesforce CLI (`sf`) installed.
- Dev Hub enabled org.

### Local Setup
```bash
sf org login web --set-default-dev-hub --alias my-hub
sf org create scratch --definition-file config/project-scratch-def.json --alias dev --set-default
sf project deploy start --source-dir force-app --target-org dev
sf apex run test --target-org dev --result-format human --code-coverage
```

### GitHub Actions Setup
1. Create a secret named `SFDX_AUTH_URL` in your GitHub repo.
2. The auth URL can be generated from an already-authenticated Dev Hub using:
   ```bash
   sf org display --target-org my-hub --verbose --json
   ```
   Then build the SFDX auth URL or use the `sf org login sfdx-url` workflow you prefer.

### Azure DevOps Setup
1. Create a pipeline using `azure-pipelines.yml`.
2. Add a variable or secret named `SFDX_AUTH_URL` containing your Dev Hub auth URL.

