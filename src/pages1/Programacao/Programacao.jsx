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
        
      </div>
      <img className={S.iconeCentral} src={Dev} alt="" />
      <div className={S.bloco2}>
        
      </div>
      </div>
    <div className={S.projetos}>
    <div className={S.logo}>
      <img className={S.imagemz} src={Cinediva} alt="" />
      <button className={S.verMais}>Sobre o projeto</button>

      <img className={S.imagemz1} src={Petsearch} alt="" />
      <button className={S.verMais1}>Sobre o projeto</button>
      <img className={S.imagemz2} src={BetVolley} alt="" />
      <button className={S.verMais2}>Sobre o projeto</button>
    </div>
    <div className={S.logo}>
      <img className={S.imagemz3} src={AdoteAqui} alt="" />
      <button className={S.verMais3}>Sobre o projeto</button> 
      <img className={S.imagemz4} src={JEscolhas} alt="" />
      <button className={S.verMais4}>Sobre o projeto</button>
      <img className={S.imagemz5} src={HealthRemember} alt="" />
      <button className={S.verMais5}>Sobre o projeto</button>
    </div>
    </div>
    </div>
  )
}

const container = document.getElementById('root');
const root = createRoot(container);
root.render(<Programacao />);

export default Programacao