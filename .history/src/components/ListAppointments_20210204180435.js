import React, { Component } from 'react'

class ListAppointments extends Component {
    constructor(props) {
        super(props);
        this.state = {  }
    }
    render() { 
    //   const listItems = this.state.myAppointments.map(item => (
      const listItems = this.props.appointments.map(item => (
            <div>
                <div>
                {item.petName} -- {item.ownerName}</div>
            </div>
    ))



        return ( 
        <div>
            List Appointments Here
            {/* {listItems} */}
                  <div className="appointment-list item-list mb-3">
          <div className="pet-item col media py-3">
            <div className="mr-3">
              <button className="pet-delete btn btn-sm btn-danger">X</button>
            </div>

            <div className="pet-info media-body">
              <div className="pet-head d-flex">
                <span className="pet-name">petName</span>
                <span className="apt-date ml-auto">aptDate</span>
              </div>

              <div className="owner-name">
                <span className="label-item">Owner: </span>
                <span>ownerName</span>
              </div>
              <div className="apt-notes">aptNotes</div>
            </div>
          </div>
      </div>
        </div> 
        );
    }
}
export default ListAppointments;