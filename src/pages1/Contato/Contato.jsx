import React from 'react'
import S from './Contato.module.css'
import TitCo from '../../assets/img/5.png'
import Whats from '../../assets/img/whats.png'
import Face from '../../assets/img/face.png'
import Git from '../../assets/img/git.png'
import Insta from '../../assets/img/insta.png'
import Email from '../../assets/img/gmail.png'

const Contato = () => {
  return (
    <div className={S.contContato} id='Contact'>
       <div className={S.titCo}>
        <img className={S.cont} src={TitCo} alt="" />
      </div>
      <div className={S.descricao}>
      <div className={S.bloco1}>
        <img className={S.contIcon} src={Whats} alt="" />
        <img className={S.contIcon} src={Face} alt="" />
        <img className={S.contIcon} src={Git} alt="" />
        <img className={S.contIcon} src={Insta} alt="" />
        <img className={S.contIcon} src={Email} alt="" />
      </div>
      </div>
    </div>
  )
}

export default Contato