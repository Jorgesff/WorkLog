import React from 'react';
import { shallow } from 'enzyme';
import WorkTable from '../Components/WorkTable';

it('render without crashing', () => {
  shallow(<WorkTable/>);
});
