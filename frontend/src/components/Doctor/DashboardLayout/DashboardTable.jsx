import React, { useEffect, useState } from 'react';
import {
  Paper,
  Typography,
  IconButton,
  TableSortLabel,
  CircularProgress,
  Tooltip,
  tooltipClasses,
  TableCell,
  Button,
  Modal, Box, List, ListItem, ListItemText, ListItemIcon,
} from '@mui/material';
import { styled } from '@mui/system';
import { makeStyles  } from '@mui/styles';
import {  alpha } from '@mui/material/styles';
import {
  AutoSizer,
  Column,
  Table,
  SortDirection,
  SortIndicator,
} from 'react-virtualized';

import sechdule_normal from '../../../images/scheduled-normal.jpg';
import sechdule_active from '../../../images/Scheduled_active.jpg';
import preview_pres from '../../../images/Preview_prescription.jpg';
import indian_reupees from '../../../images/rupee-icon.jpg'
import DeleteIcon from '@mui/icons-material/Delete';
import threeDotImg from '../../../images/3-dots-normal_1.jpg';
import startNormalImg from '../../../images/Start_normal.jpg';
import 'react-virtualized/styles.css'; // Import default styles of react-virtualized
import { KeyboardArrowDown } from '@mui/icons-material';
import { GridMoreVertIcon } from '@mui/x-data-grid';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import EditIcon from '@mui/icons-material/Edit';
import Divider from '@mui/material/Divider';
import ArchiveIcon from '@mui/icons-material/Archive';
import FileCopyIcon from '@mui/icons-material/FileCopy';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';

const useStyles = makeStyles((theme) => ({
  table: {
    '& .ReactVirtualized__Table__headerRow': {
      backgroundColor: theme.palette.primary.main,
      color: theme.palette.common.white,
      display: 'flex',
      alignItems: 'center',
    },
    '& .ReactVirtualized__Table__rowColumn': {
      flex: 1,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    },
  },
  iconButton: {
    padding: 4,
  },
  noDataMessage: {
    textAlign: 'center',
    padding: theme.spacing(2),
  },
  flexContainer: {
    display: 'flex',
    alignItems: 'center',
  },
}));

const StyledMenu = styled((props) => (
  <Menu
    elevation={0}
    anchorOrigin={{
      vertical: 'bottom',
      horizontal: 'right',
    }}
    transformOrigin={{
      vertical: 'top',
      horizontal: 'right',
    }}
    {...props}
  />
))(({ theme }) => ({
  '& .MuiPaper-root': {
    borderRadius: 6,
    marginTop: theme.spacing(1),
    minWidth: 180,
    color:
      theme.palette.mode === 'light' ? 'rgb(55, 65, 81)' : theme.palette.grey[300],
    boxShadow:
      'rgb(255, 255, 255) 0px 0px 0px 0px, rgba(0, 0, 0, 0.05) 0px 0px 0px 1px, rgba(0, 0, 0, 0.1) 0px 10px 15px -3px, rgba(0, 0, 0, 0.05) 0px 4px 6px -2px',
    '& .MuiMenu-list': {
      padding: '4px 0',
    },
    '& .MuiMenuItem-root': {
      '& .MuiSvgIcon-root': {
        fontSize: 18,
        color: theme.palette.text.secondary,
        marginRight: theme.spacing(1.5),
      },
      '&:active': {
        backgroundColor: alpha(
          theme.palette.primary.main,
          theme.palette.action.selectedOpacity,
        ),
      },
    },
  },
}));

const CustomTooltip = styled(({ className, ...props }) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: '#f50057', // Change this to your desired color
    color: 'white',
    fontSize: 14,
    border: '1px solid #dadde9',
  },
}));



