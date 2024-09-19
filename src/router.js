import { createWebHistory, createRouter } from 'vue-router';

import NameApp from './page/NameApp.vue';
import Contacts from './page/Contacts.vue';
import Icons from './page/Icons.vue';
import Story from './page/Story.vue';

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
          path: '/skills',
          name: 'skills',
          component: Icons
      },
      {
          path: '/story',
          name: 'Story',
          component: Story
      }
  ]
});

export { router };