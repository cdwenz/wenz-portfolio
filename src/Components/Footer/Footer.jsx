import React from 'react';
import styles from './footer.module.css'
import { AiFillGithub, AiFillLinkedin } from 'react-icons/ai';
import { GrTwitter } from 'react-icons/gr';

export default function Footer() {
    return (
        <div className={styles.bottomPrimary}>
   <div className={styles.social}>
  <a href="https://www.linkedin.com/in/cristian-wenz-dev/" 
    target="_blank" rel="noreferrer">
      <AiFillLinkedin className={styles.iconBottom}/> 
  </a>
  <a href="https://github.com/cdwenz" 
    target="_blank" rel="noreferrer">
      <AiFillGithub className={styles.iconBottom}/>
  </a>
  <a href="https://twitter.com/cdwenz" 
    target="_blank" rel="noreferrer">
      <GrTwitter className={styles.iconBottom}/>
  </a>
  </div>
  <div className={styles.copyr}>
  ©2021 - Portfolio Cristian Wenz
  </div>
</div>
    )
}

