import axios from 'axios';
import MockAdapter from 'axios-mock-adapter';
import home from './Home';
import mockAxios from 'jest-mock-axios';


const flushPromises = () => new Promise(resolve => setImmediate(resolve));

it('BookList snapshot test', async () => {
  const wrapper = shallow(<Home />);
  await flushPromises();
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
});
