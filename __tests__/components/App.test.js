import React from 'react';
import { shallow } from 'enzyme';
import App from '../../src/shared/App';

describe('<App />', () => {
  it('renders three <Foo /> components', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

});