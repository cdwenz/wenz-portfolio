import styles from "./proyects.module.css";
import huellitas from "../../img/huellitas.png";
import PI from "../../img/PI.png";
import weather from "../../img/weather.png";
import React from 'react';
import { AiFillGithub } from "react-icons/ai";
import { IoGlobe } from "react-icons/io5";


export default function Proyects() {
  return (
    <div id="PROYECTOS" className={styles.containerProyects}>
      <h2 className={styles.title}>PROYECTOS</h2>
        <div className={styles.contentProyects}>
        <div className={styles.grid}>
					<a href="https://huellitas.vercel.app/home" target="_blank"><figure className={styles.effectzoe}>
						<img src={huellitas} alt="img25"/>
						<figcaption>
							<h2>Huellitas <span>PG</span></h2>
							<p className={styles.iconlinks}>
                <a href="https://github.com/Martintribuzio/huellitas-pg" target="_blank"><AiFillGithub /></a>
								<a href="https://huellitas.vercel.app/home" target="_blank"><IoGlobe /></a>
							</p>
							<p className={styles.description}>App/Red social para publicar animales perdidos o en adopcion <br/> Typescript | React/Redux | Material UI | Mongoose | WebSocket | Passport | Nodemailer | MongoDB</p>
						</figcaption>		
					</figure>	</a>
					<a href="https://github.com/cdwenz/PI-food" target="_blank"><figure className={styles.effectzoe}>
						<img src={PI} alt="img25"/>
						<figcaption>
							<h2>Food <span>PI</span></h2>
							<p className={styles.iconlinks}>
								<a href="https://github.com/cdwenz/PI-food" target="_blank"><AiFillGithub /></a>
								<a href="https://wenz-pi-food.vercel.app/" target="_blank"><IoGlobe /></a>
							</p>
							<p className={styles.description}>Web para busqueda y creacion de Recetas de cocina. <br/> Javascript | React | Redux | postgreSql + API externa</p>
						</figcaption>			
					</figure></a>
					<a href="https://github.com/cdwenz/Wenz-Weather"  target="_blank"><figure className={styles.effectzoe}>
						<img src={weather} alt="img25"/>
						<figcaption>
							<h2>Weather <span>APP</span></h2>
							<p className={styles.iconlinks}>
                <a href="https://github.com/cdwenz/Wenz-Weather"  target="_blank"><AiFillGithub /></a>
								<a href="https://wenz-weather.herokuapp.com/" target="_blank"><IoGlobe /></a>
							</p>
							<p className={styles.description}>App para visualizar clima en tiempo real. <br/> Javascript | React | HTML/CSS | API externa</p>
						</figcaption>			
					</figure></a>
				</div>
            </div>
    </div>
  );
}