const DashboardTable = ({Appointments}) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('');
  const [sortDirection, setSortDirection] = useState(SortDirection.ASC);
  var lengths = 0
  if(Appointments) {
    lengths = Appointments.length;
  }

  const fetchData = async () => {
    setLoading(true);
    try {
      // Replace with your data fetching logic
    setData(Appointments || []); // Ensure data is set to an array
    } catch (error) {
      console.error('Error fetching data:', error);
      setData([]); // Set data to an empty array on error
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  const handleEdit = (rowData) => {
    // Add your edit logic here
    console.log('Edit:', rowData);
  };

  const handleDelete = (rowData) => {
    // Add your delete logic here
    console.log('Delete:', rowData);
  };
  const altText = "Description of the image";
  const handleSort = ({ sortBy, sortDirection }) => {
    setSortBy(sortBy);
    setSortDirection(sortDirection);
    console.log("You are in habdleSort",sortBy,sortDirection);
    const sortedData = [...data].sort((a, b) => {
      console.log("a[sot]",a[sortBy],b[sortBy]);
      if (a[sortBy] < b[sortBy]) {
        return sortDirection === SortDirection.ASC ? -1 : 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return sortDirection === SortDirection.ASC ? 1 : -1;
      }
      return 0;
    });
    console.log("sortedData",sortedData);
    setData(sortedData);
  };

  const headerRenderer = ({ label, dataKey }) => (
    <TableSortLabel
      active={sortBy === dataKey}
      direction={sortDirection.toLowerCase()}
      onClick={() => handleSort({ sortBy: dataKey, sortDirection })}
    >
      {label}
      {sortBy === dataKey && <SortIndicator sortDirection={sortDirection} />}
    </TableSortLabel>
  );

 

  const cellRenderer = ({ cellData }) => <div>{cellData}</div>;

  const actionCellRenderer = ({ rowData }) => (
    <div>
      <TableCell component={"div"} className='guided-tour-dashboard-primary-action' data-testid="test_appointmentActionsCellRow0">
          <Button variant="outlined" tabindex="0" data-testid="start-consultation-btn" className='__appointment-action-btn custom_appointment_start' startIcon={<img src={startNormalImg} alt="icon" className="__normal-icon" />} >Start</Button>
      </TableCell>
     </div>

  );

  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  const moreActionCellRenderer = ({ rowData }) => (
    <div>
      <TableCell component={"div"} className='' data-testid="test_appointmentthreeDotCellRow0">
          <IconButton 
           id="demo-customized-button"
           aria-controls={open ? 'demo-customized-menu' : undefined}
           aria-haspopup="true"
           aria-expanded={open ? 'true' : undefined}
           variant="contained"
           disableElevation
           onClick={handleClick}
           EditIcon={<KeyboardArrowDown/>}
          
          > 
          <GridMoreVertIcon/>
          </IconButton>
      </TableCell>

     </div>

  );

  const quickActionCellRenderer = ({ rowData }) => (
    <div>
      <div className='__appointment-status-container guided-tour-dashboard-quick-action'>
    
     <CustomTooltip title="Appointment Scheduled" style={{backgroundColor:'red'}}>
     <img
        className="appointment-popover"
        src={sechdule_normal}
        aria-label="Appointment Scheduled"

        onClick={() => handleEdit(rowData)}
        
      />      
      </CustomTooltip>
      <CustomTooltip title="Appointment Scheduled">
      <img
        className="appointment-status"
        component="div"
        src={preview_pres}
        onClick={() => handleEdit(rowData)}
      />
      </CustomTooltip>
      <div className='flip-rupee-card'>
      <div className='PENDING flip-rupee-card__inner'>
       <img
        className="appointment-status"
        component="div"
        src={indian_reupees}
        onClick={() => handleEdit(rowData)}
      />
     </div>
     </div> 
      </div>
    </div>
  );

  const columns = [
    { width: 150, label: 'Doctor ID', dataKey: 'patientId' },
    { width: 200, label: 'First Name', dataKey: 'firstName' },
    { width: 200, label: 'Last Name', dataKey: 'phone' },
    { width: 200, label: 'Appointment Type', dataKey: 'scheduleTime' },
    { width: 150, label: 'Quick Actions', dataKey: 'quickActions' , cellRenderer: quickActionCellRenderer},
    { width: 150, label: 'Actions', dataKey: 'actions',cellRenderer: actionCellRenderer},
    { width: 150, label: '', dataKey: 'moreActions',cellRenderer: moreActionCellRenderer},
   
  ];

  if (loading) {
    return (
      <div className={classes.noDataMessage}>
        <CircularProgress />
      </div>
    );
  }

  if (lengths === 0) {
    return (
      <Paper style={{ height: 400, width: '100%' }}>
        
        <div className={classes.noDataMessage}>
          No records available.
        </div>
      </Paper>
    );
  }

  return (
    <>
    <Paper style={{ height: 400, width: '100%' }}>
    
      <AutoSizer>
        {({ height, width }) => (
          <Table
            width={width}
            height={height}
            headerHeight={40}
            rowHeight={48}
            rowCount={lengths}
            rowGetter={({ index }) => data[index] || Appointments[index]}
            sort={handleSort}
            sortBy={sortBy}
            sortDirection={sortDirection}
            className={classes.table}
          >
            {columns.map(({ dataKey, label, width ,cellRenderer}) => (
              <Column
                key={dataKey}
                dataKey={dataKey}
                label={label}
                width={width}
                headerRenderer={headerRenderer}
                cellRenderer={cellRenderer}
                 />
            ))}
          </Table>
        )}
      </AutoSizer>
    </Paper>
    <StyledMenu
            id="demo-customized-menu"
            MenuListProps={{
              'aria-labelledby': 'demo-customized-button',
            }}
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
          >
            <MenuItem onClick={handleClose} disableRipple>
              <EditIcon />
              End Consultation
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <FileCopyIcon />
              Reschedule
            </MenuItem>
            <Divider sx={{ my: 0.5 }} />
            <MenuItem onClick={handleClose} disableRipple>
              <ArchiveIcon />
              Cancel Appointment
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <MoreHorizIcon />
              Consultation Invoice
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <MoreHorizIcon />
              Payment Collected
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <MoreHorizIcon />
              Remove
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <MoreHorizIcon />
              Create Certificate
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <MoreHorizIcon />
              Add Consent
            </MenuItem>
            <MenuItem onClick={handleClose} disableRipple>
              <MoreHorizIcon />
              Chat With Us
            </MenuItem>
          </StyledMenu>
    </> 
  );
};

export default DashboardTable;
