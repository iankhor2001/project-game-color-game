import Component from "./component.js";
import './navbar.css';
import NavLink from "./navlink.js";

export default class Navbar extends Component {
    static getRootClass() {
        return '.navbar';
    }

    constructor(root) {
        super(root);
        this.links = [];
        this.activeLink = 'normal';
        // this.brand = root.querySelector('.brand');

        const linkList = root.querySelectorAll(NavLink.getRootClass());
        for (let linkElement of linkList) {
            const link = new NavLink(linkElement);
            link.on('click', this.handleLinkClick.bind(this));
            // this.links.push(link);
            this.links[linkElement.id] = link;
        }
        // this.handleLinkClick('hard');  //testing
    }

    handleLinkClick(link) {
        // console.log("handleLinkClick " + link.id);
        let selectedLink = link.id;
        if (selectedLink !== this.activeLink) {
            this.links[this.activeLink].toggleActive();
            this.links[selectedLink].toggleActive();
            this.activeLink = selectedLink;
            this.fire(selectedLink);
        }

    }


    // change mode option to be added
}