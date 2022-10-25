import React, { useState } from 'react';
import './App.css';
import About from './components/About';

function App() {
  return (
    <div>
      {/* <Nav>
      </Nav> */}
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
    </div>
  );
}

export default App;