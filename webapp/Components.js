sap.ui.define(["sap/ui/core/UIComponent", "sap/ui/core/routing/History"], (UIComponent, History) => {
	"use strict";
	return UIComponent.extend("sap.ui.demo.helloworld.Component", {
		metadata: {
			manifest: "json",
		},
        init: function () {
            // Call the base component's init function
            UIComponent.prototype.init.apply(this, arguments);
      
            // Initialize the router
            this.getRouter().initialize();
          }
	});
});
