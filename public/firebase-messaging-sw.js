importScripts("https://www.gstatic.com/firebasejs/7.19.1/firebase-app.js");
importScripts(
  "https://www.gstatic.com/firebasejs/7.19.1/firebase-messaging.js"
);

if ("serviceWorker" in navigator) {
  navigator.serviceWorker
    .register("../firebase-messaging-sw.js")
    .then(function (reg) {
      console.log("Success", reg.scope);
    })
    .catch(function (err) {
      console.log("Error", err);
    });
}

firebase.initializeApp({
  apiKey: "",
  authDomain: "",
  databaseURL: "",
  projectId: "",
  storageBucket: "",
  messagingSenderId: "",
  appId: "",
});

const initMessaging = firebase.messaging();
