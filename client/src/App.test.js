import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import NavBar from './components/NavBar';
import PlayerCard from './components/PlayerCard';
import { render } from '@testing-library/react';
import * as rt1 from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';


// it('renders without crashing', () => {
//   const div = document.createElement('div');
//   ReactDOM.render(<App />, div);
//   ReactDOM.unmountComponentAtNode(div);
// });

test("renders App without crashing", () => {
  render(<App />);
});

test("renders NavBar without crashing", () => {
  render(<NavBar />);
});


test("checks nav title",()=>{
  const nav = render(<NavBar/>);
  nav.getByText("Womens World Cup");
});


test('check header', () => {
  const { getByTestId } = render(<App />);
  const headerText = getByTestId('header');
  expect(headerText).toBeVisible();
});



// test('megan rapinoe showing', () => {
//   const player = render(<App />);
//   player.getByText('Megan Rapinoe');
// });

// test("checks for Megan Rapinoe", ()=>{
//   const { getByText } = render(<PlayerCard />);
//   const girl = getByText(/Megan Rapinoe/i);
//   expect(girl).toBeInTheDocument();
// });


// test('header is working', () => {
//   const { getByText } = render(<App />);
//   const headerText = getByText(/Womens World Cup/i);
//   expect(headerText).toBeInTheDocument();
// });

// test('text works', () => {
//   const { getByText } = render(<App />);
//   const fNameInput = getByText (/Womens World Cup/i);
//   expect(fNameInput).toBeInTheDocument();

// });

// test("nav text works", async () => {
//   const { getByText } = render(<NavBar />);
//   const navbar = getByText(/Womens World Cup/i);
//   expect(navbar).toBeInTheDocument();
// });