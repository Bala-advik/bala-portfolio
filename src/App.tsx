import * as React from 'react';
import './App.css';
import About from './components/About';
import Experience from './components/Experience';
import Skills from './components/Skills';
import NavBar from './components/NavBar';
import Contact from './components/Contact';

function App() {
  return (
    <div className="App">
      <main>
        <NavBar />
        <About />
        <Skills />
        <Experience />
        <Contact />
      </main>
    </div>
  );
}

export default App;
