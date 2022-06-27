const CONTACTS_LIST = [
  'Tom',
  'Sam',
  'Samuel',
  'Jack',
  'Miranda',
];

const CONTACTS_STATUS = {
  Tom: 'online',
  Sam: 'offline',
  Samuel: 'offline',
  Jack: 'online',
  Miranda: 'offline',
};

const TEST_TEXT = 'test text e2e';

describe('Chat test', () => {
  beforeEach(() => {
    cy.visit(Cypress.env('url').base);
  });

  CONTACTS_LIST.forEach((contact) => {
    it(`should open ${contact} contact page`, () => {
      cy.get(`div[data-id="e2e-contact-${contact}"]`).click();
      cy.get('.v-header__user-info > span').should('include.text', contact);
    });
  });

  CONTACTS_LIST.forEach((contact) => {
    it(`should be ${contact} status ${CONTACTS_STATUS[contact]}`, () => {
      cy.get(`div[data-id="e2e-contact-${contact}"] > .user__status`)
        .should('have.class', CONTACTS_STATUS[contact]);
    });
  });

  it('link should open chats', () => {
    cy.get('a[data-id="e2e-chats-link"]').click();
    cy.url().should('include', '/chats');
  });

  it('should open chats and return back', () => {
    cy.get('a[data-id="e2e-chats-link"]').click();
    cy.url().should('include', '/chats');
    cy.get('.v-header__back').click();
    cy.url().should('include', '/');
  });

  CONTACTS_LIST.forEach((contact) => {
    it(`should be open chat with ${contact}`, () => {
      cy.get('a[data-id="e2e-chats-link"]').click();
      cy.get(`div[data-id="e2e-user-item-${contact}"]`).click();
      cy.url().should('include', '/chat');
    });
  });

  CONTACTS_LIST.forEach((contact) => {
    it(`should be open chat with ${contact} and write text`, () => {
      cy.get('a[data-id="e2e-chats-link"]').click();
      cy.get(`div[data-id="e2e-user-item-${contact}"]`).click();
      cy.get('.v-user-chat__textfield').type(TEST_TEXT);
      cy.get('.input__field > .material-icons').click();
      cy.get('.v-message.chat__own')
        .last()
        .find('.v-message__content > p')
        .first()
        .should('have.text', TEST_TEXT);
    });
  });
});
