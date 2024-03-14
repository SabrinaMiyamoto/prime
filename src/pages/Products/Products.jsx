import './Products.css'
import Instagram from '../../assets/img/instagram.png';
import { Link } from 'react-scroll';

const Products = () => {
  return (
   <div>
    <section className="products">
            <div id="products-container">
                <h2>Nossos Produtos</h2>
                <img src={Instagram} alt="Print da página do instagram da Prime Gráfica" />
                <div className="products-btn">
                    <button className="btn"><Link to='contact' smooth={true}>Entrar em Contato</Link></button>
                </div>
            </div>
        </section>
   </div>
  )
}

export default Products
