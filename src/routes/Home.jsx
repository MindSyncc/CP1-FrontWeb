import '../css/Home.css'
import flecha from './../assets/flecha.svg'

const Home = () => {
    return(
        <div className="hero container">
            <div className="hero-text">
                <h1>Encontre os melhores produtos fitness aqui!</h1>
                <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit.
                Voluptatibus neque corrupti debitis autem sint praesentium! Aut similique
                quod autem itaque soluta quisquam, esse ut ipsum explicabo magni mollitia, cum magnam.</p>
                <button className='btn'>Veja os produtos <img src={flecha} alt=""/></button>
            </div>
        </div>
    )
}


export default Home