import React from 'react';
import './styles/App.scss';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
    const currencies = ['USD', 'EUR', 'UAH', 'PLN'];
  return (
    <div className="App">
        <Header currencies={currencies}/>
        <Content currencies={currencies}/>
        <Footer/>
    </div>
  );
}

export default App;
