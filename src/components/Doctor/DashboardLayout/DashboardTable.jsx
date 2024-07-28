
import React, { useState } from 'react';
import DashboardSidebar from '../../UI/DashboardSidebar';
import Header from '../../Shared/Header/Header';
import { Grid, TableContainer, Typography  ,createTheme, ThemeProvider,} from '@mui/material';
import {Paper} from '@mui/material';
import { Table, Column, AutoSizer, SortDirection } from 'react-virtualized';
import 'react-virtualized/styles.css'; // Import default styles of react-virtualized
import { makeStyles } from '@mui/styles';

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

const DashboardTable = ({ Appointments }) =>{
    
      const classes = useStyles();
      const [sortBy, setSortBy] = useState('firstName');
      const [sortDirection, setSortDirection] = useState(SortDirection.ASC);
  console.log("DashboardTable", Appointments);
      const sortedData = Appointments && Appointments.length ? [...Appointments].sort((a, b) => {
        console.log("sortedData", sortBy);
        console.log("sortedData", a[sortBy],b[sortBy]);
        if (a[sortBy] < b[sortBy]) return sortDirection === SortDirection.ASC ? -1 : 1;
        if (a[sortBy] > b[sortBy]) return sortDirection === SortDirection.ASC ? 1 : -1;
        return 0;
      }) : [];
      console.log("sortedData Result", sortedData);
      const handleSort = ({ sortBy: newSortBy, sortDirection: newSortDirection }) => {
          setSortBy(newSortBy);
          setSortDirection(newSortDirection);
      };
      
      const columnsToDisplay = [
        { label: 'patient Id', dataKey: 'patientId', width: 300 },
        { label: 'email', dataKey: 'email', width: 300 },
        { label: 'firstName', dataKey: 'firstName', width: 300 },
        { label: 'lastName', dataKey: 'lastName', width: 300 },
        { label: 'lastName', dataKey: 'lastName', width: 300 },
        { label: 'lastName', dataKey: 'lastName', width: 300 },
        { label: 'lastName', dataKey: 'lastName', width: 300 },
        { label: 'lastName', dataKey: 'lastName', width: 300 },
        { label: 'lastName', dataKey: 'lastName', width: 300 },
      ];
        return (
           
            
            <AutoSizer>
        {({ height, width }) => (
               
                    <Table
                        width={1000}
                        height={1000}
                        headerHeight={40}
                        rowHeight={30}
                        rowCount={sortedData.length}
                        rowGetter={({ index }) => sortedData[index]}
                        sort={handleSort}
                        sortBy={sortBy}
                        sortDirection={sortDirection}
                    >
                        {columnsToDisplay.map(({ label, dataKey, width }) => (
                            <Column key={dataKey} label={label} dataKey={dataKey} width={width} />
                        ))}
                    </Table>
                
            )}
      </AutoSizer>

          
        )
}

export default DashboardTable