import React, { Component } from 'react'
import '../css/App.css';
import AddAppointments from './AddAppointments';
import SearchAppointments from './SearchAppointments';
import ListAppointments from './ListAppointments';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      // myName: 'LH',
      authorized: true,
      myAppointments: []
     }
  }
  componentDidMount() {
    fetch('./data.json')
    .then(response => response.json())
    .then(result => {
      const apts = result.map(item => {
        return item;
      })
      this.setState({
        myAppointments: apts
      })
    })
  }

  render() { 
    const listItems = this.state.myAppointments.map(item => (
      <div>
        <div>
          {item.petName}
        </div>
          <div>{item.ownerName}</div>
      </div>
    ))
    return (
      // <div className="App">
            <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
              {/* { this.state.myName} */}
              {/* { listItems } */}
                <div> <AddAppointments /> </div>
                <div> <SearchAppointments authorized={true}/> </div>
                <div> <ListAppointments appointments={this.state.myAppointments} /> </div>
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