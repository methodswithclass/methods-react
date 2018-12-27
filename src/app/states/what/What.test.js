
import React from "react";
import What from './What';

import { shallow } from 'enzyme';



describe('<What/>', () => {

	it('renders without crashing', () => {
	  var comp = shallow(<What/>);
	  expect(comp).toBeDefined();
	});


});