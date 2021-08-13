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
        this.gameMode = 'normal';

        this.navbar = new Navbar(root.querySelector('.navbar'));
        this.navbar.on('normal', this.handleModeNormal.bind(this));
        this.navbar.on('hard', this.handleModeHard.bind(this));
        this.navbar.on('extreme', this.handleModeExtreme.bind(this));

        this.colorCardBoard = new ColorCardBoard(root.querySelector('.color-card-board'));
        this.colorCardBoard.on('rightAns', this.handleRightAns.bind(this));
        this.colorCardBoard.on('wrongAns', this.handleWrongAns.bind(this));
        this.colorCardBoard.on('reset', this.handleResetClick.bind(this));
        
        this.headerMsg = new HeaderMsg(root.querySelector('.header-msg'), this.colorCardBoard.ans);
        this.headerMsg.on('timesUp', this.stopTimerHeader.bind(this));
        this.rstBtn = new ResetButton(root.querySelector('.rst-btn'));
        this.rstBtn.on('click', this.handleResetClick.bind(this));

        this.handleResetClick();
    }

    // * Handle Input Events ///////////////////////////////////////////////////////////////////////////////////////
    handleWrongAns() {
        this.headerMsg.showWrongMessage();
    }

    handleRightAns() {
        this.headerMsg.showCorrectMessage(this.colorCardBoard.ans);
        this.root.style.backgroundColor = this.colorCardBoard.ans;
        this.headerMsg.timesUpFunc(this.colorCardBoard.ans, "correct");
        this.rstBtn.reset();
    }

    handleResetClick() {
        this.resetBackgroundColor();
        this.colorCardBoard.reset();
        this.headerMsg.reset(this.colorCardBoard.ans);
        
    }

    // * Handle Mode Change Events ///////////////////////////////////////////////////////////////////////////////////////
    handleModeNormal() {
        // console.log('NORMAL MODE');
        this.gameMode = 'normal';
        this.colorCardBoard.setMode('normal');
        this.headerMsg.disableTimer();
        this.resetBackgroundColor();
    }

    handleModeHard() {
        // console.log('HARD MODE');
        this.gameMode = 'hard';
        this.colorCardBoard.setMode('hard');
        this.headerMsg.disableTimer();
        this.resetBackgroundColor();
    }

    handleModeExtreme() {
        // console.log('EXTREME MODE');
        this.gameMode = 'extreme';
        this.colorCardBoard.setMode('hard');
        this.headerMsg.showTimer();
        this.resetBackgroundColor();
    }

    // * Handle Other Events ///////////////////////////////////////////////////////////////////////////////////////
    resetBackgroundColor() {
        this.root.style.backgroundColor = '#202020';
        this.headerMsg.root.style.color = "#FFF";
    }

    stopTimerHeader() {
        this.headerMsg.timesUpFunc(this.colorCardBoard.ans);
        this.root.style.backgroundColor = this.colorCardBoard.ans;
        this.colorCardBoard.showAnswer(this.colorCardBoard.ans);
    }
}

window.onload = () => {
    const body = document.querySelector('body');
    new Main(body);
}