import './navBar.css';
import logo from '../../img/sinfondo.png';
export default function NavBar() {
    var nav = document.querySelector('nav');

    window.addEventListener('scroll', function () {
        if (window.pageYOffset > 20) {
            document.querySelector('nav').classList.remove('navbar-light');
            document.querySelector('nav').classList.add('bg-dark', 'shadow', 'nav-link');
            document.querySelector('#nav1').style.color = '#85dbd9';
            document.querySelector('#nav2').style.color = '#85dbd9';
            document.querySelector('#nav3').style.color = '#85dbd9';
            document.querySelector('#nav4').style.color = '#85dbd9';
            document.querySelector('#nav5').style.color = '#85dbd9';
            document.querySelector('#nav6').style.color = '#85dbd9';
            
        } else {
            document.querySelector('nav').classList.remove('bg-dark', 'shadow');
            document.querySelector('nav').classList.add('navbar-light');
            document.querySelector('#nav1').style.color = 'white';
            document.querySelector('#nav2').style.color = 'white';
            document.querySelector('#nav3').style.color = 'white';
            document.querySelector('#nav4').style.color = 'white';
            document.querySelector('#nav5').style.color = 'white';
            document.querySelector('#nav6').style.color = 'white';
          }
    });
    return (
        <nav class="navbar fixed-top navbar-expand-lg navbar-light">
  <div class="container-fluid">
    <a class="navbar-brand" href="#" style={{color:'#85dbd9'}}><img src={logo}/></a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" style={{flex:'none'}}id="navbarNav">
      <ul class="navbar-nav" >
        <li class="nav-item">
          <a id="nav1" class="nav-link active" style={{color:'white'}}  aria-current="page" href="#SOBRE MI">Sobre mí</a>
        </li>
        <li class="nav-item">
          <a id="nav2" class="nav-link" style={{color:'white'}} href="#SKILLS">Skills</a>
        </li>
        <li class="nav-item">
          <a id="nav3" class="nav-link" style={{color:'white'}} href="#EDUCACION">Educación</a>
        </li>
        <li class="nav-item">
          <a id="nav4" class="nav-link" style={{color:'white'}} href="#EXPERIENCIA">Experiencia</a>
        </li>
        <li class="nav-item">
          <a id="nav5" class="nav-link" style={{color:'white'}} href="#">Portfolio</a>
        </li>
        <li class="nav-item">
          <a id="nav6" class="nav-link" style={{color:'white'}} href="#CONTACTO">Contacto</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
    )
}