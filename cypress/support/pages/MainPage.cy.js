export class MainPage {

    elements = {
      title: ()=> cy.title(),
      newButton: ()=> cy.get('.btn--new'),
      rollDiceButton: ()=> cy.get('.btn--roll'),
      holdButton: ()=> cy.get('.btn--hold'),
      editButton: ()=> cy.get('.btn--edit'),
      animation: ()=> cy.get('#img1'),

    }

    checkTitle(text) {
        return this.elements.title().should('eq', text);
    }

    checkAllButtonsWithAnimation() {
        this.elements.newButton().should('be.visible').and('contain', '🔄 New game');
        this.elements.rollDiceButton().should('be.visible').and('contain', '🎲 Roll dice');
        this.elements.holdButton().should('be.visible').and('contain', '📥 Hold');
        this.elements.editButton().should('be.visible').and('contain', '💳️ Edit');
        this.elements.animation().should('be.visible').and('have.attr', 'src', '/img/dices.gif');
    }

}

export const mainPage =new MainPage();