import '../css/App.css';
import AddAppointments from './AddAppointments';

function App() {
  return (
    // <div className="App">
            <main className="page bg-white" id="petratings">
        <div className="container">
          <div className="row">
            <div className="col-md-12 bg-white">
              <div className="container">
                <div><AddAppointments /> </div>
                <div>Search Appointments</div>
                <div>List Appointments</div>
              </div>
            </div>
          </div>
        </div>
      </main>
    // </div>
  );
}

export default App;
