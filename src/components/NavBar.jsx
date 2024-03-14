import Logo from '../assets/img/logo.png';
import { Link } from 'react-scroll';


const NavBar = () => {
  return (
      <nav>
        <img src={Logo} alt="o simbolo da empresa, um triângulo" />
        <ul>
            <li><Link to="welcome" smooth={true}>Início</Link></li>
            <li><Link to='services' smooth={true}>Serviços</Link></li>
            <li><Link to='contact' smooth={true}>Contato</Link></li>
        </ul>
    </nav>

  )
}

export default NavBar
