import Vuex from 'vuex';

import { createLocalVue, shallowMount } from '@vue/test-utils';
import vUsersList from '@/components/users/v-users-list.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('v-users-list', () => {
  let actions;
  let store;

  let wrapper;

  beforeEach(() => {
    actions = {
      FETCH_CHATS: jest.fn(),
      SET_USER_TO_HEADER: jest.fn(),
    };

    store = new Vuex.Store({
      state: {},
      actions,
    });

    wrapper = shallowMount(vUsersList, {
      localVue,
      store,
    });
  });

  it('should render', () => {
    expect(wrapper.find('.v-users-list'));
  });

  it('should call fetch chats method', () => {
    expect(actions.FETCH_CHATS).toHaveBeenCalled();
  });

  it('should call set user to header method', () => {
    expect(actions.FETCH_CHATS).toHaveBeenCalled();
  });
});
