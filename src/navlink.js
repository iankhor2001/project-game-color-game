import Component from "./component.js";
import ClassList from "../node_modules/classlist/classlist.js";

export default class NavLink extends Component {
    static getRootClass() {
        return '.nav-link';
    }

    constructor(root) {
        super(root);
        root.addEventListener('click', this.handleLinkClick.bind(this));
        this.navLink = root.querySelector(".nav-link");
        this.classList = ClassList(root);
        this.className = 'nav-link';
        this.id = root.id;
    }

    toggleActive() {
        this.classList.toggle('active');
    }

    resetClass() {
        this.className = 'nav-link';
    }

    handleLinkClick() {
        // console.log(this.id);
        this.fire('click', this);
    }

}