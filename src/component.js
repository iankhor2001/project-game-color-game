export default class Component {
    static getRootClass() {
        return '.component';
    }
    constructor(props) {
        this.root = props;
        this.handlers = {};
    }
    
    on(event, handler){
        this.handlers[event] = handler;
    }

    fire(event, handler){
        this.handlers[event] (this, ...arguments);
    }
}