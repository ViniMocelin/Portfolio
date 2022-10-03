import React from 'react'
import S from './Pessoal.module.css'
import voleiPNG from '../../assets/img/volei.png'
import TitPes from  '../../assets/img/pessoalt.png'
import Medalha from '../../assets/img/medalhas.png'
import Teatro from '../../assets/img/teatros.png'
import Design from '../../assets/img/design.png'
import Design1 from '../../assets/img/design2.png'
import Teatro1 from '../../assets/img/teatro1.png'

const Pessoal = () => {
  return (
    <div div className={S.contPessoal} id='Personal'>
      <div className={S.titPes}>
        <img className={S.pespes} src={TitPes} alt="" />
      </div>
     <section className={S.blocoA}>
      <div className={S.groupA}>
     <div className={S.divvText}>
      <h4 className={S.textPes}>Comecei a jogar volei com 13 anos e desde então tem sido uma das minha grandes paixões. Encontrei no esporte um refúgio para escapar dos perrengues da vida. Fiz muitas amizades e aprendi a pensar mais no coletivo também! Eu jogo de líbero, uma posição essencialmente defensiva e gosto, principalmente por ter o uniforme diferente dos outros!</h4>
      <img className={S.imgC} src={Medalha} alt="" />
      <h4 className={S.textPes1}>Já participei de diversas competições e consegui colecionar algumas medalhas. A mais recente veio esse ano (2022) quando meu time e eu conquistamos o 3º lugar nos Jogos Abertos do Paraná. Fico muito orgulhoso, porque chegamos além do que esperávamos, mostrando que sempre temos capacidade para evoluir mais!</h4>
     </div>
     <img className={S.foto} src={voleiPNG} alt="" />
     </div>
     </section>
     <section className={S.blocoB}>
      <div className={S.groupB}>
     <div className={S.divvTextB}>
     <h4 className={S.textPes}>O teatro é a minha paixão mais antiga! Sonho em ser ator desde que eu tinha 8 anos e fiz aulas de teatro. Sempre foi minha terapia, quando estou no palco eu deixo todos os meus problemas guardados, pois a partir daquele momento eu já não sou mais eu mesmo! Fiz teatros a minha vida toda, mesmo quando parei de fazer aulas, incluindo na faculdade.</h4>
      <img className={S.imgC} src={Teatro} alt="" />
      <h4 className={S.textPes1}>Em 2018 ganhei bolsa de 100% para estudar teatro na PUC, porém optei por fazer Biologia, pois me garantiria mais empregos no futuro. É um sonho que está guardado e pretendo, assim que possível, tirá-lo da gaveta.</h4>
     </div>
     <img className={S.fotoB} src={Teatro1} alt="" />
     </div>
     </section>
     <section className={S.blocoC}>
      <div className={S.groupA}>
     <div className={S.divvText}>
     <h4 className={S.textPes}>Recentemente me deparei com uma nova paixão, um novo objetivo, na área de design. Sempre gostei de estilizar as coisas, criar coisas bonitas e atrativas. Sendo assim, nesse momento estou buscando mais conhecimento na área e pretendo cursar faculdade quando terminar Biologia.</h4>
      <img className={S.imgC} src={Design} alt="" />
      <h4 className={S.textPes1}>Tenho buscado ler sobre e aprender mais para refinar meu olhar, que ainda é um pouco infantil e bagunçado, não que eu veja problema nisso, porque particularmente eu amo, mas profissionalmente eu preciso amadurecer minha visão estética.</h4>
     </div>
     <img className={S.foto} src={Design1} alt="" />
     </div>
     </section>
     </div>
  )
}

export default Pessoal