import styles from './skills.module.css';
import {SiChai, SiCss3, SiHtml5, SiJavascript, SiLess, SiMocha, SiPostgresql, SiReact, SiRedux, SiSequelize} from 'react-icons/si';
import {BsHexagonFill} from 'react-icons/bs';
import {GrNode} from 'react-icons/gr'

export default function Skills(){
    return(
        <div id="SKILLS" className={styles.containerSkill}>
            <h2>SKILLS</h2>
            <div className={styles.skills}>
                <div className={styles.skillTech}>
                    <h3>Tecnologías</h3>
                    <div className={styles.skills}>
                        <ul>
                            <li><SiJavascript className={styles.icono}/> Javascript</li>
                            <li><SiHtml5 className={styles.icono}/> HTML</li>
                            <li><SiCss3 className={styles.icono}/> CSS</li>
                            <li><GrNode className={styles.icono}/> Node.js</li>
                            <li><SiPostgresql className={styles.icono}/> PostgreSql</li>
                            <li><SiReact className={styles.icono}/> React</li>
                        </ul>
                        <ul>
                            <li><SiRedux className={styles.icono}/> Redux</li>
                            <li><BsHexagonFill className={styles.icono}/> Express.js</li>
                            <li><SiSequelize className={styles.icono}/> Sequelize</li>
                            <li><SiLess className={styles.icono}/> LESS</li>
                            <li><SiMocha className={styles.icono}/> Mocha</li>
                            <li><SiChai className={styles.icono}/> Chai.js</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.softSkills}>
                    <h3>Habilidades</h3>
                    <div className={styles.skills}>
                    <ul>
                        <li><span>Curiosidad</span></li>
                        <li><span>Empatía</span></li>
                        <li><span>Liderazgo</span></li>
                        <li><span>Aprendizaje constante</span></li>
                        <li><span>Inteligencia Emocional</span></li>
                        <li><span>Versatilidad</span></li>
                    </ul>
                    <ul>
                        <li><span>Compromiso</span></li>
                        <li><span>Iniciativa</span></li>
                        <li><span>Autodidacta</span></li>
                        <li><span>Pensamiento crítico</span></li>
                        <li><span>Determinación</span></li>
                    </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}