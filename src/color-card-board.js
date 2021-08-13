import Component from "./component.js";
import ColorCard from './color-card.js';

export default class ColorCardBoard extends Component {
    static getRootClass() {
        return '.color-card-board';
    }

    constructor(root, color) {
        super(root);
        this.colorCards = [];
        this.correctPick = false;
        this.cardAmount = 3;  // Normal difficulty, to be implemented later
        const cardList = root.querySelectorAll(ColorCard.getRootClass());
        for (let cardElement of cardList) {
            const card = new ColorCard(cardElement);
            card.on('click', this.handleCardClick.bind(this));
            this.colorCards.push(card);
        }
        this.setMode('normal');  
        this.ans = this.generateAns();
        
    }
    
    reset() {
        this.correctPick = false;
        for (let cardElement of this.colorCards.slice(0, this.cardAmount) ) {
            cardElement.reset();
        }
        this.ans = this.generateAns();
    }

    getAns() {
        return this.ans;
    }

    handleCardClick(selectedCard) {
        // console.log('handleCardClick ' + selectedCard.color + this.ans);
        if (this.correctPick) return;

        if (selectedCard.color === this.ans) {
            for (let cardElement of this.colorCards) {
                cardElement.changeColor("#FFF");
            }
            this.correctPick = true;
            this.fire('rightAns', this.ans);
        } else {
            selectedCard.toBlank();
            this.fire('wrongAns');
        }
    }

    generateAns() {
        const random = Math.floor(Math.random() * this.cardAmount);
        return this.colorCards[random].getColor();
    }

    setMode(mode) {
        switch (mode) {
            case 'normal': 
                this.cardAmount = 3;
                for (let cardElement of this.colorCards) {
                    if (cardElement.contains('color-card-hard')) {
                        cardElement.root.style.visibility = 'hidden'; // visibility
                        cardElement.root.style.width = '0px';
                        cardElement.root.style.margin = '0.5rem 0';
                        cardElement.root.style.backgroundColor = '#202020';
                    }
                }
                break;
            case 'hard': 
                this.cardAmount = 6;
                for (let cardElement of this.colorCards) {
                    if (cardElement.contains('color-card-hard')) {
                        cardElement.root.style.visibility = 'visible';
                        cardElement.root.style.width = '10rem';
                        cardElement.root.style.margin = '0.5rem';
                        cardElement.root.style.backgroundColor = '#202020';
                    }
                }
                break;
        }
        this.reset();
    }

    showAnswer() {
        for (let cardElement of this.colorCards) {
            cardElement.changeColor("#FFF");
        }
        this.correctPick = true;
    }
    
}