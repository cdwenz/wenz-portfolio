import styles from './Education.module.css';
import logoHenry from '../../img/LogoHenry.jpg';
import logoSiglo21 from '../../img/siglo21.jpg';
import logoEpet14 from '../../img/EPET14.jpg';
import logoIcono from '../../img/icono.jpg';

export default function Education(){
    
    return(
        <div id="EDUCACION" className={styles.Education}>        
            <h2>EDUCACIÓN</h2>
            <div className={styles.cardEd}>
                <img src={logoHenry} alt=""></img>
                <div className={styles.detailEd}>
                    
                    <span><b>FULL STACK WEB DEVELOPER</b> </span>
                    <span>Henry Bootcamp - 2021</span>
                    <span>Bootcamp intensivo de +800hs</span>
                    
                </div>
            </div>
            <div className={styles.cardEd}>
                <img src={logoSiglo21} alt=""></img>
                <div className={styles.detailEd}>
                    
                    <span><b>LICENCIATURA EN INFORMATICA</b> </span>
                    <span>SIGLO XXI  -  Cursando </span>
                    
                </div>
            </div>
            <div className={styles.cardEd}>
                <img src={logoEpet14} alt=""></img>
                <div className={styles.detailEd}>
                    
                    <span><b>TECNICO EN ELECTRONICA</b> </span>
                    <span>EPET 14 - 2000 al 2005</span>
                    <span>Orientación a Telecomunicaciones</span>
                    
                </div>
            </div>
            <div className={styles.cardEd}>
                <img src={logoIcono} alt=""></img>
                <div className={styles.detailEd}>
                    
                    <span><b>TECNICO EN REPARACION DE PC Y REDES DE DATOS</b> </span>
                    <span>ICONO | IFES - 2006</span>
                    
                </div>
            </div>
        </div>
    )
}