import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as todoActions from "../actions/todoList";

class TodoList extends Component {
  constructor(props) {
    super(props);
    console.log(props);
  }

  state = { newTodoText: "" };

  addNewTodo = () => {
    this.props.addTodo(this.state.newTodoText);
    this.setState({ newTodoText: "" });
  };

  render() {
    return (
      <div>
        <ul>
          {this.props.todos.map(todo => (
            <li key={todo.id}>{todo.text}</li>
          ))}
        </ul>
        <input
          type="text"
          name="task"
          placeholder="informe a tarefa"
          autoComplete="off"          
          value={this.state.newTodoText}
          onChange={e => this.setState({ newTodoText: e.target.value })}
        />
        <button onClick={this.addNewTodo}>Nova Tarefa</button>
      </div>
    );
  }
}

const mapStateToProps = state => ({ todos: state.todos });
const mapDispatchToProps = dispatch =>
  bindActionCreators(todoActions, dispatch);

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList);
