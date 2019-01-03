import React, { Component } from 'react';

import { UISref, UISrefActive } from '@uirouter/react';


import '../../../assets/css/classes.css';


import * as state from "../../services/state.service";

class Navbtn extends Component {

    render() {
        return (


            <UISrefActive class="active">
                <UISref to={this.props.state}>

                    <div className={"absolute width height rounded10 pointer " + this.props.class} onClick={state.changePreviousIndex}>
                        <div className="absolute center">{this.props.name}</div>
                    </div>

                </UISref>
            </UISrefActive>


        );
    }
}

export default Navbtn;
