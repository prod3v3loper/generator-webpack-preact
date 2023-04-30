/**
 * Component Counter Example Redux Zero
 * 
 * @see     https://matheusml1.gitbooks.io/redux-zero-docs/content/examples/preact.html
 */
import { h, render, Component } from "preact";
import { connect } from "redux-zero/preact";
// import { Connect } from 'unistore/preact';

import actions from "./actions";

const mapToProps = ( { count, text } ) => ( { count, text } );

export default connect(
    mapToProps,
    actions
)( ( { count, text, increment, decrement } ) => (
    <div class="st-counter">
        <h1>{count} - {text}</h1>
        <div class="st-counter__inner">
            <button class="st-counter__btn" onClick={decrement}>decrement</button>
            <button class="st-counter__btn" onClick={increment}>increment</button>
        </div>
    </div>
) );