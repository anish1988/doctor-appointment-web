import React, { useEffect, useState } from 'react'
import AdminLayout from '../AdminLayout/AdminLayout'
import './Patients.css';
import { Empty } from 'antd';
import userImg from '../../../images/avatar.jpg';
import { useGetPatientsQuery } from '../../../redux/api/patientApi';


const PatientsList = () => {

    const { data: patientsData, isLoading, isError } = useGetPatientsQuery({ limit: 4 });
    console.log("PatientsData", patientsData);
    console.log("PatientsDataLength", patientsData?.patient?.length);
    const patient = patientsData?.patient;

    let content = null;
    if (!isLoading && isError) content = <div>Something Went Wrong !</div>
    if (!isLoading && !isError && patient?.length === 0) content = <div>ANISH</div>
    if (!isLoading && !isError && patient?.length > 0) content =
        <>
            {
                 patient && patient?.map((item, key) => (
                    
                 <tr>
                   <td>
                       <h2 className="table-avatar">
                           <a className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={userImg} alt="" /> </a>
                           <a> { item?.firstName + ' ' + item?.lastName}</a>
                       </h2>
                   </td>
                   <td>{item?.phone}</td>
                   <td>{item?.lastVisit}</td>
                   <td>{item?.paid}</td>
               </tr> 
                 ))
            }

        </>
    return (
        <div className="col-md-6 d-flex">

        <div className="card  card-table flex-fill">
            <div className="card-header">
                <h4 className="card-title">Patients List</h4>
            </div>
            <div className="card-body">
                <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                        <thead>
                            <tr>
                                <th>Patient Name</th>
                                <th>Phone</th>
                                <th>Last Visit</th>
                                <th>Paid</th>
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
    )
}

export default PatientsList;