import React, { Component } from 'react'
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      myName: 'LH',
      authorized: true
     }
  }
  render() { 
    return (
      // <div className="App">
            <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
              { this.state.myName}
                <div> <AddAppointments /> </div>
                <div> <SearchAppointments /> </div>
                <div> <ListAppointments /> </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    // </div>
      );
  }
}
 
export default App;