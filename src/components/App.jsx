import React from 'react'
import { Provider } from 'react-redux'

import store from '../stores'

import TodoList from './TodoList'
import Counter from './Counter'

export default function App() {
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
//import React, { Component } from 'react'
// class App extends Component {
//   render() {
//     return (
//       <Provider store={store}>
//         <div className="App">
//           <h1>Lista de Tarefas</h1>
//           <TodoList />
//           <Counter />
//         </div>
//       </Provider>
//     )
//   }
// }
// export default App
