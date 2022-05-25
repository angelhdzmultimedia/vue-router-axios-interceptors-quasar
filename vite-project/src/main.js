import { createApp } from 'vue';
import App from './App.vue';
import { router } from './router';
import { Quasar, Notify } from 'quasar';
import '@quasar/extras/roboto-font/roboto-font.css';
import '@quasar/extras/material-icons/material-icons.css';
import '@quasar/extras/fontawesome-v6/fontawesome-v6.css';
// Import Quasar css
import 'quasar/src/css/index.sass';

createApp(App)
  .use(Quasar, {
    plugins: {
      Notify,
    }, // import Quasar plugins and add here
  })
  .use(router)
  .mount('#app');
