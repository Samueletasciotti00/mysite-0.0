import { createWebHistory, createRouter } from 'vue-router';

import NameApp from './components/NameApp.vue';
import Contacts from './page/Contacts.vue';
import Header from './components/Header.vue'

const router = createRouter({
  history: createWebHistory(),
  routes: [
      {
          path: '/',
          name: 'home',
          component: NameApp
      },
      {
          path: '/contacts',
          name: 'contacts',
          component: Contacts
      }
  ]
});

export { router };