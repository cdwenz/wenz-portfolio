import styles from './About.module.css';
import photo from '../../img/photo.jpg'; 
import CV from '../../img/CV-CristianWenz.pdf';
import Button from '@mui/material/Button';
import DownloadIcon from '@mui/icons-material/Download';

export default function About(){
    return (
        <div id="SOBRE MI" className={styles.containerAbout}>
                <h2>SOBRE MI</h2>
                <div className={styles.About}>
            <div className={styles.section}>
                <div className={styles.text}><p/>
                    <span>Soy un apasionado de la tecnología y de su aplicación para superar desafíos ayudando a otras personas a simplificar su vida. Es por eso que uniendo mis bases en electrónica, experiencia en redes y  helpdesk, sumado al mundo de la programación, hacen de mi trabajo, un placer.
                        Soy observador, con gran capacidad de resolución de problemas y siempre dispuesto a aprender. Con experiencia en trabajo en equipo, liderando y acompañando.
                    </span>
                    <p/>
                    <div>
                        <div className={styles.datos}>
                            <div>
                                <ul>
                                    <li><b>Nombre:</b> Cristian Wenz</li>
                                    <li><b>Titulo:</b> Full Stack Web Developer</li>
                                    <li><b>Disponibilidad:</b> Inmediata</li>
                                    <li><b>Preferencia:</b> Remoto</li>
                                </ul>
                            </div>
                            <div>
                                    <a href={CV} download="CV-CristianWenz.pdf"><span>Download</span><span>PDF</span></a>
                                    
                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
            <div className={styles.photo}> 
                <img src={photo} alt="https://i.imgur.com/XQ9xQ8l.jpg"/>
            </div>
            <div className={styles.phrase}><p/>"Por muy alta que sea una montaña, siempre hay un camino hacia la cima."
            </div >
            </div>
        </div>
    )
}