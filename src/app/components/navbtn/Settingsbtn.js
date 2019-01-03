import React, { Component } from 'react';

import { UISref, UISrefActive } from '@uirouter/react';


import '../../../assets/css/classes.css';

class Settingsbtn extends Component {

	render() {
		return (


			<UISrefActive class="active">
				<UISref to="settings">

					<div className="absolute width-100 height font-40 margin-h-20 pointer right0">
						<div className="absolute center">
							<i className="fas fa-cogs"></i>
						</div>
					</div>

				</UISref>
			</UISrefActive>


		);
	}
}

export default Settingsbtn;
