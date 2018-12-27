
import React from "react";
import Chris from './Chris';

import { shallow } from 'enzyme';



describe('<Chris/>', () => {

	it('renders without crashing', () => {
	  var comp = shallow(<Chris/>);
	  expect(comp).toBeDefined();
	});


});