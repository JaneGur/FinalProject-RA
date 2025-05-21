import { Component } from "../core/Component";

export class Form extends Component {
  setup(props) {
    this.state = { amount: "" };
    this.$rootElement = document.createElement("form");
    this.$rootElement.className = "donate-form";
    const $donateFormInputLabel = document.createElement("label");
    $donateFormInputLabel.className = "donate-form__input-label";
    $donateFormInputLabel.textContent = "Введите сумму в $";
    const $donateFormDonateInput = document.createElement("input");
    $donateFormDonateInput.className = "donate-form__donate-input";
    $donateFormDonateInput.name = "amount";
    $donateFormDonateInput.type = "number";
    $donateFormDonateInput.max = "100";
    $donateFormDonateInput.min = "1";
    $donateFormDonateInput.setAttribute("required", "");
    $donateFormInputLabel.append($donateFormDonateInput);
    const $donateFormSubmitButton = document.createElement("button");
    $donateFormSubmitButton.className = "donate-form__submit-button";
    $donateFormSubmitButton.textContent = "Задонатить";
    $donateFormSubmitButton.setAttribute("disabled", "");
    $donateFormSubmitButton.type = "submit";
    this.$rootElement.append($donateFormInputLabel, $donateFormSubmitButton);
    this.$input = $donateFormDonateInput;
    this.$button = $donateFormSubmitButton;

    this.$input.addEventListener("input", this.handleInput.bind(this));
    this.$rootElement.addEventListener("submit", this.handleSubmit.bind(this));
  }

  get isValid() {
    return this.state.amount <= 100 && this.state.amount >= 1 ? true : false;
  }

  handleInput(event) {
    this.state.amount = Number(event.target.value);
    if (this.isValid) {
      this.$button.removeAttribute("disabled");
    } else {
      this.$button.setAttribute("disabled", "");
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    if (this.isValid) {
      this.props.onSubmit(Number(this.state.amount));
      this.state.amount = "";
      this.$input.value = "";
    }
  }
}
