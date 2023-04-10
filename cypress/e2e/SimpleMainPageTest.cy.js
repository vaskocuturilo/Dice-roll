/// <reference types ="cypress"/>

import { MainPage, mainPage } from "../support/pages/MainPage.cy";

describe('Check all elements on the Main Page.', () => {
  beforeEach(() => {
   cy.visit('/');
   mainPage.checkTitle('Dice roll');
  })

  it('Verify all elements', () => {
   mainPage.checkAllButtonsWithAnimation();
  })
})