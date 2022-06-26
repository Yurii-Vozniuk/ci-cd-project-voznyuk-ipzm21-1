<template>
    <div class="v-users-list">
        <v-user
            v-for="chat in chats"
            :key="chat.id"
            :user_data="chat"
        />
    </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';
import vUser from './v-user.vue';

export default {
  name: 'v-users-list',
  components: {
    vUser,
  },
  computed: {
    ...mapState([
      'chats',
    ]),
  },
  methods: {
    ...mapActions([
      'FETCH_CHATS',
      'SET_USER_TO_HEADER',
    ]),
  },
  mounted() {
    this.FETCH_CHATS();
    this.SET_USER_TO_HEADER();
  },
};
</script>

<style scoped>

</style>
