import Prime from '../../assets/img/prime.png';
import './Welcome.css';
import { Link } from 'react-scroll';

const Welcome = () => {
  return (
    <div>
        <section className="container">
            <div id="container">
            <img src={Prime} alt="um triângulo vazado, com a escrita prime gráfica e Web" />
            <div className="vertical-line"></div>
            <div className="text">
                <h1>Seja Bem-vindo!</h1>
                <p>Inovação, qualidade e excêlencia:</p>
                <p>Entre, fique a vontade, a casa é sua!</p>
            </div>
            </div>
            <button className="btn"><Link to='contact' smooth={true}>Entrar em Contato</Link></button>
        </section>
    </div>
  )
}

export default Welcome
