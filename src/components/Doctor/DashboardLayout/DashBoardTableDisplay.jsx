import React, { Children, useEffect, useState } from 'react';
import { createTheme, ThemeProvider, Paper, Typography, tableBodyClasses } from '@mui/material';
import DashboardTable from './DashboardTable';
import { makeStyles } from '@mui/styles';
import TableContainer from '@mui/material/TableContainer';
import { Grid } from '@mui/material';

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

const DashbaordTableDisplay = ({ children }) => {
    return (
        <ThemeProvider theme={theme}>
            <Typography>
            <Grid container spacing={2} tabSection data-testid="appointment-grid-container">
            <Grid container={tableBodyClasses.DashbaordTableDisplay} item xs={12} >
                
                            <Grid component={Paper} rounded={true} elevation={1} role="grid" root>
                            { children }
                            </Grid>
                      </Grid>  
            </Grid>
            </Typography>
        </ThemeProvider>
    )
}

export default DashbaordTableDisplay