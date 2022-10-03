import React from 'react'
import S from './Home.module.css'
import Perfil from'../../assets/img/fotodeperfil.png'
import Curriculo from '../../assets/img/curriculo.png'



const Home = () => {
  return (
    <div className={S.container} id='About'>
    <div className={S.welcome}>
     <p></p>
    </div>
    <div className={S.sobre1}>
        <img className={S.fotoPerfil} src={Perfil} alt="" srcset="" />
        </div>
        <div className={S.sobre2}>
        <h2 className={S.texto}>hahahahahahaha</h2>
    </div>
    <section className={S.download}>
        
        <button className={S.baixar}><a className={S.baixars} href="https://i.ibb.co/DRnKtpJ/CV-Vin-cius-Mocelin-tech-2.jpg">Ver Currículo</a></button>
        <img className={S.icon} src={Curriculo} alt="" />
    </section>
    </div>
  )
}

export default Home