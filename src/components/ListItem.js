import { Component } from "../core/Component";

export class ListItem extends Component {
  setup(props) {
    this.state = {
      id: Date.now(),
      date: new Date().toLocaleString(),
      amount: props.amount,
    };
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donate-item";
    this.$rootElement.innerHTML = `${this.state.date.replaceAll(
      ".",
      "/"
    )}&nbsp-&nbsp<b>$${this.state.amount}</b>`;
    const $deleteButton = document.createElement("button");
    $deleteButton.className = "delete-button";
    $deleteButton.textContent = "Удалить";
    this.$rootElement.append($deleteButton);
    this.$deleteButton = $deleteButton;
    this.$deleteButton.addEventListener("click", this.handleDelete.bind(this));
  }

  handleDelete(event) {
    const deleteElement = event.target.closest("div");
    this.deleteElement = deleteElement;
    this.props.onDelete(
      this.state.id,
      Number(this.state.amount),
      this.deleteElement
    );
  }
}
