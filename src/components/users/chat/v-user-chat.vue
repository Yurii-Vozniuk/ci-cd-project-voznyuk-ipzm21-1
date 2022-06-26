<template>
  <div class="v-user-chat">
    <v-message
      v-for="message in messages"
      :key="message.id"
      :message="message"
    />
    <div class="input__field">
      <input class="v-user-chat__textfield" type="text" v-model="textValue"
             @keypress.enter="sendMessage">
      <i class="material-icons" @click="sendMessage">send</i>
    </div>
  </div>
</template>

<script>
import { mapActions } from 'vuex';
import vMessage from './v-message';

export default {
  name: 'v-user-chat',
  data() {
    return {
      textValue: '',
    };
  },
  components: {
    vMessage,
  },
  props: {
    messages: {
      type: Array,
      default: () => [],
    },
    user: {
      type: Object,
      default: () => {},
    },
  },
  methods: {
    ...mapActions([
      'SET_MESSAGE_TO_CHAT',
      'FETCH_CHATS',
    ]),
    sendMessage() {
      const user = { ...this.user };
      const chat = {
        id: this.messages.length + 1,
        time: new Date().toLocaleTimeString('en-US', {
          hour12: false,
          hour: 'numeric',
          minute: 'numeric',
        }),
        text: this.textValue,
        type: 'own',
      };

      user.chat.push(chat);

      this.SET_MESSAGE_TO_CHAT({ userID: user.id, chat: user })
        .then(() => {
          this.FETCH_CHATS();
          this.textValue = '';
        });
    },
  },
};
</script>

<style scoped>

</style>
