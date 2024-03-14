import Prime from '../../assets/img/NOVA logo Prime.svg';
import './Welcome.css';
import { Link } from 'react-scroll';

const Welcome = () => {
  return (
    <div>
        <section className="container">
            <div id="container">
              <div>
                <img src={Prime} alt="um triângulo vazado, com a escrita prime gráfica e Web" />
                <h1 className="title-logo">PRIME</h1>
                <h2 className='subtitle-logo'>Gráfica & Web</h2>
              </div>
              <div className="vertical-line"></div>
              <div className="text">
                  <h1>Seja Bem-vindo!</h1>
                  <p>Inovação, qualidade e excêlencia:</p>
                  <p>Entre, fique a vontade, a casa é sua!</p>
              </div>
            </div>
        </section>
    </div>
  )
}

export default Welcome
