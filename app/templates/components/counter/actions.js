/* actions.js */
const actions = store => ( {
    increment: state => ( {
        count: state.count + 1,
        text: 'hoch'
    } ),
    decrement: state => ( {
        count: state.count - 1,
        text: 'runter'
    } )
} );

export default actions;