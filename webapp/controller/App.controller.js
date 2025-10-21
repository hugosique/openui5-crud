sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
  ],
  (Controller, MessageToast, JSONModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
      onInit() {
        const onData = {
          recipient: {
            name: "World",
          },
        };

        const model = new JSONModel(onData);
        this.getView().setModel(model);
      },

      onShowHello() {
        MessageToast.show("Hello World");
      },
    });
  }
);
