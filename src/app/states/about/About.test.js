
import React from "react";
import About from './About';

import { shallow } from 'enzyme';



describe('<About/>', () => {

	it('renders without crashing', () => {
	  var comp = shallow(<About/>);
	  expect(comp).toBeDefined();
	});


});