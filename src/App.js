import React, { useState } from 'react';
import './App.css';
import About from './components/About';
import Footer from './components/Footer';
import Nav from './components/Nav';

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
  // const [contactSelected, setContactSelected] = useState(false);
  return (
    <div>
      <Nav
        categories={categories}
        setCurrentCategory={setCurrentCategory}
        currentCategory={currentCategory}
        // contactSelected={contactSelected}
        // setContactSelected={setContactSelected}
      ></Nav>
      <main>
        <div>
          <About></About>
          {/* {!contactSelected ? (
            <>
              <Gallery currentCategory={currentCategory}></Gallery> */}

          {/* </>
          ) : (
            <ContactForm></ContactForm>
          )} */}
        </div>
      </main>
      <Footer></Footer>
    </div>
  );
}

export default App;