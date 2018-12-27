import React, { Component } from 'react';

import { UISref, UISrefActive } from '@uirouter/react';


import '../../../assets/css/classes.css';

class Navbtn extends Component {

    render() {
        return ( 


            <UISrefActive class="active">
                <UISref to={this.props.state} params={((this.props.state === "home") ? {id:this.props.state} : {demo:this.props.name.toLowerCase()})}>
                       
                    <div className="absolute width height black-back white rounded20 raised pointer">
                        <div className="absolute center">{this.props.name}</div>
                    </div> 

                </UISref>
            </UISrefActive>


        );
    }
}

export default Navbtn;