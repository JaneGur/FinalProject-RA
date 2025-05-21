import { Component } from "../core/Component";
import { Form } from "./Form";
import { List } from "./List";
import { ListItem } from "./ListItem";

export class App extends Component {
  setup(props) {
    this.state = { total: 0, donates: [] };
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "app";
    const $totalAmount = document.createElement("h1");
    $totalAmount.className = "total-amount";
    this.$rootElement.appendChild($totalAmount);
    const $spanTotalAmount = document.createElement("span");
    $spanTotalAmount.textContent = this.state.total;
    $totalAmount.textContent = `Итого: $`;
    $totalAmount.append($spanTotalAmount);
    this.$total = $spanTotalAmount;

    const donateForm = new Form({ onSubmit: this.onItemCreate.bind(this) });
    this.$rootElement.appendChild(donateForm.$rootElement);
    const donateList = new List();
    this.$rootElement.appendChild(donateList.$rootElement);
    this.donateList = donateList;
  }

  onItemCreate(amount) {
    const item = new ListItem({
      amount: amount,
      onDelete: this.onItemDelete.bind(this),
    });
    this.state.donates.push(item);
    this.donateList.addItem(item);
    this.state.total += amount;
    this.$total.textContent = this.state.total;
  }

  onItemDelete(id, amount, element) {
    const itemDeleteofIndex = this.state.donates.findIndex((item) => {
      return item.state.id === id;
    });
    this.state.donates.splice(itemDeleteofIndex, 1);
    this.donateList.deleteItem(element);
    this.state.total -= amount;
    this.$total.textContent = this.state.total;
  }
}
