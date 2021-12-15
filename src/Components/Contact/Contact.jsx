import styles from './Contact.module.css';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';

export default function Contact (){
    return (
        <div id="CONTACTO" className={styles.Contact}> 
            <h2>CONTACTO</h2><p/>
            <form action="https://formsubmit.co/cdwenz@gmail.com" method="POST">
                <div class="mb-3">
                    <input type="text" name="name" placeholder='Nombre' class="form-control" required />
                </div>
                <div class="mb-3">
                    <input type="email" name="email" placeholder='email' class="form-control" required />
                </div>
                <div class="mb-3">
                    <textarea type="text" name="text" placeholder='Mensaje' class="form-control" required />
                </div>
                <button type="submit" class="btn btn-primary form-control">Enviar</button>
            </form>
            
            <span><AiFillLinkedin /> <a href="https://www.linkedin.com/in/cristian-wenz-dev" target="_blank" >Linkedin</a></span>
        </div>
    )
}