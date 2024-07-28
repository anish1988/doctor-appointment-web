import React from 'react'
import DescriptionIcon from '@mui/icons-material/Description';
import CalendarMonthRoundedIcon from '@mui/icons-material/CalendarMonthRounded';
import Button from '@mui/material/Button';
import { Grid } from '@mui/material';


const DashboardFilter = () => {
    return (
        <Grid container={true} className='__doctor-dashboard-section' data-testid="appointments-page">
            <Grid container={true} xs={12} className='__doctor-dashboard-section--grid-container'>
                <div class="guided-tour-calendar" data-testid="test_dashboadGuidedTourCalendar">
                    <CalendarMonthRoundedIcon className='__doctor-dashboard-section--calender-normal' />

                </div>
                <Button variant="outlined" className='btn not-today-btn' data-testid="test_dashboardDateToday">
                    <span class="label day-label-white">Today</span>
                </Button>
                <div className="__arrow-container">
                    <div className="__arrow-images" data-testid="test_dashboardDatePrevious">
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="__normal-arrow">
                            <g fill="none" fill-rule="evenodd">
                                <path d="M24 24H0V0h24z"></path>
                                <path fill="currentColor" fill-rule="nonzero" d="M7.826 12.757l6.834 7.117c.16.168.418.168.58 0a.44.44 0 000-.604l-6.542-6.814 6.541-6.814a.438.438 0 000-.604.405.405 0 00-.288-.127.392.392 0 00-.288.127L7.83 12.156a.437.437 0 00-.004.6z"></path>
                            </g>
                        </svg>
                    </div>
                    <div className="__date-text" data-testid="test_dashboardDateSelect">July 27, 2024</div>
                    <div className="__arrow-images" data-testid="test_dashboardDateNext">
                        <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" className="__normal-arrow">
                            <rect width="100%" height="100%" fill="none"></rect>
                            <g className="currentLayer">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M0 0h25v24H0z"></path>
                                    <path fill="currentColor" fill-rule="nonzero" d="M16.847 11.243L9.73 4.126a.425.425 0 00-.604 0 .425.425 0 000 .604l6.814 6.814-6.814 6.814a.425.425 0 000 .604.417.417 0 00.6 0l7.118-7.118a.423.423 0 00.003-.6z"></path>
                                </g>
                            </g>
                        </svg>
                    </div>
                </div>
                <div className="__session-container">
                    <div className="__text">Session:</div>
                    <div className="__arrow-container">
                        <div className="__arrow-images" data-testid="test_dashboardSessionPrevious">
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" className="__normal-arrow">
                                <g fill="none" fill-rule="evenodd">
                                    <path d="M24 24H0V0h24z"></path>
                                    <path fill="currentColor" fill-rule="nonzero" d="M7.826 12.757l6.834 7.117c.16.168.418.168.58 0a.44.44 0 000-.604l-6.542-6.814 6.541-6.814a.438.438 0 000-.604.405.405 0 00-.288-.127.392.392 0 00-.288.127L7.83 12.156a.437.437 0 00-.004.6z"></path>
                                </g>
                            </svg>
                        </div>
                        <div class="__session-type" id="currentSession" data-testid="test_dashboardSessionSelect">
                            <span className="__session-text __all-session">All</span>
                        </div>
                        <div className="MuiCollapse-root MuiCollapse-vertical MuiCollapse-hidden css-a0y2e3" style={{ minHeight: 0 }}>
                            <div className="MuiCollapse-wrapper MuiCollapse-vertical css-hboir5">
                                <div className="MuiCollapse-wrapperInner MuiCollapse-vertical css-8atqhb"></div>
                            </div>
                        </div>
                        <div className="__arrow-images" data-testid="test_dashboardSessionNext">
                            <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" className="__normal-arrow">
                                <rect width="100%" height="100%" fill="none"></rect>
                                <g className="currentLayer">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="M0 0h25v24H0z"></path>
                                        <path fill="currentColor" fill-rule="nonzero" d="M16.847 11.243L9.73 4.126a.425.425 0 00-.604 0 .425.425 0 000 .604l6.814 6.814-6.814 6.814a.425.425 0 000 .604.417.417 0 00.6 0l7.118-7.118a.423.423 0 00.003-.6z"></path>
                                    </g>
                                </g>
                            </svg>
                        </div>
                    </div>
                </div>
                <div className="__collection-summarized-clinic-reports-section">
                    <div className="collections " data-testid="test_dashboardTodaysCollection">
                        <DescriptionIcon className='collections__Img--normal' />
                        <div className="collections__main">
                            <div className="collections__text">Jul 27th collection: </div>
                            <div className="collections__amount">
                                <div className=" collections__amount--static">0.00</div>
                            </div>
                        </div>
                    </div>
                    <div class="report-summary">
                        <label className="clinic-report-link guided-tour-dashboard-clinic-report " data-testid="test_dashboardViewClinicReport">
                            <div className="clinic-report-link__icon"></div>
                            <DescriptionIcon />
                            <span className="clinic-report-link__icon-text">View Clinic Report</span>
                        </label>
                    </div>
                </div>
            </Grid>
        </Grid>
    )
}

export default DashboardFilter