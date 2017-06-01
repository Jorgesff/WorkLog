import React from 'react';
import { shallow } from 'enzyme';
import WorkTableItem from '../Components/WorkTableItem';

it('render without crashing', () => {
  shallow(<WorkTableItem/>);
});
