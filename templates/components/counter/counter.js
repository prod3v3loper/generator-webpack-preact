import { h, render, Component } from 'preact';
import { connect } from 'redux-zero/preact';
// import { Connect } from 'unistore/preact';

import actions from './actions';

const mapToProps = ( { count, text } ) => ( { count, text } );

export default connect(
    mapToProps,
    actions
)( ( { count, text, increment, decrement } ) => (
    <div class="dssStage">
        <h1>{count} - {text}</h1>
        <div class="dssStage__inner">
            <button class="dssStage__btn" onClick={decrement}>decrement</button>
            <button class="dssStage__btn" onClick={increment}>increment</button>
        </div>
    </div>
) );