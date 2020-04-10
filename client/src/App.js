import React from 'react';
import logo from './logo.svg';
import './App.css';
import NavBar from "./components/NavBar";
import PlayerCard from './components/PlayerCard';
import { SearchForm } from "./components/SearchForm";

function App() {
  return (
    <div className="App">
    <NavBar/>
    <header>
    <h4 data-testid="header">Women's World Cup - Google Analytics</h4>
    </header>
    <PlayerCard/>
    {/* <SearchForm handleSearch={this.handleSearch} /> */}
    </div>
  );
}

export default App;
