sap.ui.define([
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast"  // Import MessageToast for notifications
  ], function (Controller, MessageToast) {
    "use strict";
    
    return Controller.extend("sap.ui.demo.helloworld.controller.App", {
      
      // Called when the controller is instantiated
      onInit: function () {
        // Initialization code if needed
      },
  
      // Event handler for the submit button
      onSubmit: function () {
        // Retrieve values from the input fields
        var name = this.byId("nameInput").getValue();
        var email = this.byId("emailInput").getValue();
        var message = this.byId("messageInput").getValue();
  
        // You can perform validation here (e.g., check if fields are empty)
  
        // Display the message "Message Submitted" using a MessageToast
        MessageToast.show("Message Submitted");
  
        // Optionally, clear the input fields after submission
        this.byId("nameInput").setValue("");
        this.byId("emailInput").setValue("");
        this.byId("messageInput").setValue("");
      }
    });
  });
  