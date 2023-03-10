function generateQRCode() {
  var ssid = document.getElementById("ssid").value;
  var password = document.getElementById("password").value;
  var encryption = document.getElementById("encryption").value;
  var qrCodeData = "WIFI:S:" + ssid + ";T:" + encryption + ";P:" + password + ";;";
  document.getElementById("qrcode").src = "https://chart.googleapis.com/chart?cht=qr&chs=200x200&chl=" + encodeURIComponent(qrCodeData) + "&choe=UTF-8";
}

document.getElementById("generate-button").addEventListener("click", generateQRCode);

var showPasswordButton = document.getElementById("show-password");
var passwordField = document.getElementById("password");

showPasswordButton.addEventListener("click", function() {
  if (passwordField.type === "password") {
    passwordField.type = "text";
    showPasswordButton.textContent = "Hide";
  } else {
    passwordField.type = "password";
    showPasswordButton.textContent = "Show";
  }
});
