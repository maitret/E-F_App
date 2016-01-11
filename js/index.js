var app = {
initialize: function() {
this.bindEvents();
},
bindEvents: function() {
document.addEventListener('deviceready', this.onDeviceReady, false);
document.getElementById('scan').addEventListener('click', this.scan, false);
},

onDeviceReady: function() {
app.receivedEvent('deviceready');
},

receivedEvent: function(id) {
var parentElement = document.getElementById(id);
var listeningElement = parentElement.querySelector('.listening');
var receivedElement = parentElement.querySelector('.received');

listeningElement.setAttribute('style', 'display:none;');
receivedElement.setAttribute('style', 'display:block;');

console.log('Received Event: ' + id);
},

scan: function() {
console.log('scanning');

var scanner = cordova.require("cordova/plugin/BarcodeScanner");

scanner.scan( function (result) {
/*
result.text
result.format
result.cancelled
*/

$("#info_qr").html("Espere un momento...");
$("#info_qr").load("http://www.easyandfreshpr.com/_a_d_m_i_n_/app/valida_qr.php?f="+result.format+"&qr=" + result.text + "");

//console.log("Scanner result: \n" + "text: " + result.text + "\n" + "format: " + result.format + "\n" + "cancelled: " + result.cancelled + "\n");
//document.getElementById("info").innerHTML = result.text;
//console.log(result);
/*
if (args.format == "QR_CODE") {
window.plugins.childBrowser.showWebPage(args.text, { showLocationBar: false });
}
*/

}, function (error) {
//console.log("Scanning failed: ", error);
} );
}
};
