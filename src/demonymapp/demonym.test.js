import React from 'react';
import ReactDOM from 'react-dom';
import renderer from 'react-test-renderer';
import Demonym from './demonym.js';
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'

describe(`Demonym Component`, () => {
  it('renders without errors', () => {
    const div = document.createElement('div');
    ReactDOM.render(<Demonym />, div);
    ReactDOM.unmountComponentAtNode(div);
  })
})