import './Services.css';
import { Link } from 'react-scroll';

const Services = () => {
  return (
    <div>
      <section className="services">
            <h2>Nossos Serviços</h2>
            <div className="cards-services">
                <div className="card">
                    <i className="fa-solid fa-pen-nib fa-rotate-90"></i>
                    <h5>Gráfica</h5>
                    <p>o cartão de visitas, até as pastas personalizadas. Tudo em produtos gráficos que você precisa para o seu dia a dia. Panfletos, cartazes, imãs, adesivos, blocos, talões calendários, cardápios, tags, convites, envelopes, e muito mais. Você encontrará tudo aqui na Prime.</p>
                </div>
                <div className="card">
                    <i className="fa-solid fa-star"></i>
                    <h5>Comunicação social</h5>
                    <p>Banners, faixas, adesivos em vinil, Wind banners, cavaletes e placas, são algumas das possibilidades que você vai encontrar aqui. A Comunicação Visual está em todo lugar, e em todo lugar, você pode contar com a Prime.</p>
                </div>
                <div className="card">
                    <i className="fa-solid fa-camera"></i>
                    <h5>Brindes</h5>
                    <p>Não tem quem não goste de ganhar um brinde.Canecas e copos de acrílico são os top 1 de vendas. Canecas de porcelana e xícaras, são perfeitos para marcar. Canetas, chaveiros, bloquinhos, capas de celular e uma infinidade de outros itens, são perfeitos para qualquer ocasião.</p>
                </div>
                <div className="card">
                    <i className="fa-brands fa-square-instagram"></i>
                    <h5>Web</h5>
                    <p>Nossos serviços de Web estão disponíveis para você através do Social Media e também da criação de sites. Quem não está na internet hoje, não é? Por isso oferecemos serviços personalizados, de acordo com o que a realidade pede. Da criação de artes, até o gerenciamento das mídias sociais.</p>
                </div>
            </div>
            <button className="btn"><Link to='contact' smooth={true}>Entrar em Contato</Link></button>
        </section>
        <section className="social-medias">
            
            <button className="btn"><Link to='contact' smooth={true}>Entrar em Contato</Link></button>
        </section>
    </div>
  )
}

export default Services
