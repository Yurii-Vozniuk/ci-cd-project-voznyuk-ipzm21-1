import Vuex from 'vuex';

import { shallowMount, createLocalVue } from '@vue/test-utils';
import vContactList from '@/components/contacts/v-contact-list.vue';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('v-contact-list', () => {
  let actions;
  let store;

  let wrapper;

  beforeEach(() => {
    actions = {
      FETCH_CONTACTS: jest.fn(),
    };
    store = new Vuex.Store({
      state: {},
      actions,
    });

    wrapper = shallowMount(vContactList, {
      localVue,
      store,
    });
  });

  it('should render', () => {
    expect(wrapper.find('.v-contact-list'));
  });

  it('should call fetch contacts method', () => {
    expect(actions.FETCH_CONTACTS).toHaveBeenCalled();
  });
});
