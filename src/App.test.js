import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);
});

it('Creates a snapshot test', ()=> {
    // Create a snapshot file in src/__snapshots__/App.test.js.snap to check the results against

    // Render the component
    const component = renderer.create(<App />);

    // Convert the component to JSON
    const componentTree = component.toJSON();

    // Check the JSON against the snapshot
    expect(componentTree).toMatchSnapshot();
});
