import React from "react";
import {
  BrowserRouter,
  Routes,
  Route,
  Link,
  useParams
} from "react-router-dom";

type DoctorPatientParams = {
  doctorId?: string;
  patientId?: string;
};

const Home: React.FC = () => {
  return (
    <div>
      <h1>Medix Patient Portal</h1>

      <h2>Doctor List</h2>

      <ul>
        <li>
          <Link to="/doctors/101/patients/5001">
            Doctor 101 - Patient 5001
          </Link>
        </li>

        <li>
          <Link to="/doctors/102/patients/5002">
            Doctor 102 - Patient 5002
          </Link>
        </li>

        <li>
          <Link to="/doctors/103/patients/5003">
            Doctor 103 - Patient 5003
          </Link>
        </li>
      </ul>
    </div>
  );
};

const DoctorPatientDetails: React.FC = () => {
  const { doctorId, patientId } =
    useParams<DoctorPatientParams>();

  if (!doctorId || !patientId) {
    return <h2>Missing Parameters</h2>;
  }

  const doctorNumber = Number(doctorId);
  const patientNumber = Number(patientId);

  if (isNaN(doctorNumber) || isNaN(patientNumber)) {
    return <h2>Invalid IDs</h2>;
  }

  return (
    <div>
      <h1>Doctor Patient Details</h1>

      <p>
        <strong>Doctor ID:</strong> {doctorNumber}
      </p>

      <p>
        <strong>Patient ID:</strong> {patientNumber}
      </p>

      <Link to="/">Go Back</Link>
    </div>
  );
};

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />

        <Route
          path="/doctors/:doctorId/patients/:patientId"
          element={<DoctorPatientDetails />}
        />
      </Routes>
    </BrowserRouter>
  );
};

export default App;