import styles from './employment.module.css';
import * as React from 'react';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import uno from '../../img/1.png';

const bull = (
    <Box
      component="span"
      sx={{ display: 'inline-block', mx: '2px', transform: 'scale(0.8)' }}
    >
      •
    </Box>
  );
export default function Employment() {
   
 return(
        <div id="EXPERIENCIA" className={styles.Experiencia}>
            <h2>EXPERIENCIA</h2>    <br/>
            <div className={styles.cardExp}>
                <img src={""} alt=""></img>
                <div className={styles.detailEd}>
                    <div >
                    <Card className={styles.card} sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        2019 - Act
                        </Typography>
                        <Typography variant="h5" component="div">
                        MC{bull}Juguetes Didacticos
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Emprendimiento familiar <br />
                        </Typography>
                        <Typography variant="body2">
                        Juguetes didacticos de madera<br /> Basados en método Montessori
                        </Typography>
                    </CardContent>
                    </Card> 
                    </div>
                    <div>
                    <Card className={styles.card} sx={{ minWidth: 275 }}>
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        2015 - Act
                        </Typography>
                        <Typography variant="h5" component="div">
                        Soporte IT{bull}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        HelpDesk
                        </Typography>
                        <Typography variant="body2">
                        Emprendimiento personal <br />
                        Soporte de Sistemas Informaticos
                        </Typography>
                    </CardContent>
                    </Card> 
                    </div>
                    <div>
                    <Card className={styles.card} sx={{ minWidth: 275 }}> 
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        2012 - 2014
                        </Typography>
                        <Typography variant="h5" component="div">
                        YPF{bull}s.a
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Company Man
                        </Typography>
                        <Typography variant="body2">
                        Supervisor de pozo in-situ <br />
                         Terminación y WorkOver
                        </Typography>
                    </CardContent>
                    </Card>
                    </div>
                    <div>
                    <Card className={styles.card} sx={{ minWidth: 275 }}> 
                    <CardContent>
                        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                        2008 - 2010
                        </Typography>
                        <Typography variant="h5" component="div">
                        Consejo Provincial de Educación{bull}
                        </Typography>
                        <Typography sx={{ mb: 1.5 }} color="text.secondary">
                        Admin Server - HelpDesk
                        </Typography>
                        <Typography variant="body2">
                        Administración de servidores <br/> Coordinación de distritos <br />
                        </Typography>
                    </CardContent>
                    </Card>
                    </div>
                </div>
                
            </div>
        </div>
 )
}