import { connect } from 'react-redux';
import TodoList from '../components/TodoList';
import {toggleTodo} from '../actions/todos';

const mapStateoProps =  state => (
    {
        todos: state
    }
)

const mapDispatchToProps =  dispatch => {
    return(
       { onToggle: id => {
           dispatch(toggleTodo(id))
       }}
    )
}
const ListContainer = connect(
    mapStateoProps,
    mapDispatchToProps
)(TodoList)

export default ListContainer