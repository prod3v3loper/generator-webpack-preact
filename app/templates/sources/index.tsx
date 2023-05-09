// FRAMEWORKS
import "./scss/style.scss"; // STYLE
import { h, render, Component } from "preact"; // DEPENDENCIES
import { Provider } from "redux-zero/preact"; // STORAGE

// HTML
// import './index.html';

// GLOBALS
// import GLOBALS from '../global.config.json';

// COMPONENTS
import Welcome from "./components/welcome/welcome";

// import store from "./components/counter/store";
// import Counter from "./components/counter/counter";

// import TodoList from "./components/todolist/todolist";
// import Clock from "./components/clock/clock";

// APP
const App = () => (
    <div id="st-wrapper">
        <div class="st-welcome">
            <Welcome />
        </div>
        {/* <div class="st-counter">
            <Provider store={store}>
                <Counter />
            </Provider>
        </div>
        <div class="st-todolist">
            <TodoList />
        </div>
        <div class="st-clock">
            <Clock />
        </div> */}
    </div>
);

// Render all in document body
render(<App />, document.body);