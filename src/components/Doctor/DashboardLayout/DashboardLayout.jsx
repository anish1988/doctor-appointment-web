import React from 'react'
import DashboardSidebar from '../../UI/DashboardSidebar';
import Header from '../../Shared/Header/Header';
const DashboardLayout = ({ children }) => {
	return (
		<>
			<Header />
			<div className="container-fluid" style={{marginTop:160, marginBottom:200}}>
				<div className="row">
					<div className="col-md-4 col-lg-3 col-xl-2">
						<DashboardSidebar />
					</div>
					<div className="col-md-8 col-lg-9 col-xl-10">
						{children}
					</div>
				</div>
			</div>
		</>
	)
}

export default DashboardLayout