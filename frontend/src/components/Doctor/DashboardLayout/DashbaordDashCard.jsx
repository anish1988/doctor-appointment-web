import React from   'react';

import { Tabs, Tab } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Grid } from '@mui/material';
import { useState } from 'react';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';

const DashboardDahCard = () => {
    const [value, setValue] = useState(0);

    const handleChange = (event, newValue) => {
      setValue(newValue);
    };
  
    return (    
        <Grid item xs={12} className='__appointment-tabs-container guided-tour-dashboard'>
         <div className='dashboard_tab' data-testid="appointment-tabs"> 
       
        <Tabs
      value={value}
      onChange={handleChange}
      variant="scrollable"
      visibleScrollbar={false}
      flexContainer
    >
      <Tab
      className="tabs_blk appointment-tabs tab_selected"
      tabIndex="0"
      type="button"
      role="tab"
      aria-selected="true"
      label={
        <span className="MuiTab-wrapper">
          <div className="dashboard_tab_blk" data-testid="test_dashboardTabsAllAppointments">
            <span className="count">00</span>
            <div className="txt_blk">
            <CalendarMonthRoundedIcon style={{ display: 'unset', objectFit: 'contain' }}  alt="All Appointments Icon"/>
            <CalendarMonthRoundedIcon style={{ display: 'none', objectFit: 'contain' }}  alt="Calendar Icon"/>
            <span className="txt">All Appointments</span>
            </div>
          </div>
        </span>
      }
    />
      <Tab 
        label="Tab Two" 
        value={1} 
        icon={<span role="img" aria-label="icon">🌟</span>}
        onClick={() => console.log('Tab Two clicked')}
        sx={{ color: 'green' }}
        disableFocusRipple
        TouchRippleProps={{ color: 'yellow' }}
        focusVisibleClassName="focus-visible"
      />
      <Tab 
        label="Tab Three" 
        value={2} 
        icon={<span role="img" aria-label="icon">🚀</span>}
        onClick={() => console.log('Tab Three clicked')}
        sx={{ color: 'red' }}
        centerRipple
        disabled
      />
    </Tabs>
      
    </div>
        </Grid>
    )
    
}

export default DashboardDahCard