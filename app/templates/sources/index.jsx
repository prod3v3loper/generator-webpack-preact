// HTML
// import './index.html';
// To use custom globals
// import GLOBALS from '../global.config.json'; 
import "./scss/style.scss"; // STYLE
import { h, render, Component } from "preact"; // DEPENDENCIES
import { Provider } from "redux-zero/preact"; // STORAGE
// COMPONENT
import Welcome from "../components/welcome/welcome";

// import store from "../components/counter/store";
// import Counter from "../components/counter/counter";

// import TodoList from "../components/todolist/todolist";

// import Clock from "../components/clock/clock";

// Create APP
const App = () => (
    <div id="st-wrapper">
        <div class="st-welcome">
            <Welcome />
        </div>
        {/* <div class="st-counter">
            <Provider store={store}>
                <Counter />
            </Provider>
        </div> */}
        {/* <div class="st-todolist">
            <TodoList />
        </div> */}
        {/* <div class="st-clock">
            <Clock />
        </div> */}
    </div>
);

// // Render all in document body
let ref = render( <App />, document.body );


// HMR
if ( module.hot ) {
    module.hot.accept();
    module.hot.dispose( function () {
        // Clean document for refresh
        render( null, document.body, ref );
    } );
}