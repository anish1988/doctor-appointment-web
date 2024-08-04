import React, { useEffect, useState } from 'react'
import AdminLayout from '../AdminLayout/AdminLayout'
import './Doctors.css';
import { Empty } from 'antd';
import userImg from '../../../images/avatar.jpg';
import { useGetDoctorsQuery } from '../../../redux/api/doctorApi';


const DoctorsList = () => {

    const { data: doctorData, isLoading, isError } = useGetDoctorsQuery({ limit: 4 });
    console.log("doctorData", doctorData);
    console.log("DoctoreDataLength", doctorData?.doctors?.length);
    const doctors = doctorData?.doctors;


    let content = null;
    if (!isLoading && isError) content = <div>Something Went Wrong !</div>
    if (!isLoading && !isError && doctors?.length === 0) content = <div><Empty /></div>
    if (!isLoading && !isError && doctors?.length > 0) content =
        <>
            {
                 doctors && doctors?.map((item, key) => (
                 <tr>
                   <td>
                       <h2 className="table-avatar">
                           <a className="avatar avatar-sm mr-2"><img className="avatar-img rounded-circle" src={userImg} alt="" /></a>
                           <a>Dr. {item?.firstName + ' ' + item?.lastName}</a>
                       </h2>
                   </td>
                   <td>{item?.specialization}</td>
                   <td>$3200.00</td>
                   <td>
                       <i className="fe fe-star text-warning"></i>
                       <i className="fe fe-star text-warning"></i>
                       <i className="fe fe-star text-warning"></i>
                       <i className="fe fe-star text-warning"></i>
                       <i className="fe fe-star-o text-secondary"></i>
                   </td>
               </tr>
                 ))
            }
        </>


    return (
        <>
            
                    <div className="col-md-6 d-flex">
                        <div className="card card-table flex-fill">
                            <div className="card-header">
                                <h4 className="card-title">Doctors List</h4>
                            </div>
                            <div className="card-body">
                            <div className="table-responsive">
                    <table className="table table-hover table-center mb-0">
                        <thead>
                            <tr>
                                <th>Doctor Name</th>
                                <th>Speciality</th>
                                <th>Earned</th>
                                <th>Reviews</th>
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

export default DoctorsList;