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
                {item.petName}
                </div>
                <div>{item.ownerName}</div>
            </div>
    ))



        return ( 
        <div>
            List Appointments Here
            {listItems}
        </div> 
        );
    }
}
export default ListAppointments;