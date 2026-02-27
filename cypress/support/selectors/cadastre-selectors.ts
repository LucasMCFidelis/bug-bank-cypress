class CadastrePageSelectors {
  public cadastreCard = ".card__register";
  public emailInput = `${this.cadastreCard} input[name='email']`;
  public nameInput = `${this.cadastreCard} input[name='name']`;
  public passwordInput = `${this.cadastreCard} input[name='password']`;
  public passwordConfirmationInput = `${this.cadastreCard} input[name='passwordConfirmation']`;
  public toggleAddBalance = `${this.cadastreCard} #toggleAddBalance`;
  public cadastreButton = `${this.cadastreCard} button[type='submit']`;
  public modalText = "#modalText"
  public closeModalButton = "#btnCloseModal"

}

export default new CadastrePageSelectors();
