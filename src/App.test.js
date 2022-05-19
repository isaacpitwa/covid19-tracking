import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { Provider } from 'react-redux';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom';
import store from './redux/configureStore';
import App from './App';
import Metric from './components/Metric';
import Country from './components/Country';
import CountriesReducer, { fetchedRegions } from './redux/countries/countries';

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
});

describe('Renders Metric', () => {
  it('Renders Metric Component', () => {
    const component = render(
      <Router>
        <Provider store={store}>
          <Metric key="2022-03-10" date="2022-03-10" confirmedCases="120" />
        </Provider>
      </Router>,
    );
    const dateText = component.getAllByText('2022-03-10');
    expect(dateText).toHaveLength(1);
    expect(dateText).toBeDefined();
  });
});

describe('Renders Country', () => {
  it('Renders Country Component', () => {
    const component = render(
      <Router>
        <Provider store={store}>
          <Country name="Canada" confirmedCases="200" />
        </Provider>
      </Router>,
    );
    const headingText = component.getAllByText('Canada');
    expect(headingText).toHaveLength(1);
    expect(headingText).toBeDefined();
  });
});

describe('Test Redux Store', () => {
  expect(CountriesReducer.countries).toBeUndefined();
  fetchedRegions({
    dates: {
      '2022-03-10': {
        countries: {
          Canada: {
            name: 'Canada',
            today_new_confirmed: 1234,
          },
        },
      },
    },
  }, { date: '2022-03-10', country: 'Canada' });
});
