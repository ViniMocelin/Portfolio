import React from 'react'
import S from './Educacao.module.css'
import BioNews from '../../assets/img/bionews.png'
import TitEd from '../../assets/img/2.png'

const Educacao = () => {
  return (
    <div className={S.contEducacao} id='Education'>
      <div className={S.titEd}>
        <img className={S.eded} src={TitEd} alt="" />
      </div>
      <div className={S.textEd}>

      </div>
      <div className={S.divCards}>
        <div className={S.card}>
          <img className={S.image} src={BioNews} alt="" />
          <h2 className={S.cardText}>

          </h2>
        </div>
          <div className={S.card2}>
          <img className={S.image} src={BioNews} alt="" />
          <h2 className={S.cardText}>

          </h2>
          </div>
          <div className={S.card3}>
          <img className={S.image} src={BioNews} alt="" />
          <h2 className={S.cardText}>

          </h2>
          </div>
          </div>
          <div className={S.divCards2}>
        <div className={S.card4}>
          <img className={S.image} src={BioNews} alt="" />
          <h2 className={S.cardText}>

          </h2>
        </div>
          <div className={S.card5}>
          <img className={S.image} src={BioNews} alt="" />
          <h2 className={S.cardText}>

          </h2>
          </div>
          <div className={S.card6}>
          <img className={S.image} src={BioNews} alt="" />
          <h2 className={S.cardText}>

          </h2>
          </div>
          </div>
      </div>
  )
}

export default Educacao