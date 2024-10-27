import logo from './logo.svg';
import './App.css';
import Front from './Components/Front';
import Projects from './Components/Projects';
import About from './Components/About';
import Education from './Components/Education';
import Skills from './Components/Skills';
function App() {
  return (
    <div className="App">
      <Front/>
      <About/>
      <Projects/>
      <Education/>
      <Skills/>
    </div>
  );
}

export default App;
