import React from 'react'
import S from './Biologia.module.css'
import { ReactDOM } from 'react';
import Carrossel from '../../components/Carrossel/Carrossel';
import TitBio from '../../assets/img/1.png'

const Biologia = () => {
  return (
    <div className={S.contBiologia} id='Biology'>
      <div className={S.titBio}>
        <img className={S.biobio} src={TitBio} alt="" />
      </div>
        <div className={S.infoBio}>
            <div className={S.textoBio}></div>
        </div>
        <div className={S.carousel}>
        <Carrossel />
        </div>
    </div>

  )
}

export default Biologia