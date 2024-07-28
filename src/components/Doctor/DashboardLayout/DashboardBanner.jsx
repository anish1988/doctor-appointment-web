import React from 'react'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';



const DashboardBanner = () => {

    return (
        <div className='pp-banner-wrapper'>
            <img src="/static/media/rocket.1de3efb9775d5154411627ac25af778c.svg" alt="" height="100%" />
            <div className='pp-title-ctn'>
                <h2 className="pp-banner-title">Introducing your New and Customized <span>Patient Profile</span>
                </h2>

            </div>
            <div class="sparkle-ctn">
                <img src="/static/media/sparkle.492c6eed26f74c781920e4a9b5c58cb9.svg" alt="" width="100%" height="100%" />
                <img src="/static/media/sparkle.492c6eed26f74c781920e4a9b5c58cb9.svg" alt="" width="100%" height="100%" />
            </div>
            <div className="pp-banner-btn">
                <Button variant="outlined" className='pp-btn' endIcon={<SendIcon />}>Explore now</Button>
            </div>

        </div>
    )

}

export default DashboardBanner