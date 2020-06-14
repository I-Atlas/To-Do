import React, { Component } from 'react';
import { Provider } from 'react-redux'
import Header from './Components/Todo/Header'
import AddTodo from './Components/Todo/AddTodo'
import List from './Components/Todo/List'
import store from './Components/Actions/Store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <div className="app">
            <div className="header">
              <Header />
              <AddTodo />
            </div>
            <List />
        </div>
      </Provider>
    );
  }
}

export default App;
