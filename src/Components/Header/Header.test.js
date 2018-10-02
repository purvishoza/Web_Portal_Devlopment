import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Header from './Header';
import {Link, MemoryRouter} from 'react-router-dom';

configure({adapter:new Adapter()});

describe('<Header />', () => {
//let wrapper;
  // beforeEach(() => {
  //  wrapper = shallow(<Header />);
  // });
  it('should render header component', () => {
    let wrapper = shallow(<Header />);
  expect(wrapper.find(Link)).toHaveLength(2);
});

});
