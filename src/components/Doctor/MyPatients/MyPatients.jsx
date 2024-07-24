import React from 'react';
import img from '../../../images/avatar.jpg';
import pImg from '../../../images/logo.png';
import DashboardLayout from '../DashboardLayout/DashboardLayout';
import { useGetDoctorPatientsQuery } from '../../../redux/api/appointmentApi';
import moment from 'moment';
import { Link, useParams } from 'react-router-dom';
import { FaClock, FaEnvelope, FaLocationArrow, FaPhoneAlt } from "react-icons/fa";
import { Grid } from '@mui/material';
import { Empty, Flex } from 'antd';
import { styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import '../../../../src/test.css';
// import '../../../../src/bajaj';
import { Tabs } from '@mui/base/Tabs';
import { TabsList } from '@mui/base/TabsList';
import Typography from '@mui/material/Typography';
import MyPatientsAction from './MyPatientsAction';
import ParentComponent from './ParentComponent';

import { Tab } from '@mui/base/Tab';
//import flex from 'antd';


const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const MyPatients = () => {

    const { id } = useParams();

    const getInitPatientName = (item) => {
        const fullName = `${item?.firstName ?? ''} ${item?.lastName ?? ''}`;
        return fullName.trim() || "Private Patient";
    }

    const { data, isLoading, isError } = useGetDoctorPatientsQuery(id);
    console.log("usegetDoctorPatientsQuery", data);
    let content = null;

    if (!isLoading && isError) content = <div>Something Went Wrong !</div>
    if (!isLoading && !isError && data?.length === 0) content = <Empty />
    if (!isLoading && !isError && data?.length > 0) content =
        <>
            {
                data && data?.map((item) => (
                    <div class="patient-list_card_Bounds__0V3ES" data-testid="test_patientCard">
                        <Grid container-fluid="true" style={{display: 'flex'}}>
                            <Grid item xs={8} style={{display: 'flex'}}>
                            <div>
                                <img className='patient-list_avatarImage__UT7+r' src={data?.patient?.img ? data?.patient?.img : img} alt="" />
                            </div>   
                            <div style={{flex: '1 1 0%',justifyContent:'start'}}>
                                <div style={{display:  'inline-flex'}}>
                                <label class="patient-list_userNameLabel__x+ZBq">
                                    {getInitPatientName(item)}
                                </label>
                                </div>
                                <div style={{display: 'flex'}}>
                                <div className='patient-list_userInfo__81+xV'>
                                <Grid container className='__gender-dob-phoneNo'>
                                    <Grid item xs={12} className='__gender-dob-phoneNo'>
                                        <span className='__gender-dob-container'>{item?.gender ?? 'Not mentioned'}</span>
                                        <span className='__divider'> / </span>
                                        <span className=''>{item?.dateOfBirth ?? '30'}</span>
                                        <label className='__phone-no-container'>
                                        <span className='__divider'>|</span>
                                        <span>{item?.mobile ?? 'xxxxxx'}</span>
                                        </label>
                                    </Grid>
                                    <Grid item xs={10}></Grid>

                                </Grid>
                            </div>    
                                </div>    
                            </div> 

                           
                            
                            </Grid>
                            <Grid item xs={4} style={{margin: '0px 4px',flexBasis:'33.3333%'}} className='css-1udb5133'>

                            <div style={{flex: '1 1 0%' ,justifyContent:'start'}}>
                                <div className='displayFlex'>
                                    <div>
                                    <label class="patient-list_badgeText__aQNgM">{item.id}</label>
                                    </div>
                                </div>

                            </div>
                            </Grid>
                            <Grid style={{margin: '0px 4px',height:'25px'}}>
                            <ParentComponent />
                               {/* <MyPatientsAction/>*/}
                                
                                
                            </Grid>

                        </Grid>
                    </div>
                ))
            }
        </>

    return (
        <DashboardLayout>
           <div className="patientListContainer">
            <Grid container className='headerContainer'>
                <Grid item><label className='allPatientLabel'>Patient List</label>
                </Grid>
                <Grid item>
                    <label className='uploadText'>Download Patients Data</label>
                    <label className='uploadText'>+ Upload Patient List</label>
                </Grid>

            </Grid>
            <Grid item xs={12}>
                <Tabs defaultValue={1}>
                    <TabsList>
                        <Tab value={1}>One</Tab>
                        <Tab value={2}>Two</Tab>
                        <Tab value={3}>Three</Tab>
                    </TabsList>
                </Tabs>
                <Typography className="allPatient__tabSection" role="tabpanel" component="div">
                    <Grid container> 
{          /*              <Grid item xs={1}>
                            Grid 1
    </Grid> */}
                        <Grid item xs={12} md={12} lg={12} className="patient-list_cardCtnGrid__D16ju">
                            {content}
                        </Grid>
                    </Grid>
                      
                </Typography>
            </Grid>

           </div>
        </DashboardLayout>
    )
}

export default MyPatients