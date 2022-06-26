import Vue from 'vue';
import Router from 'vue-router';

import vContacts from '../components/contacts/v-contact-list.vue';
import vContactUserInfo from '../components/contacts/v-contact-user-info.vue';
import vUserList from '../components/users/v-users-list.vue';
import vUserChat from '../components/users/chat/v-user-chat.vue';

Vue.use(Router);

const router = new Router({
  routes: [
    {
      path: '/',
      name: 'contacts',
      component: vContacts,
    },
    {
      path: '/contact',
      name: 'contact',
      component: vContactUserInfo,
    },
    {
      path: '/chats',
      name: 'chats',
      component: vUserList,
    },
    {
      path: '/chat',
      name: 'chat',
      component: vUserChat,
      props: true,
    },
  ],
});

export default router;
