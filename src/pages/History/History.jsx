import './History.css'
import Team from '../../assets/img/fotoequipe1.png';
import { Link } from 'react-scroll';

const History = () => {
  return (
    <div>
      <section className="history">
            <div className="history-line"></div>
            <div id="history">
                <h4>Conheça um pouco da</h4>
                <h2>Nossa história</h2>
                <p>A Prime Gráfica foi fundada em 13 de outubro de 2015 por Renan Rufino, com foco no mercado local e regional, especialmente em Regente Feijó. A empresa atua no setor gráfico, explorando um nicho em constante evolução. Além disso, oferece brindes e possui um catálogo de produtos criativos e inovadores. A presença online tem se tornado cada vez mais relevante. Atualmente, a Prime Gráfica atua no setor gráfico e digital em todo o território nacional, com oito anos de história e reconhecimento na região. A empresa possui uma visão ambiciosa e determinação para alcançar novos horizontes.</p>
                <button className="btn"><Link to='contact' smooth={true}>Entrar em Contato</Link></button>
            </div>
            <div className="border"></div>
            <img src={Team} alt="Foto da equipe" />
        </section>
    </div>
  )
}

export default History
