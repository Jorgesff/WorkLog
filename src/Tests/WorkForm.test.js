import React from 'react';
import { shallow } from 'enzyme';
import WorkForm from '../Components/WorkForm';

it('renders without crash', () => {
  shallow(<WorkForm/>);
});
