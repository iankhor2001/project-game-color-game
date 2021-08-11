import Component from "./component";
import './color-card.css';
import ClassList from "../node_modules/classlist/classlist.js";

export default class ColorCard extends Component {
    static getRootClass() {
        return '.color-card';
    }

    constructor(root) {
        super(root);
        root.addEventListener("click", this.handleCardClick.bind(this));
        this.reset();
        this.color = [];
        this.classList = ClassList(root);
    }

    static randomColor() {
        var r = Math.floor(Math.random() * 256);
        var g = Math.floor(Math.random() * 256);
        var b = Math.floor(Math.random() * 256);
        return "rgb(" + r + ", " + g + ", " + b + ")";
    }

    reset() {
        this.color = ColorCard.randomColor();
        this.changeColor(this.color);
    }

    getColor() {
        return this.color;
    }

    toBlank() {
        this.root.style.opacity = 0;
    }

    changeColor(color) {
        this.root.style.backgroundColor = color;
        this.root.style.opacity = 1;
    }

    handleCardClick() {
        // console.log('CardClick '+ this.color);
        this.fire('click', this.color);
    }

    contains(className) {
        return this.classList.contains(className);
    }
}