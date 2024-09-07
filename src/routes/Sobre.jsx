import React from 'react';
import '../css/Sobre.css'; // Importa os estilos para a página de contato
import sobre_imagem from './../assets/sobre_imagem.jpg'


const Sobre=()=>{
    return (
        <>
            <div className="sobre">
                <img src={sobre_imagem} alt="Sobre imagem" />
                <div className="sobre-texto">
                    <h1>Bem-vindo ao Power Sports – Seu Portal Definitivo para Esportes!</h1>
                    <p>No Power Sports, nossa missão é trazer a você tudo o que você precisa saber sobre o mundo dos esportes, em um só lugar. Seja você um fã ávido, um atleta em treinamento ou apenas alguém interessado em se manter atualizado com as últimas notícias, temos algo especial para oferecer a todos.</p>
                    <h2>Notícias e Atualizações</h2>
                    <p>Mantenha-se informado com as notícias mais recentes do mundo dos esportes. Nossa equipe de jornalistas e especialistas cobre uma ampla gama de esportes, desde futebol, basquete e vôlei até esportes menos convencionais. Não importa o seu interesse, garantimos que você tenha acesso às análises mais profundas e às atualizações mais recentes.</p>
                    <h2>Cobertura ao Vivo</h2>
                    <p>Experimente a emoção de estar no meio da ação com nossa cobertura ao vivo e em tempo real. Acompanhe os jogos, torneios e eventos mais importantes com nossos comentários ao vivo, estatísticas atualizadas e destaques instantâneos.</p>
                    <h2>Análises e Comentários</h2>
                    <p>Nossos especialistas oferecem análises detalhadas, comentários perspicazes e previsões precisas para ajudá-lo a entender o que está por trás das manchetes e quais são as tendências emergentes no mundo dos esportes. Mergulhe fundo em nossas análises para ganhar uma nova perspectiva sobre o seu esporte favorito.</p>
                    <h2>Recursos Interativos</h2>
                    <p>Engaje-se com nossa comunidade de fãs de esportes através de fóruns de discussão, enquetes e quizzes interativos. Compartilhe suas opiniões, participe de debates e conecte-se com outros entusiastas para discutir o que há de mais quente no mundo dos esportes.</p>
                    <h2>Guias e Dicas</h2>
                    <p>Para atletas e aspirantes, oferecemos uma rica biblioteca de guias e dicas para aprimorar suas habilidades e maximizar seu desempenho. Desde planos de treino e nutrição até técnicas e estratégias, nossos recursos são projetados para ajudar você a alcançar seus objetivos esportivos.</p>
                    <h2>Entre em Contato</h2>
                    <p>
                        Tem alguma pergunta, sugestão ou gostaria de contribuir com nosso site? Entre em contato conosco através de nosso formulário online, redes sociais ou por e-mail. Adoramos ouvir nossos leitores e estamos sempre abertos a novas ideias e colaborações.
                        No Power Sports, estamos dedicados a fornecer uma experiência completa e enriquecedora para todos os amantes de esportes. Navegue pelo nosso site, explore nossos conteúdos e mantenha-se sempre atualizado com as últimas novidades do universo esportivo!
                    </p>
                </div>


            </div>
        </>
    )
}
export default Sobre