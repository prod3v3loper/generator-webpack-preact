/**
 * Welcome for generator-webpack-preact
 * 
 */
import { h, render, Component } from "preact";

export default class Welcome extends Component {
    constructor() {
        super();
    }

    render( props ) {
        return ( 
            <div class="st-infobox">

                <h1>Scaffold for Webpack with Preact</h1>
                <p>You can use all components together, for this typed in the prompts and uncomment in the files.</p>
                <ul>
                    <li><a href="https://www.npmjs.com/package/generator-webpack-preact">NPM Page</a></li>
                    <li><a href="https://prod3v3loper.github.io/generator-webpack-preact/">Github Page</a></li>
                </ul>
                <p>You are start the Dev Server and you see this message from the index.tsx. Follow the next steps, go to the <strong>src/index.tsx</strong></p>
                
                <div class="st-infobox__card">
                    <p><strong>And remove followed:</strong></p>
                    <ul>
                        <li><code>
                        import Welcome from "../components/welcome/welcome";<br /><br />
                        and inside the html<br />
                        &lt;div id="st-welcome"&gt;...&lt;/div&gt;
                        </code></li>
                    </ul>
                </div>
                <p>To see how it works, do the follwing or create your own component and require it.</p>
                <div class="st-infobox__card">
                    <p><strong>And uncomment followed:</strong></p>
                    <ul>
                        <li>if you choose counter in the prompts, otherwise comp not exists:<code>
                        // import store from "../components/counter/store";<br />
                        // import Counter from "../components/counter/counter";<br /><br />
                        and inside the html<br />
                        &lt;div id="st-counter"&gt;...&lt;/div&gt;
                        </code></li>
                        <li>if you choose todolist in the prompts, otherwise comp not exists:<code>
                        // import TodoList from "../components/todolist/todolist";<br /><br />
                        // and inside the html<br />
                        &lt;div id="st-todolist"&gt;...&lt;/div&gt;
                        </code></li>
                        <li>if you choose clock in the prompts, otherwise comp not exists:<code>
                        // import Clock from "../components/clock/clock";<br /><br />
                        // and inside the html<br />
                        &lt;div id="st-clock"&gt;...&lt;/div&gt;
                        </code></li>
                    </ul>
                </div>

                <p>Dont you choose a component create a component and insert it.</p>

                <div class="st-copy">
                    Author: <a href="https://www.tnado.com/author/prod3v3loper/">Prod3v3loper</a>
                </div>

            </div>
         );
    }
}