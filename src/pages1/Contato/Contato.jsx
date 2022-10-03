import React from 'react'
import S from './Contato.module.css'
import TitCo from '../../assets/img/5.png'

const Contato = () => {
  return (
    <div className={S.contContato} id='Contact'>
       <div className={S.titCo}>
        <img className={S.cont} src={TitCo} alt="" />
      </div>
    </div>
  )
}

export default Contato