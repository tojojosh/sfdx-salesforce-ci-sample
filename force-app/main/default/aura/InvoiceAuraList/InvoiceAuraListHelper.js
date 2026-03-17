({
    loadInvoices : function(component) {
        var action = component.get("c.getInvoices");
        action.setCallback(this, function(response) {
            var state = response.getState();
            if (state === "SUCCESS") {
                component.set("v.invoices", response.getReturnValue());
            } else {
                component.set("v.error", "Error loading invoices");
            }
        });
        $A.enqueueAction(action);
    }
})
