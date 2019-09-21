import React from 'react';
import {BrowserRouter, Route} from "react-router-dom";
import './App.css';

import {Provider} from 'redux';

/* Components */
  import Header from './components/Header/Header';
  import Nav from './components/Nav/Nav';
  import Profile from './components/Profile/Main';
  import Dialogs from './components/Dialogs/Dialogs';
/* Components */


class App extends React.Component {
  constructor(){
    super();
    this.state = {
      users: [
        {id: 1, name: "Макетош Андрей"},
        {id: 2, name: "Ксюша"},
        {id: 3, name: "Кирпич Илья"},
        {id: 4, name: "Сашка из Владивостока"},
        {id: 5, name: "Server Osmanov"},
      ],

      messages: [
        {text: "Привет", time: "13:37",my: true},
        {text: "Как дела ?", time: "13:37", my: true},
        {text: "Здарова, нормально у тебя как ?", time: "13:37", my: false},
        {text: "Потихоньку", time: "13:37", my: true},
      ],

      name: "dff"
    }
  }

  changeName(){
      this.setState({name: "Fff"});
  }

  render()
  {
    return (
      <BrowserRouter>
        <div className="App">
          <Header/>
          <Nav/>
          <h2>{this.state.name}</h2>
          <Route path='/profile' component={Profile} />
          <Route path='/dialogs' render={(props) => <Dialogs users={this.state.users} messages={this.state.messages} />} />

          <button onClick = {this.changeName.bind(this)}>Change</button>
        </div>
      </BrowserRouter>
    )
  }
}

export default App;
