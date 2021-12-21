import React, { useState } from "react";
import {
  Container,
  LogoContainer,
  Wrapper,
  Menu,
  MenuItem,
  MenuItemLink,
  MobileIcon,
} from "./Narbar.elements";
import { CgProfile } from 'react-icons/cg';
import { GiSkills } from 'react-icons/gi';
import { MdOutlineWorkOutline } from 'react-icons/md';
import { VscFolderActive } from 'react-icons/vsc';
import { AiFillGithub, AiFillLinkedin, AiOutlineMail } from 'react-icons/ai';
import {
  FaWeebly,
  FaBars,
  FaTimes,
  FaHome,
  FaUserAlt,
  FaBriefcase,
  FaGlasses,
  FaUserGraduate,
} from "react-icons/fa";
import { IconContext } from "react-icons";

const Navbar = () => {
  const [showMobileMenu, setShowMobileMenu] = useState(false);
  const [scroll, setScroll] = useState(false);
  window.addEventListener('scroll', function () {
            if (window.pageYOffset > 20) {
              setScroll(true);
            } else {
              setScroll(false);
              }
        });
  return (
    <Container colorScroll={scroll}>
      <Wrapper>
        <IconContext.Provider value={{ style: { fontSize: "2em" } }}>
          <LogoContainer>
            <FaWeebly />
            <span>Portfolio.</span>
            {/* <p>F(X)</p> */}
          </LogoContainer>

          <MobileIcon onClick={() => setShowMobileMenu(!showMobileMenu)}>
            {showMobileMenu ? <FaTimes /> : <FaBars />}
          </MobileIcon>

          <Menu open={showMobileMenu}>
            <MenuItem>
              <MenuItemLink href="#" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaHome />
                  HOME
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink href="#SOBRE MI" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaUserAlt />
                  SOBRE MI
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink href="#PROYECTOS" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <VscFolderActive />
                  PROYECTOS
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink href="#SKILLS" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <GiSkills />
                  SKILLS
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink href="#EXPERIENCIA" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaBriefcase />
                  EXPERIENCIA
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink href="#EDUCACION" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <FaUserGraduate />
                  EDUCACION
                </div>
              </MenuItemLink>
            </MenuItem>
            <MenuItem>
              <MenuItemLink href="#CONTACTO" onClick={() => setShowMobileMenu(!showMobileMenu)}>
                <div>
                  <AiOutlineMail />
                  CONTACT ME
                </div>
              </MenuItemLink>
            </MenuItem>
          </Menu>
        </IconContext.Provider>
      </Wrapper>
    </Container>
  );
};

export default Navbar;



// import './navBar.css';
// import logo from '../../img/sinfondo.png';
// export default function NavBar() {
//     var nav = document.querySelector('nav');

//     window.addEventListener('scroll', function () {
//         if (window.pageYOffset > 20) {
//             document.querySelector('nav').classList.remove('navbar-light');
//             document.querySelector('nav').classList.add('bg-dark', 'shadow', 'nav-link');
//             document.querySelector('#nav1').style.color = '#85dbd9';
//             document.querySelector('#nav2').style.color = '#85dbd9';
//             document.querySelector('#nav3').style.color = '#85dbd9';
//             document.querySelector('#nav4').style.color = '#85dbd9';
//             document.querySelector('#nav5').style.color = '#85dbd9';
//             document.querySelector('#nav6').style.color = '#85dbd9';
            
//         } else {
//             document.querySelector('nav').classList.remove('bg-dark', 'shadow');
//             document.querySelector('nav').classList.add('navbar-light');
//             document.querySelector('#nav1').style.color = 'white';
//             document.querySelector('#nav2').style.color = 'white';
//             document.querySelector('#nav3').style.color = 'white';
//             document.querySelector('#nav4').style.color = 'white';
//             document.querySelector('#nav5').style.color = 'white';
//             document.querySelector('#nav6').style.color = 'white';
//           }
//     });
//     return (
//         <nav class="navbar fixed-top navbar-expand-lg navbar-light">
//   <div class="container-fluid">
//     <a class="navbar-brand" href="#" style={{color:'#85dbd9', height:'45px'}}><img src={logo}/></a>
//     <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
//       <span class="navbar-toggler-icon"></span>
//     </button>
//     <div class="collapse navbar-collapse" style={{flex:'none'}}id="navbarNav">
//       <ul class="navbar-nav" >
//         <li class="nav-item">
//           <a id="nav1" class="nav-link active" style={{color:'white'}}  aria-current="page" href="#SOBRE MI">Sobre mí</a>
//         </li>
//         <li class="nav-item">
//           <a id="nav2" class="nav-link" style={{color:'white'}} href="#SKILLS">Skills</a>
//         </li>
//         <li class="nav-item">
//           <a id="nav3" class="nav-link" style={{color:'white'}} href="#EDUCACION">Educación</a>
//         </li>
//         <li class="nav-item">
//           <a id="nav4" class="nav-link" style={{color:'white'}} href="#EXPERIENCIA">Experiencia</a>
//         </li>
//         <li class="nav-item">
//           <a id="nav5" class="nav-link" style={{color:'white'}} href="#PROYECTOS">Proyectos</a>
//         </li>
//         <li class="nav-item">
//           <a id="nav6" class="nav-link" style={{color:'white'}} href="#CONTACTO">Contacto</a>
//         </li>
//       </ul>
//     </div>
//   </div>
// </nav>
//     )
// }