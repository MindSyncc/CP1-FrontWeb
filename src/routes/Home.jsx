import '../css/Home.css'
import flecha from './../assets/flecha.svg'

const Home = () => {
    return(
        <div className="hero container">
            <div className="hero-text">
                <h1>Encontre os melhores produtos esportivos aqui!</h1>
                <p>Oferecemos uma experiência única e enriquecedora para todos os entusiastas do esporte. Explore nosso site e descubra por que somos a escolha preferida para todos os apaixonados por esportes. Junte-se à nossa comunidade e leve sua prática esportiva para o próximo nível!</p>
                <button className='btn'>Veja os produtos <img src={flecha} alt=""/></button>
            </div>
        </div>
    )
}


export default Home