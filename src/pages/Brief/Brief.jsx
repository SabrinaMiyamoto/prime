import './Brief.css';
import { Link } from 'react-scroll';

const Brief = () => {
  return (
    <div>
       <section className="brief">
            <h2>Depoimentos</h2>
            <p>Confira os depoimentos dos nossos clientes</p>
            <div className="cards-brief">
                <div className="card">
                    <h5>Carolina Mussoline - Assessora de Marketing Sicredi Rio Paraná</h5>
                    <p>Sempre busco fornecedores que estejam de acordo com o ESG, pois é importante pensar na sustentabilidade não só no nosso negócio, mas na comunidade como um todo. Por isso que eu sempre procuro a Prime</p>
                </div>
                <div className="card">
                    <h5>Dayane Lozzi - Administradora da Distr. Lozzi</h5>
                    <p>Empresa muito séria com preço super justo, tanto a parte da loja como os serviços gráficos. Sempre foram pontuais na entrega com muita qualidade e eficiência.</p>
                </div>
                <div className="card">
                    <h5>Valéria Colnago - Administradora Conal Supercenter</h5>
                    <p>Quero atestar a seriedade e profissionalismo da Gráfica Prime. Sempre que precisamos fazer alguma impressão, calendários, tags, nos surpreende na qualidade, atendimento, preço justo e entrega no prazo combinado. Nós recomendamos a Gráfica Prime.</p>
                </div>
                <div className="card">
                    <h5>Rita Guimarães - Sicoob CrediVale</h5>
                    <p>Excelente atendimento, sempre muito prestativos, agilidade e pontualidade na entrega, além da qualidade excepcional dos materiais!!!</p>
                </div>
            </div>
            <button className="btn"><Link to='contact' smooth={true}>Entrar em Contato</Link></button>
        </section>
        <section className='whatsapp'>
            <title>Compre pelo whatsapp e receba em qualquer região!</title>
            <button className="btn"><Link to='contact' smooth={true}>Entrar em Contato</Link></button>
        </section>
    </div>
  )
}

export default Brief
