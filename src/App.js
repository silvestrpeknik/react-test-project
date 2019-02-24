import React, { Component } from 'react';
import { Header } from './Header';
import { NoteList } from './NoteList';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <NoteList />
      </div>
    );
  }
}

export default App;
