import React from 'react'
import S from './Home.module.css'
import Perfil from'../../assets/img/fotodeperfil.png'
import Curriculo from '../../assets/img/curriculo.png'




const Home = () => {
  return (
    <div className={S.container} id='About'>
    <div className={S.welcome}>
    </div>
    <div className={S.sobre1}>
        <img className={S.fotoPerfil} src={Perfil} alt="" srcset="" />
        </div>
        <div className={S.sobre2}>
        <h4 className={S.texto}>Olá! Meu nome é Vinícius Mocelin, tenho 23 anos, sou professor, biólogo, programador, jogador de vôlei, ator e claramente alguém viciado em querer ser um pouco de tudo! Acredito que o nosso potencial só é despertado quando nos permitimos conhecer coisas novas e nos aventurar por caminhos desconhecidos! Como bom ariano que sou, sempre estou em busca de coisas que desafiem minhas capacidades, dito isso, tenho uma sede insaciável por conhecimento e sempre agarro oportunidades de aprender coisas novas. Recentemente fiz um curso de programação e iniciei um processo, árduo, de transição de carreira para a área de tecnologia e sigo na luta pela minha própria evolução profissional e também pessoal!</h4>
    </div>
    <section className={S.download}>
        
        <button className={S.baixar}><a className={S.baixars} href="https://i.ibb.co/DRnKtpJ/CV-Vin-cius-Mocelin-tech-2.jpg">Ver Currículo</a></button>
        <img className={S.icon} src={Curriculo} alt="" />
    </section>
    </div>
  )
}

export default Home