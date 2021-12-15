import styles from "./proyects.module.css";
import huellitas from "../../img/huellitas.png";
import PI from "../../img/PI.png";
import weather from "../../img/weather.png";
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

export default function Proyects() {
  return (
    <div id="PROYECTOS" className={styles.containerProyects}>
      <h2 className={styles.title}>PROYECTOS</h2>
        <div className={styles.contentProyects}>

    <Card className={styles.cardRoot}>
      <CardActionArea>
        <CardMedia
            style={{height: "200px"}}
            component="img"
            alt="Contemplative Reptile"
            image={huellitas}
            title="Contemplative Reptile"
            />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Huellitas
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            <a href="https://huellitas.vercel.app/home" target="_blank">Visitar sitio</a>
        </Button>
      </CardActions>
    </Card>
    <Card className={styles.cardRoot}>
      <CardActionArea>
        <CardMedia
            style={{height: "200px"}}
            component="img"
            alt="Contemplative Reptile"
            image={PI}
            title="Contemplative Reptile"
            />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Food-App
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
              Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents except Antarctica
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
            <a href="https://wenz-pi-food.vercel.app/" target="_blank">Visitar sitio</a>
        </Button>
      </CardActions>
    </Card>
    <Card className={styles.cardRoot}>
      <CardActionArea>
        <CardMedia
            style={{height: "200px"}}
            component="img"
            alt="Contemplative Reptile"
            image={weather}
            title="Contemplative Reptile"
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="h2">
            Weather
          </Typography>
          <Typography variant="body2" color="textSecondary" component="p">
            Lizards are a widespread group of squamate reptiles, with over 6,000 species, ranging
            across all continents 
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
        <Button size="small" color="primary">
        <a href="https://wenz-weather.herokuapp.com/" target="_blank">Visitar sitio</a>
        </Button>
      </CardActions>
    </Card>
            </div>
    </div>
  );
}
