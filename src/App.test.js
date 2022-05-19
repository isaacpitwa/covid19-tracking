import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen, fireEvent } from '@testing-library/react';
import renderer from 'react-test-renderer';
import '@testing-library/jest-dom';
import store from './redux/configureStore';
import App from './App';
import Metric from './components/Metric';

const appRender = () => render(
  <Router>
    <Provider store={store}>
      <App />
    </Provider>
  </Router>,
);

describe('App', () => {
  it('renders without crashing', () => {
    appRender();
  });
  it('renders the Stats by Date', () => {
    appRender();
    expect(screen.getByText('Stats by Date')).toBeInTheDocument();
  });
  it('Renders Metric Componet', () => {
    const component = renderer.create(
      <Router>
        <Provider store={store}>
          <Metric key="2022-03-10" date="2022-03-10" confirmedCases="120" />
        </Provider>
      </Router>,
    );
    const tree = component.toJSON();
    expect(tree).toMatchSnapshot();
    expect(tree).toBeDefined();
  });
});
