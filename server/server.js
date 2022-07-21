exports = {

  /**
   * App setup event which is triggered at the time of installation. It can be used to allow/disallow app installation
   *
   * - Webhook URL can be generated using generateTargetURL()
   * - You can include an API call to the third party to register your webhook
   * - If the Webhook URL is generated properly and setup is successful, use `renderData();` to allow installation to complete
   * - If Webhook URL generation fails or some error occurs in setup, use `renderData({message: "<Message_text>"});` to disallow installation
   * @param {Object} payload
   */
  onAppInstallCallback: function (payload) {
    console.log("Logging arguments from onAppInstallevent : ");
    
  },
  /**
   * Payload passed to the generated webhook URL triggers the `onExternalEvent` callback.
   * @param {Object} payload
   */
  onExternalEventCallback: function (payload) {
    console.log("Logging arguments from onExternalEvent: " + JSON.stringify(payload));
  },
  /**
   * When you click the uninstall icon, the `onAppUninstall` event occurs and then the registered callback method is executed.
   * @param {Object} payload
   */
  onAppUninstallCallback: function (payload) {
    console.log("Logging arguments from onAppUninstall event: " + JSON.stringify(payload));
    renderData();
  }
}
