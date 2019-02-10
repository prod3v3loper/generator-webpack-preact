/**
 * Preact Getting Started
 * Example Clock
 * 
 * @see     https://preactjs.com/guide/getting-started
 */
import { h, render, Component } from "preact";

export default class Uhr extends Component {
    constructor() {
        super();
        // Initiale Zeit einstellen:
        this.state.time = Date.now();
    }

    componentDidMount() {
        // Zeit jede Sekunde aktualisieren
        this.timer = setInterval( () => {
            this.setState( { time: Date.now() } );
        }, 1000 );
    }

    componentWillUnmount() {
        // Stoppen, falls nicht renderbar
        clearInterval( this.timer );
    }

    render( props, state ) {
        let time = new Date( state.time ).toLocaleTimeString();
        return <span>{time}</span>;
    }
}
