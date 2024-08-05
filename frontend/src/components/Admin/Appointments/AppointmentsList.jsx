import React from 'react'
//import AdminLayout from '../AdminLayout/AdminLayout'
import userImg from '../../../images/avatar.jpg';
import './Appointments.css';
import {useGetAllAppointmentsQuery } from '../../../redux/api/appointmentApi';

const AppointmentsList = () => {

  const {data: appointmentsData, isLoading, isError} = useGetAllAppointmentsQuery();
    console.log("appointmentsData",appointmentsData);
    const appointments = appointmentsData?.appointments;

    let content = null;
    if (!isLoading && isError) content = <div>Something Went Wrong !</div>
    if (!isLoading && !isError && appointments?.length === 0) content = <div>ANISH</div>
    if (!isLoading && !isError && appointments?.length > 0) content =
    <>
    {
        appointments && appointments?.map((item, key) => (
            <tr>
                        <td>
                            <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={userImg} alt=""/></a>
                                <a href="profile.html">Dr. {item?.doctor?.firstName + ' ' + item?.doctor?.lastName}</a>
                            </h2>
                        </td>
                        <td>Dental</td>
                        <td>
                            <h2 className="table-avatar">
                                <a href="profile.html" className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={userImg} alt=""/></a>
                                <a href="profile.html">{item?.firstName + ' ' + item?.lastName} </a>
                            </h2>
                        </td>
                        <td>{item?.scheduleDate} <span className="text-primary d-block">{item?.scheduleTime}</span></td>
                        <td>
                            <div className="status-toggle">
                                <input type="checkbox" id="status_1" className="check" checked/>
                                    <label for="status_1" className="checktoggle">{item?.status}</label>
                            </div>
                        </td>
                        <td className="text-right">
                            $200.00
                        </td>
                    </tr>
        ))
    }
    </>
    return (
        <>
              <div className="col-md-12">

<div className="card card-table">
    <div className="card-header">
        <h4 className="card-title">Appointment List</h4>
    </div>
    <div className="card-body">
        <div className="table-responsive">
            <table className="table table-hover table-center mb-0">
                <thead>
                    <tr>
                        <th>Doctor Name</th>
                        <th>Speciality</th>
                        <th>Patient Name</th>
                        <th>Apointment Time</th>
                        <th>Status</th>
                        <th className="text-right">Amount</th>
                    </tr>
                </thead>
                <tbody>
                   {content}
                </tbody>
            </table>
        </div>
    </div>
</div>

</div>

        </>
    )
}

export default AppointmentsList