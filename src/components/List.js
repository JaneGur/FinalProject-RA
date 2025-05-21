import { Component } from "../core/Component";
import { ListItem } from "./ListItem";

export class List extends Component {
  setup(props) {
    this.$rootElement = document.createElement("div");
    this.$rootElement.className = "donates-container";
    const $donatesContainerTitle = document.createElement("h2");
    $donatesContainerTitle.className = "donates-container__title";
    $donatesContainerTitle.textContent = "Список донатов";
    const $donatesContainerDonates = document.createElement("div");
    $donatesContainerDonates.className = "donates-container__donates";
    this.$rootElement.append($donatesContainerTitle, $donatesContainerDonates);
    this.$listContainer = $donatesContainerDonates;
  }

  addItem(item) {
    this.$listContainer.appendChild(item.$rootElement);
  }

  deleteItem(element) {
    element.remove();
  }
}
