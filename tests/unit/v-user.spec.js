import { shallowMount } from '@vue/test-utils';
import vUser from '@/components/users/v-user.vue';

describe('v-user', () => {
  let wrapper;

  const user_data = {
    id: 1,
    name: 'Tom',
    chat: [{
      id: 1,
      text: 'Hi there! How r u doin?',
      time: '19:10',
      type: 'own',
    }],
  };

  beforeEach(() => {
    wrapper = shallowMount(vUser, {
      propsData: { user_data },
    });
  });

  it('should render', () => {
    expect(wrapper.find('.v-user'));
  });

  it('should render name', () => {
    expect(wrapper.find('.info__name').text())
      .toEqual(user_data.name);
  });

  it('should render last message', () => {
    expect(wrapper.find('.info_last-message').text())
      .toEqual(user_data.chat[0].text);
  });

  it('should render time message', () => {
    expect(wrapper.find('.v-user__time').text())
      .toEqual(user_data.chat[0].time);
  });
});
