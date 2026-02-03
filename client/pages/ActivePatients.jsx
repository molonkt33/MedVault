import React, { useEffect, useState } from "react";
import "../styles/ActiveEvent.css";

function ActivePatients() {
  const [patients, setPatients] = useState([]);
  const token = localStorage.getItem("token");

  useEffect(() => {
    fetch("http://localhost:5000/api/patients/active", {
      headers: { Authorization: `Bearer ${token}` },
    })
      .then(res => res.json())
      .then(data => setPatients(data));
  }, []);

  return (
    <div className="profile-container p-4">
      <h1 className="profile-title">Active Patients</h1>
      <div className="row">
        {patients.map(patient => (
          <div key={patient._id} className="col-md-4 mb-4">
            <div className="card naming-containers">
              <div className="card-body">
                <h2>{patient.name}</h2>
                <p>Diagnosis: {patient.diagnosis}</p>
                <p>Ward: {patient.ward}</p>
                <p>Admitted: {patient.admissionDate}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ActivePatients;
