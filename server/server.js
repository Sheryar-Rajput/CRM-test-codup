const  request  = require("request");

exports = {

  
  /**
   * Payload passed to the generated webhook URL triggers the `onExternalEvent` callback.
   * @param {Object} options
   */

  postData : function (options){
console.log('function run',options)
let opt = {
  method:"GET",
  url : options.url,
  headers: {
    "Content-Type": "application/json"
  },
}

request(opt  , function(error , response , body){
 return response
})
// If the setup is successful
renderData();
  },
  /**
   * App setup event which is triggered at the time of installation. It can be used to allow/disallow app installation
   *
   * - Webhook URL can be generated using generateTargetURL()
   * - You can include an API call to the third party to register your webhook
   * - If the Webhook URL is generated properly and setup is successful, use `renderData();` to allow installation to complete
   * - If Webhook URL generation fails or some error occurs in setup, use `renderData({message: "<Message_text>"});` to disallow installation
   * @param {Object} payload
   */
   onAppInstallCallback: function(payload) {
    console.log("Logging arguments from onAppInstallevent: " + JSON.stringify(payload));
    let opt = {
      method:"POST",
      url : "http://192.168.4.84:3000",
      headers: {
        // "Authorization": "Bearer <%= iparam.apiKey %>",
        "Content-Type": "application/json"
      },
      body: JSON.stringify(payload)
    }
   
    request(opt  , function(error , response , body){
      const _data = JSON.parse(body);
      console.log(_data);
    })
    // If the setup is successful
    renderData();
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
  },
  onUserCreateCallback: function(payload) {
    console.log("Logging arguments from onUserCreate event: " + JSON.stringify(payload));
    renderData();
  }

}
