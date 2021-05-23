import './App.css';
import React from 'react';
import data from './sim-api';
import Card from './Card';

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      data: data,
    }
  }
  render (){
    return (
      <div className="App">
        <h1 className="page-title">Card items from fake Api</h1>
        <section>
          <Card />
        </section>
      </div>
    );
  }
}

export default App;
