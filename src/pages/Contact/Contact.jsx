import './Contact.css'


const Contact = () => {


    const handleAlert = () =>{

        alert('Sua mensagem foi enviada, nossos vendedores entrarão em contato o mais breve possivel')
    }

  return (
    <div>
        <section className="contact">
            <div id="contact">
                <h2>Contato</h2>
                <h5>LOCALIZAÇÃO</h5>
                <p>Av. Brigadeiro Tobias, 162 - Cetro</p>
                <p>Regente Feijó</p>
                <h5>CONTATO</h5>
                <p>grafiaprimeatende@gmail.com</p>
                <p>18 99778-1218</p>
            </div>
            <form className='form' action="https://formsubmit.co/a5606686ceca67cd696d82189f932a23" method='POST'>
                <h4>Peça já o seu orçamento!</h4>
                <input className='name' type="text" name='name' placeholder='Seu nome' required/>  
                <div className="half">
                <input className='email' type="email" name='email' placeholder='E-mail' required/>
                <input type="number" name='phone' placeholder='Telefone' required/>
                    </div>              
                <textarea name='message' rows='4' cols='30' required placeholder='Mensagem'></textarea>
                <button className='btn'type='submit' onClick={handleAlert}>Enviar</button>
                           <input type="hidden" name="_captcha" value="false"></input>
                    <input type="hidden" name='_next'  value='http://localhost:5173/'/>
            </form>
        </section>
    </div>
  )
}

export default Contact
