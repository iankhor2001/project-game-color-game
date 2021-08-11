import Component from "./component.js";
import "./reset-button.css"

export default class ResetButton extends Component {
    static getRootClass() {
        return "rst-btn";
    }

    constructor(root) {
        super(root);
        root.addEventListener("click", this.handleResetClick.bind(this));
        this.resetDisplay = root.querySelector(".rst-btn span");
        this.reset();
    }

    reset() {
        this.resetDisplay.textContent = "New Colors";
    }

    handleResetClick() {
        this.fire("click");
    }
}