import logo from './img/circular.jpg';
import styles from './App.module.css';
import NavBar from './Components/navBar/navbar';
import About from './Components/About/About';
import Skills from './Components/Skills/Skills';
import Education from './Components/Education/Education';
import Employment from './Components/Employment/Employment';
import Contact from './Components/Contact/Contact';
import Textra from 'react-textra';
import Proyects from './Components/Proyects/Proyects';

const data1 = [
  'Cristian Wenz'
];
const data2 = [
  'Full Stack Developer'
];

function App() {
  return (
    <div className={styles.ContainerApp}>
      <div className={styles.AppHeader}>
        {/* <NavBar /> */}
        <div className={styles.header}>
          <div className={styles.headerShadow}/>
          <div className={styles.headerContent}>
            <img src={logo} className={styles.AppImage} alt="foto" /><br/>
            <h1 className={styles.h1Name}> Cristian Wenz</h1>
            
            <Textra effect='flip' stopDuration={5000} data={data2} />
            {/* <span>Full Stack Developer</span> */}
          </div>
        </div>
        <About />
        <Proyects />
        <Skills />
        <Education />
        <Employment />
        <Contact />
      </div>
    </div>
  );
}

export default App;
