import Component from './component.js';
import Navbar from './navbar.js';
import HeaderMsg from './header-msg.js';
import ColorCardBoard from './color-card-board.js';
import ResetButton from './reset-button.js';
import './main.css';

export default class Main extends Component {
    static getRootClass() {
        return '.main';
    }

    constructor(root) {
        super(root);

        this.navbar = new Navbar(root.querySelector('.navbar'));
        this.navbar.on('normal', this.handleModeNormal.bind(this));
        this.navbar.on('hard', this.handleModeHard.bind(this));
        this.navbar.on('extreme', this.handleModeExtreme.bind(this));

        this.colorCardBoard = new ColorCardBoard(root.querySelector('.color-card-board'));
        this.colorCardBoard.on('rightAns', this.handleRightAns.bind(this));
        this.colorCardBoard.on('wrongAns', this.handleWrongAns.bind(this));
        this.colorCardBoard.on('reset', this.handleResetClick.bind(this));
        
        this.headerMsg = new HeaderMsg(root.querySelector('.header-msg'), this.colorCardBoard.ans);
        this.rstBtn = new ResetButton(root.querySelector('.rst-btn'));
        this.rstBtn.on('click', this.handleResetClick.bind(this));

        this.handleResetClick();
    }

    handleWrongAns() {
        this.headerMsg.showWrongMessage();
    }

    handleRightAns() {
        this.headerMsg.showCorrectMessage(this.colorCardBoard.ans);
        this.root.style.backgroundColor = this.colorCardBoard.ans;
        this.rstBtn.reset();
    }

    handleResetClick() {
        this.resetBackgroundColor();
        this.colorCardBoard.reset();
        this.headerMsg.reset(this.colorCardBoard.ans);
    }

    handleModeNormal() {
        console.log('NORMAL MODE');
        this.colorCardBoard.setMode('normal');
        this.resetBackgroundColor();
    }

    handleModeHard() {
        console.log('HARD MODE');
        this.colorCardBoard.setMode('hard');
        this.resetBackgroundColor();
    }

    handleModeExtreme() {
        console.log('EXTREME MODE');
        this.resetBackgroundColor();
    }

    resetBackgroundColor() {
        this.root.style.backgroundColor = '#202020';
        this.headerMsg.root.style.color = "#FFF";
    }

    reset() {
        this.handleResetClick();
    }
}

window.onload = () => {
    const body = document.querySelector('body');
    new Main(body);
}