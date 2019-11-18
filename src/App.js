import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Header from './sections/header/header';
import PageOne from './sections/main/page_one';
import Footer from './sections/footer/footer';

function App() {
  return (
    <div className="App">
      <Header />
      <PageOne />
      <Footer />
    </div>
  );
}

export default App;
