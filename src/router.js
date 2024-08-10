import { createWebHistory, createRouter } from 'vue-router';

import NameApp from './page/NameApp.vue';
import Contacts from './page/Contacts.vue';
import Header from './components/Header.vue'
import Icons from './page/Icons.vue'

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
      },
      {
        path: '/lenguages',
        name: 'lenguages',
        component: Icons
      }
  ]
});

export { router };