/**
 * Preact Getting Started
 * Example Clock
 * 
 * @see     https://preactjs.com/guide/getting-started
 */
import { h, render, Component } from "preact";

export default class Clock extends Component {

    constructor() {
        super();
        this.state.time = Date.now();
    }

    componentDidMount() {
        this.timer = setInterval( () => {
            this.setState( { time: Date.now() } );
        }, 1000 );
    }

    componentWillUnmount() {
        clearInterval( this.timer );
    }

    render( props, state ) {
        let time = new Date( state.time ).toLocaleTimeString();
        return <span>{time}</span>;
    }
}
