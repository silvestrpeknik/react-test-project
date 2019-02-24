import React, { Component } from 'react';

const customStyle = {
  backgroundColor: 'rgb(149, 168, 99)',
}

export class NoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      loading: false,
      notes: []
    }
  }

  fetchNotes = () => {
    this.setState({ loading: true });
    fetch('http://localhost:4000/todos')
      .then( response => {
        console.log(response)
        if (!response.ok) {
          alert('HTTP error, status = ' + response.status);
          this.setState({ loading: false });
          return;
        }
        return response.text();
      })
      .then( body => {
        this.setState({
          loading: false,
          notes: JSON.parse(body)
        })
      });
  }

  render() {
    const { notes, loading } = this.state;

    return(
      <div style={customStyle}>
        {loading ? 'Loading ...' : <button onClick={this.fetchNotes}> Fetch notes </button>}
        {notes.map( note => {
          return (<div>{JSON.stringify(note)}</div>)
        })}
      </div>
    );
  }
}