import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Header from './components/Header';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [categories] = useState(['About Me', 'Portfolio', 'Contact', 'Resume']);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  function renderSwitch(category) {
    switch (category) {
      case "About Me":
        return <About></About>;
      case "Portfolio":
        return <Portfolio></Portfolio>;
      case "Contact":
        return <ContactForm></ContactForm>;
      case "Resume":
        return <Resume></Resume>;
      default:
        return <About></About>;
    }
  }

  return (
    <div>
      <Header>
        <Nav
          categories={categories}
          setCurrentCategory={setCurrentCategory}
          currentCategory={currentCategory}
        />
      </Header>
      <main>
        <div>
          {renderSwitch(currentCategory)}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;