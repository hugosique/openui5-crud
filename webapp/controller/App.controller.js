sap.ui.define(
  [
    "sap/ui/core/mvc/Controller",
    "sap/m/MessageToast",
    "sap/ui/model/json/JSONModel",
    "sap/ui/model/resource/ResourceModel"
  ],
  (Controller, MessageToast, JSONModel, ResourceModel) => {
    "use strict";

    return Controller.extend("ui5.walkthrough.controller.App", {
      onInit() {
        const onData = {
          recipient: {
            name: "World",
          },
        };

        const oModel = new JSONModel(onData);
        this.getView().setModel(oModel);
        // set default model on view

        // set i18n model on view
        const i18nModel = new ResourceModel({
            bundleName: "ui5.walkthrough.i18n.i18n",
        });
        this.getView().setModel(i18nModel, "i18n");
        // Pass a key "i18n" to setModel to set the model with a name
      },

      onShowHello() {
        const oBundle = this.getView().getModel("i18n").getResourceBundle();
        const sRecipient = this.getView().getModel().getProperty("/recipient/name");
        const sHelloMsg = oBundle.getText("helloMsg", [sRecipient]);
        MessageToast.show(sHelloMsg);
      },
    });
  }
);
