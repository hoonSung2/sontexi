// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import PortalVue from 'portal-vue';


Vue.use(PortalVue);


import firebase from "firebase/app";
import "firebase/firestore";

import "firebase/auth";
import "firebase/database";

Vue.config.productionTip = false


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBJ6_djq8S_DWQaJtBtWwefaqp05LKgDWg",
  authDomain: "taxi-6c99c.firebaseapp.com",
  databaseURL: "https://taxi-6c99c-default-rtdb.firebaseio.com",
  projectId: "taxi-6c99c",
  storageBucket: "taxi-6c99c.appspot.com",
  messagingSenderId: "990303890516",
  appId: "1:990303890516:web:d107aeb27e3be47d74d1c1",
  measurementId: "G-1MHMXS5V68"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Firestore database 객체 생성
const db = firebase.firestore();


new Vue({
  el: '#app',
  router,
  components: {
    App
  },
  template: '<App/>'
})
