
import React from "react";
import Contact from './Contact';

import { shallow } from 'enzyme';



describe('<Contact/>', () => {

	it('renders without crashing', () => {
	  var comp = shallow(<Contact/>);
	  expect(comp).toBeDefined();
	});


});