import React from 'react';
import App from './App';
import renderer from 'react-test-renderer';
import { shallow } from 'enzyme';


it('renders without crashing', () => {
  // This is the basic test provided by create-react-app
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

