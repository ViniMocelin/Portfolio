import React from 'react'
import S from './Biologia.module.css'
import { ReactDOM } from 'react';
import Carrossel from '../../components/Carrossel/Carrossel';
import TitBio from '../../assets/img/1.png'
import Ornitorrinco from '../../assets/img/ornitorrinco.png'
import UFPR from '../../assets/img/ufpr.png'

const Biologia = () => {
  return (
    <div className={S.contBiologia} id='Biology'>
      <div className={S.titBio}>
        <img className={S.biobio} src={TitBio} alt="" />
      </div>
        <div className={S.infoBio}>
            <div className={S.textoBio}>
              <h4 className={S.sobreBio1}>Biologia sempre foi uma opção de curso para mim, porém nunca havia sido a prioridade, tal decisão só foi ocorrer quando cheguei ao 2º ano do Magistério! Lá eu optei por seguir uma carreira de Biólogo, meu grande sonho era ser especialista em Ornitorrincos!</h4>
              <img className={S.imagem0} src={Ornitorrinco} alt="" />
              <h4 className={S.sobreBio2}>Entrei na UFPR no curso de Ciências Biológicas no ano de 2018. Lá descobri uma nova paixão, os fungos, que se tornaram os organismos mais interessantes para mim! Pretendo me formar no final do ano de 2023, se tudo der certo!</h4>
              <img className={S.imagem1} src={UFPR} alt="" />
            </div>

        </div>
        <div className={S.carousel}>
        <Carrossel />
        </div>
    </div>

  )
}

export default Biologia