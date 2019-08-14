import React, { Component } from 'react'
import { Provider } from 'react-redux'

import store from '../stores'

import TodoList from './TodoList'
import Counter from './Counter'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>Lista de Tarefas</h1>
          <TodoList />
          <Counter />
        </div>
      </Provider>
    )
  }
}

export default App
