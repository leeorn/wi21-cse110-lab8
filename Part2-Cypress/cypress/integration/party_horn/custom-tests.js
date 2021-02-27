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
  // test 4
  it('Image and sound sources change when selecting the party horn radio button', () => {
    cy.get('#radio-party-horn').click();
    // check the image
    cy.get('#sound-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/images/party-horn.svg');
    });
    // check the audio
    cy.get('audio').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/audio/party-horn.mp3');
    });
  });
  //test 5
  it('Volume image changes when 100 >= volume > 66', () => {
    cy.get('#volume-slider').invoke('val', 100).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-3.svg');
    });
  });
  //test 6
  it('Volume image changes when 66 >= volume > 33', () => {
    cy.get('#volume-slider').invoke('val', 50).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-2.svg');
    });
  });
  //test 7
  it('Volume image changes when 32 >= volume > 0', () => {
    cy.get('#volume-slider').invoke('val', 10).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-1.svg');
    });
  });
  //test 8
  it('Volume image changes when volume = 0', () => {
    cy.get('#volume-slider').invoke('val', 0).trigger('input');
    cy.get('#volume-image').then(($el) => {
      expect($el).to.have.attr('src', './assets/media/icons/volume-level-0.svg');
    });
  });
  // test 9
  it('Honk button is disabled when the textbox input is a empty', () => {
    cy.get('#volume-number').clear(); // clear should makes the value empty
     cy.get('#honk-btn').then(($el) => {
       expect($el).to.have.attr('disabled');
     });
  });
  //test 10
  it('Honk button is disabled when the textbox input is non-number', () => {
    cy.get('#volume-number').clear().type('non-number');
     cy.get('#honk-btn').then(($el) => {
       expect($el).to.have.attr('disabled');
     });
  });
  //test 11
  it('Error is shown when a number *larger than* the given range for the volume textbox input is given', () => {
    cy.get('#volume-number').invoke('val',101).trigger('input');
    cy.get('#volume-number:invalid').then(($el) => { 
      expect($el).to.exist});
  });
  //test 11
  it('Error is shown when a number *smaller than* the given range for the volume textbox input is given', () => {
    cy.get('#volume-number').invoke('val',-1).trigger('input');
    cy.get('#volume-number:invalid').then(($el) => { 
      expect($el).to.exist});
  });

});

