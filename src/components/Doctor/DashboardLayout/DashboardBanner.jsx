import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import rocketImg from '../../../images/rocket.jpg';
import sparkImg from '../../../images/sparkle.jpg';



const DashboardBanner = () => {

    return (
        <div className='pp-banner-wrapper'>
            <img src={rocketImg} alt="" height="100%" />
            <div className='pp-title-ctn'>
                <h2 className="pp-banner-title">Introducing your New and Customized <span>Patient Profile</span>
                </h2>

            </div>
            <div class="sparkle-ctn">
                <img src={sparkImg} alt="" width="100%" height="100%" />
                <img src={sparkImg} alt="" width="100%" height="100%" />
            </div>
            <div className="pp-banner-btn">
                <Button variant="outlined" className='pp-btn' endIcon={<SendIcon />}>Explore now</Button>
            </div>

        </div>
    )

}

export default DashboardBanner