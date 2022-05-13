import React from 'react';
import './styles/App.scss';
import Header from "./components/Header";
import Content from "./components/Content";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Header/>
        <Content currencies={['USD', 'EUR', 'UAH', 'PLN']}/>
        <Footer/>
    </div>
  );
}

export default App;
