/**
 * Preact
 * Example Todo List
 * 
 * @see     https://preactjs.com/
 */
import { h, render, Component } from "preact";

export default class ToDoList extends Component {

    state = { todos: [], text: "" };

    setText = e => {
        this.setState( { text: e.target.value } );
    };

    addToDo = () => {
        let { todos, text } = this.state;
        todos = todos.concat( { text } );
        this.setState( { todos, text: "" } );
    };
    
    render( { }, { todos, text } ) {
        return (
            <form onSubmit={this.addToDo} action="javascript:">
                <input value={text} onInput={this.setText} />
                <button type="submit">Add</button>
                <ul>
                    {todos.map( todo => (
                        <li>{todo.text}</li>
                    ) )}
                </ul>
            </form>
        );
    }
}