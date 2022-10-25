import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';
import ContactForm from './components/Contact';
import Portfolio from './components/Portfolio';
import Resume from './components/Resume';

function App() {
  const [categories] = useState([
    {
      name: 'About Me',
      description: 'Photos of grocery stores, food trucks, and other commercial projects',
    },
    { name: 'Portfolios', description: 'Portraits of people in my life' },
    { name: 'Contact', description: 'Delicious delicacies' },
    { name: 'Resume', description: 'Fields, farmhouses, waterfalls, and the beauty of nature' },
  ]);
  const [currentCategory, setCurrentCategory] = useState(categories[0]);

  function renderSwitch(param) {
    console.log(param);
    switch (param) {
      case "About Me":
        return <About></About>;
      case "Portfolios":
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
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
      ></Nav>
      <main>
        <div>
          {renderSwitch(currentCategory.name)}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;