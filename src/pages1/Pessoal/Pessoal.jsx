import React from 'react'
import S from './Pessoal.module.css'
import voleiPNG from '../../assets/img/volei.png'
import TitPes from  '../../assets/img/pessoalt.png'

const Pessoal = () => {
  return (
    <div div className={S.contPessoal} id='Personal'>
      <div className={S.titPes}>
        <img className={S.pespes} src={TitPes} alt="" />
      </div>
     <section className={S.blocoA}>
      <div className={S.groupA}>
     <div className={S.pessoalText}>

     </div>
     <img className={S.foto} src={voleiPNG} alt="" />
     </div>
     </section>
     <section className={S.blocoB}>
      <div className={S.groupB}>
     <div className={S.pessoalTextB}>

     </div>
     <img className={S.fotoB} src={voleiPNG} alt="" />
     </div>
     </section>
     <section className={S.blocoC}>
      <div className={S.groupA}>
     <div className={S.pessoalText}>

     </div>
     <img className={S.foto} src={voleiPNG} alt="" />
     </div>
     </section>
     </div>
  )
}

export default Pessoal