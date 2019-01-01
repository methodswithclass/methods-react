import React, { Component } from 'react';

import { UISref, UISrefActive } from '@uirouter/react';


import '../../../assets/css/classes.css';

var getIcon = function ($this) {

  return "fas " + $this.props.icon;
}

class Iconbtn extends Component {

	render() {
		return ( 


			<UISrefActive class="active">
				<UISref to={this.props.state}>

					<div className="absolute width-300 height-300 center raised rounded20 black-back pointer">
						<div className="absolute width height80 vcenter white">

							<div className="relative width height50">
								<div className="relative center text-center font-50">
									<i className={getIcon(this)}></i>
								</div>
							</div>
									
							<div className="relative width height50">
								<div className="relative center text-center font-30">
									{this.props.name}
								</div>
							</div>
						</div>

					</div>

				</UISref>
			</UISrefActive>


		);
	}
}

export default Iconbtn;