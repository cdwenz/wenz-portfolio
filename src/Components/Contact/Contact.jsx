import styles from './Contact.module.css';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function Contact (){
    return (
        <div id="CONTACTO" className={styles.Contact}> 
        <Box
            component="form"
            sx={{
                '& .MuiTextField-root': { m: 1, width: '25ch' },
            }}
            noValidate
            autoComplete="off"
        >
      <div>
        <TextField
          required
          id="outlined-required"
          label="Required"
          defaultValue="Hello World"
        />
        <TextField
          id="outlined-password-input"
          label="Password"
          type="password"
          autoComplete="current-password"
        />
        <TextField
          id="outlined-read-only-input"
          label="Read Only"
          defaultValue="Hello World"
          InputProps={{
            readOnly: true,
          }}
        />
        <TextField
          id="outlined-number"
          label="Number"
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
        />
        <TextField id="outlined-search" label="Search field" type="search" />
        <TextField
          id="outlined-textarea"
          label="Mensaje"
          placeholder="Placeholder"
          multiline
        />
      </div>
    </Box>
    </div>
        // <div id="CONTACTO" className={styles.Contact}> 
        //     <h2>CONTACTO</h2><p/>
        //     <form action="https://formsubmit.co/cdwenz@gmail.com" method="POST">
        //         <div class="mb-3">
        //             <input type="text" name="name" placeholder='Nombre' class="form-control" required />
        //         </div>
        //         <div class="mb-3">
        //             <input type="email" name="email" placeholder='email' class="form-control" required />
        //         </div>
        //         <div class="mb-3">
        //             <textarea type="text" name="text" placeholder='Mensaje' class="form-control" required />
        //         </div>
        //         <button type="submit" class="btn btn-primary form-control">Enviar</button>
        //     </form>
            
        //     <span><AiFillLinkedin /> <a href="https://www.linkedin.com/in/cristian-wenz-dev" target="_blank" >Linkedin</a></span>
        // </div>
    )
}