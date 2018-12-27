
import React from "react";
import Apps from './Apps';

import { shallow } from 'enzyme';



describe('<Apps/>', () => {

	it('renders without crashing', () => {
	  var comp = shallow(<Apps/>);
	  expect(comp).toBeDefined();
	});


});