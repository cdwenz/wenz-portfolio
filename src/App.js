import logo from './img/circular.jpg';
import './App.css';
import NavBar from './Components/navBar/navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Employment from './Components/Employment/Employment';
import Contact from './Components/Contact/Contact';
import Textra from 'react-textra';

const data1 = [
  'Cristian Wenz'
];
const data2 = [
  'Full Stack Developer'
];

function App() {
  return (
    <div class="ContainerApp">
      <div class="App-header">
        <NavBar />
        <div class="header">
          <div class="header-shadow"/>
          <div class="header-content">
            <img src={logo} class="image" alt="foto" /><br/>
            <h1 class="h1-name"> Cristian Wenz</h1>
            
            <Textra effect='flip' stopDuration={5000} data={data2} />
            {/* <span>Full Stack Developer</span> */}
          </div>
        </div>
        <About />
        <Skills />
        <Education />
        <Employment />
        <Contact />
      </div>
    </div>
  );
}

export default App;
