.




sap.ui.define([
    "sap/dm/dme/podfoundation/control/PropertyEditor"
], function (PropertyEditor) {
    "use strict";

    var oPropertyEditor = PropertyEditor.extend("sapdmc.ext.viewplugins.viewPluginTemplate.builder.PropertyEditor", {
        constructor: function (sId, mSettings) {
            PropertyEditor.apply(this, arguments);
            this.setI18nKeyPrefix("viewPluginTemplate.");
            this.setResourceBundleName("sapdmc.ext.viewplugins.viewPluginTemplate.i18n.builder");
            this.setPluginResourceBundleName("sapdmc.ext.viewplugins.viewPluginTemplate.i18n.i18n");
        },

        addPropertyEditorContent: function (oPropertyFormContainer) {
            var oData = this.getPropertyData();
            this.addSwitch(oPropertyFormContainer, "closeButtonVisible", oData);
            // Add back button
            this.addSwitch(oPropertyFormContainer, "backButtonVisible", oData);
        },

        getDefaultPropertyData: function () {
            var oData = {
                "closeButtonVisible": false,
                // Add back button
                "backButtonVisible": false
            };

            return oData;
        }
    });

    return oPropertyEditor;
});