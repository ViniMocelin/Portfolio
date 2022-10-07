import S from './Programacao.module.css'
import Dev from '../../assets/img/dev.png'
import Cinediva from '../../assets/img/6.svg'
import Petsearch from '../../assets/img/1.svg'
import HealthRemember from '../../assets/img/2.svg'
import AdoteAqui from '../../assets/img/3.svg'
import BetVolley from '../../assets/img/5.svg'
import JEscolhas from '../../assets/img/4.svg'
import TitPro from '../../assets/img/3.png'
import React, { useState, useRef } from 'react';
import { createRoot } from 'react-dom/client';
import { Container, Button, Alert } from 'react-bootstrap';
import { CSSTransition } from 'react-transition-group';

import 'bootstrap/dist/css/bootstrap.min.css';



const Programacao = () => {

  return (
    <div className={S.contProg} id='Programer'>
      <div className={S.titPro}>
        <img className={S.propro} src={TitPro} alt="" />
      </div>
      <div className={S.descricao}>
      <div className={S.bloco1}>
        <h4 className={S.sobreP}>A programação caiu do céu para mim, quando surgiu a oportunidade de fazer um curso gratuito na área. Até então nunca havia me interessado na área, porém enxerguei isso como um desafio e, principalmente, uma possibilidade de obter mais conhecimento em uma área que nunca tive nenhum contato!</h4>
      </div>
      <img className={S.iconeCentral} src={Dev} alt="" />
      <div className={S.bloco2}>
        <h4 className={S.sobreP}>Confesso que no começo foi bem sofrido, era muito difícil assimilar as coisas, mas com o tempo eu fui desenvolvendo gosto pela área e hoje busco minha primeira oportunidade de emprego! Ainda estou engatinhando, pois tenho dificuldade em backend, mas tenha buscado melhorar!</h4>
      </div>
      </div>
    <div className={S.projetos}>
    <div className={S.logo}>
      <img className={S.imagemz} src={Cinediva} alt="" />
      <button className={S.verMais}><a className={S.baixars} href="https://cinedev-12aaygny9-jessicacintra-eng.vercel.app/">Ver o projeto</a></button>

      <img className={S.imagemz1} src={Petsearch} alt="" />
      <button className={S.verMais1}> < a className={S.baixars} href="https://www.figma.com/proto/M7OiDgp8kgJmKyYXdQs8NI/Untitled?node-id=2%3A818&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=2%3A818">Ver o projeto</a></button>
      <img className={S.imagemz2} src={BetVolley} alt="" />
      <button className={S.verMais2}><a className={S.baixars} href="https://www.figma.com/proto/WWVY0K5MmZQsbKkkJZY625/BetVolley?node-id=1%3A709&scaling=min-zoom&page-id=0%3A1&starting-point-node-id=1%3A1387">Ver o projeto</a></button>

    </div>
    <div className={S.logo}>
      <img className={S.imagemz3} src={AdoteAqui} alt="" />
      <button className={S.verMais3}><a className={S.baixars} href="https://vinimocelin.github.io/adoteaqui-final/">Ver o projeto</a></button>
 
      <img className={S.imagemz4} src={JEscolhas} alt="" />
      <button className={S.verMais4}><a className={S.baixars} href="https://vinimocelin.github.io/jogoDeEscolhas/">Ver o projeto</a></button>

      <img className={S.imagemz5} src={HealthRemember} alt="" />
      <button className={S.verMais5}><a className={S.baixars} href="https://joaov1821.github.io/exercise-remember-website/index.html">Ver o projeto</a></button>

    </div>
    </div>
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Programacao />);

export default Programacao