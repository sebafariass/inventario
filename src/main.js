import Vue from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'
import vuetify from './plugins/vuetify'
import firebase from 'firebase';

Vue.config.productionTip = false

var firebaseConfig = {
  apiKey: "AIzaSyBBpxzLfabuuoXEyh81VDJX84UCsDbKdPg",
  authDomain: "listautil-2200.firebaseapp.com",
  projectId: "listautil-2200",
  storageBucket: "listautil-2200.appspot.com",
  messagingSenderId: "685730899021",
  appId: "1:685730899021:web:4fb5136f70dd1955a66804"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
