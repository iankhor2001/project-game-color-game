import Component from "./component.js";
import "./header-msg.css";

export default class HeaderMsg extends Component {
    static getRootClass() {
        return '.header-msg';
    }

    constructor(root, color) {
        super(root);
        this.answerColor = root.querySelector('.answer-color');
        this.message = root.querySelector('.message');
        this.timer= root.querySelector('.timer');
        root.style.color = "#FFF";
        this.reset(color); // color is a string of 'RGB(#number)'
    }

    reset(color) {
        console.log(color);
        this.answerColor.textContent = String(color);
        this.message.textContent = "What's the color?";
        if (this.timer.style.display == 'block') {
            this.showTimer();
        }
    }

    showColor(color) {
        this.answerColor.textContent = color;
    }

    showCorrectMessage(color) {
        // console.log(String(color).substring(4, String(color).length-1));
        this.root.style.color = toComplementColor(color);
        this.message.textContent = "Correct!";
    }
    
    showWrongMessage() {
        this.message.textContent = "Try Again!";
    }

    showTimer() {
        console.log("show timer");
        this.timer.style.display = "block";
        this.timer.textContent = "Countdown";
        let countdown = 3;
        this.timerClock = setInterval( () => {
            this.timer.textContent = countdown + "s";
            countdown = countdown-1;
            if(countdown<0) this.fire("timesUp");
        }, 1000);
    }

    disableTimer() {
        console.log("disable timer");
        this.timer.style.display = "none";
        this.timer.textContent = "Countdown";
        clearInterval(this.timerClock);
    }

    timesUpFunc(color, mode='wrong') {
        clearInterval(this.timerClock);
        this.root.style.color = toComplementColor(color);
        if (mode == "wrong") this.timer.textContent = "Time's Up!";
    }
};

function toComplementColor(rgbColor) {
    let rgbArray = String(rgbColor).substring(4, String(rgbColor).length-1).split(", ");
    let [r,g,b] = rgbArray;
    let luminance = toLuminance(r,g,b);
    if (luminance < 7) return "white";
    else return "#222222";
}

// function toComplementColor(rgbColor) {
//     let rgbArray = String(rgbColor).substring(4, String(rgbColor).length-1).split(", ");
    // let [r,g,b] = rgbArray.map(complementColor);
//     return "rgb(" + r + ", " + g + ", " + b + ")";
// }

function complementColor(color) {
    let colorInt = parseInt(color);
    if (colorInt > 127) {
        return 255-colorInt-20;
    } else {
        return 255-colorInt+20;
    }
}
function toLuminance(R,G,B) {
    return Math.sqrt( 0.299*R^2 + 0.587*G^2 + 0.114*B^2 );
}