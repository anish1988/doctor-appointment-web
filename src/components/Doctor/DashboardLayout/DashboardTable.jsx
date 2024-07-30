import React, { useEffect, useState } from 'react';
import {
  Paper,
  Typography,
  IconButton,
  TableSortLabel,
  CircularProgress,
} from '@mui/material';
import { makeStyles } from '@mui/styles';
import {
  AutoSizer,
  Column,
  Table,
  SortDirection,
  SortIndicator,
} from 'react-virtualized';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import 'react-virtualized/styles.css'; // Import default styles of react-virtualized

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

const columns = [
  { width: 150, label: 'Doctor ID', dataKey: 'patientId' },
  { width: 200, label: 'First Name', dataKey: 'firstName' },
  { width: 200, label: 'Last Name', dataKey: 'phone' },
  { width: 200, label: 'Appointment Type', dataKey: 'scheduleTime' },
  { width: 150, label: 'Actions', dataKey: 'actions' },
];

const DashboardTable = ({Appointments}) => {
  const classes = useStyles();
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [sortBy, setSortBy] = useState('');
  const [sortDirection, setSortDirection] = useState(SortDirection.ASC);

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

  const handleSort = ({ sortBy, sortDirection }) => {
    setSortBy(sortBy);
    setSortDirection(sortDirection);
    const sortedData = [...Appointments].sort((a, b) => {
      if (a[sortBy] < b[sortBy]) {
        return sortDirection === SortDirection.ASC ? -1 : 1;
      }
      if (a[sortBy] > b[sortBy]) {
        return sortDirection === SortDirection.ASC ? 1 : -1;
      }
      return 0;
    });
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
      <IconButton
        className={classes.iconButton}
        onClick={() => handleEdit(rowData)}
      >
        <EditIcon />
      </IconButton>
      <IconButton
        className={classes.iconButton}
        onClick={() => handleDelete(rowData)}
      >
        <DeleteIcon />
      </IconButton>
    </div>
  );

  if (loading) {
    return (
      <div className={classes.noDataMessage}>
        <CircularProgress />
      </div>
    );
  }

  if (Appointments.length === 0) {
    return (
      <Paper style={{ height: 400, width: '100%' }}>
        <Typography variant="h6" gutterBottom component="div">
          Virtualized Table with Sorting and Actions
        </Typography>
        <div className={classes.noDataMessage}>
          No records available.
        </div>
      </Paper>
    );
  }

  return (
    <Paper style={{ height: 400, width: '100%' }}>
      <Typography variant="h6" gutterBottom component="div">
        Virtualized Table with Sorting and Actions
      </Typography>
      <AutoSizer>
        {({ height, width }) => (
          <Table
            width={width}
            height={height}
            headerHeight={40}
            rowHeight={48}
            rowCount={Appointments.length}
            rowGetter={({ index }) => Appointments[index]}
            sort={handleSort}
            sortBy={sortBy}
            sortDirection={sortDirection}
            className={classes.table}
          >
            {columns.map(({ dataKey, label, width }) => (
              <Column
                key={dataKey}
                dataKey={dataKey}
                label={label}
                width={width}
                headerRenderer={headerRenderer}
                cellRenderer={dataKey === 'actions' ? actionCellRenderer : cellRenderer}
              />
            ))}
          </Table>
        )}
      </AutoSizer>
    </Paper>
  );
};

export default DashboardTable;
