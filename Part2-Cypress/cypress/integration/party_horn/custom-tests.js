describe('Party Horn Tests', () => {
  beforeEach(() => {
    cy.visit('http://127.0.0.1:5500/Part2-Cypress/');
  });

  it('First Test', () => {
    expect(true).to.equal(true);
  });

  // test 1
  it('Slider changes when volume input change', () => {
    cy.get('#volume-number').clear().type('75'); 
    cy.get('#volume-slider').then(($el) => 
    {expect($el).to.have.value(75);});
  });
  // test 2
  it('Volume input changes when slider change', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input'); 
    cy.get('#volume-number').then(($el) => 
    {expect($el).to.have.value(33);});
  });
  // test 3
  it('Audio changes when slider change', () => {
    cy.get('#volume-slider').invoke('val', 33).trigger('input'); 
    cy.get('audio').then(($el) => 
    {expect($el).to.have.prop('volume', 0.33);});
  });


});

