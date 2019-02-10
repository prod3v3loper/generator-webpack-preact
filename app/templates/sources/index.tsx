// HTML
// import './index.html';
// To use custom globals
// import GLOBALS from '../global.config.json'; 
import './scss/style.scss'; // STYLE
import { h, render, Component } from 'preact'; // DEPENDENCIES
import { Provider } from 'redux-zero/preact'; // STORAGE
// COMPONENT
import store from '../components/counter/store';
import Counter from '../components/counter/counter';

declare const module: any;

// Create APP
const App = () => (
    <Provider store={store}>
        <Counter />
    </Provider>
);

// // Render all in document body
let ref = render(<App />, document.body);


// HMR
if (module.hot) {
    module.hot.accept();
    module.hot.dispose(function () {
        // Clean document for refresh
        render(null, document.body, ref);
    });
}