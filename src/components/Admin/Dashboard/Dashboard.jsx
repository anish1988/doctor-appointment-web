import React, { useEffect, useState } from 'react'
import AdminLayout from '../AdminLayout/AdminLayout'
import userImg from '../../../images/avatar.jpg';
import { useGetDoctorsQuery, useGetDoctorCountsQuery } from '../../../redux/api/doctorApi';
import { useGetPatientCountsQuery } from '../../../redux/api/patientApi';
import {useGetAppointmentCountsQuery} from '../../../redux/api/appointmentApi';
import { default as DoctorsList } from '../Doctors/DoctorsList';
import {default as PatientsList} from '../Patients/PatientsList';
import {default as AppointmentsList} from '../Appointments/AppointmentsList';
import './Dashboard.css';


const AdminDashboard = () => {
    const [doctorCount, setDoctorCount] = useState(0);
    const [patientsCount, setPatientsCount] = useState(0);
    const [appoinmentCount, setAppoinmentCount] = useState(0);
    const { data } = useGetDoctorCountsQuery();
    const { data: patientData } = useGetPatientCountsQuery();
    const {data: appoinmentCountData } = useGetAppointmentCountsQuery();
    
    console.log("useGetDoctorCountsQuery",data);
    console.log("useGetPatientCountsQuery      777 : " ,patientData);
    console.log("useGetAppoinmentCountsQuery      777 : " ,appoinmentCountData);

    useEffect(() => {
        setDoctorCount(data ? data : 0);
        setPatientsCount(patientData ? patientData : 0);
        setAppoinmentCount(appoinmentCountData ? appoinmentCountData : 0);
      }, [data, patientData, appoinmentCountData]);
    return (
        <>
            <AdminLayout >
                <div className="row">
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon text-primary border-primary">
                                        <i className="fe fe-users"></i>
                                    </span>
                                    <div className="dash-count">
                                        <h3>{doctorCount}</h3>
                                    </div>
                                </div>
                                <div className="dash-widget-info">
                                    <h6 className="text-muted">Doctors</h6>
                                    <div className="progress progress-sm">
                                       <div className={"progress-bar bg-primary w-80 "+doctorCount}></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon text-success">
                                        <i className="fe fe-credit-card"></i>
                                    </span>
                                    <div className="dash-count">
                                        <h3>{patientsCount}</h3>
                                    </div>
                                </div>
                                <div className="dash-widget-info">

                                    <h6 className="text-muted">Patients</h6>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-success w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon text-danger border-danger">
                                        <i className="fe fe-money"></i>
                                    </span>
                                    <div className="dash-count">
                                        <h3>{appoinmentCount}</h3>
                                    </div>
                                </div>
                                <div className="dash-widget-info">

                                    <h6 className="text-muted">Appointment</h6>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-danger w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-xl-3 col-sm-6 col-12">
                        <div className="card">
                            <div className="card-body">
                                <div className="dash-widget-header">
                                    <span className="dash-widget-icon text-warning border-warning">
                                        <i className="fe fe-folder"></i>
                                    </span>
                                    <div className="dash-count">
                                        <h3>$62523</h3>
                                    </div>
                                </div>
                                <div className="dash-widget-info">

                                    <h6 className="text-muted">Revenue</h6>
                                    <div className="progress progress-sm">
                                        <div className="progress-bar bg-warning w-50"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="row">
                    <div className="col-md-12 col-lg-6">

                     
                        <div className="card card-chart">
                            <div className="card-header">
                                <h4 className="card-title">Revenue</h4>
                            </div>
                            <div className="card-body">
                                <div id="morrisArea"></div>
                            </div>
                        </div>

                    </div>
                    <div className="col-md-12 col-lg-6">

                     
                        <div className="card card-chart">
                            <div className="card-header">
                                <h4 className="card-title">Status</h4>
                            </div>
                            <div className="card-body">
                                <div id="morrisLine"></div>
                            </div>
                        </div>

                    </div>
                </div>
                <div className="row">
                <DoctorsList />
                <PatientsList />
                
                </div>
              
                <div className="row">
                  <AppointmentsList />
                                  </div>
            </AdminLayout>
        </>
    )
}
export default AdminDashboard;