import React from 'react'
import DashboardSidebar from '../../UI/DashboardSidebar';
import Header from '../../Shared/Header/Header';
import Button from '@mui/material/Button';
import DashboardBanner from './DashboardBanner';
import DashboardFilter from './DashboardFilter';
import DashboardDahCard from './DashbaordDashCard';
import { Grid } from '@mui/material';
//import todayCollectionImg from '../../../images/today-collection-normal.jpg'
import img from '../../../images/avatar.jpg'
import Avatar from '@mui/material/Avatar';
import DashboardTable from './DashboardTable';
import { getFromLocalStorage } from '../../../utils/local-storage';
import {userData} from '../../../constant/storageKey';
import { useGetDoctorAppointmentsQuery } from '../../../redux/api/appointmentApi';
import { createTheme, ThemeProvider, Paper, Typography } from '@mui/material';
import { makeStyles } from '@mui/styles';
import DashbaordTableDisplay from './DashBoardTableDisplay';
//import DashboardTable from './Dashboardtable';
const sampleData = [
    { name: 'John Doe', age: 25, city: 'New York' },
    { name: 'Jane Smith', age: 30, city: 'San Francisco' },
    { name: 'Michael Johnson', age: 35, city: 'Los Angeles' },
    { name: 'Mary Williams', age: 28, city: 'Chicago' },
    // Add more data here
];
console.log("sampleData", sampleData);
const theme = createTheme();

const useStyles = makeStyles((theme) => ({
    table: {
        '& .ReactVirtualized__Table__headerRow': {
            backgroundColor: theme.palette.primary.main,
            color: theme.palette.common.white,
            display: 'flex',
            alignItems: 'center',
            padding: '0 10px',
            textTransform: 'uppercase',
        },
        '& .ReactVirtualized__Table__row': {
            display: 'flex',
            alignItems: 'center',
            padding: '0 10px',
        },
    },
}));

const DashboardLayout = ({ children }) => {
	
	const authToken = getFromLocalStorage(userData);
    //console.log("parseUserDatas userData authToken ",JSON.parse(authToken));
    const parseUserDatas = JSON.parse(authToken);
    console.log("parseUserDatas User Id ",parseUserDatas?.Last_Login_Id);
    
    const { data } = useGetDoctorAppointmentsQuery({ LastLoginId: parseUserDatas?.Last_Login_Id });
    console.log("useGetDoctorAppointmentsQuery new", data);
	return (
		<>
			<Header />
			<div className="container-fluid" style={{ marginTop: 160, marginBottom: 200 }}>
				<div className="row">
					<div className="col-md-3 col-lg-2 col-xl-1">
						<DashboardSidebar />
					</div>
					<div className="col-md-9 col-lg-10 col-xl-11">
						<DashboardBanner/>
						<DashboardFilter/>
						<DashboardDahCard/>
						<DashbaordTableDisplay>
						<DashboardTable Appointments={data} />
						</DashbaordTableDisplay>
						
						
					</div>
				</div>
			</div>
		</>
	)
}

export default DashboardLayout